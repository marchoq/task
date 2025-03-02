<template>
  <div>
    <div class="flex gap-[11px]">
      <a
        v-for="(item, index) in socialMediaLinks"
        :key="index"
        :href="item.url"
        :aria-label="`Follow us on ${item.name}`"
        class="flex items-center justify-center w-12 h-12 rounded-full bg-social-media-background"
      >
        <span class="sr-only">{{ item.name }}</span>
        <img :src="item.src" :alt="item.name" class="w-auto h-auto" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import facebookImg from "@/assets/images/facebook.png";
import twitterImg from "@/assets/images/twitter.png";
import instagramImg from "@/assets/images/instagram.png";
import youtubeImg from "@/assets/images/youtube.png";

const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    src: facebookImg,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    src: twitterImg,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    src: instagramImg,
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    src: youtubeImg,
  },
];
</script>
