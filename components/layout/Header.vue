<template>
  <header class="site-header" aria-label="Site header">
    <!-- Mobile Header -->
    <HeaderMobile />

    <!-- Mobile Navigation -->
    <HeaderMobileNavigation :items="navigationItems" />

    <!-- Desktop Header -->
    <HeaderDesktop :items="navigationItems" />
  </header>

  <!-- Mobile Back Link -->
  <div class="lg:hidden p-4 flex items-center">
    <ArrowLeft
      class="w-[7px] h-[13px] text-brand-blue-ui mr-3"
      :fontControlled="false"
    />
    <p class="text-brand-blue-ui">Back to Contact us</p>
  </div>

  <!-- Breadcrumbs -->
  <HeaderBreadcrumbs :breadCrumbs="breadCrumbs" />
</template>

<script setup lang="ts">
import ArrowLeft from "~/assets/images/ArrowLeft.svg";
import type { Link } from "~/helpers/constants";

const navigationItems: Link[] = [
  { label: "Plan and book", url: "/" },
  { label: "Prepare for your trip", url: "/" },
  { label: "Information", url: "/" },
  { label: "PINS", url: "/" },
  { label: "Special offers", url: "/" },
];

const breadCrumbs: Link[] = [
  { label: "Home", url: "/" },
  { label: "Contact us", url: "/" },
  { label: "Submit a claim", url: "/" },
  { label: "Damaged baggage", url: "/" },
];
</script>
