<template>
  <div>
    <Board />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api';
import Board from '@/components/board.vue';

export default defineComponent({
  components: {
    Board,
  },
  layout: 'board',
  setup() {},
});
</script>
