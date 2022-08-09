<template>
  <q-page>
    <div>
      <vue-easy-lightbox
        :visible="lightboxVisibleRef"
        :imgs="lightboxImgsRef"
        :index="lightboxIndexRef"
        @hide="onLightboxHide"
      ></vue-easy-lightbox>
    </div>

    <div id="grid">
      <q-img
        v-for="(asset, idx) in assets"
        :key="idx"
        :src="asset.src"
        @mouseover="if (asset.title) hoverImg(idx);"
        @mouseleave="if (asset.title) unhoverImg(idx);"
        @click="onLightboxShow(idx)"
      >
        <div
          v-if="asset.title"
          :id="'caption-' + idx.toString()"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          {{ asset.title }}
        </div>
      </q-img>
    </div>
  </q-page>
</template>

<style lang="scss">
.q-page-container {
  background-color: white;
}

// Masonry with Columns
// https://codepen.io/chriscoyier/pen/NeRNBO?editors=1100
// https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/
#grid {
  margin: 1rem;
  columns: 1 200px;
  column-gap: 1rem;

  @media (min-width: $breakpoint-sm-min) {
    columns: 2 200px;
  }
  @media (min-width: $breakpoint-md-min) {
    columns: 3 200px;
  }
  @media (min-width: $breakpoint-lg-min) {
    columns: 4 200px;
  }

  .q-img {
    margin: 0 1rem 1rem 0;
    display: inline-block;
    width: 100%;
  }
}
// #grid > img {
//   width: 200px;
// }
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

const assets = [
  {
    title: 'Some kids',
    src: 'src/assets/photos/full_size_photo_optimized1.jpg',
  },
  {
    title: 'Flower',
    src: 'src/assets/photos/full_size_photo_optimized2.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized3.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized4.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized5.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized6.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized7.jpg',
  },
  {
    title: 'Hummingbird',
    src: 'src/assets/photos/full_size_photo_optimized8.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized9.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized10.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized11.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized12.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized13.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized14.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized15.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized16.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized17.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized18.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized19.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized20.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized21.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized22.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized23.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized24.jpg',
  },
  {
    title: '',
    src: 'src/assets/photos/full_size_photo_optimized25.jpg',
  },
];

export default defineComponent({
  name: 'GalleryPage',
  components: {
    VueEasyLightbox,
  },
  setup() {
    const lightboxVisibleRef = ref(false);
    const lightboxIndexRef = ref(0); // default 0
    const lightboxImgsRef: Array<string> = ref([]);

    const onLightboxShow = (num: number) => {
      // lightboxImgsRef.value = [
      //   'src/assets/photos/full_size_photo_optimized1.jpg',
      //   'src/assets/photos/full_size_photo_optimized2.jpg',
      // ];
      lightboxImgsRef.value = assets;
      // or
      // imgsRef.value = [
      //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
      //   'http://via.placeholder.com/350x150'
      // ]
      lightboxIndexRef.value = num; // index of imgList
      lightboxVisibleRef.value = true;
    };
    const onLightboxHide = () => (lightboxVisibleRef.value = false);

    // paths() {
    //   let list = [];
    //   for (let i = 0; i < assets.length; i++) {
    //     list.push(`../assets/photos/${assets[i]}.jpg`);
    //   }
    //   return list;
    // },

    return {
      lightboxVisibleRef,
      lightboxIndexRef,
      lightboxImgsRef,
      onLightboxShow,
      onLightboxHide,

      assets,
    };
  },
  methods: {
    hoverImg(id: number) {
      document.querySelector(`#caption-${id}`).style.visibility = 'visible';
    },
    unhoverImg(id: number) {
      document.querySelector(`#caption-${id}`).style.visibility = 'hidden';
    },
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
