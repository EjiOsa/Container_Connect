<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card-actions>
          <v-btn
            text
            color="deep-purple accent-4"
            >
            DELETE
          </v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue } from 'vue-property-decorator';

@Component
export default class DeleteButton extends Vue {

}
</script>