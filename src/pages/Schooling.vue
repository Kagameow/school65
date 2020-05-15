<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-lg-6">
        <StructureOfYear/>
      </div>
      <div class="col-xs-12 col-lg-5">
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

