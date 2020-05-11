<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-lg-6">
        <StructureOfYear/>
      </div>
    </div>
  </q-page>
</template>

<script>
  import StructureOfYear from "components/Schooling/StructureOfYear";

  export default {
    name: "Schooling",
    components: {StructureOfYear}
  }
</script>

