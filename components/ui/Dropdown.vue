<template>
  <div>
    <Listbox v-model="selected">
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full py-2 pl-3 pr-10 text-left bg-white cursor-pointer border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          <span class="block truncate">{{ selected.name }}</span>
          <span class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_16)">
                <path d="M0 1L5.35449 6L11 1" stroke="#979797" />
              </g>
              <defs>
                <clipPath id="clip0_1_16">
                  <rect width="11" height="7" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </ListboxButton>

        <transition
          enter="transition duration-100 ease-out"
          enter-from="transform scale-95 opacity-0"
          enter-to="transform scale-100 opacity-100"
          leave="transition duration-75 ease-in"
          leave-from="transform scale-100 opacity-100"
          leave-to="transform scale-95 opacity-0"
        >
          <ListboxOptions
            class="absolute z-10 w-full mt-1 overflow-auto bg-white shadow-lg max-h-60 border border-gray-300"
          >
            <ListboxOption
              v-for="item in items"
              :key="item.id"
              v-slot="{ active, selected }"
              :value="item"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-blue-100' : '',
                  'relative cursor-pointer select-none py-2 pl-3 pr-4',
                ]"
              >
                <span :class="selected ? 'font-medium' : 'font-normal'">
                  {{ item.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                >
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

// Sample list items
const items = ref([
  { id: 1, name: "+371" },
  { id: 2, name: "+372" },
  { id: 3, name: "+373" },
]);

const selected = ref(items.value[0]);
</script>
<!-- @todo: should make it reusable -->
