<template>
  <div>
    <h2 class="font-medium mb-[11px] leading-[19px]">We can help you:</h2>
    <ul
      class="list-disc pl-5 md:columns-2 gap-4 ml-[-1px] marker:relative marker:top-[10px]"
    >
      <li
        v-for="(point, index) in points"
        :key="index"
        class="text-brand-green text-[19px] leading-8"
      >
        <span class="text-brand-blue font-normal text-sm pl-[2px]">{{
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
