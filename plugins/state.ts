import { provide, inject, reactive } from 'nuxt-composition-api';
import { StateType } from './types';

const StateSymbol = Symbol('state');

export const provideState = () => {
  const globalState: StateType = reactive({
    user: {
      uid: '',
      email: '',
      loggedIn: false,
    },
  });
  provide(StateSymbol, globalState);
};

export const useState = (): StateType => {
  const state = inject<StateType>(StateSymbol);
  if (!state) throw new Error('No state provided');
  return state;
};
