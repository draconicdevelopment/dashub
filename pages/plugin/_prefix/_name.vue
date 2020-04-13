<template>
  <div>
    <iframe
      style="margin-left: 200px"
      width="80%"
      height="500px"
      frameborder="0"
      :srcdoc="html"
    ></iframe>
  </div>
</template>

<script lang="ts">
import fs from 'fs';
import { defineComponent, ref } from '@vue/composition-api';
import { Context } from '@nuxt/types';

export default defineComponent({
  validate(ctx: Context): boolean {
    const params = ctx.route.params;

    if (params?.name) {
      return !!fs.statSync(`dash_plugins/${params.prefix}/${params.name}`);
    } else {
      return !!fs.statSync(`dash_plugins/unclassified/${params.prefix}`);
    }
  },
  setup(_, ctx) {
    const params = ctx.root.$route.params;
    // eslint-disable-next-line prefer-const
    let html = ref('');

    if (process.server) {
      const path =
        'dash_plugins/' +
        (params?.name
          ? `${params.prefix}/${params.name}`
          : `unclassified/${params.prefix}`) +
        '/main.html';

      html.value = fs.readFileSync(path, 'utf8');
    }

    return {
      html,
    };
  },
});
</script>

<style lang="sass">
iframe body
  margin: 0
  padding: 0
</style>
