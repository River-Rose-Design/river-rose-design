<template>
  <q-page id="blog-page" class="row justify-center">
    <vue-easy-lightbox
      :visible="lightboxVisible"
      :imgs="lightboxImgs"
      :index="lightboxIndex"
      :loop="true"
      :moveDisabled="true"
      @hide="onLightboxHide"
    ></vue-easy-lightbox>

    <div id="article-container">
      <h4 class="text-uppercase">
        The Health Refugee Crisis: How the Search for
        <span class="rose">Control</span> is Redefining American Medicine
      </h4>
      <p id="byline" class="text-uppercase">By <strong>Quinn Wilson</strong></p>
      <p id="publishDate"><em>07/23/2026</em></p>

      <p>
        Alternative medicine has always found fertile ground at the intersection
        of the political ouroboros, where the maw of left-wing natural living
        movements suckles at the tail of individualism and institutional
        distrust native to the far-right. This space is no stranger to strange
        bedfellows; mistrust of capitalist ‘progress’ run amok goes hand in hand
        with mistrust of science and expertise; the sanctity of the body pairs
        easily with the sanctity of god’s creation; the conservative desire for
        tradition rhymes with the beatnik desire to live in keeping with one’s
        natural evolutionary history.
      </p>

      <p>
        Yet something that feels a step more unhinged has begun to occur in this
        post-pandemic era of dissociative modernity. In the contemporary pathos,
        apparent demands for bodily purity coexist with a reckless embrace of
        the synthetic frontier, and observers seeking a common denominator will
        not readily find it in the professed claims of the movement. What was
        once mere rhyming subcultures has become the Make America Healthy Again
        (MAHA) coalition, a political and cultural force that literally
        institutionalizes these contradictions. 
      </p>
      <BlogBio />
    </div>
  </q-page>
</template>

<style scoped lang="scss">
#blog-page {
  background-color: white;
}
.text-subtitle1 {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.15px;
}

.image-expand-container {
  height: 30px;
  width: 30px;
  opacity: 30%;

  .q-icon {
    margin-top: -7px;
    font-weight: bold;
    font-size: 17px;
  }
}

#article-container {
  max-width: 470px;
}

h4 {
  margin-bottom: 24px;
  font-weight: 300;
}

#byline {
  margin-bottom: 3px;
}

blockquote {
  font-family: 'Nunito Sans';
  font-weight: 400;
  font-style: italic;
  font-size: 14px;
  line-height: 20px;
}

.rose {
  color: $accent;
}

p {
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-weight: 300;
}

a {
  color: $accent;
}

.pullquote {
  color: $accent;
  font-size: 22px;
  line-height: 30px;
  font-weight: 300;
  border-top: 0.5px solid #ee3f48;
  padding-top: 20px;
  border-bottom: 0.5px solid #ee3f48;
  padding-bottom: 20px;
  margin-bottom: 20px;

  // font-variant: small-caps;
}
.pullquotemarks {
  color: $accent;
  font-size: 34px;
  line-height: 24px;
  font-weight: 400;
  margin-left: -0.5em;
  // font-variant: small-caps;
}

.img-left {
  width: 300px;
  float: left;
  margin-right: 20px;
  margin-left: -190px;
}

.item-center {
  border-top: 0.5px solid #ee3f48;
  padding-top: 20px;
  border-bottom: 0.5px solid #ee3f48;
  padding-bottom: 20px;
  margin-bottom: 20px;
  // width: 300px;
  float: center;
  margin-right: 0px;
  margin-left: 0;
}

.img-right {
  width: 300px;
  float: right;
  margin-left: 20px;
  margin-right: -190px;
}

.img-10 {
  margin-top: 10px;
  shape-outside: inset(10px 0px 0px 0px);
}
.img-15 {
  margin-top: 15px;
  shape-outside: inset(15px 0px 0px 0px);
}
.img-20 {
  margin-top: 20px;
  shape-outside: inset(20px 0px 0px 0px);
}
.img-30 {
  margin-top: 30px;
  shape-outside: inset(30px 0px 0px 0px);
}
.img-40 {
  margin-top: 40px;
  shape-outside: inset(40px 0px 0px 0px);
}
.img-50 {
  margin-top: 50px;
  shape-outside: inset(50px 0px 0px 0px);
}
.img-60 {
  margin-top: 60px;
  shape-outside: inset(60px 0px 0px 0px);
}
.img-70 {
  margin-top: 70px;
  shape-outside: inset(70px 0px 0px 0px);
}
.img-75 {
  margin-top: 75px;
  shape-outside: inset(75px 0px 0px 0px);
}
.img-80 {
  margin-top: 80px;
  shape-outside: inset(80px 0px 0px 0px);
}
.img-85 {
  margin-top: 85px;
  shape-outside: inset(85px 0px 0px 0px);
}
.img-90 {
  margin-top: 95px;
  shape-outside: inset(90px 0px 0px 0px);
}
.img-100 {
  margin-top: 100px;
  shape-outside: inset(100px 0px 0px 0px);
}
.img-110 {
  margin-top: 110px;
  shape-outside: inset(110px 0px 0px 0px);
}

