<template>
  <v-container>
    <v-layout
    text-center
    wrap
    >
      <v-flex mb-4>
        <h2>
          ホーム及びデータの参照をするページ。
        </h2>
        <CaseDetail/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue } from 'vue-property-decorator';
import Cases from '@/store/modules/Cases';
import CaseDetail from '../parts/CaseDetail.vue';

@Component({
  components: {
    CaseDetail,
  },
})
export default class ReferencePage extends Vue {
  public created() {
    Cases.salesforce_Case();
  }
}
</script>