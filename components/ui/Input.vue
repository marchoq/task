<template>
  <div class="mb-4">
    <label
      v-if="showLabel"
      :for="id"
      class="block text-xs font-normal text-brand-blue mb-1"
    >
      {{ label }}
    </label>
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
      class="w-full px-4 py-2 border border-brand-grey focus:ring-blue-500 focus:border-blue-500"
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
  showLabel: {
    type: Boolean,
    default: true,
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
});

const emit = defineEmits(["update:value"]);

const updateValue = (event: Event) => {
  emit("update:value", (event.target as HTMLInputElement).value);
};
</script>
