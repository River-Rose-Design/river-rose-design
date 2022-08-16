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

.q-tab__indicator {
  width: 30px;
  margin: auto;
  bottom: 10px;
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
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import VueEasyLightbox from 'vue-easy-lightbox';
import {
  getAssetsOfCategory,
  getAssetsOfTag,
  getAssetsOfType,
} from '../helpers';

export default defineComponent({
  name: 'GalleryPage',
  components: {
    VueEasyLightbox,
  },
  setup() {
    const lightboxVisibleRef = ref(false);
    const lightboxIndexRef = ref(0); // default 0
    const lightboxImgsRef: Array<string> = ref([]);
    const tag = ref('');

    return {
      lightboxVisibleRef,
      lightboxIndexRef,
      lightboxImgsRef,
      tag,
      getAssetsOfCategory,
      getAssetsOfTag,
      getAssetsOfType,
    };
  },
  mounted() {
    this.tag = this.$route.params.tagName;
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
  },
  computed: {
    assets() {
      const route = useRoute();
      switch (route.name) {
        case 'gallery-tag':
          return this.getAssetsOfTag('gd', this.tag, this.$q.screen.width);
        case 'gallery':
          return [].concat(
            this.getAssetsOfType('gd', 'branding', this.$q.screen.width),
            this.getAssetsOfType('gd', 'editorial', this.$q.screen.width),
            this.getAssetsOfType('gd', 'promotional', this.$q.screen.width),
            this.getAssetsOfCategory('photo', this.$q.screen.width),
            this.getAssetsOfCategory('fine', this.$q.screen.width)
          );
        case 'graphic-design':
          return this.getAssetsOfCategory('gd', this.$q.screen.width);
        case 'branding':
          return this.getAssetsOfType('gd', 'branding', this.$q.screen.width);
        case 'editorial':
          return this.getAssetsOfType('gd', 'editorial', this.$q.screen.width);
        case 'promotional':
          return this.getAssetsOfType(
            'gd',
            'promotional',
            this.$q.screen.width
          );
        case 'photography':
          return this.getAssetsOfCategory('photo', this.$q.screen.width);
        case 'fine-art':
          return this.getAssetsOfCategory('fine', this.$q.screen.width);
        default:
          return [];
      }
    },
  },
});
</script>
