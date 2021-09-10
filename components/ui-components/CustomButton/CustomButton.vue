<template>
  <component
    :is="link ? 'button' : 'a'"
    :href="link"
    class="
      text-white
      font-bold
      rounded
      text-center
      lg:inline
      block
    "
    :class="{
      'bg-blue-800 hover:bg-blue-900': variant === Variant.PRIMARY,
      'bg-gray-300 hover:bg-gray-400 text-gray-900': variant === Variant.SECONDARY,
      'text-indigo-700': variant === Variant.LINK,
      'py-2 px-8': variant !== Variant.LINK,
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
  import Vue from 'vue'

  enum Variant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    LINK = 'link',
  }

  export default Vue.extend({
    props: {
      variant: {
        type: String,
        default: Variant.PRIMARY,
        validator: value => Object.values(Variant).includes(value as Variant),
      },
      link: {
        type: String,
        default: null,
      },
    },
    data() {
      return {
        Variant,
      }
    },
  })
</script>
