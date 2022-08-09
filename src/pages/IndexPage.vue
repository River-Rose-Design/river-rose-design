<template>
  <q-page>
    <vue-easy-lightbox
      :visible="lightboxVisibleRef"
      :imgs="lightboxImgsRef"
      :index="lightboxIndexRef"
      @hide="onLightboxHide"
    ></vue-easy-lightbox>

    <div class="row justify-center shadow-5 bg-white q-pa-md q-mt-xl">
      <div class="row justify-center q-gutter-md">
        <img
          src="https://placekitten.com/240/300"
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

    <div class="shadow-5 bg-white q-mt-xl q-pa-md">
      <h6 class="text-uppercase q-mt-none q-mb-lg">Staunton Music Festival</h6>
      <q-scroll-area style="height: 360px" class="">
        <div class="row no-wrap q-gutter-sm">
          <img
            v-for="(asset, idx) in stauntonAssets"
            :key="idx"
            :src="asset.src"
            @click="onLightboxShow(stauntonAssets, idx)"
          />
        </div>
      </q-scroll-area>
    </div>

    <div class="shadow-5 bg-white q-mt-xl q-pa-md">
      <h6 class="text-uppercase q-mt-none q-mb-lg">Micro Machines X-Force</h6>
      <q-scroll-area style="height: 360px" class="">
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
});
</script>
