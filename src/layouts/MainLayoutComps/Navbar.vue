<template>
  <router-link :to="link.url">
    <template v-slot="props">
      <q-btn rounded v-bind="buttonProps(props)"
      >
        {{link.title}}
      </q-btn>
    </template>
  </router-link>
</template>

<script>
    export default {
        name: "Navbar.vue",
      props: {
        link: {
          type: Object,
        },
      },
      methods:{
        buttonProps ({ href, isActive, isExactActive }) {
          const props = {
            to: href,
            flat: true
          }
          if (isActive === true) {
            // props.color = isExactActive === true ? 'primary' : 'amber-9'
            props.flat = isExactActive !== true
            props.outline = isExactActive === true
          }
          return props
        }
      }
    }
</script>

<style scoped>

</style>
