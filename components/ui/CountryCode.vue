<template>
  <UiDropdown :name="name" :items="codes" />
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
import { ref } from "vue";

// Sample list items
const codes = ref([
  { id: 1, name: "+371" },
  { id: 2, name: "+372" },
  { id: 3, name: "+373" },
]);
</script>
