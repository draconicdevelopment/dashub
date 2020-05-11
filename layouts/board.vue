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
          <span class="user-name">{{ state.displayName }}</span>
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
        <li class="nav-item">
          <button @click="logOut">Sign out</button>
        </li>
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

    .user-avatar-wrap
      width: 72px
      height: 72px
      background: linear-gradient(135deg, #8A2BE2 0%, #E22BD0 100%)
      border-radius: 50%
      position: relative

      .user-avatar
        background-image: url('../static/img/user.png')
        border-radius: 50%
        background-position: center center
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
import { useFirebaseAuth, useFirestore } from '../plugins/firebase';

export default defineComponent({
  setup() {
    const state = reactive({
      display: false,
      displayName: '',
    });

    const context = useContext();
    const authState = useState();

    useFetch(async () => {
      if (!authState.user.loggedIn) context.redirect('/');

      const db = useFirestore();
      const userData = await db
        .collection('users')
        .doc(authState.user.uid)
        .get();

      state.displayName = userData.data()?.displayName;
    });

    async function logOut() {
      const auth = useFirebaseAuth();

      await auth.signOut();

      authState.user = {
        uid: '',
        email: '',
        loggedIn: false,
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
