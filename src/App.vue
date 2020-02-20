<template>
  <div id="app">
    <InputText placeholder="Github username" v-model="username" />
    <button @click="getRepository()" class="btn btn-primary">get user repositories</button>
  </div>
</template>

<script>
import InputText from './components/common/InputText';

export default {
  name: 'App',
  components: {
    InputText
  },
  data() {
    return {
      username: '',
      repos: []
    };
  },
  methods: {
    getRepository() {
      console.log(`get ${this.username} repository`);
      fetch(`${process.env.VUE_APP_BASE_URL}/${this.username}/repos`)
        .then(response => response.json())
        .then(data => (this.repos = data));
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
