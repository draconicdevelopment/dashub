<template>
  <div>
    <div class="board"><img src="../static/img/rd.png" width="180" /></div>
  </div>
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
  display: block
  height: 100vh
  margin-left: 192px
  margin-right: 64px
  display: flex
  justify-content: center
  align-items: center
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>
