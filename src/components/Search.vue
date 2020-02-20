<template>
  <div>
    <h1 class="mb-3">Search Github User's Repositories</h1>
    <form @submit.prevent="getRepository">
      <input type="text" class="input-text" placeholder="Github Username" v-model="username" />
      <button type="submit" class="btn btn-primary">Get Repositories</button>
    </form>
    <Result :repos="repos" :username="username" />
  </div>
</template>

<script>
import Result from './Result';

export default {
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
      fetch(`${process.env.VUE_APP_BASE_URL}/users/${this.username}/repos`)
        .then(response => response.json())
        .then(data => (this.repos = data));
    }
  }
};
</script>

<style>
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
