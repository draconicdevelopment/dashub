<template>
  <div>
    <transition name="fade">
      <div v-if="state.display" class="blur"></div>
    </transition>
    <div class="navbar">
      <div class="logo-huge">
        <img src="../static/img/logo-huge.svg" width="404" height="72" />
      </div>
      <div>
        <div class="user">
          <span class="user-name">Harvy</span>
          <div class="user-avatar-wrap">
            <div class="user-avatar"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="drawer"
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
      <ul class="drawer-nav">
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

.navbar
  margin: 60px 64px 64px 192px
  display: flex
  justify-content: space-between

  .user
    display: flex
    align-items: center
    justify-content: center

    .user-name
      text-align: center

.drawer
  height: calc(100% - 64px)
  width: 128px
  top: 32px
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

  .drawer-nav
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
