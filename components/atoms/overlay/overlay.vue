<template lang="pug">
  div.w-screen.h-screen.flex.justify-center.items-center
    transition(name='fade')
      .overlay.z-40.w-full.h-full.bg-dash-primary.fixed(v-if='props.overlay' @click="props.overlay = false")
    transition(name='form')
      .form.z-50(v-if='props.overlay')

</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api';
export default defineComponent({
  props: {
    overlay: Boolean,
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style lang="sass">
.overlay
  transition: opacity 300ms ease
  background: green
  opacity: 0.5

.form
  background-color: red
  width: 400px
  height: 450px;
  opacity: 1
  transition: opacity 300ms ease

.fade-enter, .fade-leave-to, .form-enter, .form-leave-to
  opacity: 0
</style>
