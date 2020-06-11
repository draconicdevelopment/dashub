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
          <div>
            <span class="user-name">{{ authState.user.displayName }}</span>
            <span class="logout-btn">
              <button @click="logOut">Sign out</button>
            </span>
          </div>
          <div class="user-avatar-wrap">
            <img
              class="user-avatar"
              :src="authState.user.profilePicture"
              height="64"
              width="64"
            />
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
        <div class="logo-wrap">
          <img
            class="logo"
            src="../static/img/LightIcon.svg"
            width="106"
            height="106"
          />
        </div>
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
  backdrop-filter: blur(12px)
  z-index: 9

.fade-enter-active, .fade-leave-active
  transition: opacity .15s

.fade-enter, .fade-leave-to
  opacity: 0

.navbar
  margin: 60px 64px 64px 192px
  display: flex
  justify-content: space-between

  .user
    display: flex
    align-items: center
    justify-items: center
    justify-content: space-between
    max-width: 350px

    .user-name
      font-family: Mukta
      font-style: normal
      font-weight: normal
      font-size: 32px
      line-height: 36px
      margin-right: 28px
      color: #FFFFFF

    .logout-btn
      // background: linear-gradient(135deg, #8A2BE2 0%, #E22BD0 100%)
      padding: 0px 24%
      border-radius: 25px
      color: #FFFFFF
      border: 2px solid #E22BD0

      &:focus
        outline: none

    .user-avatar-wrap
      width: 72px
      height: 72px
      background: linear-gradient(135deg, #8A2BE2 0%, #E22BD0 100%)
      border-radius: 50%
      position: relative

      .user-avatar
        background-image: url('../static/img/user.jpg')
        border-radius: 50%
        background-position: center center
        background-size: cover
        position: absolute
        top: 50%
        left: 50%
        margin-top: -32px
        margin-left: -32px
        width: 64px
        height: 64px

.drawer
  height: calc(100% - 64px)
  width: 128px
  top: 32px
  background-color: var(--secondary-bg-color)
  position: fixed
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25)
  border-radius: 0px 25px 25px 0px
  transition: width ease .15s
  z-index: 10

  &:hover
    width: 360px

  .logo-container
    display: flex
    height: 128px
    background: linear-gradient(135deg, #8A2BE2 0%, #E22BD0 100%)
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25)
    border-radius: 0px 25px 25px 0px
    align-items: center
    justify-content: flex-end
    transition: ease 300ms

    .logo-wrap
      width: 128px
      height: 128px
      display: flex
      justify-content: center
      align-items: center

  .drawer-nav
    padding: 0
    margin: 0
    list-style-type: none
    display: flex
    flex-direction: column
    align-items: center
</style>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useFetch,
  useContext,
} from 'nuxt-composition-api';
import { useState } from '../plugins/state';
import { useFirebaseAuth } from '../plugins/firebase';

export default defineComponent({
  setup() {
    const state = reactive({
      display: false,
    });

    const context = useContext();
    const authState = useState();

    useFetch(() => {
      if (!authState.user.loggedIn) context.redirect('/');
    });

    async function logOut() {
      const auth = useFirebaseAuth();

      await auth.signOut();

      authState.user = {
        uid: '',
        email: '',
        loggedIn: false,
        admin: false,
      };

      context.redirect('/');
    }

    return {
      state,
      authState,
      logOut,
    };
  },
});
</script>
