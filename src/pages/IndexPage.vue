<template>
  <q-page id="index-page">
    <vue-easy-lightbox
      :visible="lightboxVisibleRef"
      :imgs="lightboxImgsRef"
      :index="lightboxIndexRef"
      :loop="true"
      :moveDisabled="true"
      @hide="onLightboxHide"
    ></vue-easy-lightbox>

    <div class="row justify-center bg-white q-pa-md q-my-xl card-shadow">
      <div class="row justify-center q-gutter-md" style="max-width: 800px">
        <img
          src="../assets/brand/self_portrait.svg"
          id="portrait"
          class="col-3-sm"
        />
        <div class="col-sm">
          <h4 style="margin-top: 20px; margin-bottom: 20px">Hi, I’m Quinn.</h4>
          <p>
            I delight in visually rendering the abstract and making the
            conceptual concrete.
          </p>

          <p>I thrive on collaboration and human connection.</p>

          <p>
            I believe design is an act of communication, that can be used to
            help create a more
            <a
              href="/assets/static/bleed_final_we-want-more.pdf"
              target="_blank"
              >just</a
            >,
            <a
              href="/assets/static/bleed_final_bilingual-article.pdf"
              target="_blank"
              >equitable</a
            >, and
            <a
              href="/assets/static/bleed_final_alarm-and-hope.pdf"
              target="_blank"
              >sustainable</a
            >
            world.
          </p>

          <p>Let’s work together.</p>
        </div>
      </div>
    </div>

    <div
      v-for="project in projectCards"
      :key="project.tag"
      class="bg-white q-mb-xl q-pa-md card-shadow"
      style="display: flex; justify-content: center"
    >
      <div style="width: 1200px">
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
                  getAssetsOfTag(
                    project.category,
                    project.tag,
                    $q.screen.width
                  ),
                  idx
                )
              "
            />
          </div>
        </q-scroll-area>
        <h6 class="text-uppercase q-mb-none q-mt-lg text-center">
          {{ project.title }}
        </h6>
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
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';
import { getAssetsOfTag } from '../helpers';

const projectCards: Array<{
  title: string;
  category: 'gd' | 'photo' | 'fine';
  tag: string;
}> = [
  { title: 'Staunton Music Festival', category: 'gd', tag: 'staunton' },
  { title: 'Costanoa Resort Rebrand', category: 'gd', tag: 'costanoa' },
  { title: 'Sundance Natural Foods', category: 'gd', tag: 'naturalFoods' },
  { title: 'The Bleed Magazine', category: 'gd', tag: 'theBleed' },
  { title: 'Creative Summit 15', category: 'gd', tag: 'CS15' },
  { title: 'Art At Lane Promotions', category: 'gd', tag: 'artAtLane' },
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
      getAssetsOfTag,
      projectCards,
    };
  },
  mounted() {
    const scrollContainers = document.getElementsByClassName(
      'q-scrollarea__container'
    );

    function IsScrollbarAtBeginning(element: HTMLElement) {
      return element.scrollLeft == 0;
    }

    function IsScrollbarAtEnd(element: HTMLElement) {
      return (
        // The extra 1 pixel seems necessary to guarantee that this will eventually return true
        element.clientWidth + element.scrollLeft >= element.scrollWidth - 1
      );
    }

    if (scrollContainers) {
      for (let i = 0; i < scrollContainers.length; i++) {
        scrollContainers[i].addEventListener('wheel', (evt) => {
          if (
            (evt.deltaY > 0 && !IsScrollbarAtEnd(scrollContainers[i])) ||
            (evt.deltaY < 0 && !IsScrollbarAtBeginning(scrollContainers[i]))
          ) {
            evt.preventDefault();
            scrollContainers[i].scrollLeft += evt.deltaY;
          }
        });
      }
    }
  },
});
</script>
