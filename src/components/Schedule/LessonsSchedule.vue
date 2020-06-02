<!--suppress NonAsciiCharacters -->
<template>
  <q-card>
    <q-card-section class="bg-primary text-white q-pa-sm">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title class="text-h6">
          Розклад занять {{chosenYear}}-{{chosenGroup}} класу
        </q-toolbar-title>
        <q-btn-dropdown class="q-mr-xs" color="primary" :label="chosenYear">
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
        <q-btn-dropdown color="primary" :label="chosenGroup">
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
           class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-grow">
        <q-card flat bordered class="q-my-xs">
          <q-card-section class="text-bold text-uppercase bg-grey-2">
            {{dayName}}
          </q-card-section>
        </q-card>
        <q-card flat bordered class="bg-grey-1">
          <q-list separator>
            <q-item v-for="(lesson, index) in day"
                    :key="lesson"
                    active-class="bg-info text-white">
              <q-item-section side>
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
    data() {
      return {
        chosenYear: '8',
        chosenGroup: 'Б',
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
              "П'ятниця": ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
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
              "П'ятниця": ['Географія', 'Фізика', 'Математика', 'історія України', 'Зарубіжна література',
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
  }
</script>
