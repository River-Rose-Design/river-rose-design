<template>
  <div>
    <!-- Lightbox -->
    <vue-easy-lightbox
      :visible="lightboxVisible"
      :imgs="props.assets"
      :index="lightboxIndex"
      :loop="true"
      :moveDisabled="true"
      @hide="onLightboxHide"
    ></vue-easy-lightbox>

    <!-- Desktop View -->
    <div class="gt-sm row q-gutter-md justify-between triple-image">
      <q-img
        v-for="asset in props.assets"
        :key="asset.id"
        class="col"
        :src="asset.src"
        @mouseover="hoverImg(asset.id)"
        @mouseleave="unhoverImg(asset.id)"
        @click="onLightboxShow(asset.id)"
      >
        <div
          :id="`caption-${props.groupId}-${asset.id}`"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          {{ asset.title }}
        </div>
      </q-img>
    </div>

    <!-- Mobile View -->
    <div class="lt-md q-mb-md" style="360px">
      <q-scroll-area style="height: 360px">
        <div class="row no-wrap q-gutter-sm">
          <img
            v-for="asset in props.assets"
            :key="asset.id"
            :src="asset.src"
            style="height: 360px"
            @click="onLightboxShow(asset.id)"
          />
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<style scoped lang="scss">
.triple-image {
  margin-bottom: 16px;
  margin-left: -196px;
  width: 846px;
}

.text-subtitle1 {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.15px;
}

.q-scrollarea__thumb {
  opacity: 1 !important;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

import VueEasyLightbox from 'vue-easy-lightbox';

const props = defineProps<{
  groupId: number;
  assets: { id: number; title: string; src: string }[];
}>();

let lightboxVisible = ref(false);
let lightboxIndex = ref(0);

function hoverImg(id: number) {
  if (document.querySelector(`#caption-${props.groupId}-${id}`)) {
    document.querySelector(`#caption-${props.groupId}-${id}`).style.visibility =
      'visible';
  }
}

function unhoverImg(id: number) {
  if (document.querySelector(`#caption-${props.groupId}-${id}`)) {
    document.querySelector(`#caption-${props.groupId}-${id}`).style.visibility =
      'hidden';
  }
}

function onLightboxShow(index: number) {
  lightboxIndex.value = index;
  lightboxVisible.value = true;
}

function onLightboxHide() {
  lightboxVisible.value = false;
}
</script>
