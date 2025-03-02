<template>
  <div class="newsletter-signup">
    <h3
      class="text-footer-title font-medium mb-[7px] uppercase text-sm leading-8"
    >
      Subscribe to newsletter
    </h3>

    <form class="flex flex-col">
      <label for="email-address" class="sr-only">Email address</label>
      <div class="flex relative">
        <UiInput
          id="email-address"
          value=""
          name="email"
          type="email"
          placeholder="Enter your email"
          class="w-full"
          input-style-classes="text-sm leading-[14px] py-[15px] pl-[15px]"
        />
        <!-- <input
          id="email-address"
        
          type="email"
          class="w-full min-w-0 px-4 py-2 text-footer-title placeholder-text-light bg-white border border-brand-grey focus:outline-none"
          placeholder="Enter your email"
        /> -->
        <!-- @todo liekas, ka cita ikona šeit -->
        <ArrowLeft
          class="absolute rotate-180 text-footer-title right-[13px] top-[17px] text-xs"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import ArrowLeft from "~/assets/images/ArrowLeft.svg";
</script>
