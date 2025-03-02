<template>
  <div class="mb-4">
    <UiLabel v-if="label" :id="id" :label="label" />
    <input
      :id="id"
      :value="value"
      @input="updateValue"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :aria-label="ariaLabel"
      class="w-full px-2 py-[13px] border border-brand-grey leading-5 placeholder:text-form-placeholder"
      :class="inputStyleClasses"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: true,
  },
  value: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<"text" | "email" | "tel" | "number">,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  min: {
    type: String,
    default: true,
  },
  max: {
    type: String,
    default: true,
  },
  ariaLabel: {
    type: String,
    default: true,
  },
  inputStyleClasses: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:value"]);

const updateValue = (event: Event) => {
  emit("update:value", (event.target as HTMLInputElement).value);
};
</script>
