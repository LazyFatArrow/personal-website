<template>
  <div>
    <my-header />

    <nuxt />

    <my-footer />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import MyHeader from '@/components/MyHeader/MyHeader.vue'
  import MyFooter from '@/components/MyFooter/MyFooter.vue'

  export default Vue.extend({
    components: {
      MyHeader,
      MyFooter,
    },
  })
</script>
