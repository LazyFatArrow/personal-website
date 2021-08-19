<template>
  <button
    class="
      text-white
      font-bold
      py-2
      px-8
      rounded
    "
    :class="{
      'bg-blue-500 hover:bg-blue-800': variant === Variant.PRIMARY,
      'bg-blue-600 hover:bg-blue-700': variant === Variant.SECONDARY,
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
  import Vue from 'vue'

  enum Variant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
  }

  export default Vue.extend({
    props: {
      variant: {
        type: String,
        default: Variant.PRIMARY,
        validator: value => Object.values(Variant).includes(value as Variant),
      },
    },
    data() {
      return {
        Variant,
      }
    },
  })
</script>
