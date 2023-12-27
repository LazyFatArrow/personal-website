<template>
  <section class="lg:mt-32 mt-10 mx-auto lg:w-96 w-72">
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
        Senior Frontend Engineer @

        <a
          class="text-purple-600"
          href="https://www.canva.com/"
          target="_blank"
          rel="noopener"
        >
          Canva
        </a>
      </h2>

      <div class="flex mt-4">
        <a
          href="https://github.com/LazyFatArrow"
          aria-label="github profile"
          target="_blank"
          rel="noopener"
        >
          <github-icon class="lg:w-5 lg:h-5 w-12 h-12" />
        </a>

        <a
          href="https://www.linkedin.com/in/amenallah-hsoumi/"
          aria-label="linkedin profile"
          target="_blank"
          rel="noopener"
        >
          <linkedin-icon
            class="
              lg:w-5
              lg:h-5
              lg:ml-4
              w-12
              h-12
              ml-8
              text-blue-700
              fill-current
            "
          />
        </a>

        <a
          href="https://medium.com/@amenallah.hsoumi"
          aria-label="medium profile"
          target="_blank"
          rel="noopener"
        >
          <medium-icon class="lg:w-5 lg:h-5 lg:ml-4 w-12 h-12 ml-8" />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
  import MediumIcon from '@/components/icons/MediumIcon.vue'
  import Avatar from '@/components/ui-components/Avatar/Avatar.vue'
  import GithubIcon from '@/components/icons/GithubIcon.vue'

  export default Vue.extend({
    components: {
      Avatar,
      GithubIcon,
      LinkedinIcon,
      MediumIcon,
    },
  })
</script>
