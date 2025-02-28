<template>
  <div class="newsletter-signup">
    <h3 class="text-footer-title font-medium mb-4 uppercase text-sm">
      Subscribe to newsletter
    </h3>

    <form class="flex flex-col space-y-2">
      <label for="email-address" class="sr-only">Email address</label>
      <div class="flex relative">
        <input
          id="email-address"
          name="email"
          type="email"
          class="w-full min-w-0 px-4 py-2 text-base text-footer-title placeholder-text-light bg-white border border-brand-grey focus:outline-none"
          placeholder="Enter your email"
        />
        <!-- @todo liekas, ka cita ikona šeit -->
        <ArrowLeft
          class="absolute rotate-180 text-footer-title right-2 top-4 text-xs"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import ArrowLeft from "~/assets/images/ArrowLeft.svg";
</script>
