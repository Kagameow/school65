<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-md-8 col-lg-6">
        <StructureOfYear/>
      </div>
      <div class="col-xs-12 col-md-4 col-lg-6">
        <SchoolingFiles/>
      </div>
    </div>
  </q-page>
</template>

<script>
  import StructureOfYear from "components/Schooling/StructureOfYear";
  import SchoolingFiles from "components/Schooling/SchoolingFiles";

  export default {
    name: "Schooling",
    components: {SchoolingFiles, StructureOfYear}
  }
</script>

