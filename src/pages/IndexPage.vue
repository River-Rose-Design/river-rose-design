<template>
  <q-page id="index-page">
    <vue-easy-lightbox
      :visible="lightboxVisibleRef"
      :imgs="lightboxImgsRef"
      :index="lightboxIndexRef"
      @hide="onLightboxHide"
    ></vue-easy-lightbox>

    <div class="row justify-center bg-white q-pa-md q-mt-xl card-shadow">
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
            to communicate across the myriad of human neurotypes.
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
      class="bg-white q-mt-xl q-pa-md card-shadow"
      style="display: flex; justify-content: center"
    >
      <div style="width: 1200px">
        <h6 class="text-uppercase q-mt-none q-mb-lg text-center">
          Staunton Music Festival
        </h6>
        <q-scroll-area style="height: 360px">
          <div class="row no-wrap q-gutter-sm">
            <img
              v-for="(asset, idx) in getAssetsOfTag(
                'gd',
                'staunton',
                $q.screen.width
              )"
              :key="idx"
              :src="asset.srcThumb"
              style="height: 360px"
              @click="
                onLightboxShow(
                  getAssetsOfTag('gd', 'staunton', $q.screen.width),
                  idx
                )
              "
            />
          </div>
        </q-scroll-area>
      </div>
    </div>

    <div
      class="bg-white q-my-xl q-pa-md card-shadow"
      style="display: flex; justify-content: center"
    >
      <div style="width: 1200px">
        <h6 class="text-uppercase q-mt-none q-mb-lg text-center">
          Costanoa Resort
        </h6>
        <q-scroll-area style="height: 360px">
          <div class="row no-wrap q-gutter-sm">
            <img
              v-for="(asset, idx) in getAssetsOfTag(
                'gd',
                'costanoa',
                $q.screen.width
              )"
              :key="idx"
              :src="asset.srcThumb"
              style="height: 360px"
              @click="
                onLightboxShow(
                  getAssetsOfTag('gd', 'costanoa', $q.screen.width),
                  idx
                )
              "
            />
          </div>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
#index-page {
  background-color: $primary;
  padding-top: 0.02px; // TODO: Why is this necessary to get pink background above hero?
  padding-bottom: 0.02px; // TODO: Why is this necessary to get pink background above hero?
}
#portrait {
  width: 240px;
}
.card-shadow {
  box-shadow: 0px -5px 7px 0 rgba(0, 0, 0, 0.1),
    0px 5px 7px 0 rgba(0, 0, 0, 0.1);
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import { getAssetsOfTag } from '../helpers';

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
      getAssetsOfTag,
    };
  },
});
</script>
