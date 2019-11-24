<template>
  <v-container>
    <v-layout>
      <v-flex
      v-for="c in cases" :key="c.Id"
      >
        <v-card
        min-width="380"
        class="ma-2 mp-2"
        outlined
        >
        <v-card-text>
        <div>Case</div>
        <h1 class="display-1 text--primary">
          Name : {{ c.Subject }}
        </h1>
        <p>detail</p>
        <h2 class="text--primary">
          ID : {{ c.Id }}<br>
          Type : {{ c.Type }}
        </h2>
        </v-card-text>
        <component :is="btnName"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue, Prop } from 'vue-property-decorator';
import CASE from '@/store/modules/Cases';
import DeleteButton from './DeleteButton.vue';
import UpdateButton from './UpdateButton.vue';

@Component({
  components: {
  UPDATE: UpdateButton,
  DELETE: DeleteButton,
  },
})
export default class CaseDetail extends Vue {
  get cases() {
    return CASE.CASE_LIST;
  }
}
</script>