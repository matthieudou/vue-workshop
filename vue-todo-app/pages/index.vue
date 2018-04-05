<template>
  <section class="h-screen flex items-center justify-center">
    <div class="text-center">
      <app-logo/>
      <h1 class="font-hairline">
        vue-todo-app
      </h1>
      <h2 class="font-light text-blue py-4">
        nuxt vue todo app
      </h2>
      <div class="pt-4">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="p-2 border border-green mx-2 rounded no-underline text-black hover:bg-green hover:text-white hover:border-green-darker">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="p-2 border border-blue mx-2 rounded no-underline text-black hover:bg-blue hover:text-white hover:border-blue-darker">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>
