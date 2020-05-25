<template>
    <q-page padding>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-md-8 col-lg-10">
          <q-card align="center">
            <q-card-section class="bg-primary text-white">
              <div class="text-h6">Територія обслуговування СШ №65</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-xs-12 col-md-4 col-lg-2">
          <BellsSchedule/>
        </div>
      </div>
    </q-page>
</template>

<script>
  import BellsSchedule from "pages/BellsSchedule";

  export default {
        name: "Schedule",
      components: {BellsSchedule}
    }
</script>

