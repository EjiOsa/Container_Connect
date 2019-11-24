<template>
  <v-container>
    <v-layout
    text-center
    wrap
    >
      <v-flex mb-4>
        <h2>
          データの操作をするページ。
        </h2>
        <CaseDetail/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import CaseDetail from '../parts/CaseDetail.vue';

@Component({
  components: {
    CaseDetail,
  },
})
export default class AddtionPage extends Vue {

}
</script>