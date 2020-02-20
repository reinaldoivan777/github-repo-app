<template>
  <div id="app">
    <input type="text" class="input-text" placeholder="Github Username" v-model="username" />
    <button @click="getRepository()" class="btn btn-primary">Get Repositories</button>
    <Result v-bind:repos="repos" />
  </div>
</template>

<script>
import Result from './components/Result';

export default {
  name: 'App',
  components: {
    Result
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

      console.log(this.repos);
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

.input-text {
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  margin-right: 1rem;
}
</style>
