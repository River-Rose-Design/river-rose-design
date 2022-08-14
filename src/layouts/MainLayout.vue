<template>
  <q-layout view="hHh lpr fff">
    <!-- Desktop/Tablet Header -->
    <q-header
      v-if="$q.screen.gt.xs"
      id="header"
      class="bg-white text-black row"
    >
      <q-toolbar class="col">
        <img
          src="../assets/brand/logo_horizontal.svg"
          @click="$router.push({ name: 'home' })"
          id="logo"
        />
      </q-toolbar>
      <q-tabs align="right">
        <q-route-tab to="/gallery" label="Gallery" />
        <!-- <q-route-tab to="/about" label="About" />
        <q-route-tab to="/contact" label="Contact" /> -->
      </q-tabs>
    </q-header>

    <!-- Mobile Header -->
    <q-header
      v-if="$q.screen.lt.sm"
      elevated
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
            <a href="/gallery" class="text-black">Gallery</a>
          </div>
          <!-- <div class="text-h2 q-mt-sm">
            <a href="/about" class="text-black">About</a>
          </div>
          <div class="text-h2 q-mt-sm">
            <a href="/contact" class="text-black">Contact</a>
          </div> -->
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer elevated class="bg-white text-black">
      <q-toolbar>
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
  height: 80px;
}
#logo {
  height: 58px;
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
.q-tab__indicator {
  // TODO: Style the bottom tab indicator
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
