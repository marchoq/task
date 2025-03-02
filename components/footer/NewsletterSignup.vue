<template>
  <div class="md:pl-[21px] mb-[13px] md:mb-[23px]">
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