@media only screen and (max-width: 800px) {
  #article-container {
    max-width: 360px;
  }

  .q-img {
    width: calc(100% - 20px);
    float: none;
    margin: 10px 8px;
    shape-outside: none;
  }

  .pullquote {
    width: 100%;
    float: none;
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 0px;
  }
}
</style>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';

import VueEasyLightbox from 'vue-easy-lightbox';

import BlogTripleImage from 'src/components/BlogTripleImage.vue';
import BlogBio from 'src/components/BlogBio.vue';

let lightboxVisible = ref(false);
let lightboxGroup = ref(0);
let lightboxIndex = ref(0);
let lightboxImgs: Ref<Array<{ title: string; src: string }>> = ref([]);

function hoverImg(id: number) {
  if (document.querySelector(`#caption-${id}`)) {
    document.querySelector(`#caption-${id}`).style.visibility = 'visible';
  }
}

function unhoverImg(id: number) {
  if (document.querySelector(`#caption-${id}`)) {
    document.querySelector(`#caption-${id}`).style.visibility = 'hidden';
  }
}

function onLightboxShow(group: number, index: number) {
  lightboxGroup.value = group;
  lightboxIndex.value = index;
  lightboxImgs.value = singleImageAssets();
  lightboxVisible.value = true;
}

function onLightboxHide() {
  lightboxVisible.value = false;
}

