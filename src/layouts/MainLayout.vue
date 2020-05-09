<template>
  <q-layout view="hHh lpR lff">

    <q-header class="elevated text-white">
      <q-toolbar>
        <q-btn   flat dense icon="menu" @click="left = !left"/>
        <q-btn  flat dense icon="home" to="/"></q-btn>
        <q-toolbar-title>
<!--          <q-avatar>-->
<!--            <img src="../assets/logo_school.png">-->
<!--          </q-avatar>-->
        </q-toolbar-title>
        <div v-if="isDesktop">
<!--          <navbar v-for="link in links" :link="link" :key="link.title">-->
<!--          </navbar>-->
        </div>
        <q-space v-if="isDesktop"/>
        <q-btn  flat dense icon="fab fa-facebook-square"/>
      </q-toolbar>
    </q-header>

    <q-drawer  v-model="left" side="left"  :breakpoint="1264" bordered>
      <navbar v-for="link in links" :link="link" :key="link.title">
      </navbar>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="text-white">
      <q-toolbar>
<!--        <q-toolbar-title>-->
<!--          <q-avatar>-->
<!--            <img src="../assets/logo_school.png">-->
<!--          </q-avatar>-->
<!--          Title-->
<!--        </q-toolbar-title>-->
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
    computed: {
      isDesktop() {
        return this.$q.platform.is.desktop
      }
    },
    components: {Navbar}
  }
</script>
