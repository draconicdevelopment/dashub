<template lang="pug">
  .containerer.flex.w-auto.justify-center.items-center.flex-col
    .card
      .widget-name.flex.items-center.mx-5.font-bold
        span Admin widget
      dash-user-card(v-for='user in users' :displayName='user.displayName' :profilePicture='user.profilePicture' :isAdmin='user.admin')
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'nuxt-composition-api';
import { DocumentData } from '@firebase/firestore-types';
import { useFirestore } from '@/plugins/firebase';

import { dashUserCard } from '@/components/atoms/user-card';

export default defineComponent({
  layout: 'board',
  components: {
    dashUserCard,
  },
  setup() {
    const users: Ref<Array<DocumentData>> = ref([]);

    const db = useFirestore();

    db.collection('users')
      .orderBy('admin', 'desc')
      .onSnapshot((snapshot) => {
        users.value = [];

        snapshot.forEach((doc) => {
          users.value.push(doc.data());
        });
      });

    return {
      users,
    };
  },
});
</script>

<style lang="sass" scoped>
.containerer
  margin-left: 192px
  margin-right: 64px
  min-height: 50vh

  .card
    width: 100%
    border-radius: 25px
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25)
    background: linear-gradient(135deg, #8A2BE2 0%, #E22BD0 100%)

    .widget-name
      height: 64px
</style>
