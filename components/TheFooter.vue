<template>
  <footer
    class="site-footer bg-brand-background"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>

    <!-- Mobile Footer -->
    <div class="lg:hidden px-4 py-8">
      <!-- Collapsible Sections -->
      <div class="space-y-4">
        <div v-for="(section, index) in footerSections" :key="index">
          <button
            @click="toggleSection(index)"
            class="flex justify-between items-center w-full py-3 text-left text-footer-title border-b border-brand-grey font-medium"
            :aria-expanded="openSections[index]"
            :aria-controls="`section-${index}`"
          >
            <span class="text-sm uppercase text-footer-title">{{
              section.title
            }}</span>
            <span class="text-xl">+</span>
          </button>

          <div
            :id="`section-${index}`"
            v-show="openSections[index]"
            class="mt-2 pl-4 space-y-2"
          >
            <ul class="space-y-2">
              <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                <a :href="link.url" class="text-footer-title">{{
                  link.text
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Newsletter Signup -->
      <div class="mt-8">
        <NewsletterSignup />
      </div>

      <!-- Social Media Links -->
      <div class="mt-8">
        <SocialMediaLinks class="mt-4" />
      </div>

      <div class="mt-8">
        <div class="flex">
          <img class="w-4 h-4 mr-3" src="~/assets/images/Redirect.png" />
          <p class="text-text-light text-xs mb-3">
            This indicates a link to an external site that may not follow the
            same accessibility policies.
          </p>
        </div>
      </div>

      <!-- Bottom Links & Copyright -->
      <div class="mt-8 pt-4 text-sm border-b border-brand-grey">
        <div class="mt-4 text-text-light">&copy; 2017 airBaltic</div>
        <div class="flex flex-col">
          <a
            v-for="(link, index) in bottomLinks"
            :key="index"
            :href="link.url"
            class="mr-4 text-footer-title"
          >
            <p>{{ link.text }}</p>
          </a>
        </div>
      </div>

      <!-- Accepted Payment ways -->
      <div class="mt-8 pt-4 text-sm border-b border-brand-grey">
        <PageIndexPaymentTypes class="mt-4" />
      </div>

      <!-- Badges -->
      <div class="mt-8 pt-4 text-sm border-b border-brand-grey flex">
        <img
          src="~/assets/images/capa.png"
          alt="CAPA Regional airline of the year"
        />
        <img
          src="~/assets/images/most-punctual.png"
          alt="Most punctual aviolines in the world"
        />
      </div>

      <!-- Security -->
      <div class="mt-8 pt-4 text-sm">
        <img src="~/assets/images/geo-trust.png" alt="Secured by GeoTrust" />
      </div>
    </div>

    <!-- Desktop Footer -->
    <div class="hidden lg:block">
      <!-- Top Row - 5 Columns -->
      <div class="max-w-[1128px] mx-auto px-4 py-12">
        <!-- @todo uztaisīt savu container clasi, ja tailwind nepiedāvā-->
        <div class="grid grid-cols-5 gap-8">
          <!-- 4 Link Columns -->
          <div
            v-for="(section, index) in footerSections"
            :key="index"
            class="col-span-1"
          >
            <h3 class="text-footer-title font-medium text-sm mb-4 uppercase">
              {{ section.title }}
            </h3>
            <ul class="space-y-3 text-sm">
              <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
                <a :href="link.url" class="text-footer-title">{{
                  link.text
                }}</a>
              </li>
            </ul>
          </div>

          <!-- Newsletter Column -->
          <div class="col-span-1">
            <NewsletterSignup />
            <div class="mt-8">
              <div class="flex">
                <img class="w-4 h-4 mr-3" src="~/assets/images/Redirect.png" />
                <p class="text-text-light text-xs mb-3">
                  This indicates a link to an external site that may not follow
                  the same accessibility policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Middle Row - Social Media Icons -->
      <div class="border-t border-gray-200">
        <!-- @todo lapas izmēru vajag, kā css klasi -->
        <div class="max-w-[1128px] mx-auto px-4 py-6 flex">
          <!-- Security -->
          <div class="text-sm border-r border-brand-grey">
            <img
              src="~/assets/images/geo-trust.png"
              alt="Secured by GeoTrust"
            />
          </div>

          <!-- Accepted Payment ways -->
          <div class="text-sm border-r border-brand-grey">
            <PageIndexPaymentTypes class="mt-4" />
          </div>

          <!-- Badges -->
          <div class="text-sm flex">
            <img
              src="~/assets/images/capa.png"
              alt="CAPA Regional airline of the year"
            />
            <img
              src="~/assets/images/most-punctual.png"
              alt="Most punctual aviolines in the world"
            />
          </div>

          <SocialMediaLinks />
        </div>
      </div>

      <!-- Bottom Row -->
      <div class="border-t border-gray-200 h-[80px]">
        <div class="max-w-[1128px] mx-auto px-4 py-6">
          <div class="flex justify-between items-center">
            <div class="flex space-x-6">
              <a
                v-for="(link, index) in bottomLinks"
                :key="index"
                :href="link.url"
                class="text-[13px] text-footer-title"
              >
                {{ link.text }}
              </a>
            </div>
            <div class="text-xs text-text-light">&copy; 2017 airBaltic</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Track open sections for mobile accordions
const openSections = ref([false, false, false, false]);

const toggleSection = (index: number) => {
  openSections.value[index] = !openSections.value[index];
};

// Footer sections data
const footerSections = [
  {
    title: "Helpful links",
    links: [
      { text: "Book a flight", url: "/" },
      { text: "Check-in online", url: "/" },
      { text: "All about baggage", url: "/" },
      { text: "Destinations", url: "/" },
    ],
  },
  {
    title: "About airbaltic",
    links: [
      { text: "Careers", url: "/" },
      { text: "About us", url: "/" },
      { text: "airBaltic souveniers", url: "/" },
    ],
  },
  {
    title: "airbaltic partners",
    links: [
      { text: "Pilots Academy", url: "/" },
      { text: "airBaltic Training", url: "/" },
      { text: "PINS", url: "/" },
    ],
  },
  {
    title: "Customer support",
    links: [
      { text: "Contact us", url: "/" },
      { text: "FAQs", url: "/" },
      { text: "Request assistance", url: "/" },
    ],
  },
];

// Bottom links
const bottomLinks = [
  { text: "Legal information", url: "/" },
  { text: "Site index", url: "/" },
  { text: "Technical requirements", url: "/" },
];
</script>
