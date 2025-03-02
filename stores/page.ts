import { defineStore } from "pinia";

export const usePageStore = defineStore("page", {
  state: () => ({
    mobileMenuOpen: false,
  }),
  actions: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
  getters: {},
});
