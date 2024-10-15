<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.path"
      class="hover:text-indigo-700"
      :class="{
        'text-indigo-700': item.path === $route.path,
        'first:mt-0 mt-4': vertical,
        'mx-4 first:ml-0 last:mr-0': !vertical,
      }"
    >
      <component
        :is="item.external ? 'a' : 'nuxt-link'"
        v-bind="
          item.external
            ? {
              href: item.path,
              target: '_blank',
              rel: 'noopener'
            }
            : { to: item.path }
        "
      >
        {{ item.name }}

        <span
          v-if="item.path === $route.path"
          class="sr-only"
        >
          (current)
        </span>
      </component>
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      vertical: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        items: [
          {
            name: 'Home',
            path: '/',
          },
          {
            name: 'Blog',
            path: 'https://runthatline.com/',
            external: true,
          },
          {
            name: 'Resume',
            path: 'https://drive.google.com/file/d/1-Y5Xj5EvjTVWRRnQe3vbHOqxcYfOgTaH/view?usp=sharing',
            external: true,
          },
        ],
      }
    },
  })
</script>
