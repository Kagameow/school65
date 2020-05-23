<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-md-5 col-lg-4">
        <DocsCarousel/>
      </div>
      <div class="col-xs-12 col-md-4 col-lg-6">
        <q-card>
          <q-card-section class="bg-primary text-white"  align="center">
            <div class="text-h6">Нормативна база</div>
          </q-card-section>
          <q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
  import DocsCarousel from "components/Transparency/DocsCarousel";

  export default {
    name: "Transparency",
    components: {DocsCarousel}
  }
</script>

