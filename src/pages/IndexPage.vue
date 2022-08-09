<template>
  <q-page>
    <div class="row shadow-5 bg-white q-pa-md q-mt-xl q-gutter-md">
      <img
        src="https://placekitten.com/240/300"
        id="portrait"
        class="col-3-sm"
      />
      <div class="col-sm">
        <h4>Hi, I’m Quinn.</h4>
        <p>
          I‘m a neurodivergent science and data nerd who uses art and design to
          communicate across the myriad of human neurotypes.
        </p>
        <p>
          I delight in visually rendering the abstract and making the conceptual
          concrete.
        </p>
        <p>I thrive on collaboration and human connection.</p>
      </div>
    </div>

    <div class="shadow-5 bg-white q-mt-xl q-pa-md">
      <h6 class="text-uppercase q-mt-none q-mb-lg">Staunton Music Festival</h6>
      <q-scroll-area style="height: 360px">
        <div class="row no-wrap q-gutter-sm">
          <img src="https://placekitten.com/220/350" />
          <img src="https://placekitten.com/240/350" />
          <img src="https://placekitten.com/350/350" />
          <img src="https://placekitten.com/350/350" />
        </div>
      </q-scroll-area>
    </div>

    <div class="shadow-5 bg-white q-mt-xl q-mb-xl q-pa-md">
      <h6 class="text-uppercase q-mt-none q-mb-lg">Micro Machines X-Force</h6>
      <q-scroll-area style="height: 360px">
        <div class="row no-wrap q-gutter-sm">
          <img src="https://placekitten.com/220/350" />
          <img src="https://placekitten.com/240/350" />
          <img src="https://placekitten.com/350/350" />
          <img src="https://placekitten.com/350/350" />
        </div>
      </q-scroll-area>
    </div>
  </q-page>
</template>

<style lang="scss">
#portrait {
  width: 240px;
}
.project-container {
  max-width: 800px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {};
  },
});
</script>
