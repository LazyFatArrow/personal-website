<template>
  <div>
    <h3 class="text-xl">
      {{ name }}
    </h3>

    <p class="mt-2 text-gray-500">
      {{ description }}
    </p>

    <div
      v-if="link"
      class="mt-6"
    >
      <custom-button
        :aria-label="`go to ${name}`"
        :link="link"
        variant="link"
        target="_blank"
        rel="noopener"
      >
        Check it out
      </custom-button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import CustomButton from '@/components/ui-components/CustomButton/CustomButton.vue'

  export interface ProjectDetails {
    name: string,
    description: string,
    link?: string,
    slug: string,
  }

  export default Vue.extend({
    components: {
      CustomButton,
    },
    props: {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        default: null,
      },
    },
  })
</script>
