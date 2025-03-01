<template>
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
            <li v-for="(item, index) in items" :key="index">
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
