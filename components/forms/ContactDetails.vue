<template>
  <div
    class="px-5 pt-4 md:pt-[29px] pb-[17px] border-b border-brand-grey md:flex"
  >
    <div class="md:w-[250px] md:mr-8 mb-5 md:pl-1">
      <h2 class="font-medium text-brand-blue mb-[7px] leading-[19px]">
        Contact details
      </h2>
      <p class="text-xs font-normal text-text-description leading-5">
        Something also goes here, so it doesn't look that lonely down here
      </p>
    </div>

    <div class="flex-1 md:pl-[42px] md:pr-10">
      <!-- Name & Surname -->
      <UiInput
        id="fullName"
        label="Name, surname"
        :value="form.fullName"
        type="text"
        :required="true"
      />

      <!-- Email -->
      <UiInput
        id="email"
        label="E-mail"
        :value="form.email"
        type="email"
        :required="true"
      />

      <!-- Phone -->
      <div>
        <div class="flex">
          <div class="mr-[15px]">
            <UiLabel id="country-code" label="Country code" />
            <UiCountryCode class="w-[100px]" name="country-code" />
          </div>
          <UiInput
            id="phone"
            label="Phone number"
            :value="form.phone"
            type="tel"
            :required="true"
            class="flex-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  form: any; // @todo type fix
}>();
</script>
