<template>
  <div class="text-brand-blue">
    <!-- Mobile Page Content -->
    <div class="lg:hidden">
      <div class="p-5">
        <h1 class="text-[32px]/[38px] text-brand-blue mb-2 font-light">
          Request<br />
          assistance from us
        </h1>
        <p class="text-[18px]/[26px] mb-6 text-brand-blue font-light">
          {{ pageDescription }}
        </p>

        <!-- Bullet Points Section -->
        <div class="mb-6">
          <h2 class="text-md mb-3 font-medium text-brand-blue">
            We can help you:
          </h2>
          <ul class="list-disc pl-5 space-y-2">
            <li
              v-for="(point, index) in bulletPoints"
              :key="index"
              class="text-brand-green text-xl"
            >
              <span class="text-brand-blue font-normal text-base">{{
                point
              }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- Info Section @todo: var uztaisīt kā componenti-->
      <div class="p-4 bg-brand-info">
        <p
          class="text-brand-blue font-normal text-sm text-center leading-[21px]"
        >
          {{ infoText }}
        </p>
      </div>

      <!-- Warning Section -->
      <div class="mb-12 p-4 bg-brand-warning">
        <p
          class="text-brand-blue font-normal text-sm text-center leading-[21px]"
        >
          {{ warningText }}
        </p>
      </div>

      <!-- Form Section -->
      <FlightForm />
    </div>

    <!-- Desktop Page Content -->
    <div class="hidden lg:block">
      <div class="max-w-[1128px] mx-auto px-4 py-8">
        <div class="flex">
          <!-- Left Sidebar -->
          <div class="w-[324px] mr-14">
            <nav
              aria-label="Related pages navigation"
              class="bg-brand-background rounded-md text-brand-blue font-medium text-sm"
            >
              <ul>
                <li
                  v-for="(link, index) in sidebarLinks"
                  :key="index"
                  class="block hover:text-brand-green border-b border-sidebar-divider"
                >
                  <div
                    class="border-s-2 p-2 border-brand-background hover:border-brand-green"
                  >
                    <!-- @todo: jāuztaisa lai top left un bottom left stūri arī ir noapaļoti, pēdējam nevajaj borderi apakšā -->
                    <NuxtLink to="/">
                      {{ link.text }}
                    </NuxtLink>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Main Content Area -->
          <div class="flex-1 max-w-[740px]">
            <div class="max-w-[635px]">
              <h1 class="text-[40px] text-brand-blue font-light mb-2">
                Request assistance from us
              </h1>
              <p class="text-brand-blue text-xl mb-8 max-w-3xl font-light">
                {{ pageDescription }}
              </p>
            </div>
            <div class="">
              <div class="">
                <!-- Bullet Points Section -->
                <div class="mb-8">
                  <h2 class="font-medium mb-4">We can help you:</h2>
                  <ul class="list-disc pl-5 space-y-3 columns-2 gap-4">
                    <li
                      v-for="(point, index) in bulletPoints"
                      :key="index"
                      class="text-brand-green text-xl"
                    >
                      <span
                        class="text-brand-blue font-normal text-base leading-8"
                        >{{ point }}</span
                      >
                    </li>
                  </ul>
                </div>

                <!-- Info & warning Sections -->
                <div class="grid grid-cols-2 gap-6 mb-8">
                  <div class="p-6 bg-brand-info rounded-md">
                    <p class="text-sm text-center leading-[21px]">
                      {{ infoText }}
                    </p>
                  </div>

                  <div class="p-6 bg-brand-warning rounded-md">
                    <p class="text-sm text-center leading-[21px]">
                      {{ warningText }}
                    </p>
                  </div>
                </div>

                <!-- Form Section -->
                <FlightForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlightForm from "~/components/FlightForm.vue";

// Page content
const pageDescription =
  "Providing assistance to passengers with reduced mobility is part of our service at airBaltic.";

// Bullet points
const bulletPoints = [
  "Get to the aircraft",
  "Board the aircraft",
  "Move around the aircraft cabin if required",
  "Disembark the aircraft",
  "Transfer between flights",
];

// Info and warning text
const infoText =
  "Personal mobility equipment and guide dogs are carried free of charge.";
const warningText =
  "Please note, we are unable to provide eating assistance and medical services.";

// Sidebar links for desktop
const sidebarLinks = [
  { text: "Contact us", url: "/" },
  { text: "International offices and representatives", url: "/" },
  { text: "Items left on board", url: "/" },
  { text: "Submit a claim", url: "/" },
  { text: "Compliment us", url: "/" },
  { text: "Ask a question", url: "/" },
  { text: "Request assistance from us", url: "/" },
  { text: "Other inquiries", url: "/" },
];
</script>
