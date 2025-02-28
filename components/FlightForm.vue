<template>
  <form
    @submit.prevent="submitForm"
    class="user-form bg-brand-background md:rounded-lg overflow-hidden mb-4"
  >
    <!-- Part 1: Contact details -->
    <div class="form-part p-6 border-b border-brand-grey md:flex">
      <div class="w-[256px] mr-8">
        <h2 class="text-base font-medium text-brand-blue mb-2">
          Contact details
        </h2>
        <p class="mb-6 text-xs font-normal text-text-description">
          Something also goes here, so it doesn't look that lonely down here
        </p>
      </div>

      <div class="flex-1">
        <!-- Name & Surname -->
        <div class="mb-4">
          <!-- @todo: labelus par komponentēm, vai kopā ar visu inputu -->
          <label
            for="fullName"
            class="block text-xs font-normal text-brand-blue mb-1"
          >
            Name, surname
          </label>
          <input
            id="fullName"
            v-model="form.fullName"
            type="text"
            required
            class="w-full px-4 py-2 border border-brand-grey focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label
            for="email"
            class="block text-xs font-normal text-brand-blue mb-1"
          >
            E-mail
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full px-4 py-2 border border-brand-grey focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Phone -->
        <div class="mb-4">
          <div class="flex">
            <div class="mr-4">
              <label
                for="code"
                class="block text-xs font-normal text-brand-blue mb-1"
              >
                Country code
              </label>
              <UiDropdown class="w-24" name="code" />
            </div>
            <div class="flex-1">
              <label
                for="phone"
                class="block text-xs font-normal text-brand-blue mb-1"
              >
                Phone number
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full flex-1 px-4 py-2 border border-brand-grey focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dynamic Additional Information Parts -->
    <div class="form-part p-6 border-b border-brand-grey md:flex">
      <div class="w-[256px] mr-8">
        <h2 class="text-base font-medium text-brand-blue mb-2">
          Select flight
        </h2>
        <p class="mb-6 text-xs font-normal text-text-description">
          Suspendisse elementum turpis ut volutpat ultricies. Mauris eget nisl
          diam. In vel felis in metus vulputate imperdiet vestibulum at dolor.
        </p>
      </div>
      <div class="flex-1">
        <div v-for="(part, index) in additionalParts" :key="index">
          <!-- Additional Field -->
          <div class="mb-4">
            <label
              :for="`additionalField${index}`"
              class="block text-xs font-normal text-brand-blue mb-1"
            >
              Flight number
            </label>
            <input
              :id="`additionalField${index}`"
              v-model="part.additionalField"
              type="text"
              required
              class="w-full px-4 py-2 border border-brand-grey focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <!-- Date Fields (DD/MM/YYYY) -->
          <div class="mb-7">
            <label
              :for="`dateDay${index}`"
              class="block text-xs font-normal text-brand-blue mb-1"
            >
              Flight date
            </label>
            <div class="flex space-x-2 mb-1">
              <div class="w-1/3">
                <input
                  :id="`dateDay${index}`"
                  v-model="part.day"
                  type="number"
                  min="1"
                  max="31"
                  required
                  placeholder="DD"
                  class="w-full px-4 py-2 border border-brand-grey focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Day"
                />
              </div>
              <div class="w-1/3">
                <input
                  :id="`dateMonth${index}`"
                  v-model="part.month"
                  type="number"
                  min="1"
                  max="12"
                  required
                  placeholder="MM"
                  class="w-full px-4 py-2 border border-brand-grey focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Month"
                />
              </div>
              <div class="w-1/3">
                <input
                  :id="`dateYear${index}`"
                  v-model="part.year"
                  type="number"
                  min="1900"
                  max="2100"
                  required
                  placeholder="YYYY"
                  class="w-full px-4 py-2 border border-brand-grey focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Year"
                />
              </div>
            </div>
            <p class="font-normal text-xs text-text-description">
              For example: 30 8 1972
            </p>
          </div>
        </div>

        <div class="flex justify-start">
          <button
            @click.prevent="addPart"
            type="button"
            class="px-7 py-2 mr-4 rounded-md border font-bold border-brand-blue-ui text-brand-blue-ui text-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
          >
            Add flight
          </button>

          <button
            type="submit"
            class="px-6 py-2 text-text-description font-bold focus:outline-none text-sm focus:ring-1 focus:ring-blue-500"
          >
            Delete flight
          </button>
        </div>
      </div>
    </div>

    <div class="p-6 md:flex">
      <p class="text-xs text-text-description mb-7 w-[256px] mr-8">
        By submitting this form you agree to airBaltic’s Privacy Policy
      </p>
      <button
        type="submit"
        class="px-12 py-2 w-full md:w-auto bg-brand-blue-ui font-medium h-[47px] text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Confirm
      </button>
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

// Add a new part
const addPart = () => {
  additionalParts.value.push({
    additionalField: "",
    day: "",
    month: "",
    year: "",
  });
};

// Remove a part
const removePart = (index: number) => {
  if (additionalParts.value.length > 1) {
    additionalParts.value.splice(index, 1);
  }
};

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
