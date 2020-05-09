import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { provideFirebase, hydrateAuth } from './firebase';
import { provideState, useState } from './state';
Vue.use(VueCompositionApi);

// @ts-ignore
export default ({ app }) => {
  app.setup = () => {
    provideFirebase();
    provideState();
    const state = useState();

    (async () => {
      const user = await hydrateAuth();

      state.user = {
        uid: user.uid,
        email: user.email,
      };
    })();
  };
};
