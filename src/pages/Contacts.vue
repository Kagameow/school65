<template>
  <q-page padding>
    <div class="row align-center justify-center">
      <div class="col-xs-12 col-lg-8">
        <div class="row q-col-gutter-md ">

          <div class="col-xs-12 col-sm-6">
            <q-card>
              <q-img
                src="../assets/school-diagonal.jpg"
                basic
              >
                <div class="text-h6 absolute-bottom">Наші контакти</div>
              </q-img>
              <q-card-section>
                <q-list>
                  <q-item clickable
                          v-ripple
                          tag="a"
                          href="https://goo.gl/maps/5wfkewCC4pc3BFJ59"
                          target="_blank">
                    <q-item-section avatar>
                      <q-icon color="primary" name="place"/>
                    </q-item-section>
                    <q-item-section>вул. Челябінська, 5, м.Київ, 02002</q-item-section>
                  </q-item>

                  <q-item clickable
                          v-ripple
                          tag="a"
                          href="tel: +380443620590">
                    <q-item-section avatar>
                      <q-icon color="primary" name="phone"/>
                    </q-item-section>
                    <q-item-section>+380 44 362 05 90</q-item-section>
                  </q-item>

                  <q-item clickable
                          v-ripple
                          tag="a"
                          href="mailto: sch65@i.ua">
                    <q-item-section avatar>
                      <q-icon color="primary" name="alternate_email"/>
                    </q-item-section>
                    <q-item-section>sch65@i.ua</q-item-section>
                  </q-item>

                  <q-item clickable
                          v-ripple
                          tag="a"
                          href="https://www.facebook.com/school65.kiev.ua/"
                          target="_blank">
                    <q-item-section avatar>
                      <q-icon color="primary" name="fab fa-facebook-square"/>
                    </q-item-section>
                    <q-item-section>
                      Спеціалізована школа 65 м.Києва
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section avatar>
                      <q-icon color="primary" name="payment"/>
                    </q-item-section>
                    <q-item-section>Код ЄДРПОУ: 22874879</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-card>
              <q-card-section>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5080.309566973823!2d30.5947321762212!3d50.45684232231911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfe68fd14c93%3A0x6f131e8ea1188c62!2z0KHQv9C10YbQuNCw0LvQuNC30LjRgNC-0LLQsNC90L3QsNGPINGI0LrQvtC70LAg4oSWNjU!5e0!3m2!1sru!2sua!4v1588725943138!5m2!1sru!2sua"
                  width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                  tabindex="0"></iframe>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: "Contacts"
  }
</script>

<style scoped>

</style>
