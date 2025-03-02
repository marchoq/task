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
        id="name"
        label="Name, surname"
        type="text"
        :required="true"
        @update:value="store.updateField"
      />
      <p class="text-sm text-red-600 mb-4">{{ store.errors.name }}</p>

      <!-- Email -->
      <UiInput
        id="email"
        label="E-mail"
        type="email"
        :required="true"
        @update:value="store.updateField"
      />
      <p class="text-sm text-red-600 mb-4">{{ store.errors.email }}</p>

      <!-- Phone -->
      <div>
        <div class="flex">
          <div class="mr-[15px]">
            <UiLabel id="countryCode" label="Country code" />
            <!-- @todo -->
            <UiCountryCode
              class="w-[100px]"
              name="countryCode"
              @update:value="store.updateField"
            />
            <p class="text-sm text-red-600 mb-4">
              {{ store.errors.countryCode }}
            </p>
          </div>
          <UiInput
            id="phone"
            label="Phone number"
            type="tel"
            :required="true"
            class="flex-1"
            @update:value="store.updateField"
          />
        </div>
        <p class="text-sm text-red-600 mb-4">{{ store.errors.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAssistanceStore } from "~/stores/assistance";
const store = useAssistanceStore();
</script>
