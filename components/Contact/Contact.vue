<template>
  <section class="lg:mt-12 mt-16 mx-auto lg:w-96 w-72">
    <div class="flex flex-col items-center pb-4 border-gray-300">
      <div class="mt-4">
        <custom-button link="mailto:amenallah.hsoumi@gmail.com">
          send Amen a message 😀
        </custom-button>
      </div>
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
