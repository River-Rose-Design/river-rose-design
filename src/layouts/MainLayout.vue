<template>
  <q-layout view="hHh lpr fff">
    <!-- Desktop/Tablet Header -->
    <q-header
      v-if="$q.screen.gt.xs"
      id="header"
      class="bg-white text-black"
      :reveal="$q.screen.lt.lg"
    >
      <div class="row header-interior">
        <q-tabs class="col">
          <q-route-tab class="col" to="/gallery" label="Gallery" />
          <q-route-tab class="col" to="/blog/glaser" label="Blog" />
          <q-toolbar class="col-4 justify-center" style="top: 3px">
            <img
              src="../assets/brand/logo_rectangle.svg"
              @click="$router.push({ name: 'home' })"
              id="logo"
              style="width: 196px"
            />
          </q-toolbar>
          <q-route-tab class="col" to="/about" label="About" />
          <q-route-tab
            class="col"
            to="/contact"
            href="mailto:fences.pumper.0y@icloud.com?subject=Let's work together!"
            label="Email Me"
          />
        </q-tabs>
      </div>
    </q-header>

    <!-- Mobile Header -->
    <q-header
      v-if="$q.screen.lt.sm"
      id="header"
      class="bg-white text-black row justify-center items-center"
      reveal
    >
      <img
        src="../assets/brand/logo_rose.svg"
        @click="$router.push({ name: 'home' })"
        id="logo-mobile"
      />
      <q-btn
        v-if="$q.screen.lt.sm"
        id="mobile-menu-button"
        @click="mobileMenu = true"
        flat
        dense
        round
        aria-label="Menu"
        icon="menu"
        size="xl"
      />
    </q-header>
    <q-dialog
      id="mobile-menu"
      v-model="mobileMenu"
      persistent
      maximized
      transition-show="slide-down"
      transition-hide="slide-up"
    >
      <q-card class="bg-white text-black text-uppercase text-center">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup />
        </q-bar>
        <q-card-section class="q-ma-md">
          <div class="mobile-menu-item">
            <a href="/" class="text-black">Home</a>
          </div>
          <div class="mobile-menu-item q-mt-sm">
            <a href="/gallery" class="text-black">Gallery</a>
          </div>
          <div class="mobile-menu-item q-mt-sm">
            <a href="/blog/glaser" class="text-black">Blog</a>
          </div>
          <div class="mobile-menu-item q-mt-sm">
            <a href="/about" class="text-black">About</a>
          </div>
          <div class="mobile-menu-item q-mt-sm">
            <a
              href="mailto:fences.pumper.0y@icloud.com?subject=Let's work together!"
              class="text-black"
              >Email Me</a
            >
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-white text-black q-pa-md" id="footer">
      <q-toolbar style="max-width: 1200px; margin: auto">
        <q-toolbar-title class="row justify-between">
          <div class="row items-center">
            <q-avatar class="q-mr-sm">
              <img src="../assets/brand/logo_rose.svg" />
            </q-avatar>
            <div style="height: 25px">All content created by&nbsp;</div>
            <div style="height: 25px">Quinn Wilson,&nbsp;</div>
            <div style="height: 25px">copyright 2022</div>
          </div>
          <div class="row" style="margin-top: 6px">
            Site by Quinn &&nbsp;
            <a
              href="https://www.linkedin.com/in/danielgregorywilson/"
              target="_blank"
              >Daniel Wilson</a
            >
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style lang="scss">
#header {
  height: 88px;
  box-shadow: 0px 5px 7px 0 rgba(0, 0, 0, 0.08);

  .header-interior {
    max-width: 1200px;
    margin: auto;
    margin-top: 4px;
  }

  .q-tab__label {
    font-size: 16px;
  }

  .q-tab__indicator {
    width: 2em;
    margin: auto;
    bottom: 24px;
    color: $accent;
  }
}
#logo {
  height: 80px;
  cursor: pointer;
}
#logo-mobile {
  height: 75px;
  cursor: pointer;
}
#mobile-menu-button {
  position: fixed;
  top: 12px;
  right: 24px;
  z-index: 2001;
}
#mobile-menu {
  a {
    text-decoration: none;
  }

  .mobile-menu-item {
    font-size: 40px;
  }
}
#footer {
  box-shadow: 0px -5px 7px 0 rgba(0, 0, 0, 0.08);

  .q-toolbar {
    padding: 0;
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink,
  },

  setup() {
    const mobileMenu = ref(false);

    return {
      mobileMenu,
      toggleMobileMenu() {
        mobileMenu.value = !mobileMenu.value;
      },
    };
  },
});
</script>
