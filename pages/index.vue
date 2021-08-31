<template>
  <div>
    <about />

    <project-list :projects="projects" />

    <contact />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ProjectList from '../components/ProjectList/ProjectList.vue'
  import Contact from '@/components/Contact/Contact.vue'
  import About from '@/components/About/About.vue'

  export default Vue.extend({
    components: {
      About,
      Contact,
      ProjectList,
    },
    async asyncData({ $content }) {
      const projects = await $content('projects').fetch()

      return {
        projects,
      }
    },
    head: {
      title: 'Amenallah Hsoumi - Software Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'I write code to solve real-world problems and build business applications as a developer',
        },
      ],
    },
  })
</script>
