<template>
  <q-page id="gallery-page">
    <div>
      <vue-easy-lightbox
        :visible="lightboxVisibleRef"
        :imgs="lightboxImgsRef"
        :index="lightboxIndexRef"
        @hide="onLightboxHide"
      ></vue-easy-lightbox>
    </div>

    <q-tabs inline-label class="text-black">
      <q-btn-dropdown
        class="nav-dropdown-gd"
        split
        flat
        label="Graphic Design"
        @click="$router.push({ name: 'graphic-design' })"
      >
        <q-list class="nav-dropdown-gd">
          <q-route-tab :to="{ name: 'branding' }" label="Branding" />
          <q-route-tab :to="{ name: 'editorial' }" label="Editorial" />
          <q-route-tab :to="{ name: 'promotional' }" label="Promotional" />
        </q-list>
      </q-btn-dropdown>
      <q-route-tab :to="{ name: 'photography' }" label="Photography" />
      <q-route-tab :to="{ name: 'fine-art' }" label="Fine Art" />
    </q-tabs>

    <div id="grid">
      <q-img
        v-for="(asset, idx) in assets"
        :key="idx"
        :src="asset.srcThumb"
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
#gallery-page {
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

.toolbar-btn__rotate {
  display: none;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import VueEasyLightbox from 'vue-easy-lightbox';

const brandingAssets = [
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
      '/src/assets/graphic-design/branding/staunton_roadBanner_thumb.jpg',
    srcMedium:
      '/src/assets/graphic-design/branding/staunton_roadBanner_thumb.jpg',
    srcFullSize:
      '/src/assets/graphic-design/branding/staunton_road_banner_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/staunton_road_banner_fs.jpg',
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
    srcThumb: '/src/assets/graphic-design/branding/staunton_wine_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/staunton_wine_thumb.jpg',
    srcFullSize: '/src/assets/graphic-design/branding/staunton_wine_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/staunton_wine_fs.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/branding/costanoa_cosmetics_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/costanoa_cosmetics_m.jpg',
    srcFullSize:
      '/src/assets/graphic-design/branding/costanoa_cosmetics_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/costanoa_cosmetics_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/costanoa_tea_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/costanoa_tea_m.jpg',
    srcFullSize: '/src/assets/graphic-design/branding/costanoa_tea_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/costanoa_tea_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/CS15_mask_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/CS15_mask_m.jpg',
    srcFullSize: '/src/assets/graphic-design/branding/CS15_mask_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/CS15_mask_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/CS15_poster_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/CS15_poster_m.jpg',
    srcFullSize: '/src/assets/graphic-design/branding/CS15_poster_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/CS15_poster_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/CS15_program_02_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/CS15_program_02_m.jpg',
    srcFullSize: '/src/assets/graphic-design/branding/CS15_program_02_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/CS15_program_02_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/CS15_waterBottle_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/CS15_waterBottle_m.jpg',
    srcFullSize: '/src/assets/graphic-design/branding/CS15_waterBottle_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/CS15_waterBottle_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/CS15_website_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/branding/CS15_website_m.jpg',
    srcFullSize: '/src/assets/graphic-design/branding/CS15_website_fs.jpg',
    srcXL: '/src/assets/graphic-design/branding/CS15_website_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/cjllogo.png',
    srcMedium: '/src/assets/graphic-design/branding/cjllogo.png',
    srcFullSize: '/src/assets/graphic-design/branding/cjllogo.png',
    srcXL: '/src/assets/graphic-design/branding/cjllogo.png',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/LAP_business_card_front.png',
    srcBack: '/src/assets/graphic-design/branding/LAP_business_card_back.png',
    srcMedium:
      '/src/assets/graphic-design/branding/LAP_business_card_front.png',
    srcFullSize:
      '/src/assets/graphic-design/branding/LAP_business_card_front.png',
    srcXL: '/src/assets/graphic-design/branding/LAP_business_card_front.png',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/branding/magical_seams_logo_thumb.png',
    srcBack:
      '/src/assets/graphic-design/branding/magical_seams_logo_dark_thumb.png',
    srcMedium:
      '/src/assets/graphic-design/branding/magical_seams_logo_thumb.png',
    srcFullSize:
      '/src/assets/graphic-design/branding/magical_seams_logo_thumb.png',
    srcXL: '/src/assets/graphic-design/branding/magical_seams_logo_thumb.png',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/branding/ruth_logo_standalone.png',
    srcBack:
      '/src/assets/graphic-design/branding/ruth_logo_standalone_fordark.png',
    srcMedium: '/src/assets/graphic-design/branding/ruth_logo_standalone.png',
    srcFullSize: '/src/assets/graphic-design/branding/ruth_logo_standalone.png',
    srcXL: '/src/assets/graphic-design/branding/ruth_logo_standalone.png',
  },
];

