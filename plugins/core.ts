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
      const user = res.locals.user;

      if (user) {
        state.user = {
          uid: user.uid,
          email: user.email,
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
          uid: nuxtState.serverState.user.uid,
          email: nuxtState.serverState.user.email,
          loggedIn: nuxtState.serverState.user.loggedIn,
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
