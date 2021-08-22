<template>
  <div>
    <my-header />

    <nuxt />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import MyHeader from '@/components/MyHeader/MyHeader.vue'

  export default Vue.extend({
    components: {
      MyHeader,
    },
  })
</script>
