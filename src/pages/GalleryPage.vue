<template>
  <q-page id="gallery-page">
    <!-- Use page-wide lightbox for photography and fine art -->
    <div
      v-if="
        [
          'graphic-design',
          'branding',
          'editorial',
          'event',
          'gallery-tag',
        ].indexOf(routeName) == -1
      "
    >
      <vue-easy-lightbox
        :visible="lightboxVisibleRef"
        :imgs="lightboxImgsRef"
        :index="lightboxIndexRef"
        :loop="true"
        @hide="onLightboxHide"
      ></vue-easy-lightbox>
    </div>
    <!-- Use project lightboxes for GD -->
    <div v-else>
      <!-- <div v-for="(project, idx) in projects" :key="idx">
        <div>{{ project.name }} {{ project.assets.length }}</div>
        <div>{{ project.assets }}</div>
      </div> -->
      <vue-easy-lightbox
        v-for="(project, idx) in projects"
        :key="idx"
        :visible="anyGDLightBoxVisibleRef && GDlightboxVisible(project.name)"
        :imgs="lightboxImgsRef"
        :index="lightboxIndexRef"
        :loop="true"
        @hide="onGDLightboxHide()"
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

    <!-- TODO: Merge all the galleries once we have squares for the photos and have grouped FA and photos into projects -->
    <!-- TEMP: Gallery for GD while we group GD by projects and not fine art -->
    <div
      class="row q-col-gutter-sm q-px-sm q-mt-xs q-mb-md"
      v-if="
        [
          'graphic-design',
          'branding',
          'editorial',
          'event',
          'gallery-tag',
        ].indexOf(routeName) != -1
      "
    >
      <div
        v-for="(asset, idx) in assets"
        :key="idx"
        class="gallery-image col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
      >
        <q-img
          v-if="asset.showThumbnailInGallery"
          :src="asset.srcS"
          @mouseover="if (asset.title) hoverImg(idx);"
          @mouseleave="if (asset.title) unhoverImg(idx);"
          @click="onGDLightboxShow(asset)"
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

    <!-- TEMP: Gallery for Fine Art while we group GD by projects and not fine art -->
    <div
      class="row q-col-gutter-sm q-px-sm q-mt-xs q-mb-md"
      v-if="['fine-art', 'digital', 'analog'].indexOf(routeName) != -1"
    >
      <div
        v-for="(asset, idx) in assets"
        :key="idx"
        class="gallery-image col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"
      >
        <q-img
          v-if="asset.showThumbnailInGallery"
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

    <!-- TEMP: Gallery for Photography until we make square thumbnails -->
    <div
      id="photo-grid"
      v-if="
        [
          'photography',
          'abstract',
          'photo-fine-art',
          'nature',
          'portrait',
        ].indexOf(routeName) != -1
      "
    >
      <q-img
        v-for="(asset, idx) in assets"
        :key="idx"
        :src="asset.srcS"
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

// Masonry with Columns
// https://codepen.io/chriscoyier/pen/NeRNBO?editors=1100
// https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/
#photo-grid {
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
import { getAssetsOfCategory, getAssetsOfTag } from '../helpers';

export default defineComponent({
  name: 'GalleryPage',
  components: {
    VueEasyLightbox,
  },
  setup() {
    // For single lightbox in photography and fine art
    const lightboxVisibleRef = ref(false);
    const lightboxIndexRef = ref(0); // default 0
    const lightboxImgsRef: Array<string> = ref([]);

    // For multiple lightboxes in GD
    const anyGDLightBoxVisibleRef = ref(false); // Necessary to close lightboxes
    const whichGDLightBoxVisibleRef = '';

    const tag = ref('');

    return {
      lightboxVisibleRef,
      lightboxIndexRef,
      lightboxImgsRef,
      anyGDLightBoxVisibleRef,
      whichGDLightBoxVisibleRef,
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
      if (document.querySelector(`#caption-${id}`)) {
        document.querySelector(`#caption-${id}`).style.visibility = 'visible';
      }
    },
    unhoverImg(id: number) {
      if (document.querySelector(`#caption-${id}`)) {
        document.querySelector(`#caption-${id}`).style.visibility = 'hidden';
      }
    },
    onLightboxShow(num: number) {
      this.lightboxImgsRef = this.assets;
      this.lightboxIndexRef = num; // index of imgList
      this.lightboxVisibleRef = true;
    },
    onLightboxHide() {
      this.lightboxVisibleRef = false;
    },

    onGDLightboxShow(asset) {
      const projectName = asset.projectMembership || asset.fileName;
      this.anyGDLightBoxVisibleRef = true;
      const project = this.projects.filter(
        (project) => project.name == projectName
      )[0];
      this.lightboxImgsRef = project.assets;
      this.lightboxIndexRef = project.assets.indexOf(asset);
      this.whichGDLightBoxVisibleRef = projectName;
    },
    onGDLightboxHide() {
      this.anyGDLightBoxVisibleRef = false;
      this.whichGDLightBoxVisibleRef = '';
    },
    GDlightboxVisible(name: string) {
      return name == this.whichGDLightBoxVisibleRef;
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
    projects() {
      let projectGroupings: Array<{ name: string; assets: Array<any> }> = [];
      for (let i = 0; i < this.assets.length; i++) {
        const asset = this.assets[i];
        if (asset.projectMembership) {
          const existingGroupings = projectGroupings.filter(
            (grouping) => grouping.name == asset.projectMembership
          );
          if (existingGroupings.length) {
            existingGroupings[0].assets.push(asset);
          } else {
            projectGroupings.push({
              name: asset.projectMembership,
              assets: [asset],
            });
          }
        } else {
          projectGroupings.push({
            name: asset.fileName,
            assets: [asset],
          });
        }
      }
      return projectGroupings;
    },
    routeName() {
      return useRoute().name;
    },
  },
});
</script>
