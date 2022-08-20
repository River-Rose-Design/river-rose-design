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

    <q-tabs inline-label class="text-black q-mt-md justify-center">
      <q-btn-dropdown
        class="nav-dropdown-gd"
        split
        flat
        @click="$router.push({ name: 'graphic-design' })"
      >
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <div class="text-center">
              Graphic<br v-if="$q.screen.lt.sm" />
              Design
            </div>
          </div>
        </template>
        <q-list class="nav-dropdown-gd">
          <q-route-tab :to="{ name: 'branding' }" label="Branding" />
          <q-route-tab :to="{ name: 'editorial' }" label="Editorial" />
          <q-route-tab :to="{ name: 'event' }" label="Event" />
        </q-list>
      </q-btn-dropdown>
      <q-btn-dropdown
        class="nav-dropdown-gd"
        split
        flat
        @click="$router.push({ name: 'photography' })"
      >
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <div v-if="$q.screen.lt.sm" class="text-center">Photos</div>
            <div v-else class="text-center">Photography</div>
          </div>
        </template>
        <q-list class="nav-dropdown-gd">
          <q-route-tab :to="{ name: 'abstract' }" label="Abstract" />
          <q-route-tab :to="{ name: 'photo-fine-art' }" label="Fine Art" />
          <q-route-tab :to="{ name: 'nature' }" label="Nature" />
          <q-route-tab :to="{ name: 'portrait' }" label="Portrait" />
        </q-list>
      </q-btn-dropdown>
      <q-btn-dropdown
        class="nav-dropdown-gd"
        split
        flat
        @click="$router.push({ name: 'fine-art' })"
      >
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <div class="text-center">
              Fine<br v-if="$q.screen.lt.sm" />
              Art
            </div>
          </div>
        </template>
        <q-list class="nav-dropdown-gd">
          <q-route-tab :to="{ name: 'digital' }" label="Digital" />
          <q-route-tab :to="{ name: 'analog' }" label="Analog" />
        </q-list>
      </q-btn-dropdown>
    </q-tabs>

    <div class="row q-col-gutter-sm q-px-sm q-mt-xs q-mb-md">
      <div
        v-for="(asset, idx) in assets"
        :key="idx"
        class="gallery-image col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
      >
        <q-img
          :src="asset.srcS"
          @mouseover="if (asset.title) hoverImg(idx);"
          @mouseleave="if (asset.title) unhoverImg(idx);"
          @click="onLightboxShow(idx)"
          class="gallery-image col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
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
    </div>
  </q-page>
</template>

<style lang="scss">
#gallery-page {
  background-color: white;
}

.q-tabs__content {
  justify-content: center;
}

.q-btn__content {
  line-height: 16px;
}

.q-tab__indicator {
  width: 2em;
  margin: auto;
  bottom: 10px;
  color: $accent;
}

.toolbar-btn__rotate {
  display: none;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import VueEasyLightbox from 'vue-easy-lightbox';
import { getAssetsOfCategory, getAssetsOfTag } from '../helpers';

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
        // GALLERY
        case 'gallery-tag':
          return this.getAssetsOfTag('gd', this.tag, this.$q.screen.width);
        // GRAPHIC DESIGN
        case 'graphic-design':
          return this.getAssetsOfCategory('gd', this.$q.screen.width);
        case 'branding':
          return this.getAssetsOfTag('gd', 'branding', this.$q.screen.width);
        case 'editorial':
          return this.getAssetsOfTag('gd', 'editorial', this.$q.screen.width);
        case 'event':
          return this.getAssetsOfTag('gd', 'event', this.$q.screen.width);
        // PHOTOGRAPHY
        case 'photography':
          return this.getAssetsOfCategory('photo', this.$q.screen.width);
        case 'abstract':
          return this.getAssetsOfTag('photo', 'abstract', this.$q.screen.width);
        case 'photo-fine-art':
          return this.getAssetsOfTag('photo', 'fineArt', this.$q.screen.width);
        case 'nature':
          return this.getAssetsOfTag('photo', 'nature', this.$q.screen.width);
        case 'portrait':
          return this.getAssetsOfTag('photo', 'portrait', this.$q.screen.width);
        // FINE ART
        case 'fine-art':
          return this.getAssetsOfCategory('fine', this.$q.screen.width);
        case 'digital':
          return this.getAssetsOfTag('fine', 'digital', this.$q.screen.width);
        case 'analog':
          return this.getAssetsOfTag('fine', 'analog', this.$q.screen.width);
        default:
          return [];
      }
    },
  },
});
</script>
