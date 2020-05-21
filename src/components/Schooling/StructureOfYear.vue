<template>
  <q-card>
    <q-card-section class="bg-primary text-white" align="center">
      <div class="text-h6">Структура 2019-2020 навчального року</div>
    </q-card-section>
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-lg-6">
        <q-card-section>
          У навчальному році передбачено п’ятиденний робочий тиждень.
          Навчальні заняття організовані за семестровою системою, орієнтовно у такі терміни:
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>2 вересня</q-item-label>
                <q-item-label caption>свято День Знань</q-item-label>
              </q-item-section>
            </q-item>
            <q-item-label header>Навчальні заняття:</q-item-label>
            <q-item>
              <q-item-section>
                <q-item-label>з 2 вересня по 24 грудня 2019 року</q-item-label>
                <q-item-label caption>Перший семестр</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>з 13 січня по 29 травня 2020 року</q-item-label>
                <q-item-label caption>Другий семестр</q-item-label>
              </q-item-section>
            </q-item>
            <q-item-label header>Канікули:</q-item-label>
            <q-item>
              <q-item-section>
                <q-item-label>з 28 жовтня по 03 листопада 2019 року</q-item-label>
                <q-item-label caption>Осінні канікули</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>з 25 грудня 2019 року по 12 січня 2020 року</q-item-label>
                <q-item-label caption>Зимові канікули</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>з 23 по 29 березня 2020 року</q-item-label>
                <q-item-label caption>Весняні канікули</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </div>
      <div class="col-xs-12 col-lg-6">
        <q-card-section align="center">
          <q-date minimal v-model="date" :events="events" :event-color="eventColor" color="primary"/>
        </q-card-section>
        <q-card-section align="center">
        <q-tab-panels
          v-model="date"
          animated
          transition-next="slideInRight"
          transition-prev="slideInLeft"
        >
          <q-tab-panel :name="date === periods.firstOfSeptember ? date : ''">
            <p>{{date}}</p>
          </q-tab-panel>
          <q-tab-panel :name="date > periods.firstHalfStart && date < periods.fallVacationStart ? date : ''">
            <p>{{date}}</p>
          </q-tab-panel>
          <q-tab-panel :name="date >= periods.fallVacationStart && date <= periods.fallVacationEnd ? date : ''">
            <p>{{date}}</p>
          </q-tab-panel>
          <q-tab-panel :name="date > periods.fallVacationEnd && date <= periods.firstHalfEnd ? date : ''">
            <p>{{date}}</p>
          </q-tab-panel>
          <q-tab-panel :name="date >= periods.winterVacationStart && date <= periods.winterVacationEnd ? date : ''">
            <p>{{date}}</p>
          </q-tab-panel>
          <q-tab-panel :name="date > periods.winterVacationEnd && date < periods.springVacationStart ? date : ''">
            <p>{{date}}</p>
          </q-tab-panel>
          <q-tab-panel :name="date >= periods.springVacationStart && date <= periods.springVacationEnd ? date : ''">
            <p>{{date}}</p>
          </q-tab-panel>
          <q-tab-panel :name="date > periods.springVacationEnd && date <= periods.secondHalfEnd ? date : ''">
            <p>{{date}}</p>
          </q-tab-panel>
        </q-tab-panels>
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
          secondHalfEnd: '2020/05/29'
        },
      }
    },
    methods: {
      events(date) {
        if (date >= this.periods.firstHalfStart && date <= this.periods.secondHalfEnd) {
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
        return 'primary'
      }
    },
  }
</script>
