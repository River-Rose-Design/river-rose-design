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

    <q-tabs inline-label class="text-black">
      <q-btn-dropdown
        v-model="gdMenuVisible"
        persistent
        auto-close
        stretch
        flat
        label="Graphic Design"
        @mouseenter="gdMenuVisible = true"
        @click="$router.push({ name: 'graphic-design' })"
      >
        <q-list>
          <q-route-tab :to="{ name: 'branding' }" label="Branding" />
          <q-route-tab :to="{ name: 'editorial' }" label="Editorial" />
          <q-route-tab :to="{ name: 'promotional' }" label="Promotional" />
        </q-list>
      </q-btn-dropdown>
      <q-route-tab :to="{ name: 'photography' }" label="Photography" />
      <q-route-tab :to="{ name: 'fine-art' }" label="Fine Art" />
    </q-tabs>

    <!-- {{ $route.name }} -->
    <!-- {{ assets() }} -->
    <!-- <q-toggle v-model="gdMenuVisible" label="Menu state" /> -->

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
    title: '',
    srcThumb:
      '/src/assets/graphic-design/promotional/artAtLane_Flyers_thumb.jpg',
    srcMedium: '/src/assets/graphic-design/promotional/artAtLane_Flyers_m.jpg',
    srcFullSize:
      '/src/assets/graphic-design/promotional/artAtLane_Flyers_fs.jpg',
    srcXL: '/src/assets/graphic-design/promotional/artAtLane_Flyers_xl.jpg',
  },
  {
    title: '',
    srcThumb: '/src/assets/graphic-design/promotional/ginger_tea.jpg',
    srcMedium: '/src/assets/graphic-design/promotional/ginger_tea.jpg',
    srcFullSize: '/src/assets/graphic-design/promotional/ginger_tea.jpg',
    srcXL: '/src/assets/graphic-design/promotional/ginger_tea.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/promotional/kaelidescope_poster_thumb.jpg',
    srcMedium:
      '/src/assets/graphic-design/promotional/kaelidescope_poster_thumb.jpg',
    srcFullSize:
      '/src/assets/graphic-design/promotional/kaelidescope_poster_thumb.jpg',
    srcXL:
      '/src/assets/graphic-design/promotional/kaelidescope_poster_thumb.jpg',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/promotional/winterFormalPoster_thumb.png',
    srcMedium:
      '/src/assets/graphic-design/promotional/winterFormalPoster_thumb.png',
    srcFullSize:
      '/src/assets/graphic-design/promotional/winterFormalPoster_thumb.png',
    srcXL:
      '/src/assets/graphic-design/promotional/winterFormalPoster_thumb.png',
  },
  {
    title: '',
    srcThumb:
      '/src/assets/graphic-design/promotional/winterformalTicket_thumb.png',
    srcMedium:
      '/src/assets/graphic-design/promotional/winterformalTicket_thumb.png',
    srcFullSize:
      '/src/assets/graphic-design/promotional/winterformalTicket_thumb.png',
    srcXL:
      '/src/assets/graphic-design/promotional/winterformalTicket_thumb.png',
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
    let gdMenuVisible = ref(false);

    const lightboxVisibleRef = ref(false);
    const lightboxIndexRef = ref(0); // default 0
    const lightboxImgsRef: Array<string> = ref([]);

    // paths() {
    //   let list = [];
    //   for (let i = 0; i < assets.length; i++) {
    //     list.push(`../assets/photos/${assets[i]}.jpg`);
    //   }
    //   return list;
    // },

    return {
      gdMenuVisible,

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
      // lightboxImgsRef.value = [
      //   'src/assets/photos/full_size_photo_optimized1.jpg',
      //   'src/assets/photos/full_size_photo_optimized2.jpg',
      // ];
      this.lightboxImgsRef = this.assets;
      // or
      // imgsRef.value = [
      //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
      //   'http://via.placeholder.com/350x150'
      // ]
      this.lightboxIndexRef = num; // index of imgList
      this.lightboxVisibleRef = true;
    },
    onLightboxHide() {
      this.lightboxVisibleRef = false;
    },
    // getImageSrcSet(asset) {
    //   let imgSrcSet = '';
    //   if (asset.srcThumb) {
    //     imgSrcSet += `${asset.srcThumb} 400w, `;
    //   }
    //   if (asset.srcMedium) {
    //     imgSrcSet += `${asset.srcMedium} 800w `;
    //   }
    //   if (asset.src) {
    //     imgSrcSet += `${asset.src} 1200w, `;
    //   }
    //   return imgSrcSet;
    // },
    getBrandingAssets() {
      let assets = [];
      for (let i = 0; i < brandingAssets.length; i++) {
        let lightBoxImageSrc = brandingAssets[i].srcXL;
        if (this.$q.screen.lt.md) {
          lightBoxImageSrc = brandingAssets[i].srcMedium;
        } else if (this.$q.screen.lt.lg) {
          lightBoxImageSrc = brandingAssets[i].srcFullSize;
        }
        assets.push({ ...brandingAssets[i], src: lightBoxImageSrc });
      }
      return assets;
    },
    getEditorialAssets() {
      let assets = [];
      for (let i = 0; i < editorialAssets.length; i++) {
        let lightBoxImageSrc = editorialAssets[i].srcXL;
        if (this.$q.screen.lt.md) {
          lightBoxImageSrc = editorialAssets[i].srcMedium;
        } else if (this.$q.screen.lt.lg) {
          lightBoxImageSrc = editorialAssets[i].srcFullSize;
        }
        assets.push({ ...editorialAssets[i], src: lightBoxImageSrc });
      }
      return assets;
    },
    getPromotionalAssets() {
      let assets = [];
      for (let i = 0; i < promotionalAssets.length; i++) {
        let lightBoxImageSrc = promotionalAssets[i].srcXL;
        if (this.$q.screen.lt.md) {
          lightBoxImageSrc = promotionalAssets[i].srcMedium;
        } else if (this.$q.screen.lt.lg) {
          lightBoxImageSrc = promotionalAssets[i].srcFullSize;
        }
        assets.push({ ...promotionalAssets[i], src: lightBoxImageSrc });
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
            this.getBrandingAssets(),
            this.getEditorialAssets(),
            this.getPromotionalAssets(),
            photographyAssets,
            fineArtAssets
          );
        case 'graphic-design':
          return [].concat(
            this.getBrandingAssets(),
            this.getEditorialAssets(),
            this.getPromotionalAssets()
          );
        case 'branding':
          return this.getBrandingAssets();
        case 'editorial':
          return this.getEditorialAssets();
        case 'promotional':
          return this.getPromotionalAssets();
        case 'photography':
          return photographyAssets;
        case 'fine-art':
          return fineArtAssets;
        default:
          return [];
      }
    },
  },
  watch: {
    $route(to, from) {
      this.gdMenuVisible = false;
    },
  },
});
</script>
