<template>
  <section class="lg:mt-32 mt-24 mx-auto lg:w-96 w-72">
    <div
      class="
        flex
        flex-col
        items-center
        text-center
        border-gray-300
        border-solid
        lg:border-b pb-4
      "
    >
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

      <div class="flex mt-4">
        <a
          href="https://github.com/LazyFatArrow"
          aria-label="github profile"
          target="_blank"
        >
          <github-icon class="w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/amenallah-hsoumi/"
          aria-label="linkedin profile"
          target="_blank"
        >
          <linkedin-icon class="w-5 h-5 ml-4 text-blue-700 fill-current" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import LinkedinIcon from '../icons/LinkedinIcon.vue'
  import Avatar from '@/components/ui-components/Avatar/Avatar.vue'
  import GithubIcon from '@/components/icons/GithubIcon.vue'

  export default Vue.extend({
    components: {
      Avatar,
      GithubIcon,
      LinkedinIcon,
    },
  })
</script>
