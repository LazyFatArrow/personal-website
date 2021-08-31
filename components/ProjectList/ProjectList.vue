<template>
  <section class="lg:mt-8 mt-14 mx-auto lg:w-96 w-72">
    <div
      class="flex flex-col pb-16 border-gray-300
        border-solid
        lg:border-b"
    >
      <h2 class="text-xl font-bold">
        Side Projects
      </h2>

      <div class="mt-4">
        <project
          v-for="project in projects"
          :key="`project-${project.slug}`"
          :name="project.name"
          :description="project.description"
          :link="project.link"
          class="mt-10 first:mt-0"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Project, { ProjectDetails } from '@/components/Project/Project.vue'

  export default Vue.extend({
    components: {
      Project,
    },
    props: {
      projects: {
        type: Array as Vue.PropType<ProjectDetails[]>,
        default: () => [],
      },
    },
  })
</script>
