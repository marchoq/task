<template>
  <div
    class="lg:hidden flex justify-between items-center py-4 pl-5 pr-0 border-b border-brand-grey h-[55px]"
  >
    <button
      @click="toggleMobileMenu"
      class="mobile-menu-button"
      aria-expanded="false"
      aria-controls="mobile-navigation"
      aria-label="Toggle navigation menu"
    >
      <span class="sr-only">Menu</span>
      <Hamburger class="w-[20px]" :fontControlled="false" />
    </button>

    <div class="logo-container">
      <div
        class="bg-brand-green h-[56px] w-[92px] flex items-center justify-center"
      >
        <AirBalticLogo
          class="w-[61.7px] h-[15.15px] text-brand-blue"
          :fontControlled="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Hamburger from "~/assets/images/Hamburger.svg";
import AirBalticLogo from "~/assets/images/airBaltic.svg";
import { useCounterStore } from "~/stores/counter";

const store = useCounterStore();

// Toggle mobile menu
const toggleMobileMenu = () => {
  store.toggleMenu();
};
</script>
