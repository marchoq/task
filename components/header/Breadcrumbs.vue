<template>
  <nav
    aria-label="Breadcrumbs"
    class="breadcrumbs-nav hidden lg:block border-y h-[48px]"
  >
    <div class="max-w-[1120px] mx-auto">
      <ol class="flex items-center py-[13px]">
        <li v-for="(step, index) in breadCrumbs" :key="index" class="flex">
          <div class="flex items-center">
            <div class="mr-3">
              <p
                class="text-text-light text-[13px] decoration-brand-green leading-[15px] underline-offset-4"
                :class="{ underline: index < breadCrumbs.length - 1 }"
              >
                {{ step.label }}
              </p>
            </div>
          </div>
          <div v-if="index < breadCrumbs.length - 1" class="mr-[10px]">
            <ArrowLeft class="rotate-180 text-brand-grey" />
            <!-- @todo: cita ikona -->
          </div>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { Link } from "~/helpers/constants";
import ArrowLeft from "~/assets/images/ArrowLeft.svg";

defineProps<{
  breadCrumbs: Link[];
}>();
</script>
