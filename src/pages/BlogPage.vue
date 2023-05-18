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
        Is <span class="rose">Generative AI</span> Moving Designers to a
        'preferred state?'’
      </h4>
      <p id="byline" class="text-uppercase">By <strong>Quinn Wilson</strong></p>
      <p id="publishDate"><em>04/28/2023</em></p>
      <p>
        Graphic design great Milton Glaser iconically described design as
        "moving from an existing state to a preferred one." He also famously
        avoided using computers directly for his work. He relied instead on
        interns to pixel-push for him, even well into the digital age. In the
        2013 documentary “To Inform and Delight,” he discussed his mistrust of
        the power and ability of digital tools.
      </p>
      <q-img
        class="img-left img-90"
        src="/assets/blog/glaser/cyborg2_edit.jpg"
        @mouseover="hoverImg(1)"
        @mouseleave="unhoverImg(1)"
        @click="onLightboxShow(1, 0)"
      >
        <div
          id="caption-1"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          A Subversive Servant.
        </div>
      </q-img>

      <blockquote>
        “The computer is dangerous because it shapes your capacity to understand
        what’s possible. The computer is like an apparently submissive servant
        that turns out to be a subversive that ultimately gains control of your
        mind. [It] is such a powerful instrument that it defines, after a while,
        what is possible for you. And what is possible is [what is] within the
        computer’s capacity. And while it seems in the beginning like this
        incredibly gifted and talented servant actually has… intelligence — the
        brain is so much vaster than the computer. But, the computer is very
        insistent about what it’s good at, and before you know it — it’s like
        being with somebody who has bad habits, you sort of fall into the bad
        habits — and it begins to dominate the way you think about what is
        possible.”
      </blockquote>
      <q-img
        class="img-right img-70"
        src="/assets/blog/glaser/intern_01.png"
        @mouseover="hoverImg(2)"
        @mouseleave="unhoverImg(2)"
        @click="onLightboxShow(2, 0)"
      >
        <div
          id="caption-2"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          Pixel Pushing
        </div>
      </q-img>
      <p>
        As I spent the last few weeks exploring how I might use AI image-model
        Midjourney in graphic design contexts, these cautionary words have
        remained top-of mind for me. Generative AI is in its infancy, and
        simultaneously in a period of incredibly rapid growth, so any judgements
        one might make about it right now are as likely to be rendered obsolete
        next month as they are to prove salient additions to the dialog. That
        said, even if their current ability were held static, these tools
        already represent both an obvious boon and a pernicious threat to
        designers and artists’ current ways of working.
      </p>

      <p>
        Where merely a year ago image-generative AI software looked like child’s
        play, certain types of images generated with the latest and best ones
        are essentially indistinguishable from professionally-produced
        photography or art. But whether the output of a particular Midjourney
        query ‘looks like professional grade art’, and whether it accomplishes
        anything close to the same goal as would have been possible had a human
        artist set their skills (though presumably significantly
        <em>more</em> time) to the same project, are wholly different questions.
        While nearly a decade has passed, these questions both tie in deeply
        with the concern at the core of Glaser’s critique ten years ago about
        the effects that the production software available to graphic designers
        at that time might have on creative outputs.
      </p>
      <div class="img-left img-50 pullquote">
        <!-- <span class="pullquotemarks">"</span> -->
        While it excels at producing the familiar and anodyne, to get anything
        truly novel and remarkable, you must not only have a clear vision, but
        hold onto that vision with a tenacity that most casual users might not
        possess.
        <!-- <span class="pullquotemarks">"</span> -->
      </div>
      <p>
        In using Midjourney these past few weeks, I have generated many things
        that, had I used my own existing skills with visual media and sought to
        create them <em>specifically</em>, would have been pieces that evoked
        quite a lot of pride of craft. Yet I have nevertheless felt like
        Midjourney was indeed, to an extent, subversively “defining” what was
        possible (or perhaps more accurately allowing the shape and various
        depths of content in the
        <a href="https://www.youtube.com/watch?v=SVcsDDABEkM"> latent space </a>
        it possessed to influence our visual and linguistic dialog.) While it
        excels at producing the familiar and anodyne, to get anything truly
        novel and remarkable, you must not only have a clear vision, but hold
        onto that vision with a tenacity that most casual users might not
        possess.
      </p>

      <p>
        For one children’s illustration project, I wanted to see a forest where
        the trees <em>were</em> flowers, but over and over it wanted instead to
        make me a forest where traditional looking trees were
        <em>covered</em> in flowers. <em>That</em> was what it was used to
        seeing, or was at least fewer steps away from what it was used to
        seeing. In another, I wanted a medieval floating city above water,
        founded on stalactite-covered rocks like on the fictional planet Pandora
        - but until I actually invoked <em>“Pandora”</em> specifically, drawing
        directly on the images of the specific set of creative artists who
        developed the look and feel of that world, it wouldn’t conceive visually
        for me of a city that defied the laws of physics in this way. I had to
        be incredibly determined to convince it that flowers might be envisioned
        to tower over the head, forming a vast canopy of petals instead of
        leaves, or that rocks might possess the ability to hold up walls and
        parapets in thin air.
      </p>
      <BlogTripleImage :groupId="1" :assets="tripleImageAssets1" />
      <BlogTripleImage :groupId="2" :assets="tripleImageAssets2" />
      <p>
        While ultimately, I found the words I needed to create some truly
        beautiful renderings of some of these more challenging concepts, I began
        to think that perhaps envisioning truly <em>fantastical</em> things
        requires an <em>understanding</em>, not just of what has been, but of
        what rules we are accepting that we might momentarily suspend to make
        something <em>novel</em>, and something perfectly suited to the problem
        of the moment. I could imagine that with a less tenacious grasp on my
        ultimate vision, I might have settled for output that was beautiful, but
        not truly novel, nor representative of my own creativity in any
        meaningful way.
      </p>
      <q-img
        class="img-left img-50"
        src="/assets/blog/glaser/watermarks_01.png"
        @mouseover="hoverImg(3)"
        @mouseleave="unhoverImg(3)"
        @click="onLightboxShow(3, 0)"
      >
        <div
          id="caption-3"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          Flowermarks for the flower girl.
        </div>
      </q-img>
      <p>
        One of the clearest reminders of this problem, as well as both the
        provenance and structure of Midjourney’s remarkable abilities, presents
        itself in the form of the engine’s incorrigible tendency to include
        image artifacts in its creations that are reminiscent of watermarks.
        This is especially true when asked for particular types of work; those
        that might be more likely to show up often in a stock image search, for
        example. When given particular types of keywords, Midjourney often
        applies anything from a crisscrossing grid of watermark lines
        interspersed with logo-like distortions, to more subtle little illegible
        signatures with a variety of type-like appearances.
      </p>

      <p>
        Skeptics of AI art, or of its ethical foundations, are quick to point to
        this phenomenon as evidence of it “stealing” its source material. While
        this claim seems to have some facile validity, it relies on a shaky and
        shallow understanding of the way these generators work, and is often
        used to prop up some
        <a
          href="https://www.eff.org/deeplinks/2023/04/ai-art-generators-and-online-image-market"
          >dangerous ideas</a
        >
        about the way we should be reacting to or regulating generative AI.
        Moreover, the actual explanation is both more interesting and more
        illuminating of the true shortcomings of these generative models.
      </p>
      <q-img
        class="img-right img-50"
        src="/assets/blog/glaser/art_nouveau_m_01.png"
        @mouseover="hoverImg(4)"
        @mouseleave="unhoverImg(4)"
        @click="onLightboxShow(4, 0)"
      >
        <div
          id="caption-4"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          MJ prompt: An M in art nouveau style
        </div>
      </q-img>
      <p>
        While the watermarks are indeed “evidence” that these models viewed
        copyrighted material to generate its understanding of the relationship
        between certain linguistic prompt elements and certain visual patterns,
        and to train its
        <a
          href="https://scale.com/guides/diffusion-models-guide#diffusion-model-limitations"
          >diffusion model</a
        >
        to predict the way pixels should resolve given these prompts, that’s not
        exactly something that one needs evidence for, as it is common
        knowledge, and does not necessarily represent any more of a breach of
        the rules, legal or ethical, of content “ownership” than a human artist
        using reference material to learn or to paint something novel of their
        own.
      </p>
      <p>
        What is, however, of particular interest to me about this phenomenon is
        that it is representative of the diffusion process’s pixel-prediction
        algorithm’s complete lack of what a human mind would conceive of as
        “understanding.” While a human artist, who had also trained in a
        particular subject matter or style using images found on the internet,
        would know to interpret as watermarks (and ignore) the aberrant
        transparent white shapes overlayed onto the images they were
        referencing, Midjourney merely learned them as one more common
        phenomenon that their subject matter seemed to frequently contain, no
        different from the rounded, ornate, usually botanical, borders in Art
        Nouveau, or the subtle artifacts of paper-texture present in colored
        pencil art.
      </p>
      <p>
        It is in this lack of “understanding” that one can find the truest
        extant limitation of generative AI models as they exist today. In the
        opening of the quotation above, Glaser refers to how a computer can
        affect the designers “capacity to understand what’s possible.” In a very
        true sense, it is ultimately this extant lack, for all its appearance of
        skilled artistry and capacity for remixing in novel ways, that
        inexorably separates Midjourney from a human designer’s mind. In drawing
        this distinction we can find one of the most important precautions to
        any designer seeking to use these tools to solve visual problems. To
        truly tackle a problem, especially in a novel or interesting way, the
        first step is <em>understanding</em>.
      </p>
      <div class="item-center pullquote">
        <!-- <span class="pullquotemarks">"</span> -->
        The best design solutions were found by first forming a deep
        <em>understanding</em> of a client’s needs and of the job’s conceptual
        structure.
        <!-- <span class="pullquotemarks">"</span> -->
      </div>
      <p>
        Near the beginning of my formal graphic design education, a professor
        opened his unit on logo design with the sentence “All I ask is that you
        be a genius,” along with a recommendation for a design process that
        began with simple conceptual word-association, absent any visual
        elements. While this was not intended to be taken to imply that the
        technical skill to execute upon brilliant visual ideas was not both a
        necessary and interdependent part of a designer’s ability, the point he
        was making was that the best design solutions were found by first
        forming a deep <em>understanding</em> of a client’s needs and of the
        job’s conceptual structure. It was in this meditative and associative
        process that a designer could move beyond the facile or trite solutions
        to something that conveyed, in the simplest visual terms, the most
        relevant and necessary information about a brand.
      </p>
      <q-img
        class="img-left img-50"
        src="/assets/blog/glaser/inside_the_box_02.png"
        @mouseover="hoverImg(5)"
        @mouseleave="unhoverImg(5)"
        @click="onLightboxShow(5, 0)"
      >
        <div
          id="caption-5"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          Thinking Inside the Machine's Box
        </div>
      </q-img>
      <p>
        But another thing we learned in that course is that it can be useful to
        <em>produce</em> those facile solutions, to get them out of the way, or
        perhaps to contain them in your brain’s own
        <a href="https://www.youtube.com/watch?v=SVcsDDABEkM"
          >generated latent space</a
        >
        around a project. This process though, however useful, takes time. If
        you work in a larger firm, this is time you might direct an intern
        towards, with clear instructions on content, style, and level of detail.
        In this same way, a less-resourced designer who has worked hard to
        develop a deep understanding of a design problem can also readily make
        use of AI art tools take their more simple ideation to a semi-produced
        level, and to quickly create variations upon a winning theme they
        believe a client might like. This role–not as a subversive servant, but
        an efficient, if naïve, intern–is the clearest positive alternative
        metaphor that has emerged for me so far in my experimentation with these
        tools.
      </p>
      <div class="img-right img-50 pullquote">
        <!-- <span class="pullquotemarks">"</span> -->
        This role–not as a subversive servant, but an efficient, if naïve,
        intern–is the clearest positive alternative metaphor that has emerged
        for me so far in my experimentation with these tools.
        <!-- <span class="pullquotemarks">"</span> -->
      </div>
      <p>
        One of the most fascinating, powerful (and perhaps morally ambiguous)
        abilities of these AI art models is their ability to emulate existing
        artists, both contemporary and long dead. Yet here too, the limitations
        of
        <em>understanding</em> are amply evident. Midjourney exhibited a strong,
        and unsurprising, tendency to overweight individual famous pieces, in
        its conception of an artist’s style, especially for more eclectic
        artists whose style was perhaps better conceptualized in their
        <em>approach to problems</em>, rather than the particular visual
        outputs.
      </p>
      <p>
        One such artist is Milton Glaser himself, whose exceptional graphic
        design acumen was distinguished more in how he drew on art history with
        intention, and innovated upon existing design paradigms, than in the
        particular visual effects he produced on paper. When Midjourney is
        prompted to work in the style of Milton Glaser, however, it generally
        reproduces a style that actually makes up only a small, if notable,
        minority of his work: pieces that are illustrative, highly colorful,
        detailed to the point of being nearly busy, and quasi-psychedelic but
        with a geometric twist. While this is a beautiful (and relatively
        distinctive) style, most designers know Glaser primarily as someone who
        was inventive, thought solidly outside the box (even boxes of his own
        past-creation), and assiduously used white space and simplification to
        his advantage. The former represents features one might uniquely find in
        the latent visual space between Glaser’s productions, while the latter
        is something for which replication would have to be predicated wholly on
        understanding of the subject matter, its historical and social context,
        and the audience: something that for all its technical acumen,
        Midjourney unquestionably lacks.
      </p>
      <q-img
        class="img-left img-0"
        src="/assets/blog/glaser/hokusai_03.png"
        @mouseover="hoverImg(6)"
        @mouseleave="unhoverImg(6)"
        @click="onLightboxShow(6, 0)"
      >
        <div
          id="caption-6"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          "a human profile in the style of Hokusai"
        </div>
      </q-img>
      <p>
        Like AI art generators, I believe humans minds are ultimately also just
        fancy tools for remixing, but it is by <em>understanding</em> and
        <em>contextualizing</em> the past as we observe it that we can then
        re-contextualize it, and choose what parts are appropriate for use in a
        novel context. Being trained on the past without true
        <em>understanding</em> of the past, as exemplified by Midjourney’s
        tendency to put watermarks on its images, or to elide the more
        innovative work a designer has done due to the conceptual aspects being
        nearly invisible to it, feels reminiscent of living by a literal reading
        of the Constitution or the Bible. Without modern interpretation, even
        universally recognized values like those of nonviolence and charity
        preached by Jesus, or those of equality of opportunity written into the
        United States Constitution leave out a good deal of nuance necessary for
        ethical application. In this sense, the human artist’s mind is serving
        as a kind of supreme court, reading past creations and styles, and
        fitting them around the problem they’re trying to solve, innovating just
        enough to adapt, but not so much as to lose the value of comfortable
        historical visual context for the audience.
      </p>
      <div class="img-right img-0 pullquote">
        <!-- <span class="pullquotemarks">"</span> -->
        The human artist’s mind is serving as a kind of supreme court, reading
        past creations and styles, and fitting them around the problem they’re
        trying to solve, innovating just enough to adapt, but not so much as to
        lose historical context
        <!-- <span class="pullquotemarks">"</span> -->
      </div>
      <p>
        Pablo Picasso, himself a pioneer famous for mastering art in its
        traditional form and using that context to move beyond the
        traditional–in world-changing ways–is frequently credited with the
        famous adage “Bad artists copy, good artists borrow, great artists
        steal.” The central concept here is that true creativity is found in
        remixing so
        <em>well</em>, and choosing what to remix so aptly, that your audience
        cannot help but feel the result is bespoke to their very specific needs
        and context. But this sort of creative innovation can only come from
        both recombination and <em>understanding</em> working together.
      </p>
      <q-img
        class="img-left img-90"
        src="/assets/blog/glaser/bicycle_of_the_mind_03.png"
        @mouseover="hoverImg(7)"
        @mouseleave="unhoverImg(7)"
        @click="onLightboxShow(7, 0)"
      >
        <div
          id="caption-7"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          "A Bicycle of the Mind"
        </div>
      </q-img>
      <p>
        Whether, and when, generative artificial intelligence will eventually
        develop this melding of the conceptual and executive elements of art is
        an open question, with estimates all over the map. But because it
        currently lacks it, as is clearly illuminated by its shortcomings (such
        as strangely shaped appendages and those incorrigible watermarks) its
        current form provides us with a useful window into the value of
        <em>understanding</em> <em>in the abstract</em> both the
        <em>purpose</em> and <em>context</em> of the substrate our own creative
        minds are trained on. Not only can a human intelligently interpret and
        curate which elements of art history to draw upon to execute a project’s
        goals, they can do so with a sensitivity to cultural norms and to how
        they would like to be driving the cultural conversation of the future.
      </p>
      <p>
        Steve Jobs’ famous comparison of the personal computer to a bicycle for
        the mind can be extended to generative AI. A bicycle can limit one’s
        experience by only allowing movement on a predetermined path but can
        also expand one’s experience by allowing greater distance to be covered
        in less time. Like a bicycle, the transformative, novel man-machine
        partnership enabled by generative AI has the potential to both limit and
        expand creative experiences, depending on how it is utilized. But
        importantly, while it may affect how far you are willing to travel for a
        given errand, and what angle you’re likely to approach a destination
        from, a bicycle does not <em>understand</em> your needs, and cannot
        choose your destination. Further, to move the creative consciousness
        forward with intention and effect, artists must be ready and willing to
        park their vehicles and blaze trails across the unpaved landscape of
        cultural needs that this novel toolset can only bring us to the edge of.
      </p>
      <div class="item-center pullquote">
        <!-- <span class="pullquotemarks">"</span> -->
        Artists must be ready and willing to park their vehicles and blaze
        trails across the unpaved landscape of cultural needs that this novel
        toolset can only bring us to the edge of.
        <!-- <span class="pullquotemarks">"</span> -->
      </div>
      <q-img
        class="img-right img-90"
        src="/assets/blog/glaser/parked_bicycle_sq.png"
        @mouseover="hoverImg(8)"
        @mouseleave="unhoverImg(8)"
        @click="onLightboxShow(8, 0)"
      >
        <div
          id="caption-8"
          style="visibility: hidden"
          class="absolute-bottom text-subtitle1 text-center"
        >
          "A Bicycle Left Behind"
        </div>
      </q-img>
      <p>
        The technical tools available to artists have always played a key role
        in shaping the cultural design consciousness. Novel tools open up new
        possibilities for artists to explore, and simultaneously render certain
        professions relatively obsolete. The mid 20th century advent of stretch
        knit fabrics fundamentally changed fashion, allowing for the creation of
        new silhouettes and textures that were previously impossible to achieve,
        while also reducing the need for ironing and professional cleaning. The
        Pantographic Router, invented in the mid-19th century, allowed for the
        creation of large wood-type for Victorian era advertising, which in turn
        heavily influenced the bold and graphic styles of the time. Similarly,
        the invention of photography challenged artists to find new ways of
        representing their experience of the world, and is thought to have
        <a
          href="https://kiamaartgallery.wordpress.com/2015/05/05/impressionism-the-influence-of-photography/"
          >contributed to</a
        >
        the emergence of impressionism, as a response to the experientially
        cold, ‘objective’ nature of photographs.
      </p>

      <p>
        <a
          href="https://www.nytimes.com/2023/04/07/opinion/ezra-klein-podcast-ama-april2023.html"
          >Ezra Klein has noted</a
        >
        that, due to its unforeseen downsides, the ubiquitous global
        connectivity of the internet failed to deliver the productivity gains
        that might have been predicted in the 90s had people truly understood
        the technology’s potential. While the internet was fundamentally
        transformative to nearly all aspects of society, it took away as much as
        it gave in productivity, social cohesion, and quality of life. If past
        is prologue, the question of
        <em>whether</em> AI art will affect the visual landscape of our culture
        is easy to answer. The question of how, and how much, though, will
        depend on whether art creators and consumers let these algorithmic
        servants–operating in their context and objective agnostic
        manner–subversively define the flow of artistic evolution, or whether we
        use the power of these tools to navigate this transformation with human
        intention and true understanding.
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
}

