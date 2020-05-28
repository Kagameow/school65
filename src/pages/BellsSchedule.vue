<template>
  <q-card align="center">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Розклад дзвінків</div>
    </q-card-section>
    <q-card-section>
      <div v-if="!activeLessonNo && isLessons">Зараз перерва</div>
      <div v-if="activeLessonNo && isLessons">Зараз {{activeLessonNo}} урок!</div>
      <div v-if="!activeLessonNo && !isLessons">Уроки ще не почалися</div>
    </q-card-section>
    <q-list separator>
      <q-item v-for="(bell,index) in bells"
              :key="bell.lessonStartHours"
              :active="active(bell, index)"
              active-class="bg-info text-white">
        <q-item-section avatar>
          <div class="text-bold">{{index+1}}</div>
        </q-item-section>
        <q-item-section>
          {{timeFormatter(bell.lessonStartHours)}}:{{timeFormatter(bell.lessonStartMinutes)}} -
          {{timeFormatter(bell.lessonEndHours)}}:{{timeFormatter(bell.lessonEndMinutes)}}
        </q-item-section>
      </q-item>
    </q-list>

  </q-card>
</template>
<script>
  export default {
    name: 'BellsSchedule',
    data() {
      return {
        now: new Date(),
        activeLessonNo: 0,
        isLessons: false,
        bells: [
          {
            lessonStartHours: 8,
            lessonStartMinutes: 30,
            lessonEndHours: 9,
            lessonEndMinutes: 15,
          },
          {
            lessonStartHours: 9,
            lessonStartMinutes: 25,
            lessonEndHours: 10,
            lessonEndMinutes: 10,
          },
          {
            lessonStartHours: 10,
            lessonStartMinutes: 30,
            lessonEndHours: 11,
            lessonEndMinutes: 15,
          },
          {
            lessonStartHours: 11,
            lessonStartMinutes: 35,
            lessonEndHours: 12,
            lessonEndMinutes: 20,
          },
          {
            lessonStartHours: 12,
            lessonStartMinutes: 30,
            lessonEndHours: 13,
            lessonEndMinutes: 15,
          },
          {
            lessonStartHours: 13,
            lessonStartMinutes: 25,
            lessonEndHours: 14,
            lessonEndMinutes: 10,
          },
          {
            lessonStartHours: 14,
            lessonStartMinutes: 15,
            lessonEndHours: 15,
            lessonEndMinutes: 0,
          },
        ]
      }
    },
    computed: {},
    methods: {
      timeFormatter(number) {
        if (number.toString().length < 2) {
          return '0' + number;
        }
        return number;
      },
      active(bell, index) {

        let currHour = this.now.getHours();
        let currMinutes = this.now.getMinutes();

        // let endHours = bell.lessonEndHours === 0 ? 24 : bell.lessonEndHours;
        // let endMinutes = bell.lessonEndMinutes === 0 ? 60 : bell.lessonEndMinutes;

        const lessonsStartHour = this.bells[0].lessonStartHours;
        const lessonsStartMinutes = this.bells[0].lessonStartMinutes;

        const lessonsEndHour = this.bells[this.bells.length - 1].lessonEndHours;
        const lessonsEndMinutes = this.bells[this.bells.length - 1].lessonEndMinutes;
        if (currHour >= lessonsStartHour && currHour <= lessonsEndHour) {
          if (
            (currHour === lessonsEndHour && currMinutes < lessonsEndMinutes) ||
            (lessonsStartHour < currHour && currHour < lessonsEndHour) ||
            (currHour === lessonsStartHour && currMinutes >= lessonsStartMinutes)
          ) {
            this.isLessons = true;
            if (currHour >= bell.lessonStartHours && currHour <= bell.lessonEndHours) {
              if (
                (currHour === bell.lessonStartHours && currMinutes >= bell.lessonStartMinutes) ||
                (currHour === bell.lessonEndHours && currMinutes < bell.lessonEndMinutes)
              ) {
                this.activeLessonNo = index + 1;
                return true;
              } else {
                return false;
              }
            }
          } else {
            this.isLessons = false;
            this.activeLessonNo = 0;
          }
        } else {
          this.isLessons = false;
          this.activeLessonNo = 0;
        }
        console.log(0)
      }
    },
    created() {
      console.log(this.now)
      setInterval(() => {
          //this.now = new Date('May 28, 2020 07:16:00');
          this.now = new Date()
        }
        , 1000)
    }
  }
</script>
