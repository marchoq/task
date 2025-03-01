<template>
  <div v-for="(section, index) in footerLinks" :key="index" class="col-span-1">
    <h3 class="text-footer-title font-medium text-sm mb-4 uppercase">
      {{ section.title }}
    </h3>
    <ul class="space-y-3 text-sm">
      <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
        <a :href="link.url" class="text-footer-title">{{ link.label }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { FooterLinks } from "~/helpers/constants";

defineProps<{
  footerLinks: FooterLinks[];
}>();
</script>
