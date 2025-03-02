<template>
  <div class="mb-[12px]">
    <div class="flex">
      <a
        v-for="(paymentType, index) in paymentTypes"
        :key="index"
        :href="paymentType.url"
        :aria-label="`Follow us on ${paymentType.name}`"
        class="flex items-center justify-center"
      >
        <span class="sr-only">{{ paymentType.name }}</span>
        <img
          :src="paymentType.src"
          :alt="paymentType.name"
          class="w-auto h-auto pr-[10px]"
        />
      </a>
      <a href="/" aria-label="More payment types" class="">
        <span class="sr-only">More payment types</span>
        <p
          class="text-footer-title underline text-xs leading-9 pl-[10px] decoration-brand-green underline-offset-0"
        >
          more
        </p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import mastercardImg from "@/assets/images/mastercard.png";
import visaImg from "@/assets/images/visa.png";
import americanExpressImg from "@/assets/images/american-express.png";
import paypalImg from "@/assets/images/paypal.png";

const paymentTypes = [
  {
    name: "MasterCard",
    url: "/",
    src: mastercardImg,
  },
  {
    name: "Visa",
    url: "/",
    src: visaImg,
  },
  {
    name: "American Express",
    url: "/",
    src: americanExpressImg,
  },
  {
    name: "PayPal",
    url: "/",
    src: paypalImg,
  },
];
</script>
