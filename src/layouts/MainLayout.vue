<template>
  <q-layout view="hHh lpR fff">

    <q-header class="elevated text-white transparent" style="backdrop-filter: blur(8px)">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="left = !left"/>
          <q-toolbar-title shrink>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            Школа №65
          </q-toolbar-title>
          <navbar>
          </navbar>
        </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="text-white transparent">
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
