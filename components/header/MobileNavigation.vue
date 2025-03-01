<template>
  <nav
    id="mobile-navigation"
    class="mobile-navigation lg:hidden"
    v-show="store.mobileMenuOpen"
    aria-label="Mobile navigation"
  >
    <ul class="nav-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="text-header-text text-xl"
      >
        {{ item.label }}
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useCounterStore } from "~/stores/counter";
import type { Link } from "~/helpers/constants";

const store = useCounterStore();

defineProps<{
  items: Link[];
}>();
</script>
