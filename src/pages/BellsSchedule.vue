<template>
  <q-card align="center">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Розклад дзвінків</div>
    </q-card-section>
    <q-card-section>
      <q-list separator>
        <q-item v-for="(bell,index) in bells"
                :key="bell.lessonStartHours"
                :active="active(bell)"
                active-class="bg-info text-white">
          <q-item-section avatar>
            <div class="text-bold">{{index+1}}</div>
          </q-item-section>
          <q-separator vertical/>
          <q-item-section >
            {{timeFormatter(bell.lessonStartHours)}}:{{bell.lessonStartMinutes}} -
            {{timeFormatter(bell.lessonEndHours)}}:{{timeFormatter(bell.lessonEndMinutes)}}
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>
<script>
  export default {
    name: 'BellsSchedule',
    data() {
      return {
        now: new Date(),
        lessons: [
          '8:30 – 9:15',
          '9:25 – 10:10',
          '10:30 – 11:15',
          '11:35 – 12:20',
          '12:30 – 13:15',
          '13:25 – 14:10',
          '14:15 – 15:00'
        ],
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
        if(number.toString().length < 2){
          return '0' + number;
        }
        return number;
      },
      active(bell){

        let hour = this.now.getHours();
        let minutes = this.now.getMinutes();
        let endHours = bell.lessonEndHours === 0 ? 24 : bell.lessonEndHours;
        let endMinutes = bell.lessonEndMinutes === 0 ? 60 : bell.lessonEndMinutes;
        minutes = minutes === 0 ? 60 : minutes;
        console.log(hour, endHours, minutes, endMinutes)
        if (hour >= bell.lessonStartHours && hour <= endHours){
          if (minutes >= bell.lessonStartMinutes && minutes < endMinutes){
            return true;
          }
        }
        return false;
      }
    },
    created() {
      setInterval(() => {
          this.now = new Date()
        }
        , 1000)
    }
  }
</script>
