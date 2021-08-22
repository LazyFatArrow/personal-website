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
      justify-between
      pt-8
      lg:px-24
      px-6
      items-center
    "
    >
      <div class="lg:text-4xl uppercase">
        <nuxt-link to="/">
          Amenallah Hsoumi
        </nuxt-link>
      </div>

      <!-- using isMenuOpen.toString() to force vue to add the attribute with a the value 'false' -->
      <button
        :aria-expanded="isMenuOpen.toString()"
        aria-label="Toggle navigation"
        class="lg:hidden"
        @click="toggleMenu"
      >
        <close-icon v-if="isMenuOpen" />
        <menu-icon v-else />
      </button>

      <navigation class="items-center hidden lg:flex" />
    </div>

    <navigation
      is-vertical
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
  import Navigation from '@/components/Navigation/Navigation.vue'
  import CloseIcon from '@/components/icons/CloseIcon.vue'
  import MenuIcon from '@/components/icons/MenuIcon.vue'

  export default Vue.extend({
    components: {
      MenuIcon,
      CloseIcon,
      Navigation,
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
