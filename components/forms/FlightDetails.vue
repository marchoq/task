<template>
  <div class="form-part p-6 border-b border-brand-grey md:flex">
    <div class="w-[256px] mr-8">
      <h2 class="text-base font-medium text-brand-blue mb-2">Select flight</h2>
      <p class="mb-6 text-xs font-normal text-text-description">
        Suspendisse elementum turpis ut volutpat ultricies. Mauris eget nisl
        diam. In vel felis in metus vulputate imperdiet vestibulum at dolor.
      </p>
    </div>
    <div class="flex-1">
      <div v-for="(part, index) in additionalParts" :key="index">
        <!-- Additional Field -->
        <UiInput
          :id="`additionalField${index}`"
          label="Flight number"
          :value="part.additionalField"
          type="text"
          :required="true"
        />

        <!-- Date Fields (DD/MM/YYYY) -->
        <div class="mb-7">
          <label
            :for="`dateDay${index}`"
            class="block text-xs font-normal text-brand-blue mb-1"
          >
            Flight date
          </label>
          <div class="flex space-x-2 mb-1">
            <UiInput
              :id="`dateDay${index}`"
              :value="part.day"
              type="number"
              placeholder="DD"
              min="1"
              max="31"
              aria-label="Day"
              class="w-1/3"
            />
            <UiInput
              :id="`dateMonth${index}`"
              :value="part.month"
              type="number"
              placeholder="MM"
              min="1"
              max="12"
              aria-label="Month"
              class="w-1/3"
            />
            <UiInput
              :id="`dateYear${index}`"
              :value="part.year"
              type="number"
              placeholder="YYYY"
              min="1900"
              max="2100"
              aria-label="Year"
              class="w-1/3"
            />
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
          @click.prevent="removePart"
          type="button"
          class="px-6 py-2 text-text-description font-bold focus:outline-none text-sm focus:ring-1 focus:ring-blue-500"
        >
          Delete flight
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  additionalParts: any;
}>();

// Add a new part
const addPart = () => {
  props.additionalParts.value.push({
    additionalField: "",
    day: "",
    month: "",
    year: "",
  });
};

// Remove a part
const removePart = () => {
  if (props.additionalParts.value.length > 1) {
    props.additionalParts.value.splice(
      props.additionalParts.value.length - 1,
      1
    );
  }
};
</script>
