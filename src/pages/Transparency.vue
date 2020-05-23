<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-md-4 col-lg-4">
        <DocsCarousel/>
      </div>
      <div class="col-xs-12 col-md-4 col-lg-4">
        <Statute/>
      </div>
      <div class="col-xs-12 col-md-4 col-lg-4">
        <Finances/>
      </div>
    </div>
  </q-page>
</template>

<script>
  import DocsCarousel from "components/Transparency/DocsCarousel";
  import Statute from "components/Transparency/Statute";
  import Finances from "components/Transparency/Finances";

  export default {
    name: "Transparency",
    components: {Finances, Statute, DocsCarousel}
  }
</script>

