<template>
  <form
    @submit.prevent="submitForm"
    class="user-form bg-brand-background md:rounded-lg overflow-hidden"
  >
    <!-- Contact details -->
    <FormsContactDetails :form="form" />

    <!-- Dynamic Additional Information Parts -->
    <FormsFlightDetails :additionalParts="additionalParts" />

    <div class="px-5 pt-8 md:flex mb-[45px] md:mb-9 md:pt-8 md:pl-6">
      <div class="md:w-[250px] md:mr-8">
        <p
          class="text-xs text-text-description mb-[25px] md:mb-0 w-[243px] md:w-[200px] mr-8 leading-5 md:pt-[6px] md:mr-8"
        >
          By submitting this form you agree to airBaltic’s
          <a class="underline">Privacy Policy</a>
        </p>
      </div>
      <div class="flex-1 md:pl-[38px] md:pr-10">
        <button
          type="submit"
          class="px-12 py-2 w-full md:px-[51px] md:py-[19px] md:w-auto bg-brand-blue-ui font-medium h-[47px] text-white rounded-[4px] focus:outline-none md:leading-[14px] md:h-auto"
        >
          Confirm
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Main form data
const form = ref({
  fullName: "",
  email: "",
  countryCode: "+371",
  phone: "",
});

// Additional parts data with default first part
const additionalParts = ref([
  {
    additionalField: "",
    day: "",
    month: "",
    year: "",
  },
]);

// Submit form
const submitForm = () => {
  // Here you would handle form submission, validation, etc.
  const formData = {
    personalInfo: form.value,
    additionalInfo: additionalParts.value,
  };

  console.log("Form submitted:", formData);
  // In a real application, you would send this data to your API
  alert("Form submitted successfully!");
};
</script>
