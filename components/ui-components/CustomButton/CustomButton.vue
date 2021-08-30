<template>
  <component
    :is="type === Type.BUTTON ? 'button' : 'a'"
    :href="link"
    class="
      text-white
      font-bold
      py-2
      px-8
      rounded
    "
    :class="{
      'bg-blue-800 hover:bg-blue-900': variant === Variant.PRIMARY,
      'bg-blue-600 hover:bg-blue-700': variant === Variant.SECONDARY,
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
  }

  enum Type {
    BUTTON = 'button',
    LINK = 'link'
  }

  export default Vue.extend({
    props: {
      variant: {
        type: String,
        default: Variant.PRIMARY,
        validator: value => Object.values(Variant).includes(value as Variant),
      },
      type: {
        type: String,
        default: Type.BUTTON,
        validator: value => Object.values(Type).includes(value as Type),
      },
      link: {
        type: String,
        default: null,
      },
    },
    data() {
      return {
        Variant,
        Type,
      }
    },
  })
</script>
