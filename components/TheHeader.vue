<template>
  <header class="site-header" aria-label="Site header">
    <!-- Mobile Header -->
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

    <!-- Mobile Navigation -->
    <nav
      id="mobile-navigation"
      class="mobile-navigation lg:hidden bg-blue-200"
      v-show="mobileMenuOpen"
      aria-label="Mobile navigation"
    >
      <ul class="nav-list">
        <li v-for="(item, index) in navigationItems" :key="index">
          {{ item.label }}
        </li>
      </ul>
    </nav>

    <!-- Desktop Header -->
    <div class="hidden lg:block h-[110px]">
      <div class="max-w-[1128px] mx-auto px-4 flex justify-between">
        <!-- Left Section -->
        <div class="logo-container">
          <div
            class="bg-brand-green w-[180px] h-[110px] flex items-center justify-center"
          >
            <AirBalticLogo
              class="w-[120.7px] h-[29.76px] text-brand-blue"
              :fontControlled="false"
            />
          </div>
        </div>
        <!-- Right Section -->
        <div class="logo-container">
          <!-- Top Section -->
          <div class="flex justify-end items-center py-4">
            <div class="flex space-x-6">
              <div class="flex items-center">
                <Globe />
                <p class="text-xs font-medium text-header-text">
                  Latvia - Latvian
                </p>
              </div>
              <div class="flex items-center">
                <User />
                <p class="text-xs font-medium text-header-text">Login</p>
              </div>
              <div class="flex items-center">
                <Search />
                <p class="text-xs font-medium text-header-text">Search</p>
              </div>
            </div>
          </div>

          <!-- Bottom Navigation -->
          <nav aria-label="Main navigation" class="main-navigation">
            <ul class="flex space-x-6 py-4">
              <li v-for="(item, index) in navigationItems" :key="index">
                <NuxtLink to="/" class="text-header-text text-xl">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <!-- Mobile Back Link -->
  <div class="lg:hidden p-4 flex items-center">
    <ArrowLeft
      class="w-[7px] h-[13px] text-brand-blue-ui mr-3"
      :fontControlled="false"
    />
    <p class="text-brand-blue-ui">Back to Contact us</p>
  </div>

  <!-- Breadcrumbs -->
  <nav
    aria-label="Breadcrumbs"
    class="breadcrumbs-nav hidden lg:block border-y h-[48px]"
  >
    <div class="max-w-[1128px] mx-auto px-4">
      <ol class="flex items-center py-4">
        <li v-for="(step, index) in breadCrumbs" :key="index" class="flex">
          <div class="flex items-center">
            <div class="mr-3">
              <p
                class="text-text-light text-[13px] underline decoration-brand-green"
              >
                {{ step.name }}
              </p>
            </div>
          </div>
          <div v-if="index < breadCrumbs.length - 1" class="">
            <ArrowLeft class="rotate-180 text-brand-grey" />
          </div>
          <!-- <div v-if="index > 0" class="absolute top-4 w-1/2 h-0.5 left-0"></div> -->
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import AirBalticLogo from "~/assets/images/airBaltic.svg";
import Hamburger from "~/assets/images/Hamburger.svg";
import ArrowLeft from "~/assets/images/ArrowLeft.svg";
import Globe from "~/assets/images/globe.svg";
import User from "~/assets/images/user.svg";
import Search from "~/assets/images/search.svg"; // @todo: SearchIcon un pārējiem arī

const mobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Navigation items
const navigationItems = [
  { label: "Plan and book", path: "/" },
  { label: "Prepare for your trip", path: "/" },
  { label: "Information", path: "/" },
  { label: "PINS", path: "/" },
  { label: "Special offers", path: "/" },
];

const breadCrumbs = [
  { name: "Home" },
  { name: "Contact us" },
  { name: "Submit a claim" },
  { name: "Damaged baggage" },
];
</script>
