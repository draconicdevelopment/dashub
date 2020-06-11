import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { provideFirebase } from './firebase';
import { provideState, useState } from './state';
Vue.use(VueCompositionApi);

// @ts-ignore
export default (context) => {
  context.app.setup = () => {
    provideFirebase();
    provideState();
    const state = useState();

    if (process.server) {
      const { res, beforeNuxtRender } = context;
      const userData = res.locals.user;

      console.log(userData);

      if (userData) {
        state.user = {
          ...userData,
          loggedIn: true,
        };
      }

      // @ts-ignore
      beforeNuxtRender(({ nuxtState }) => {
        nuxtState.serverState = state;
      });
    }

    if (process.client) {
      const { nuxtState } = context;

      if (nuxtState.serverState.user) {
        state.user = {
          ...nuxtState.serverState.user,
        };
      }
    }

    // (async () => {
    //   const user = await hydrateAuth();

    //   if (user) {
    //     state.user = {
    //       uid: user.uid,
    //       email: user.email,
    //       loggedIn: true,
    //     };
    //   } else {
    //     state.user.loggedIn = false;
    //   }
    // })();
  };
};
