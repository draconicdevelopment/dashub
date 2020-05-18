<template lang="pug">
  .user-card.w-full.flex.justify-between.items-center.border-t.p-3.bg-dash-secondary.font-semibold
    div.flex.items-center.ml-2
      img.profilePicture.rounded-full.mr-4(:src='props.profilePicture' color='white')
      span.text-white {{ props.displayName }}
    span(v-if='props.isAdmin') Admin
    span(v-else) User
    .actions.mr-2.flex
      img.action.mr-2(src='@/static/img/edit.svg' height='24px' width='24px')
      img.action(src='@/static/img/delete.svg' height='24px' width='24px')
</template>

<style lang="sass" scoped>
.user-card
  height: 64px

  &:first-child
    border-top-left-radius: 25px
    border-top-right-radius: 25px

  &:last-child
    border-bottom-left-radius: 25px
    border-bottom-right-radius: 25px

  .profilePicture
    width: 40px
    height: 40px

  .action
    cursor: pointer
    fill: white
</style>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api';

export default defineComponent({
  props: {
    displayName: String,
    profilePicture: String,
    isAdmin: Boolean,
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>
