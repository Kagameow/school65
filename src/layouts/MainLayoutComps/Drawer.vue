<template>
    <q-scroll-area class="fit">
      <q-list v-for="(menuItem, index) in menuList" :key="index">
        <q-item clickable v-ripple :to="menuItem.url" active-class="bg-primary text-white">
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>
            {{ menuItem.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
</template>

<script>
  export default {
    name: "Drawer",
    data() {
      return {
        menuList: [
          {
            title: 'Головна',
            url: '/home',
            icon: 'fas fa-school'
          },
          {
            title: 'Розклад занять',
            url: '/schedule',
            icon: 'fas fa-calendar'
          },
          {
            title: 'Прозорість та  відкритість',
            url: '/transparency',
            icon: 'fas fa-lock-open'
          },
          {
            title: 'Вступ до школи',
            url: '/admission',
            icon: 'fas fa-user-plus'
          },
          {
            title: 'Освітній процесс',
            url: '/schooling',
            icon: 'fas fa-chalkboard-teacher'
          },
          {
            title: 'Виховна робота',
            url: '/ethics',
            icon: 'fas fa-seedling'
          },
          {
            title: 'Контакти',
            url: '/contacts',
            icon: 'fas fa-address-card'
          }
        ]
      }
    },

  }
</script>

<style scoped>

</style>
