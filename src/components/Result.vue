<template>
  <div v-show="repos.length > 0" class="my-3 container">
    <b-row>
      <b-col v-for="(repo, index) in repos" :key="index" sm="12" md="4" class="mb-3">
        <b-card :title="repo.name" class="card-height">
          {{ repo.language }}
          <b-card-text class="text-muted last-update">Last update: {{ convertDate(repo.updated_at) }}</b-card-text>
          <div class="overlay">
            <router-link :to="{ name: 'detail', params: { repoName: repo.name, username } }">
              <b-button class="middle" variant="secondary">SEE README</b-button>
            </router-link>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Result',
  filters: {
    moment: function(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  },
  props: {
    username: {
      type: String,
      default: ''
    },
    repos: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    convertDate: function(date) {
      return moment(date).format('DD/MM/YYYY');
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
  background: repeating-linear-gradient(-45deg, transparent, transparent 3px, rgb(198, 198, 198) 5px);
}

.last-update {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

.card-height {
  height: 160px;
}
</style>
