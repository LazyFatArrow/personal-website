<template>
  <div
    class="
      w-24
      h-24
      relative
      mb-4
    "
  >
    <div
      class="
        group
        w-full
        h-full
        rounded-full
        overflow-hidden
        shadow-inner
        text-center
        bg-purple
        table
        cursor-pointer
      "
    >
      <span
        class="
          hidden
          group-hover:table-cell
          text-white
          font-bold
          align-middle
        "
      >
        {{ alt }}
      </span>
      <img
        :src="src"
        :alt="alt"
        class="
          object-cover
          object-center
          w-full
          h-full
          visible
          group-hover:hidden
        "
      >
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
    },
  })
</script>
