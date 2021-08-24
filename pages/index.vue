<template>
  <div>
    <about-me />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import AboutMe from '@/components/AboutMe/AboutMe.vue'

  export default Vue.extend({
    components: {
      AboutMe,
    },
  })
</script>
