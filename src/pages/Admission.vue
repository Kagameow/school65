<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-sm-5 col-lg-3 q-col-gutter-y-md">
        <div>
          <QuarantineWarn/>
        </div>
        <div>
          <ReceptionSchedule/>
        </div>
        <div>
          <Forecast/>
        </div>
      </div>
      <div class="col-xs-12 col-sm-7 col-lg-9 q-col-gutter-y-md">
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-lg-6">
            <ServiceArea/>
          </div>
          <div class="col-xs-12 col-lg-6">
            <AdmissionFiles/>
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
  import AdmissionFiles from "components/Admission/AdmissionFiles";
  import Forecast from "components/Admission/Forecast";

  export default {
    name: "Admission",
    components: {Forecast, AdmissionFiles, ReceptionSchedule, QuarantineWarn, ServiceArea}
  }
</script>

