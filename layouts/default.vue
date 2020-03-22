<template>
  <div>
    <transition name="fade">
      <div v-if="state.display" class="blur"></div>
    </transition>
    <div
      class="nav"
      @mouseover="state.display = true"
      @mouseleave="state.display = false"
    >
      <div class="logo-container">
        <img
          class="logo"
          src="../static/img/LightIcon.svg"
          width="106"
          height="106"
        />
      </div>
      <ul class="navbar-nav">
        <li class="nav-item"></li>
      </ul>
    </div>
    <nuxt />
  </div>
</template>

<style lang="sass" scoped>
.blur
  width: 100%
  height: 100%
  top: 0
  left: 0
  position: fixed
  backdrop-filter: saturate(100%) blur(12px)

.fade-enter-active, .fade-leave-active
  transition: opacity .15s

.fade-enter, .fade-leave-to
  opacity: 0;

.nav
  width: 128px
  height: 96%
  top: 2%
  background-color: var(--secondary-bg-color)
  position: fixed
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25)
  border-radius: 0px 25px 25px 0px
  transition: ease .15s

  &:hover
    width: 360px

  .logo-container
    display: flex
    height: 128px
    background: linear-gradient(135deg, #8A2BE2 0%, #E22BD0 100%)
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25)
    border-radius: 0px 25px 25px 0px
    align-items: center
    justify-content: center
    transition: ease 300ms

  .navbar-nav
    padding: 0
    margin: 0
    list-style-type: none
    display: flex
    flex-direction: column
    align-items: center
</style>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

export default defineComponent({
  setup() {
    const state = reactive({
      display: false,
    });

    return {
      state,
    };
  },
});
</script>
