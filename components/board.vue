<template>
  <div class="board">
    <div class="item widget-one">
      <span class="widget-name">Projects</span>
      <div class="widget-one-content"></div>
    </div>
    <div class="item widget-two">
      <div class="widget-two-content">
        <span class="widget-name">Income</span>
      </div>
    </div>
    <div class="item widget-three">
      <span class="widget-name">Example</span>
      <div class="widget-three-content"></div>
    </div>
    <div class="item widget-four">
      <span class="widget-name">Example</span>
      <div class="widget-four-content"></div>
    </div>
  </div>
</template>

<style lang="sass">
body
  margin: 0
  background: var(--primary-bg-color)

.board
  position: relative
  margin-left: 160px
  margin-right: 32px
  height: 100vh

.item
  display: block
  position: absolute
  margin: 32px
  z-index: 1
  background: #000
  color: #fff
  background: var(--secondary-bg-color)
  border-radius: 25px
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25)

.widget-name
  position: absolute
  top: -40px
  color: rgba(255, 255, 255, 0.5)
  font-style: normal
  font-weight: normal
  font-size: 24px
  line-height: 36px

.item.muuri-item-dragging
  z-index: 3

.item.muuri-item-releasing
  z-index: 2

.item.muuri-item-hidden
  z-index: 0

.item-content
  position: relative
  width: 100%
  height: 100%

.widget-one
  width: 600px
  height: 420px

.widget-two
  background: linear-gradient(142.7deg, #8A2BE2 -0.07%, #E22BD0 99.93%)
  width: 320px
  height: 420px

.widget-three
  width: 576px
  height: 420px

.widget-four
  background: linear-gradient(142.7deg, #8A2BE2 -0.07%, #E22BD0 99.93%)
  width: 320px
  height: 420px
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});

if (process.client) {
  const Muuri = require('muuri');

  const grid = new Muuri('.board', {
    dragEnabled: true,
    layout: {
      fillGaps: false,
    },
  });

  // eslint-disable-next-line no-console
  console.log(grid);
}
</script>
