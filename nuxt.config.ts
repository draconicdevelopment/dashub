import { Configuration } from '@nuxt/types';

const config: Configuration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Mukta&display=swap',
      },
    ],
  },
  router: {
    extendRoutes(
      routes: { name: string; path: string; component: string }[],
      _: any,
    ) {
      routes.push({
        name: 'prefix_plugin',
        path: '/plugin/:prefix/:name',
        component: '~/pages/plugin/_prefix/_name.vue',
      });
      routes.push({
        name: 'plugin',
        path: '/plugin/:name',
        component: '~/pages/plugin/_prefix/_name.vue',
      });
      routes.push({
        name: 'login',
        path: '/',
        component: '~/pages/index.vue',
      });
      routes.push({
        name: 'board',
        path: '/board',
        component: '~/pages/board.vue',
      });
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/core.ts', '@/plugins/firebase.ts', '@/plugins/state.ts'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    'nuxt-composition-api',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  typescript: {
    typeCheck: {
      eslint: true,
    },
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv'],

  serverMiddleware: ['~/api/index.ts'],

  pwa: {
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      dev: false,
      swURL: '/firebase-auth-sw.js',
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extend(config) {
      config.node = { fs: 'empty' };
    },
  },
};

export default config;
