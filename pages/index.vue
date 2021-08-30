<template>
  <div>
    <about />

    <contact />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Contact from '@/components/Contact/Contact.vue'
  import About from '@/components/About/About.vue'

  export default Vue.extend({
    components: {
      About,
      Contact,
    },
  })
</script>
