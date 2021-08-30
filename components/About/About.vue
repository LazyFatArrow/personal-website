<template>
  <section class="lg:mt-32 mt-24 flex justify-center">
    <div class="flex flex-col items-center text-center border-gray-300 border-solid lg:border-b pb-4">
      <avatar
        :src="require('@/assets/images/amenallah_hsoumi_face.png')"
        alt="Amenallah Hsoumi"
      />

      <h1 class="lg:text-4xl text-2xl font-bold">
        Amenallah Hsoumi
      </h1>

      <h2 class="mt-2 text-gray-500">
        Senior Frontend Developer @

        <a
          class="text-purple-600"
          href="http://check24.de/"
          target="_blank"
          rel="noopener"
        >
          Check24
        </a>
      </h2>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Avatar from '@/components/ui-components/Avatar/Avatar.vue'

  export default Vue.extend({
    components: {
      Avatar,
    },
  })
</script>
