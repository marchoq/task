<template>
  <div class="px-5 pt-[31px] pb-9 border-b border-brand-grey md:flex">
    <div class="md:w-[256px] md:mr-8">
      <h2 class="font-medium text-brand-blue mb-[7px] leading-[19px]">
        Select flight
      </h2>
      <p class="mb-[21px] text-xs font-normal text-text-description leading-5">
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
          <UiLabel :id="`dateDay${index}`" label="Flight date" />

          <div class="flex mb-1">
            <UiInput
              :id="`dateDay${index}`"
              :value="part.day"
              type="number"
              placeholder="DD"
              min="1"
              max="31"
              aria-label="Day"
              class="w-[78px] mr-[11px]"
            />
            <UiInput
              :id="`dateMonth${index}`"
              :value="part.month"
              type="number"
              placeholder="MM"
              min="1"
              max="12"
              aria-label="Month"
              class="w-[78px] mr-[11px]"
            />
            <UiYearDropdown
              class="w-[102px]"
              :name="`dateYear${index}`"
              :value="part.year"
            />
            <!-- <UiInput
              :id="`dateYear${index}`"
              :value="part.year"
              type="number"
              placeholder="YYYY"
              aria-label="Year"
              class="w-[102px]"
            /> -->
          </div>
          <p class="font-normal text-xs text-text-description mt-[-13px]">
            For example:<span class="pl-[6px]">30</span
            ><span class="pl-[6px]">8</span><span class="pl-[6px]">1972</span>
          </p>
        </div>
      </div>

      <div class="flex justify-start">
        <button
          @click.prevent="addPart"
          type="button"
          class="px-7 py-[14px] mr-4 rounded-md border font-bold border-brand-blue-ui text-brand-blue-ui text-sm focus:outline-none leading-[14px]"
        >
          Add flight
        </button>

        <button
          @click.prevent="removePart"
          type="button"
          class="px-7 py-[14px] text-text-description font-bold focus:outline-none text-sm leading-[14px]"
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
