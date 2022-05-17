<template>
  <nav
    class="
      font-bold
      font-mono
    "
  >
    <div
      class="
        flex
        justify-end
        pt-8
        lg:px-24
        xl:px-48
        px-6
        items-center
      "
    >
      <!-- using .toString() to force vue to add the attribute when the value is 'false' -->
      <button
        :aria-expanded="isMenuOpen.toString()"
        aria-label="Toggle navigation"
        aria-controls="#navbarSupportedContent"
        class="lg:hidden"
        @click="toggleMenu"
      >
        <close-icon
          v-if="isMenuOpen"
          aria-hidden="true"
        />
        <menu-icon
          v-else
          aria-hidden="true"
        />
      </button>

      <main-navigation class="items-center hidden lg:flex" />
    </div>

    <main-navigation
      id="navbarSupportedContent"
      vertical
      class="
        transition-height
        duration-500
        ease-in-out
        lg:hidden
        mt-12
        overflow-hidden
        items-center
        flex
        flex-col
        h-0
      "
      :class="{
        'h-36': isMenuOpen
      }"
    />
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue'
  import MainNavigation from '@/components/MainNavigation/MainNavigation.vue'
  import CloseIcon from '@/components/icons/CloseIcon.vue'
  import MenuIcon from '@/components/icons/MenuIcon.vue'

  export default Vue.extend({
    components: {
      MenuIcon,
      CloseIcon,
      MainNavigation,
    },
    data() {
      return {
        isMenuOpen: false,
      }
    },
    methods: {
      toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen
      },
    },
  })
</script>
