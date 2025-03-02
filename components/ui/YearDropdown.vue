<template>
  <UiDropdown
    :name="name"
    :items="years"
    icon-classes="right-1"
    placeholder="YYYY"
  />
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  iconClasses?: string;
}>();
import { ref } from "vue";

const currentYear = new Date().getFullYear();
const years = ref([
  { id: currentYear, name: currentYear },
  { id: currentYear + 1, name: currentYear + 1 },
]);
</script>
