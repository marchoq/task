<template>
  <div v-for="(section, index) in sections" :key="index">
    <button
      @click="toggleSection(index)"
      class="flex justify-between items-center w-full py-3 text-left text-footer-title border-b border-brand-grey font-medium"
      :aria-expanded="openSections[index]"
      :aria-controls="`section-${index}`"
    >
      <span class="text-sm uppercase text-footer-title">{{
        section.title
      }}</span>
      <span class="text-xl">+</span>
    </button>

    <div
      :id="`section-${index}`"
      v-show="openSections[index]"
      class="mt-2 pl-4 space-y-2"
    >
      <ul class="space-y-2">
        <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
          <a :href="link.url" class="text-footer-title">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FooterLinks } from "~/helpers/constants";
defineProps<{
  sections: FooterLinks[];
}>();

// Track open sections for mobile accordions
const openSections = ref([false, false, false, false]);

const toggleSection = (index: number) => {
  openSections.value[index] = !openSections.value[index];
};
</script>
