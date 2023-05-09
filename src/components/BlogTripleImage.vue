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
    <div class="row q-gutter-md justify-between triple-image">
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
          {{ asset.title }}}
        </div>
      </q-img>

      <!-- <q-img
        class="col"
        src="/src/assets/blog/glaser/flower_trees_fail_01.png"
        @mouseover="hoverImg(4)"
        @mouseleave="unhoverImg(4)"
        @click="onLightboxShow(4, 0)"
      >
        <div
          id="caption-4"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          No giant tree-like flowers here.
        </div>
      </q-img>
      <q-img
        class="col"
        src="/src/assets/blog/glaser/flower_trees_fail_02.png"
        @mouseover="hoverImg(5)"
        @mouseleave="unhoverImg(5)"
        @click="onLightboxShow(4, 1)"
      >
        <div
          id="caption-5"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          Getting warmer, but lets face it, those are giant colorful mushrooms,
          not flowers.
        </div>
      </q-img>
      <q-img
        class="col"
        src="/src/assets/blog/glaser/flower_trees_fail_03.png"
        @mouseover="hoverImg(6)"
        @mouseleave="unhoverImg(6)"
        @click="onLightboxShow(4, 2)"
      >
        <div
          id="caption-6"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          Still no...but the floating lantern jellyfish bugs are sweet.
        </div>
      </q-img> -->
    </div>

    <!-- Mobile View -->
    <!-- <div style="width: 1200px">
      <q-scroll-area style="height: 360px">
        <div class="row no-wrap q-gutter-sm">
          <img
            v-for="(asset, idx) in getAssetsOfTag(
              project.category,
              project.tag,
              $q.screen.width,
              false
            )"
            :key="idx"
            :src="asset.srcS"
            style="height: 360px"
            @click="
              onLightboxShow(
                getAssetsOfTag(project.category, project.tag, $q.screen.width),
                idx
              )
            "
          />
        </div>
      </q-scroll-area>
      <h6 class="text-uppercase q-mb-none q-mt-lg text-center">
        {{ project.title }}
      </h6>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.triple-image {
  margin-bottom: 16px;
  margin-left: -196px;
  width: 846px;
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
    document.querySelector(`#caption-${id}`).style.visibility = 'visible';
  }
}

function unhoverImg(id: number) {
  if (document.querySelector(`#caption-${id}`)) {
    document.querySelector(`#caption-${id}`).style.visibility = 'hidden';
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
