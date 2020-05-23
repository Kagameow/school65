<template>
  <q-card>
    <q-card-section class="bg-primary text-white" align="center">
      <div class="text-h6">Нормативна база</div>
    </q-card-section>
    <q-card-section>
      <q-carousel
        swipeable
        animated
        arrows
        control-color="primary"
        v-model="slide"
        :fullscreen.sync="fullscreen"
        infinite
        height="550px"
      >
        <q-carousel-slide class="uncropped-image" :name="1" img-src="../../assets/Transparency/attestation.jpg"/>
        <q-carousel-slide class="uncropped-image" :name="2" img-src="../../assets/Transparency/registration.jpg"/>

        <template v-slot:control>
          <q-carousel-control
            position="bottom-right"
            :offset="[18, 18]"
          >
            <q-btn
              push round dense color="white" text-color="primary"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </q-card-section>
  </q-card>
</template>
<script>
  export default {
    name: 'DocsCarousel',
    data() {
      return {
        slide: 1,
        fullscreen: false
      }
    },
  }
</script>
<style>
  .uncropped-image {
    background-size: contain; /* don't crop the image  */
    background-repeat: no-repeat; /* only show the image one time  */
  }
</style>
