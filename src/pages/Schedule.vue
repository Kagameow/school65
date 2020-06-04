<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-md-8 col-lg-10">
        <LessonsSchedule :currentLesson="currentLesson"/>
      </div>
      <div class="col-xs-12 col-md-4 col-lg-2">
        <BellsSchedule @currentLessonWatcher="currentLesson = $event"/>
      </div>
    </div>
  </q-page>
</template>

<script>
  import BellsSchedule from "components/Schedule/BellsSchedule";
  import LessonsSchedule from "components/Schedule/LessonsSchedule";

  export default {
    name: "Schedule",
    components: {LessonsSchedule, BellsSchedule},
    data() {
      return {
        currentLesson: 0,
      }
    },
  }
</script>

