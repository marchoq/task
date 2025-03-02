<template>
  <div class="px-5 pt-[31px] pb-9 border-b border-brand-grey md:flex">
    <div class="md:w-[250px] md:mr-8 md:pl-1">
      <h2
        v-if="title"
        class="font-medium text-brand-blue mb-[7px] leading-[19px]"
      >
        {{ title }}
      </h2>
      <p class="mb-[21px] text-xs font-normal text-text-description leading-5">
        <slot name="description"></slot>
      </p>
    </div>

    <div class="flex-1 md:pl-[42px] md:pr-10">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
