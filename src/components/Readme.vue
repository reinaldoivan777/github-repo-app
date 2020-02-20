<template>
  <div class="container">
    <h1 class="mb-3">{{ $route.params.repoName }}</h1>
    <div class="mb-3">
      <router-link to="/">
        <font-awesome-icon icon="arrow-left" class="mr-3" />Search another github user's repository
      </router-link>
    </div>
    <b-card header="README.md" class="text-left">
      <markdown-it-vue class="md-body" :content="readme" />
    </b-card>
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

<style>
.card-header {
  font-weight: 600;
}
a:hover {
  text-decoration: none !important;
}
</style>
