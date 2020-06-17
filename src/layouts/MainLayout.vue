<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="text-white">
      <q-toolbar>
        <q-btn   flat icon="menu" @click="open = !open"/>
        <q-toolbar-title>
          <span v-if="isDesktop">Спеціалізована школа I-III ступенів № 65 м. Києва</span>
          <span v-else>Школа № 65</span>
        </q-toolbar-title>
        <div v-if="isDesktop">
        </div>
        <q-space v-if="isDesktop"/>
        <q-btn  href="https://www.facebook.com/school65.kiev.ua/"
                type="a"
                flat
                icon="fab fa-facebook-square"
                target="_blank"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="open"
              side="left"
              :breakpoint="1264"
              content-class="bg-grey-3"
              bordered>
    <drawer></drawer>
    </q-drawer>


    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer  elevated class="text-white">
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
  import Drawer from "layouts/MainLayoutComps/Drawer";

  export default {
    data() {
      return {
        open: true,
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
    components: {Drawer}
  }
</script>
