<template>
  <div class="hidden lg:block h-[110px]">
    <div class="max-w-[1120px] mx-auto flex justify-between">
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
        <!-- Can be refactored to components -->
        <div class="flex justify-end items-center pt-[23px]">
          <div class="flex space-x-6">
            <div class="flex items-center text-header-text">
              <Globe class="mr-[9px] text-xl mb-0" />
              <p class="text-xs font-medium leading-[14px]">Latvia - Latvian</p>
            </div>
            <div class="flex items-center text-header-text">
              <User class="mr-3 text-xl mb-0" />
              <p class="text-xs font-medium leading-[14px]">Login</p>
            </div>
            <div class="flex items-center text-header-text">
              <Search class="mr-[10px] text-xl mb-0" />
              <p class="text-xs font-medium leading-[14px]">Search</p>
            </div>
          </div>
        </div>

        <!-- Bottom Navigation -->
        <nav aria-label="Main navigation" class="main-navigation">
          <ul class="flex gap-[34px] py-4">
            <li
              v-for="(item, index) in items"
              :key="index"
              :class="index === items.length - 1 ? 'pl-[8px]' : ''"
            >
              <NuxtLink to="/" class="text-header-text text-xl">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AirBalticLogo from "~/assets/images/airBaltic.svg";
import Globe from "~/assets/images/globe.svg";
import User from "~/assets/images/user.svg";
import Search from "~/assets/images/search.svg"; // @todo: SearchIcon un pārējiem arī
import type { Link } from "~/helpers/constants";

defineProps<{
  items: Link[];
}>();
</script>
