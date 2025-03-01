<template>
  <div class="mb-8">
    <h2 class="font-medium mb-4">We can help you:</h2>
    <ul class="list-disc pl-5 space-y-3 md:columns-2 gap-4">
      <li
        v-for="(point, index) in points"
        :key="index"
        class="text-brand-green text-xl"
      >
        <span class="text-brand-blue font-normal text-base leading-8">{{
          point
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  points: string[];
}>();
</script>
