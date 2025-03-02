<template>
  <div class="text-brand-blue">
    <!-- Mobile Page Content -->
    <div class="lg:hidden">
      <div class="px-5">
        <h1 class="text-[32px]/[38px] mb-[23px] font-light">
          Request<br />
          assistance from us
        </h1>
        <p class="text-[18px]/[26px] mb-6 font-light">
          {{ pageDescription }}
        </p>

        <!-- Bullet Points Section -->
        <UiBulletPoints class="mb-[26px]" :points="bulletPoints" />
      </div>
      <!-- Info Section -->
      <div class="mb-12">
        <UiInfoBox :text="infoText" type="info" />
        <UiInfoBox :text="warningText" type="warning" />
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
            <LayoutSidebar :links="sidebarLinks" />
          </div>

          <!-- Main Content Area -->
          <div class="flex-1 max-w-[740px]">
            <div class="max-w-[635px]">
              <h1 class="text-[40px] font-light mb-2">
                Request assistance from us
              </h1>
              <p class="text-xl mb-8 max-w-3xl font-light">
                {{ pageDescription }}
              </p>
            </div>
            <div class="">
              <div class="">
                <!-- Bullet Points Section -->
                <UiBulletPoints :points="bulletPoints" />

                <!-- Info & warning Sections -->
                <div class="grid grid-cols-2 gap-6 mb-8">
                  <UiInfoBox :text="infoText" type="info" />
                  <UiInfoBox :text="warningText" type="warning" />
                </div>

                <!-- Form Section -->
                <FormsFlightForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlightForm from "~/components/forms/FlightForm.vue";
import type { Link } from "~/helpers/constants";

const pageDescription: string =
  "Providing assistance to passengers with reduced mobility is part of our service at airBaltic.";

const bulletPoints: string[] = [
  "Get to the aircraft",
  "Board the aircraft",
  "Move around the aircraft cabin if required",
  "Disembark the aircraft",
  "Transfer between flights",
];

const infoText: string =
  "Personal mobility equipment and guide dogs are carried free of charge.";

const warningText: string =
  "Please note, we are unable to provide eating assistance and medical services.";

const sidebarLinks: Link[] = [
  { label: "Contact us", url: "/" },
  { label: "International offices and representatives", url: "/" },
  { label: "Items left on board", url: "/" },
  { label: "Submit a claim", url: "/" },
  { label: "Compliment us", url: "/" },
  { label: "Ask a question", url: "/" },
  { label: "Request assistance from us", url: "/" },
  { label: "Other inquiries", url: "/" },
];
</script>