.rose {
  color: $accent;
}

p {
  font-family: 'Nunito Sans';
  font-size: 13px;
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
  margin-top: 15px;
  shape-outside: inset(10px 0px 0px 0px);
}
.img-20 {
  margin-top: 20px;
  shape-outside: inset(20px 0px 0px 0px);
}
.img-30 {
  margin-top: 35px;
  shape-outside: inset(30px 0px 0px 0px);
}
.img-40 {
  margin-top: 45px;
  shape-outside: inset(40px 0px 0px 0px);
}
.img-50 {
  margin-top: 55px;
  shape-outside: inset(50px 0px 0px 0px);
}
.img-60 {
  margin-top: 65px;
  shape-outside: inset(60px 0px 0px 0px);
}
.img-70 {
  margin-top: 75px;
  shape-outside: inset(70px 0px 0px 0px);
}
.img-80 {
  margin-top: 85px;
  shape-outside: inset(80px 0px 0px 0px);
}
.img-90 {
  margin-top: 95px;
  shape-outside: inset(90px 0px 0px 0px);
}
.img-100 {
  margin-top: 100px;
  shape-outside: inset(100px 0px 0px 0px);
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
            'Artists must be ready and willing to park their vehicles and blaze trails across the unpaved landscape of cultural needs that this novel toolset can only bring us to the edge of. Quinn Wilson with Midjourney collaboration',
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
    title: "More like colorful mushrooms, but I'll go with it.",
    src: '/assets/blog/glaser/successful_single_01.png',
  },
  {
    id: 1,
    title: "Now we're getting somewhere.",
    src: '/assets/blog/glaser/successful_single_02.png',
  },
  {
    id: 2,
    title: 'Another of several ultimately successful attempts.',
    src: '/assets/blog/glaser/successful_single_06.png',
  },
];
</script>
