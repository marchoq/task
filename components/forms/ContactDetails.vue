<template>
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