onMounted(() => {
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

  function scrollToCenter(element: HTMLElement) {
    setTimeout(() => {
      element.scrollLeft = element.scrollWidth / 2 - element.clientWidth / 2;
    }, 500);
  }

  if (scrollContainers) {
    for (let i = 0; i < scrollContainers.length; i++) {
      scrollToCenter(scrollContainers[i]);

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
});

function singleImageAssets() {
  switch (lightboxGroup.value) {
    case 1:
      return [
        {
          title:
            'A Subversive Servant: Midjourney prompt: "A cyborg making art at an easel, illustrated in the style of Milton Glaser" Modified from MJ output.',
          src: '/assets/blog/glaser/cyborg2_edit.jpg',
        },
      ];
    case 2:
      return [
        {
          title:
            'Pixel Pushing: Midjourney prompt: "Milton Glaser directing an intern to use a computer for him. Illustrated in the style of Milton Glaser" Modified from MJ output.',
          src: '/assets/blog/glaser/intern_01.png',
        },
      ];
    case 3:
      return [
        {
          title:
            'Flowermarks for the flower girl. In this particularly cute example, the image prompt\'s content of "flowers" seemed to shape the watermark-inspired aspects of the output into logos that are remarkably flower-like, while still resembling stock-image watermarks. (MJ prompt: "pensive cute simplified cartoon woman with a sunhat surveying small cute garden, simple vector style, mid shot, expression cute, thoughtful, and naïve, herbs, flowers, uses colors: #BAE1BE, #89COAA, #A0B961, #8BC2AB, #657c7c, #411948. No watermark. no captions single frame no watermark. Simple colors. Clean lines.")',
          src: '/assets/blog/glaser/watermarks_01.png',
        },
      ];
    case 4:
      return [
        {
          title:
            'MJ prompt: "An M in art nouveau style." Modified from MJ output.',
          src: '/assets/blog/glaser/art_nouveau_m_01.png',
        },
      ];
    case 5:
      return [
        {
          title:
            'Thinking Inside the Machine\'s Box. (unfinished conceptual midjourney-assisted project) MJ prompt: "a visual conceptual commentary on the way machines affect how we make art, in the style of Milton Glaser" Modified and recombined with realted materials for final image.',
          src: '/assets/blog/glaser/inside_the_box_02.png',
        },
        {
          title:
            "Creating iterations and recombining options from midjourney output can help artists reach a final vision that differs from the machine's inlination",
          src: '/assets/blog/glaser/inside_the_box_04.png',
        },
        {
          title:
            'Some variations deviate too far from a concept, but have something to offer in one area or another',
          src: '/assets/blog/glaser/inside_the_box_03.png',
        },
        {
          title:
            'The ease of whole-image iteration for AI means that an artist can apply a simple conceptual tweak after developing a concept and propogate it, albeit imprecisely, across the entire piece in the blink of an eye.',
          src: '/assets/blog/glaser/inside_the_box_06.png',
        },
      ];
    case 6:
      return [
        {
          title:
            'While Katsushika Hokusai was a prolific and influential artist with many subjects, the overwhelming popularity of The Great Wave off Kanagawa, from the series Thirty-Six Views of Mount Fuji means any attempt to emulate his style using midjourney is nearly guaranteed to contain an inappropriately positioned woodblock print style wave. For the prompt "a human profile in the style of Hokusai" all results included waves, while not a single one of Hokusai\'s works the included a human subject also included such elements.',
          src: '/assets/blog/glaser/hokusai_03.png',
        },
        {
          title: '"a human profile in the style of Hokusai"',
          src: '/assets/blog/glaser/hokusai_01.png',
        },
        {
          title: '"a human profile in the style of Hokusai"',
          src: '/assets/blog/glaser/hokusai_02.png',
        },
        {
          title: '"a human profile in the style of Hokusai"',
          src: '/assets/blog/glaser/hokusai_04.png',
        },
      ];
    case 7:
      return [
        {
          title:
            '"A Bicycle of the Mind," Which can perhaps help an artist sort out a complex past into a clear present. (Midjourney collaboration beginning with the prompt: ""a bicycle of the mind" in the style of a 1960s modernist poster" With signficant iteration rounds, modifications, and edits)',
          src: '/assets/blog/glaser/bicycle_of_the_mind_03.png',
        },
      ];
    case 8:
      return [
        {
          title:
            "'A Bicycle Left Behind' Artists must be ready and willing to park their vehicles and blaze trails across the unpaved landscape of cultural needs that this novel toolset can only bring us to the edge of. Quinn Wilson with Midjourney collaboration",
          src: '/assets/blog/glaser/parked_bicycle.png',
        },
        {
          title: '',
          src: '/assets/blog/glaser/bicycle_02.png',
        },
      ];
    default:
      return [];
  }
}

const tripleImageAssets1 = [
  {
    id: 0,
    title:
      'No giant tree-like flowers here. (MJ Prompt: a psychedeillic forest of gigantic flowers the size of trees, light magically filters through the canopy of brighly colored blossoms, and a path winds through the stems, a little girl wearing a pink and purple and orange dress is walking up the path)',
    src: '/assets/blog/glaser/flower_trees_fail_01.png',
  },
  {
    id: 1,
    title:
      'Getting warmer, but lets face it, those are giant colorful mushrooms, not flowers. (MJ prompt: a psychedeillic forest of gigantic flowers the size of trees, light magically filters through the canopy of brighly colored blossoms, and a path winds through the stems, a little girl wearing a pink and purple and orange dress is walking up the path)',
    src: '/assets/blog/glaser/flower_trees_fail_02.png',
  },
  {
    id: 2,
    title:
      'Still no...but the floating lantern jellyfish bugs are sweet. (MJ Prompt: a psychedeillic forest of gigantic flowers the size of trees, light magically filters through the canopy of brighly colored blossoms, and a path winds through the stems, a little girl wearing a pink and purple and orange dress is walking up the path)',
    src: '/assets/blog/glaser/flower_trees_fail_03.png',
  },
];
const tripleImageAssets2 = [
  {
    id: 0,
    title:
      'More like colorful mushrooms, but I\'ll go with it. (MJ Prompt: "supernatural world where flowers grow gigantic, 10-20meter tall flowers. Giant daisies, spreading out like umbrellas above the forest floor")',
    src: '/assets/blog/glaser/successful_single_01.png',
  },
  {
    id: 1,
    title:
      'Now we\'re getting somewhere. MJ prompt: "a psychedeillic forest of gigantic flowers the size of trees, light magically filters through the canopy of brighly colored blossoms, and a path winds through the stems, a little girl wearing a pink and purple and orange dress is walking up the path)"',
    src: '/assets/blog/glaser/successful_single_02.png',
  },
  {
    id: 2,
    title:
      'Another of several ultimately successful attempts, across multiple styles. All told this project added up to 30+ prompts, with iterations and some edits after the fact. MJ Prompt: "a child walking in a dense forest of human-sized giant flowers, children\'s illustration style"',
    src: '/assets/blog/glaser/successful_single_06.png',
  },
];
</script>
