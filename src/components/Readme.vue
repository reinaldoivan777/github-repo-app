<template>
  <div class="container">
    <h1 class="mb-5">{{ $route.params.repoName }}</h1>
    <markdown-it-vue class="md-body" :content="readme" />
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue';
import 'markdown-it-vue/dist/markdown-it-vue.css';
export default {
  name: 'Readme',
  data() {
    return {
      readme: {}
    };
  },
  components: {
    MarkdownItVue
  },
  mounted() {
    fetch(`${process.env.VUE_APP_BASE_URL}/repos/${this.$route.params.username}/${this.$route.params.repoName}/readme`)
      .then(response => response.json())
      .then(data => (this.readme = window.atob(data.content)));
  }
};
</script>

<style></style>
