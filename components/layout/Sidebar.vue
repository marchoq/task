<template>
  <nav
    aria-label="Related pages navigation"
    class="bg-brand-background rounded-md font-medium text-sm"
  >
    <ul>
      <li
        v-for="(link, index) in links"
        :key="index"
        class="block hover:text-brand-green border-b border-sidebar-divider"
      >
        <div
          class="border-s-2 p-2 border-brand-background hover:border-brand-green"
        >
          <!-- @todo: jāuztaisa lai top left un bottom left stūri arī ir noapaļoti, pēdējam nevajaj borderi apakšā -->
          <NuxtLink to="/">
            {{ link.label }}
          </NuxtLink>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { Link } from "~/helpers/constants";

defineProps<{
  links: Link[];
}>();
</script>
