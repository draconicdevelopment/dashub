import { provide, inject, reactive } from '@vue/composition-api';

export const AuthSymbol = 'Auth';

export const provideState = () => {
  const globalState = reactive({});
  provide(AuthSymbol, globalState);
};

export const useState = () => {
  const state = inject(AuthSymbol);
  if (state) return state;
};
