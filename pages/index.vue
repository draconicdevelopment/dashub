<template>
  <div class="board"></div>
</template>

<style>
:root {
  --primary-bg-color: #202020;
  --secondary-bg-color: #303030;
}
</style>

<style lang="sass">
body
  margin: 0
  background: var(--primary-bg-color)

.board
  margin-left: 192px
  margin-right: 64px
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>
