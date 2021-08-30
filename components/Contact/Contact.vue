<template>
  <section class="lg:mt-32 mt-24 flex justify-center">
    <div class="flex flex-col pb-4">
      <custom-button
        type="link"
        link="mailto:amenallah.hsoumi@gmail.com"
      >
        Get in touch
      </custom-button>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import CustomButton from '@/components/ui-components/CustomButton/CustomButton.vue'

  export default Vue.extend({
    components: {
      CustomButton,
    },
  })
</script>
