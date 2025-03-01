<template>
  <form
    @submit.prevent="submitForm"
    class="user-form bg-brand-background md:rounded-lg overflow-hidden mb-4"
  >
    <!-- Part 1: Contact details -->
    <FormsContactDetails :form="form" />

    <!-- Dynamic Additional Information Parts -->
    <FormsFlightDetails :additionalParts="additionalParts" />

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
