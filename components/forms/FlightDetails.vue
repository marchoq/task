<template>
  <UiFormPart title="Select flight">
    <template v-slot:description>
      Suspendisse elementum turpis ut volutpat ultricies. Mauris eget nisldiam.
      In vel felis in metus vulputate imperdiet vestibulum at dolor.
    </template>
    <template v-slot:content>
      <div
        v-for="(part, index) in store.assistanceFormData.flights"
        :key="index"
      >
        <!-- Additional Field -->
        <UiInput
          :id="`flightNumber${index}`"
          label="Flight number"
          type="text"
          :required="true"
          @update:value="store.updateField"
        />
        <p class="text-sm text-red-600 mb-4">
          {{ store.errors[`flightNumber${index}`] }}
        </p>

        <!-- Date Fields (DD/MM/YYYY) -->
        <div class="mb-7">
          <UiLabel :id="`day${index}`" label="Flight date" />

          <div class="flex mb-1">
            <UiInput
              :id="`day${index}`"
              type="number"
              placeholder="DD"
              min="1"
              max="31"
              aria-label="Day"
              class="w-[78px] mr-[11px]"
              @update:value="store.updateField"
            />
            <UiInput
              :id="`month${index}`"
              type="number"
              placeholder="MM"
              min="1"
              max="12"
              aria-label="Month"
              class="w-[78px] mr-[11px]"
              @update:value="store.updateField"
            />
            <!-- @todo -->
            <UiYearDropdown class="w-[102px]" :name="`year${index}`" />
          </div>
          <p class="font-normal text-xs text-text-description mt-[-13px]">
            For example:<span class="pl-[6px]">30</span
            ><span class="pl-[6px]">8</span><span class="pl-[6px]">1972</span>
          </p>
          <p class="text-sm text-red-600 mb-4">
            {{ store.errors[`day${index}`] }}
          </p>
          <p class="text-sm text-red-600 mb-4">
            {{ store.errors[`month${index}`] }}
          </p>
          <p class="text-sm text-red-600 mb-4">
            {{ store.errors[`year${index}`] }}
          </p>
        </div>
      </div>

      <div class="flex justify-start">
        <button
          @click.prevent="addFlight"
          type="button"
          class="px-7 py-[14px] mr-4 rounded-md border font-bold border-brand-blue-ui text-brand-blue-ui text-sm focus:outline-none leading-[14px]"
        >
          Add flight
        </button>

        <button
          @click.prevent="removeFlight"
          type="button"
          class="px-7 py-[14px] text-text-description font-bold focus:outline-none text-sm leading-[14px]"
        >
          Delete flight
        </button>
      </div>
    </template>
  </UiFormPart>
</template>

<script setup lang="ts">
import { useAssistanceStore } from "~/stores/assistance";
const store = useAssistanceStore();

const update = function (fieldName: string, value: any) {
  console.log("value", fieldName, value);
  store.updateField(fieldName, value);
};

const addFlight = () => {
  store.addFlight();
};

const removeFlight = () => {
  store.removeFlight();
};
</script>
