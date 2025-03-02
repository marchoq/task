import { defineStore } from "pinia";
import { z, type ZodIssue } from "zod";

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

const daySchema = z
  .number()
  .int()
  .min(1, "Day must be at least 1")
  .max(31, "Day cannot be more than 31");
const monthSchema = z
  .number()
  .int()
  .min(1, "Month must be at least 1")
  .max(12, "Month cannot be more than 12");
const yearSchema = z
  .number()
  .int()
  .min(currentYear, `Year must be at least ${currentYear}`)
  .max(nextYear, `Year cannot be more than ${nextYear}`);
const nameSchema = z
  .string()
  .min(1, "Name must be at least 1 character long")
  .max(100, "Name must be at most 100 characters long")
  .regex(
    /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/,
    "Name can only contain letters, spaces, and apostrophes"
  );
const emailSchema = z.string().email({ message: "Invalid email address" });
const countryCodeSchema = z.string(); //z.enum(["+371", "+372", "+373"]);
const phoneSchema = z.string().regex(/^\d{8}$/, {
  message: "Phone number must be exactly 8 digits",
});
const flightNumberSchema = z
  .string()
  .regex(
    /^[A-Z]{2}\d{1,4}$/,
    "Flight number must be in format XX1234 (two Uppercase letters followed by 1-4 digits)"
  );
const dateSchema = z.object({
  day: daySchema,
  month: monthSchema,
  year: yearSchema,
});

// for complete validation when submiting the form
const FormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  countryCode: countryCodeSchema,
  phone: phoneSchema,
  flights: z.array(
    z.object({
      flightNumber: flightNumberSchema,
      date: dateSchema,
    })
  ),
});
//  for validating properties separately
const PartialFormSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    countryCode: countryCodeSchema,
    phone: phoneSchema,
    flights: z.array(
      z
        .object({
          flightNumber: flightNumberSchema,
          date: dateSchema.partial(),
        })
        .partial()
    ),
  })
  .partial();

type FormState = z.infer<typeof FormSchema>;
type BasicField = "name" | "email" | "phone" | "countryCode"; // @todo: Country needs to be finished
type DateField = "day" | "month" | "year";
type FlightNumberField = "flightNumber";

export const useAssistanceStore = defineStore("assistance", {
  state: () => ({
    assistanceFormData: {
      name: "",
      email: "",
      countryCode: "",
      phone: "",
      flights: [
        {
          flightNumber: "",
          date: {
            day: 0,
            month: 0,
            year: 0,
          },
        },
      ],
    } as FormState,
    errors: {
      name: "",
      email: "",
      phone: "",
      flightNumber: [],
      date: [],
    } as Record<string, any>,
  }),
  actions: {
    updateField(fieldName: string, value: any): void {
      // Extract field type and flight number if present
      const formattedFieldName: string = fieldName.replace(/[0-9]/g, "");
      const flightFieldNumber = parseInt(fieldName.replace(/^\D+/g, "")) || 0;

      // Handle validation based on field type
      if (["name", "email", "phone", "countryCode"].includes(fieldName)) {
        this.validateAndUpdateBasicField(fieldName as BasicField, value);
      } else if (formattedFieldName === "flightNumber") {
        this.validateAndUpdateFlightField(
          fieldName,
          formattedFieldName,
          flightFieldNumber,
          value
        );
      } else if (["day", "month", "year"].includes(formattedFieldName)) {
        this.validateAndUpdateDateField(
          fieldName,
          formattedFieldName as DateField,
          flightFieldNumber,
          value
        );
      }
    },
    addFlight() {
      this.assistanceFormData.flights.push({
        flightNumber: "",
        date: {
          day: 1,
          month: 1,
          year: currentYear,
        },
      });
    },
    removeFlight() {
      this.assistanceFormData.flights.pop();
    },
    validateAndUpdateBasicField(fieldName: BasicField, value: any): void {
      const result = PartialFormSchema.safeParse({
        [fieldName]: value,
      });

      if (result.success) {
        this.errors[fieldName] = "";
        this.assistanceFormData[fieldName] = value;
      } else {
        this.errors[fieldName] = this.extractErrorMessage(result.error);
      }
    },

    validateAndUpdateFlightField(
      fieldName: string,
      formattedFieldName: FlightNumberField,
      flightNumber: number,
      value: any
    ): void {
      const result = PartialFormSchema.safeParse({
        flights: [{ [formattedFieldName]: value }],
      });
      if (result.success) {
        this.errors[fieldName] = "";
        this.assistanceFormData.flights[flightNumber][formattedFieldName] =
          value;
      } else {
        this.assistanceFormData.flights[flightNumber][formattedFieldName] = "";
        this.errors[fieldName] = this.extractErrorMessage(result.error);
      }
    },

    validateAndUpdateDateField(
      fieldName: string,
      formattedFieldName: DateField,
      flightNumber: number,
      value: any
    ): void {
      const result = PartialFormSchema.safeParse({
        flights: [
          {
            date: { [formattedFieldName]: parseInt(value) },
          },
        ],
      });

      if (result.success) {
        this.errors[fieldName] = "";
        this.assistanceFormData.flights[flightNumber].date[formattedFieldName] =
          value;
      } else {
        this.assistanceFormData.flights[flightNumber].date[
          formattedFieldName
        ] = 0;
        this.errors[fieldName] = this.extractErrorMessage(result.error);
      }
    },

    extractErrorMessage(error: any): string {
      return JSON.parse(error.message)[0].message;
    },
  },
});
