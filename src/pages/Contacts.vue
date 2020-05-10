<template>
  <q-page padding>
        <div class="row q-col-gutter-md">
          <div class="col-xs-12 col-lg-4">
            <ContactsCard/>
          </div>
          <div class="col-xs-12 col-lg-8">
            <GoogleMap/>
          </div>
        </div>
  </q-page>
</template>

<script>
  import ContactsCard from "components/Contacts/ContactsCard";
  import GoogleMap from "components/Contacts/GoogleMap";

  export default {
    name: "Contacts",
    components: {GoogleMap, ContactsCard}
  }
</script>

