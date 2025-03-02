<template>
  <footer
    class="site-footer bg-brand-background"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>

    <!-- Mobile Footer -->
    <div class="lg:hidden px-5 pt-[2px]">
      <!-- Collapsible Sections -->
      <div class="mb-[5px]">
        <FooterCollapsible :sections="footerLinks" />
      </div>

      <!-- Newsletter Signup -->
      <div>
        <FooterNewsletterSignup />
      </div>

      <!-- Social Media Links -->
      <div class="mb-[37px]">
        <FooterSocialMediaLinks />
      </div>

      <div class="mb-[33px]">
        <FooterExteranlSiteNotice />
      </div>

      <!-- Bottom Links & Copyright -->
      <div class="mb-4 text-sm border-b border-brand-grey">
        <div class="mb-[7px] text-text-light text-[13px] leading-[16px]">
          &copy; 2017 airBaltic
        </div>
        <div class="flex flex-col mb-2">
          <a
            v-for="(link, index) in bottomLinks"
            :key="index"
            :href="link.url"
            class="mr-4 text-footer-title text-[13px] leading-9 pb-[1px]"
          >
            <p>{{ link.label }}</p>
          </a>
        </div>
      </div>

      <!-- Accepted Payment ways -->
      <div class="mb-4 text-sm border-b border-brand-grey">
        <FooterPaymentTypes />
      </div>

      <!-- Badges -->
      <div class="mb-[15px] border-b border-brand-grey">
        <div class="mb-[13px] flex items-center">
          <img
            src="~/assets/images/capa.png"
            alt="CAPA Regional airline of the year"
            class="w-auto h-[53px] pr-[22px]"
          />
          <img
            src="~/assets/images/most-punctual.png"
            alt="Most punctual aviolines in the world"
            class="w-auto h-auto"
          />
        </div>
      </div>

      <!-- Security -->
      <div class="pb-[49px]">
        <img
          src="~/assets/images/geo-trust.png"
          alt="Secured by GeoTrust"
          class="w-auto h-auto"
        />
      </div>
    </div>

    <!-- Desktop Footer -->
    <div class="hidden lg:block">
      <!-- Top Row - 5 Columns -->
      <div class="max-w-[1120px] mx-auto pt-[37px]">
        <div class="flex justify-between">
          <div class="grid grid-cols-4 w-[712px] gap-[49px]">
            <!-- 4 Link Columns -->
            <FooterLinksSection :footerLinks="footerLinks" />
          </div>

          <!-- Newsletter Column -->
          <div class="col-span-1 w-[284px]">
            <FooterNewsletterSignup />
            <div class="mb-8">
              <FooterExteranlSiteNotice />
            </div>
          </div>
        </div>
      </div>

      <!-- Middle Row - Social Media Icons -->
      <div class="border-gray-200">
        <!-- @todo lapas izmēru vajag, kā css klasi vai kā mainīgo -->
        <div class="max-w-[1120px] mx-auto pt-6 pb-7 flex justify-between">
          <div class="flex">
            <!-- Security -->
            <div class="border-r border-brand-grey mr-[41px]">
              <div class="mr-[41px]">
                <img
                  src="~/assets/images/geo-trust.png"
                  alt="Secured by GeoTrust"
                />
              </div>
            </div>

            <!-- Accepted Payment ways -->
            <div class="border-r border-brand-grey mr-[39px]">
              <FooterPaymentTypes class="mr-[40px]" />
            </div>

            <!-- Badges -->
            <div class="flex mr-[90px]">
              <img
                src="~/assets/images/capa.png"
                alt="CAPA Regional airline of the year"
                class="mr-[22px] h-[53px]"
              />
              <div class="relative w-[107px]">
                <img
                  src="~/assets/images/most-punctual.png"
                  alt="Most punctual aviolines in the world"
                  class="absolute bottom-[1px]"
                />
              </div>
            </div>
          </div>
          <FooterSocialMediaLinks />
        </div>
      </div>

      <!-- Bottom Row -->
      <div class="border-t border-gray-200 h-[80px]">
        <div class="max-w-[1120px] mx-auto pt-[13px]">
          <div class="flex justify-between items-center">
            <div class="flex space-x-[51px]">
              <a
                v-for="(link, index) in bottomLinks"
                :key="index"
                :href="link.url"
                class="text-[13px] text-footer-title leading-9"
              >
                {{ link.label }}
              </a>
            </div>
            <div class="text-[13px] text-text-light leading-4">
              &copy; 2017 airBaltic
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { FooterLinks, Link } from "~/helpers/constants";

// Footer sections data
const footerLinks: FooterLinks[] = [
  {
    title: "Helpful links",
    links: [
      { label: "Book a flight", url: "/" },
      { label: "Check-in online", url: "/" },
      { label: "All about baggage", url: "/" },
      { label: "Destinations", url: "/" },
    ],
  },
  {
    title: "About airbaltic",
    links: [
      { label: "Careers", url: "/" },
      { label: "About us", url: "/" },
      { label: "airBaltic souveniers", url: "/" },
    ],
  },
  {
    title: "airbaltic partners",
    links: [
      { label: "Pilots Academy", url: "/" },
      { label: "airBaltic Training", url: "/" },
      { label: "PINS", url: "/" },
    ],
  },
  {
    title: "Customer support",
    links: [
      { label: "Contact us", url: "/" },
      { label: "FAQs", url: "/" },
      { label: "Request assistance", url: "/" },
    ],
  },
];

// Bottom links
const bottomLinks: Link[] = [
  { label: "Legal information", url: "/" },
  { label: "Site index", url: "/" },
  { label: "Technical requirements", url: "/" },
];
</script>
