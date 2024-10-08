<template>
  <q-page id="about-page">
    <div class="row justify-center bg-white q-pa-md q-my-xl card-shadow">
      <div style="max-width: 1200px">
        <img
          src="../assets/brand/photo_portrait.jpeg"
          id="photo"
          style="float: left"
          class="q-mr-lg"
        />
        <p>
          Quinn Wilson is a graphic designer, science & data nerd, culinary
          mad-scientist and parent living in Eugene, Oregon. They use art and
          design to communicate across the myriad of human neurotypes.
        </p>

        <p>
          After a string of science teachers from primary school to college
          repeatedly told them to ‘stay in science’ because the field so deeply
          needed more artists and communicators, they got their first
          undergraduate degree from the University of Oregon in Environmental
          Science with a focus in both ecology and institutional energy use.
        </p>

        <p>
          After working for some time on research and data visualization in this
          field, they realized that staying in science was only part of the
          equation. They decided to go back to school for a degree in graphic
          design, to gain the skills necessary to be the artist and communicator
          their science teachers always saw.
        </p>

        <p>
          They love the process of transforming abstract concepts and data into
          visual representations that are instinctively clear to the human mind;
          a challenge that is present both in the iteratively-simplifying
          process of brand development and in the complex decisions involved in
          a data visualization.
        </p>

        <p>
          Quinn has always walked the line between artistic and analytical,
          programmer and designer, scientist and communicator, and enjoys
          solving problems that require both of these frequently-contrasted
          classes of thought.
        </p>

        <p>
          They are currently especially interested in how AI generated and
          assisted art and design are going to affect these respective fields,
          both for better and worse; how one can healthfully and joyfully adapt
          basic culinary practices and staple recipes to the myriad of special
          diets their friends require; and the timeless question of how it is
          possible for a room to simultaneously be “all cleaned up” and somehow
          still always have one lego somewhere underfoot…waiting.
        </p>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
#about-page {
  background-color: $primary;
  padding-top: 0.02px; // TODO: Why is this necessary to get pink background above hero?
  padding-bottom: 0.02px; // TODO: Why is this necessary to get pink background above hero?
}

#photo {
  width: 100%;
  padding-bottom: 24px;
  @media (min-width: $breakpoint-sm-min) {
    width: 300px;
    padding-bottom: 10px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  setup() {
    return {};
  },
});
</script>
