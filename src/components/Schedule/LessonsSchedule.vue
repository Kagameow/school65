<!--suppress NonAsciiCharacters -->
<template>
  <q-card>
    <q-card-section class="bg-primary text-white q-pa-sm">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title class="gt-xs text-h6">
          Розклад занять {{chosenYear}}-{{chosenGroup}} класу
        </q-toolbar-title> <!-- NOT vertical mobile -->
        <q-btn-dropdown  dense flat class="xs q-mr-xs" color="" :label="chosenDay"> <!-- vertical mobile only-->
          <q-list>
            <q-item
              v-for="(dayContent, dayKey) in schedule[chosenYear][chosenGroup]" :key="dayKey"
              clickable
              v-close-popup
              @click="chosenDay = dayKey">
              <q-item-section>
                <q-item-label>{{dayKey}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-space class="xs"></q-space> <!-- vertical mobile only-->
        <q-btn-dropdown  dense flat class="q-mr-xs" color="white" :label="chosenYear">
          <q-list>
            <q-item
              v-for="(yearContent, yearKey) in schedule" :key="yearKey"
              clickable
              v-close-popup
              @click="yearSelector(yearKey)">
              <q-item-section>
                <q-item-label>{{yearKey}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown dense flat color="" :label="chosenGroup">
          <q-list>
            <q-item
              v-for="(groupContent, groupKey) in schedule[chosenYear]" :key="groupKey"
              clickable
              v-close-popup
              @click="chosenGroup = groupKey">
              <q-item-section>
                <q-item-label>{{groupKey}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-card-section>
    <div class="row" align="center">
      <div v-for="(day, dayName) in schedule[chosenYear][chosenGroup]"
           :key="dayName"
           class="gt-xs q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-grow"> <!-- NOT vertical mobile -->
        <q-card flat bordered class="q-my-xs">
          <q-card-section class="text-bold text-uppercase"
                          :class="dayName === currentDay ? ['bg-info', 'text-white'] : 'bg-grey-2'">
            {{dayName}}
          </q-card-section>
        </q-card>
        <q-card flat bordered class="bg-grey-1">
          <q-list separator>
            <q-item v-for="(lesson, index) in day"
                    :key="lesson"
                    active-class="bg-info text-white"
                    :active="currentLesson === index+1 && dayName === currentDay">
              <q-item-section side
                              :class="currentLesson === index+1 && dayName === currentDay ? 'text-white' : ''">
                <div class="text-bold">{{index+1}}</div>
              </q-item-section>
              <q-item-section>
                {{lesson}}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
      <div class="xs q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-grow"> <!-- vertical mobile only-->
        <q-card flat
                bordered
                class="bg-grey-1">
          <q-list separator>
            <q-item v-for="(lesson, index) in schedule[chosenYear][chosenGroup][chosenDay]"
                    :key="lesson"
                    active-class="text-bold"
                    :active="currentLesson === index+1 && chosenDay === currentDay"
            >
              <q-item-section side
                              :class="currentLesson === index+1 && dayName === currentDay ? 'text-white' : ''"
              >
                <div class="text-bold">{{index+1}}</div>
              </q-item-section>
              <q-item-section>
                {{lesson}}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </q-card>
</template>
<script>
  export default {
    name: 'LessonsSchedule',
    props: {
      currentLesson: {
        type: Number,
        default: 0
      },
    },
    data() {
      return {
        chosenYear: '8',
        chosenGroup: 'Б',
        chosenDay: 'Понеділок',
        currentDay: '',
        schedule: {
          '1': {},
          '2': {},
          '3': {},
          '4': {},
          '5': {},
          '6': {},
          '7': {
            'А': {
              'Понеділок': {}
            },
            'Б': {
              'Понеділок': ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
                'Англійська мова', 'Українська література'],
              'Вівторок': ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
                'Англійська мова', 'Українська література'],
              'Середа': ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
                'Англійська мова', 'Українська література'],
              'Четвер': ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
                'Англійська мова'],
              "Пʼятниця": ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
                'Англійська мова', 'Українська література']
            }
          },
          '8': {
            'А': {
              'Понеділок': {}
            },
            'Б': {
              'Понеділок': ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
                'Англійська мова', 'Українська література'],
              'Вівторок': ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
                'Англійська мова', 'Українська література'],
              'Середа': ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
                'Англійська мова', 'Українська література'],
              'Четвер': ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
                'Англійська мова'],
              "Пʼятниця": ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
                'Англійська мова', 'Українська література']
            }
          },
          '9': {},
          '10': {},
          '11': {}
        }
      }
    },
    methods: {
      yearSelector(yearKey) {
        if (!this.schedule[yearKey][this.chosenGroup]) {
          this.chosenGroup = 'А';
        }
        this.chosenYear = yearKey
      }
    },
    computed: {
      isMobile() {
        return this.$q.screen.lt.sm;
      }
    },
    created() {
      const date = new Date();
      this.currentDay = new Intl.DateTimeFormat('uk-UA', { weekday: 'long'}).format(date);
      this.currentDay = this.currentDay.charAt(0).toUpperCase() + this.currentDay.slice(1);
      console.log(this.currentDay);
      this.chosenDay = this.currentDay;
      console.log(this.currentLesson)
    }
  }
</script>
