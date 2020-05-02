<template>
  <q-layout view="hhh lpR fff">

    <q-header bordered class="bg-primary text-white">

      <q-parallax
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        :height="200"
      >
        <q-toolbar class="absolute-bottom">
          <q-btn dense flat round icon="menu" @click="left = !left"/>
          <q-toolbar-title shrink>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            Title
          </q-toolbar-title>
          <navbar>
          </navbar>
        </q-toolbar>
      </q-parallax>

    </q-header>

    <q-drawer v-model="left" side="left" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
  import Navbar from "./MainLayoutComps/Navbar";
  export default {
    data() {
      return {
        left: false
      }
    },
    components: {Navbar}
  }
</script>
