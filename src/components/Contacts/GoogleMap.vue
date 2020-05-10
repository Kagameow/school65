<template>
    <q-card>
        <q-card-section>
          <div class="google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!
            1d5080.309566973823!2d30.5947321762212!3d50.45684232231911!3m2!1i1024
            !2i768!4f13.1!3m3!1m2!1s0x40d4cfe68fd14c93%3A0x6f131e8ea1188c62!
            2z0KHQv9C10YbQuNCw0LvQuNC30LjRgNC-0LLQsNC90L3QsNGPINGI0LrQvtC70LAg4oSWNjU!
            5e0!3m2!1sru!2sua!4v1588725943138!5m2!1sru!2sua"
                    width="600" height="450" frameborder="0" style="border:0"></iframe>
          </div>
        </q-card-section>
    </q-card>
</template>
<script>
    export default {
        name: 'GoogleMap'
    }
</script>

<style>
  .google-maps {
    position: relative;
    padding-bottom: 75%;
  height: 0;
    overflow: hidden;
  }
  .google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
</style>
