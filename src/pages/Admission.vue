<template>
  <q-page padding>
    <div class="row align-center justify-center">
      <div class="col-xs-12 col-lg-8">
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-sm-4 q-col-gutter-y-md">
            <div class="col-xs-12 col-sm-3">
              <QuarantineWarn/>
            </div>
            <div class="col-xs-12 col-sm-4">
              <ReceptionSchedule/>
            </div>
          </div>
          <div class="col-xs-12 col-sm-8">
            <ServiceArea/>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import ServiceArea from "components/Admission/ServiceArea";
  import QuarantineWarn from "components/Admission/QuarantineWarn";
  import ReceptionSchedule from "components/Admission/ReceptionSchedule";

  export default {
    name: "Admission",
    components: {ReceptionSchedule, QuarantineWarn, ServiceArea}
  }
</script>

