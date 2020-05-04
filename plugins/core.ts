import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import { provideFirebase } from './firebase';
import { provideState } from './state';
Vue.use(VueCompositionApi);

// @ts-ignore
export default ({ app }) => {
  app.setup = () => {
    provideFirebase();
    provideState();
  };
};
