<template>
  <q-page>
    <!-- <div class="col-lg-2" v-for="(pic, index) in assets" :key="index">
      <img :src="getImage(pic)" v-bind:alt="pic" />
    </div> -->

    <img v-for="(pic, index) in assets" :key="index" :src="getImgUrl(pic)" />
    <!-- <div class="col-lg-2" v-for="(path, index) in paths()" :key="index">
      <img :src="require(path)" />
    </div> -->

    <!-- {{ paths }}
    <div v-for="(path, index) in paths()" :key="index">{{ path }}</div>
    <img v-for="(path, index) in paths()" :key="index" :src="path" /> -->
    <img src="../assets/photos/full_size_photo_optimized2.jpg" />
    <!-- {{ paths() }} -->
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
import VueMasonryGallery from 'vue-masonry-gallery';

const assets = [
  'photos/full_size_photo_optimized1.jpg',
  'photos/full_size_photo_optimized2.jpg',
];

export default defineComponent({
  name: 'GalleryPage',
  components: {},
  setup() {
    return {
      paths() {
        let list = [];
        for (let i = 0; i < assets.length; i++) {
          list.push(`../assets/photos/${assets[i]}.jpg`);
        }
        return list;
      },

      assets,
    };
  },
  computed: {
    getImgUrl(pic: string) {
      let imgSrc = '';
      try {
        imgSrc = require('../assets/photos/' + pic + '.jpg');
      } catch (error) {
        console.error(`Image '../assets/photos/${pic}.jpg' not found!`);
      }
      return imgSrc;
    },

    getImage(filename: string) {
      let imgSrc = '';
      try {
        imgSrc = require(`../assets/photos/${filename}.jpg`);
      } catch (error) {
        console.error(`Image '../assets/photos/${filename}.jpg' not found!`);
      }
      return imgSrc;
    },
  },
});
</script>
