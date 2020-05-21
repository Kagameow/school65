<template>
  <q-card>
    <q-card-section class="bg-primary text-white" align="center">
      <div class="text-h6">Структура 2019-2020 навчального року</div>
    </q-card-section>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>{{periods.firstOfSeptember}}</q-item-label>
                <q-item-label caption>свято День Знань</q-item-label>
              </q-item-section>
            </q-item>
            <q-item-label header>Навчальні заняття:</q-item-label>
            <q-item>
              <q-item-section>
                <q-item-label>з {{periods.firstHalfStart}} по {{periods.firstHalfEnd}}</q-item-label>
                <q-item-label caption>Перший семестр</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>з {{periods.secondHalfStart}} по {{periods.secondHalfEnd}}</q-item-label>
                <q-item-label caption>Другий семестр</q-item-label>
              </q-item-section>
            </q-item>
            <q-item-label header>Канікули:</q-item-label>
            <q-item>
              <q-item-section>
                <q-item-label>з {{periods.fallVacationStart}} по {{periods.fallVacationEnd}}</q-item-label>
                <q-item-label caption>Осінні канікули</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>з {{periods.winterVacationStart}} по {{periods.winterVacationEnd}}</q-item-label>
                <q-item-label caption>Зимові канікули</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>з {{periods.springVacationStart}} по {{periods.springVacationEnd}}</q-item-label>
                <q-item-label caption>Весняні канікули</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-card-section align="center">
          <q-date minimal flat v-model="date" :events="events" :event-color="eventColor" color="primary"/>
        </q-card-section>
        <q-card-section align="center">
          <transition
            enter-active-class="animated flipInY"
            leave-active-class="flipOutY"
            mode="out-in"
          >
            <div key="firstSeptember" v-if="firstSeptemberPanel">Knowledge Day</div>
            <div key="fall" v-if="fallVacationPanel">Fall Vacation</div>
            <div key="winter" v-if="winterVacationPanel">Winter Vacation</div>
            <div key="spring" v-if="springVacationPanel">Spring Vacation</div>
            <div key="summer" v-if="summerVacationPanel">Summer Vacation</div>
            <div key="study" v-else-if="studyDaysPanelElseIf">Study day</div>
          </transition>
        </q-card-section>
      </div>
    </div>
  </q-card>
</template>
<script>
  export default {
    name: 'StructureOfYear',
    data() {
      return {
        date: '2019/09/01',
        periods: {
          pastSummerStart: '2019/06/01',
          pastSummerEnd: '2019/09/01',
          firstOfSeptember: '2019/09/02',
          firstHalfStart: '2019/09/02',
          fallVacationStart: '2019/10/28',
          fallVacationEnd: '2019/11/03',
          firstHalfEnd: '2019/12/24',
          winterVacationStart: '2019/12/25',
          winterVacationEnd: '2020/01/12',
          secondHalfStart: '2020/01/13',
          springVacationStart: '2020/03/23',
          springVacationEnd: '2020/03/29',
          secondHalfEnd: '2020/05/29',
          nextSummerStart: '2020/06/01',
          nextSummerEnd: '2020/08/31'
        },
      }
    },
    methods: {
      events(date) {
        if (date >= this.periods.pastSummerStart && date <= this.periods.nextSummerEnd) {
          return true;
        }
      },
      eventColor(date) {
        if (date === this.periods.firstOfSeptember) {
          return 'orange'
        }
        if (date >= this.periods.fallVacationStart && date <= this.periods.fallVacationEnd) {
          return 'red'
        }
        if (date >= this.periods.winterVacationStart && date <= this.periods.winterVacationEnd) {
          return 'blue'
        }
        if (date >= this.periods.springVacationStart && date <= this.periods.springVacationEnd) {
          return 'green'
        }
        if (date >= this.periods.pastSummerStart && date <= this.periods.pastSummerEnd ||
          date >= this.periods.nextSummerStart && date <= this.periods.nextSummerEnd){
          return 'yellow'
        }
        return 'primary'
      },
    },
    computed: {
      firstSeptemberPanel() {
        return this.date === this.periods.firstOfSeptember;
      },
      fallVacationPanel() {
        return this.date >= this.periods.fallVacationStart && this.date <= this.periods.fallVacationEnd
      },
      winterVacationPanel() {
        return this.date >=  this.periods.winterVacationStart && this.date <= this.periods.winterVacationEnd
      },
      springVacationPanel() {
        return this.date >= this.periods.springVacationStart && this.date <= this.periods.springVacationEnd
      },
      summerVacationPanel() {
        return this.date >= this.periods.pastSummerStart && this.date <= this.periods.pastSummerEnd ||
          this.date >= this.periods.nextSummerStart && this.date <= this.periods.nextSummerEnd
      },
      studyDaysPanelElseIf() {
        return this.date >= this.periods.firstHalfStart && this.date <= this.periods.secondHalfEnd
      },
    },
  }
</script>
