<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script >
export default {
  name: 'App'
}
</script>

<style>
  body {
    background-image: url("assets/city.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    position: static;
  }
</style>
