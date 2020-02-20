<template>
  <div class="my-3 container" v-show="repos.length > 0">
    <b-row>
      <b-col sm="12" md="4" class="mb-3" v-for="(repo, index) in repos" :key="index">
        <router-link :to="{ name: 'detail', params: { repoName: repo.name, username } }">
          <b-card class="h-100" :title="repo.name">
            {{ repo.language }}
            <b-card-text class="text-muted">Last update: {{ convertDate(repo.updated_at) }}</b-card-text>
          </b-card>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Result',
  props: {
    username: String,
    repos: Array
  },
  methods: {
    convertDate: function(date) {
      return moment(date).format('DD/MM/YYYY');
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
};
</script>

<style scoped>
a {
  color: black !important;
  text-decoration: none !important;
  cursor: pointer;
}
</style>
