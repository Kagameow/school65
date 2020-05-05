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
        <navbar v-for="link in links" :link="link" :key="link.title">
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
        left: false,
        links: [
          {
            title: 'Розклад',
            url: '/schedule'
          },
          {
            title: 'Прозорість',
            url: '/transparency'
          },
          {
            title: 'Вступ до школи',
            url: '/admission'
          },
          {
            title: 'Освітній процесс',
            url: '/schooling'
          },
          {
            title: 'Виховна робота',
            url: '/ethics'
          },
          {
            title: 'Контакти',
            url: '/contacts'
          }
        ]
      }
    },
    components: {Navbar}
  }
</script>
