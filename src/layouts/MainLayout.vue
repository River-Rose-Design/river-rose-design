<template>
  <q-layout view="hHh lpr fff">
    <!-- Desktop/Tablet Header -->
    <q-header v-if="$q.screen.gt.xs" id="header" class="bg-white text-black">
      <div class="row header-interior">
        <q-tabs class="col">
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/gallery" label="Gallery" />
        </q-tabs>
        <q-toolbar class="col justify-center" style="top: 3px">
          <img
            src="../assets/brand/logo_rectangle.svg"
            @click="$router.push({ name: 'home' })"
            id="logo"
            style="width: 196px"
          />
        </q-toolbar>
        <q-tabs class="col">
          <q-route-tab to="/about" label="About" />
          <q-route-tab to="/contact" label="Contact" />
        </q-tabs>
      </div>
    </q-header>

    <!-- Mobile Header -->
    <q-header
      v-if="$q.screen.lt.sm"
      id="header"
      class="bg-white text-black row justify-center items-center"
    >
      <img
        src="../assets/brand/logo_rose.svg"
        @click="$router.push({ name: 'home' })"
        id="logo-mobile"
      />
    </q-header>
    <q-btn
      v-if="$q.screen.lt.sm"
      id="mobile-menu-button"
      class="text-secondary"
      @click="mobileMenu = true"
      flat
      dense
      round
      aria-label="Menu"
      icon="menu"
      size="xl"
    />
    <q-dialog
      v-model="mobileMenu"
      persistent
      maximized
      transition-show="slide-down"
      transition-hide="slide-up"
    >
      <q-card class="bg-primary text-black">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup />
        </q-bar>
        <q-card-section class="q-ma-lg">
          <div class="text-h2">
            <a href="/" class="text-black">Home</a>
          </div>
          <div class="text-h2">
            <a href="/gallery" class="text-black">Gallery</a>
          </div>
          <div class="text-h2 q-mt-sm">
            <a href="/about" class="text-black">About</a>
          </div>
          <div class="text-h2 q-mt-sm">
            <a href="/contact" class="text-black">Contact</a>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-white text-black" id="footer">
      <q-toolbar style="max-width: 1200px; margin: auto">
        <q-toolbar-title class="row justify-between">
          <div>Contact/Social Footer</div>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-black.svg" />
          </q-avatar>
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
#footer {
  box-shadow: 0px -5px 7px 0 rgba(0, 0, 0, 0.08);
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
