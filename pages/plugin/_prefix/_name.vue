<template>
  <client-only>
    <iframe
      style="margin-left: 200px"
      width="80%"
      height="500px"
      frameborder="0"
      src="../../../dash_plugins/dashub/graph/main.html"
    ></iframe>
  </client-only>
</template>

<style lang="sass"></style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Context } from '@nuxt/types';

export default defineComponent({
  validate(ctx: Context): boolean {
    const fs = require('fs');
    const params = ctx.route.params;

    // console.log(ctx.route.fullPath.split('/'));

    if (params?.prefix) {
      return fs.statSync(`dash_plugins/${params.prefix}/${params.name}`);
    } else {
      return fs.statSync(`dash_plugins/unclassified/${params.name}`);
    }
  },
  setup(_, ctx) {
    const params = ctx.root.$route.params;

    return {
      params,
    };
  },
});
</script>
