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
    background: linear-gradient( #bbb, transparent 1px), linear-gradient( 90deg, #bbb, transparent 1px);
    background-size: 20px 20px;
    background-position: center center;
  }
</style>
