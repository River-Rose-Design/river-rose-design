<template>
  <q-page>
    <vue-easy-lightbox
      :visible="lightboxVisibleRef"
      :imgs="lightboxImgsRef"
      :index="lightboxIndexRef"
      @hide="onLightboxHide"
    ></vue-easy-lightbox>

    <div class="row justify-center shadow-5 bg-white q-pa-md q-mt-xl">
      <div class="row justify-center q-gutter-md" style="max-width: 1200px">
        <img
          src="../assets/brand/self_portrait.svg"
          id="portrait"
          class="col-3-sm"
        />
        <div class="col-sm">
          <h4>Hi, I’m Quinn.</h4>
          <p>
            I‘m a neurodivergent science and data nerd who uses art and design
            to communicate across the myriad of human neurotypes. One two three
            o'clock four o'clock rock. Five six seven o'clock eight o'clock
            rock.
          </p>
          <p>
            I delight in visually rendering the abstract and making the
            conceptual concrete.
          </p>
          <p>I thrive on collaboration and human connection.</p>
        </div>
      </div>
    </div>

    <div
      class="shadow-5 bg-white q-mt-xl q-pa-md"
      style="display: flex; justify-content: center"
    >
      <div style="width: 1200px">
        <h6 class="text-uppercase q-mt-none q-mb-lg text-center">
          Staunton Music Festival
        </h6>
        <q-scroll-area style="height: 360px">
          <div class="row no-wrap q-gutter-sm">
            <img
              v-for="(asset, idx) in getAssetsOfType(stauntonAssets)"
              :key="idx"
              :src="asset.srcThumb"
              style="height: 360px"
              @click="onLightboxShow(getAssetsOfType(stauntonAssets), idx)"
            />
          </div>
        </q-scroll-area>
      </div>
    </div>

    <div
      class="shadow-5 bg-white q-mt-xl q-pa-md"
      style="display: flex; justify-content: center"
    >
      <div style="width: 1200px">
        <h6 class="text-uppercase q-mt-none q-mb-lg text-center">
          Micro Machines X-Force
        </h6>
        <q-scroll-area style="height: 360px">
          <div class="row no-wrap q-gutter-sm">
            <img
              v-for="(asset, idx) in microMachinesAssets"
              :key="idx"
              :src="asset.src"
              @click="onLightboxShow(microMachinesAssets, idx)"
            />
          </div>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.q-page-container {
  background-color: $primary;
}
#portrait {
  width: 240px;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

const stauntonAssets = [
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/staunton_fall_11x17_fs.jpg',
    srcMedium: '/src/assets/graphic-design/branding/staunton_fall_11x17_fs.jpg',
    srcFullSize:
      '/src/assets/graphic-design/branding/staunton_fall_11x17_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/staunton_fall_11x17_fs.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/branding/staunton_summer_11x17_fs.jpg',
    srcMedium:
      '/src/assets/graphic-design/branding/staunton_summer_11x17_fs.jpg',
    srcFullSize:
      '/src/assets/graphic-design/branding/staunton_summer_11x17_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/staunton_summer_11x17_fs.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/staunton_tickets_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/staunton_tickets_thumb.jpg',
    srcFullSize: '/src/assets/graphic-design/branding/staunton_tickets_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/staunton_tickets_fs.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/staunton_tshirt_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/staunton_tshirt_thumb.jpg',
    srcFullSize: '/src/assets/graphic-design/branding/staunton_tshirt_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/staunton_tshirt_xl.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/branding/staunton_roadBanner_thumb.jpg',
    srcMedium:
      '/src/assets/graphic-design/branding/staunton_roadBanner_thumb.jpg',
    srcFullSize:
      '/src/assets/graphic-design/branding/staunton_road_banner_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/staunton_road_banner_fs.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/staunton_wine_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/staunton_wine_thumb.jpg',
    srcFullSize: '/src/assets/graphic-design/branding/staunton_wine_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/staunton_wine_fs.jpg',
  },
];

// const stauntonAssets = [
//   {
//     title: '',
//     src: 'https://placekitten.com/220/350',
//   },
//   {
//     title: '',
//     src: 'https://placekitten.com/240/350',
//   },
//   {
//     title: '',
//     src: 'https://placekitten.com/350/350',
//   },
//   {
//     title: '',
//     src: 'https://placekitten.com/350/350',
//   },
// ];

const microMachinesAssets = [
  {
    title: '',
    src: 'https://placekitten.com/220/350',
  },
  {
    title: '',
    src: 'https://placekitten.com/240/350',
  },
  {
    title: '',
    src: 'https://placekitten.com/350/350',
  },
  {
    title: '',
    src: 'https://placekitten.com/350/350',
  },
];

export default defineComponent({
  name: 'IndexPage',
  components: {
    VueEasyLightbox,
  },
  setup() {
    const lightboxVisibleRef = ref(false);
    const lightboxIndexRef = ref(0); // default 0
    const lightboxImgsRef: Array<string> = ref([]);

    const onLightboxShow = (assets, num: number) => {
      lightboxImgsRef.value = assets;
      lightboxIndexRef.value = num; // index of imgList
      lightboxVisibleRef.value = true;
    };
    const onLightboxHide = () => (lightboxVisibleRef.value = false);

    return {
      lightboxVisibleRef,
      lightboxIndexRef,
      lightboxImgsRef,
      onLightboxShow,
      onLightboxHide,
      stauntonAssets,
      microMachinesAssets,
    };
  },
  methods: {
    getAssetsOfType(assetType) {
      let assets = [];
      for (let i = 0; i < assetType.length; i++) {
        // For SVG images, use it for all sizes including lightbox
        if (assetType[i].srcSVG) {
          assets.push({
            ...assetType[i],
            srcThumb: assetType[i].srcSVG,
            srcMedium: assetType[i].srcSVG,
            srcFullSize: assetType[i].srcSVG,
            srcXL: assetType[i].srcSVG,
            src: assetType[i].srcSVG,
          });
        } else {
          // For normal images, just generate Lightbox source based on screen size
          // Default to XL, for screen sizes greater than 1792px
          let lightBoxImageSrc = assetType[i].srcXL;
          if (this.$q.screen.width <= 896) {
            // Medium, for half our laptop screen (896px) or less
            lightBoxImageSrc = assetType[i].srcMedium;
          } else if (this.$q.screen.width <= 1792) {
            // Full size, for our laptop screen (1792px) or less
            lightBoxImageSrc = assetType[i].srcFullSize;
          }
          assets.push({ ...assetType[i], src: lightBoxImageSrc });
        }
      }
      return assets;
    },
  },
});
</script>
