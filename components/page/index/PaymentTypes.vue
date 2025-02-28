<template>
  <div class="payment-types">
    <div class="flex">
      <a
        v-for="(paymentType, index) in paymentTypes"
        :key="index"
        :href="paymentType.url"
        :aria-label="`Follow us on ${paymentType.name}`"
        class="flex items-center justify-center w-12 h-12 rounded-full bg-social-media-background"
      >
        <span class="sr-only">{{ paymentType.name }}</span>
        <img :src="paymentType.src" :alt="paymentType.name" class="w-5 h-5" />
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
