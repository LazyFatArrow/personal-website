<template>
  <div>
    <about />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import About from '@/components/About/About.vue'

  export default Vue.extend({
    components: {
      About,
    },
  })
</script>
