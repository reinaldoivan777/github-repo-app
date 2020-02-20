<template>
  <div class="my-3 container" v-show="repos.length > 0">
    <b-row>
      <b-col sm="12" md="4" class="mb-3" v-for="(repo, index) in repos" :key="index">
        <router-link :to="{ name: 'detail', params: { repoName: repo.name, username } }">
          <b-card class="h-100" :title="repo.name">
            {{ repo.language }}
            <b-card-text class="text-muted">Last update: {{ convertDate(repo.updated_at) }}</b-card-text>
            <div class="overlay">
              <b-button class="middle" variant="secondary">SEE DETAILS</b-button>
            </div>
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
a:hover {
  opacity: 0.8 !important;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
  color: #ffffff;
  justify-content: center;
}

.middle {
  transition: 0.5s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  opacity: 1;
}

.card:hover .overlay {
  height: 100%;
}
</style>
