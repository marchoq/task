<template>
  <label
    :for="id"
    class="block text-xs font-normal text-brand-blue mb-2 leading-[14px]"
  >
    {{ label }}
  </label>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true,
  }, // would be nice to rename to for
  label: {
    type: String,
    default: "",
  },
});
</script>
