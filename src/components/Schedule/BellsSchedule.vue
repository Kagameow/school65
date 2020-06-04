<template>
  <q-card align="center">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Розклад дзвінків</div>
    </q-card-section>
    <q-card-section>
      <transition enter-active-class="animated flipInY"
                  leave-active-class="flipOutY"
                  mode="out-in"
      >
      <div v-if="activeLesson && isLessons" class="text-h6" key="lesson">
        <div class="text-h4" ><q-icon name="fas fa-chalkboard-teacher"/></div>
        Зараз {{activeLesson}} урок!
      </div>
      <div v-if="!activeLesson && isLessons" class="text-positive text-h6" key="break">
        <div class="text-h4" ><q-icon name="fas fa-mug-hot"/></div>
        Зараз перерва!
      </div>
      <div v-if="!activeLesson && !isLessons && endedForToday" class="text-amber-10  text-h6" key="ended">
        <div class="text-h4" ><q-icon name="fas fa-laugh-beam"/></div>
        Уроки закінчилися!
      </div>
      <div v-if="!activeLesson && !isLessons && !endedForToday" class="text-blue-10 text-h6" key="notStarted">
        <div class="text-h4" ><q-icon name="fas fa-bed"/></div>
        Уроки ще не почалися
      </div>
      </transition>
    </q-card-section>
    <q-list separator>
      <q-item v-for="(bell,index) in bells"
              :key="bell"
              :active="currentBell(index)"
              active-class="bg-info text-white">
        <q-item-section avatar>
          <div class="text-bold">{{index+1}}</div>
        </q-item-section>
        <q-item-section>
          {{bell}}
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
        currentTime: '',
        activeLesson: 0,
        isLessons: false,
        bells:[
          '08:30 - 09:15',
          '09:25 - 10:10',
          '10:30 - 11:15',
          '11:35 - 12:20',
          '12:30 - 13:15',
          '13:25 - 14:10',
          '14:15 - 15:00',
        ]
      }
    },
    computed: {
      endedForToday() {
        return this.currentTime > this.bells[0].split(' - ')[0];
      }
    },
    methods: {
      timeFormatter(number) {
        if (number.toString().length < 2) {
          return '0' + number;
        }
        return number;
      },
      currentBell(index){
         const splittedBell = this.bells[index].split(' - ');
         const lessonBegin = splittedBell[0];
         const lessonEnd = splittedBell[1];
        if(this.currentTime >= lessonBegin && this.currentTime < lessonEnd){
          this.isLessons = true;
          this.activeLesson = index + 1;
          return true;
        }
        const nextBell = this.bells[index + 1];
        if(!nextBell){ return; }
        const splittedNextBell = nextBell.split(' - ');
        const nextLessonBegin = splittedNextBell[0];
        if(this.currentTime >= lessonEnd && this.currentTime < nextLessonBegin){
          this.isLessons = true;
          this.activeLesson = 0;
          return false;
        }
        const firstBell = this.bells[0].split(' - ')[0];
        const lastBell = this.bells[this.bells.length-1].split(' - ')[1];

        if(this.currentTime >= lastBell || this.currentTime < firstBell){
          this.isLessons = false;
          this.activeLesson = 0;
          return false;
        }
      }
    },
    created() {
      setInterval(() => {
        // let date = new Date();
        let date = new Date('December 18, 2020 11:45:00')
        this.currentTime = this.timeFormatter(date.getHours()) + ':' + this.timeFormatter(date.getMinutes());
        this.$emit('currentLessonWatcher', this.activeLesson)
        }, 1000)
    }
  }
</script>
