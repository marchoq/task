<template>
  <UiDropdown :name="name" :items="codes" @update:value="store.updateField" />
</template>

<script setup lang="ts">
import { useAssistanceStore } from "~/stores/assistance";
const store = useAssistanceStore();

defineProps<{
  name: string;
}>();
import { ref } from "vue";

// Sample list items
const codes = ref([
  { value: "+371", name: "+371" },
  { value: "+372", name: "+372" },
  { value: "+373", name: "+373" },
]);
</script>
