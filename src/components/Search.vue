<template>
  <div>
    <div class="search">
      <h1 class="mb-3">Search Github User's Repositories</h1>
      <form @submit.prevent="getRepository">
        <input v-model="inputName" type="text" class="input-text mb-3" placeholder="Github Username" />
        <button type="submit" class="btn btn-primary">Get Repositories</button>
      </form>
    </div>
    <div class="content">
      <Result v-if="!loading" :repos="repos" :username="username" />
      <b-spinner v-else type="grow" variant="primary" label="Spinning" class="my-3"></b-spinner>
      <h5 v-if="notFound" class="my-3">Result Not Found!</h5>
    </div>
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
      inputName: '',
      username: '',
      repos: [],
      loading: false,
      notFound: false
    };
  },
  methods: {
    getRepository() {
      this.loading = true;
      this.notFound = false;
      this.username = this.inputName;
      fetch(`${process.env.VUE_APP_BASE_URL}/users/${this.username}/repos`)
        .then(response => response.json())
        .then(data => {
          this.repos = data;
          this.loading = false;
          this.inputName = '';
          if (data.length === 0) this.notFound = true;
        });
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

.search {
  position: fixed;
  width: 100%;
  border-bottom: 1px solid rgb(198, 198, 198);
  background-color: #ffffff;
  z-index: 800;
  top: 0;
  padding: 16px 0;
}

.content {
  position: relative;
  top: 160px;
}

@media only screen and (max-width: 320px) {
  .content {
    top: 200px;
  }

  h1 {
    font-size: 1.5rem !important;
  }
}

@media only screen and (min-width: 321px) and (max-width: 400px) {
  .content {
    top: 175px;
  }

  h1 {
    font-size: 1.5rem !important;
  }
}

@media only screen and (min-width: 401px) and (max-width: 500px) {
  .content {
    top: 135px;
  }

  h1 {
    font-size: 1.5rem !important;
  }
}
</style>
