<template>
  <div
    class="py-[23px] px-[25px] md:rounded-md md:py-[15px]"
    :class="typeClassName"
  >
    <p class="text-sm text-center leading-[21px]">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  type: "info" | "warning";
}>();
const typeClassName = computed(() => {
  return props.type === "info" ? "bg-brand-info" : "bg-brand-warning";
});
</script>
