<template>
  <div>
    <nav class="px-6 py-8 shadow-lg md:flex md:justify-between md:items-center bg-second drop-shadow-lg">
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'"
        class=" flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li>
          <div class="relative">
            <!-- Dropdown toggle button -->
            <button @click="showAlat = !showAlat"
              class="flex items-center txt-main bg-inherit rounded-md hover:text-teal-50">
              <span class="mr-4">Alat Dapur</span>
              <svg class="w-5 h-5 text-indigo-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div v-show="showAlat" class="py-2 mt-2 bg-main rounded-md shadow-xl lg:absolute w-44">
              <NuxtLink to="/alat/masak"
                class="block px-4 py-2 text-sm txt-second hover-bg-second hover:text-indigo-100">
                Alat Masak
              </NuxtLink>
              <NuxtLink to="/alat/simpan"
                class="block px-4 py-2 text-sm txt-second hover-bg-second hover:text-indigo-100">
                Alat Simpan
              </NuxtLink>
            </div>
          </div>
        </li>
        <li>
          <div class="relative">
            <!-- Dropdown toggle button -->
            <button @click="showBahan = !showBahan"
              class="flex items-center txt-main bg-inherit rounded-md hover:text-teal-50">
              <span class="mr-4">Bahan</span>
              <svg class="w-5 h-5 text-indigo-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div v-show="showBahan" class="py-2 mt-2 bg-main rounded-md shadow-xl lg:absolute  w-44">
              <NuxtLink to="/bahan/logam"
                class="block px-4 py-2 text-sm txt-second hover-bg-second hover:text-indigo-100">
                Logam
              </NuxtLink>
              <NuxtLink to="/bahan/nonlogam"
                class="block px-4 py-2 text-sm txt-second hover-bg-second hover:text-indigo-100">
                Non Logam
              </NuxtLink>
            </div>
          </div>
        </li>
        <li>
          <div class="relative">
            <!-- Dropdown toggle button -->
            <button @click="showProvinsi = !showProvinsi"
              class="flex items-center txt-main bg-inherit rounded-md hover:text-teal-50">
              <span class="mr-4">Provinsi</span>
              <svg class="w-5 h-5 text-indigo-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div v-show="showProvinsi" class="py-2 mt-2 bg-main rounded-md shadow-xl lg:absolute w-44">
              <NuxtLink to="/provinsi/diy"
                class="block px-4 py-2 text-sm txt-second hover-bg-second hover:text-indigo-100">
                Daerah Istimewa Yogyakarta
              </NuxtLink>
              <NuxtLink to="/provinsi/jawatengah"
                class="block px-4 py-2 text-sm txt-second hover-bg-second hover:text-indigo-100">
                Jawa Tengah
              </NuxtLink>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    let showAlat = ref(false);
    let showBahan = ref(false);
    let showProvinsi = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, showAlat, showBahan, showProvinsi, toggleNav };
  },
};
</script>