const editorialAssets = [
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/editorial/anActOfCommunicacion_spread_thumb.jpg',
    srcMedium:
      '/src/assets/graphic-design/editorial/anActOfCommunicacion_spread_m.jpg',
    srcFullSize:
      '/src/assets/graphic-design/editorial/anActOfCommunicacion_spread_fs.jpg',
    srcXL:
      '/src/assets/graphic-design/editorial/anActOfCommunicacion_spread_xl.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/editorial/bothAlarmAndHope_spread_thumb.jpg',
    srcMedium:
      '/src/assets/graphic-design/editorial/bothAlarmAndHope_spread_m.jpg',
    srcFullSize:
      '/src/assets/graphic-design/editorial/bothAlarmAndHope_spread_fs.jpg',
    srcXL:
      '/src/assets/graphic-design/editorial/bothAlarmAndHope_spread_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/editorial/imagine.jpg',
    srcMedium: '/src/assets/graphic-design/editorial/imagine.jpg',
    srcFullSize: '/src/assets/graphic-design/editorial/imagine.jpg',
    srcXL: '/src/assets/graphic-design/editorial/imagine.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/editorial/why_go_renewable.jpg',
    srcMedium: '/src/assets/graphic-design/editorial/why_go_renewable.jpg',
    srcFullSize: '/src/assets/graphic-design/editorial/why_go_renewable.jpg',
    srcXL: '/src/assets/graphic-design/editorial/why_go_renewable.jpg',
  },
];

const promotionalAssets = [
  {
    title: 'Art at Lane',
    srcThumb:
      '/src/assets/graphic-design/promotional/artAtLane_Flyers_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/promotional/artAtLane_Flyers_m.jpg',
    srcFullSize:
      '/src/assets/graphic-design/promotional/artAtLane_Flyers_fs.jpg',
    srcXL: '/src/assets/graphic-design/promotional/artAtLane_Flyers_xl.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/promotional/artAtLane_insta_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/promotional/artAtLane_insta_m.jpg',
    srcFullSize:
      '/src/assets/graphic-design/promotional/artAtLane_insta_fs.jpg',
    srcXL: '/src/assets/graphic-design/promotional/artAtLane_insta_xl.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/promotional/artAtLane2_insta_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/promotional/artAtLane2_insta_m.jpg',
    srcFullSize:
      '/src/assets/graphic-design/promotional/artAtLane2_insta_fs.jpg',
    srcXL: '/src/assets/graphic-design/promotional/artAtLane2_insta_xl.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/promotional/kenKwapis_flyer_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/promotional/kenKwapis_flyer_m.jpg',
    srcFullSize:
      '/src/assets/graphic-design/promotional/kenKwapis_flyer_fs.jpg',
    srcXL: '/src/assets/graphic-design/promotional/kenKwapis_flyer_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/promotional/mirage_cover_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/promotional/mirage_cover_m.jpg',
    srcFullSize: '/src/assets/graphic-design/promotional/mirage_cover_fs.jpg',
    srcXL: '/src/assets/graphic-design/promotional/mirage_cover_xl.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/promotional/theBleed_coverPlus_thumb.jpg',
    srcMedium:
      '/src/assets/graphic-design/promotional/theBleed_coverPlus_m.jpg',
    srcFullSize:
      '/src/assets/graphic-design/promotional/theBleed_coverPlus_fs.jpg',
    srcXL: '/src/assets/graphic-design/promotional/theBleed_coverPlus_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/promotional/theWorks_insta_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/promotional/theWorks_insta_m.jpg',
    srcFullSize: '/src/assets/graphic-design/promotional/theWorks_insta_fs.jpg',
    srcXL: '/src/assets/graphic-design/promotional/theWorks_insta_xl.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/promotional/theWorks_poster_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/promotional/theWorks_poster_m.jpg',
    srcFullSize:
      '/src/assets/graphic-design/promotional/theWorks_poster_fs.jpg',
    srcXL: '/src/assets/graphic-design/promotional/theWorks_poster_xl.jpg',
  },
];

