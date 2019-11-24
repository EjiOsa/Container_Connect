<template>
  <v-app class="grey lighten-4">
    <NaviBar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NaviBar from './components/parts/NavigationBar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    NaviBar,
  },

  data: () => ({
    //
  }),
});
</script>
