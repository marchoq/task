<template>
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
                {{ step.label }}
              </p>
            </div>
          </div>
          <div v-if="index < breadCrumbs.length - 1" class="">
            <ArrowLeft class="rotate-180 text-brand-grey" />
          </div>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { Link } from "~/helpers/constants";

defineProps<{
  breadCrumbs: Link[];
}>();
</script>