const photographyAssets = [
  {
    title: 'Some kids',
    src: '/src/assets/photography/full_size_photo_optimized1.jpg',
  },
  {
    title: 'Flower',
    src: '/src/assets/photography/full_size_photo_optimized2.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized3.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized4.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized5.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized6.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized7.jpg',
  },
  {
    title: 'Hummingbird',
    src: '/src/assets/photography/full_size_photo_optimized8.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized9.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized10.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized11.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized12.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized13.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized14.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized15.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized16.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized17.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized18.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized19.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized20.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized21.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized22.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized23.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized24.jpg',
  },
  {
    title: '',
    src: '/src/assets/photography/full_size_photo_optimized25.jpg',
  },
];

const fineArtAssets = [
  {
    title: 'Boat',
    src: '/src/assets/fine-art/boat_thumb.jpg',
  },
  {
    title: 'Daniel',
    src: '/src/assets/fine-art/daniel_thumb.jpg',
  },
  {
    title: '',
    src: '/src/assets/fine-art/lily_rosemary_jack_of_hearts_thumb.jpg',
  },
  {
    title: '',
    src: '/src/assets/fine-art/oregon_boat_thumb.jpg',
  },
  {
    title: '',
    src: '/src/assets/fine-art/peacock_sparrow_thumb.jpg',
  },
  {
    title: '',
    src: '/src/assets/fine-art/sunset_squirrel_thumb.jpg',
  },
  {
    title: '',
    src: '/src/assets/fine-art/the_night_train_thumb.jpg',
  },
  {
    title: '',
    src: '/src/assets/fine-art/tithonia_thumb.jpg',
  },
  {
    title: '',
    src: '/src/assets/fine-art/theWave.jpg',
  },
  {
    title: '',
    src: '/src/assets/fine-art/vector_self_portrait.png',
  },
  {
    title: '',
    src: '/src/assets/fine-art/wibbeldywobbldy_thumb.jpg',
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

    return {
      lightboxVisibleRef,
      lightboxIndexRef,
      lightboxImgsRef,
    };
  },
  methods: {
    hoverImg(id: number) {
      document.querySelector(`#caption-${id}`).style.visibility = 'visible';
    },
    unhoverImg(id: number) {
      document.querySelector(`#caption-${id}`).style.visibility = 'hidden';
    },
    onLightboxShow(num: number) {
      this.lightboxImgsRef = this.assets;
      this.lightboxIndexRef = num; // index of imgList
      this.lightboxVisibleRef = true;
    },
    onLightboxHide() {
      this.lightboxVisibleRef = false;
    },
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
  computed: {
    assets() {
      const route = useRoute();
      switch (route.name) {
        case 'gallery':
          return [].concat(
            this.getAssetsOfType(brandingAssets),
            this.getAssetsOfType(editorialAssets),
            this.getAssetsOfType(promotionalAssets),
            photographyAssets,
            fineArtAssets
          );
        case 'graphic-design':
          return [].concat(
            this.getAssetsOfType(brandingAssets),
            this.getAssetsOfType(editorialAssets),
            this.getAssetsOfType(promotionalAssets)
          );
        case 'branding':
          return this.getAssetsOfType(brandingAssets);
        case 'editorial':
          return this.getAssetsOfType(editorialAssets);
        case 'promotional':
          return this.getAssetsOfType(promotionalAssets);
        case 'photography':
          return photographyAssets;
        case 'fine-art':
          return fineArtAssets;
        default:
          return [];
      }
    },
  },
});
</script>
