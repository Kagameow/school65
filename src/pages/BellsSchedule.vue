<template>
    <q-card align="center">
        <q-card-section class="bg-primary text-white">
            <div class="text-h6">Розклад дзвінків</div>
        </q-card-section>
      <q-card-section>
      <q-list separator>
        <q-item v-for="(lesson, index) in lessons" :key="lesson">
          <q-item-section avatar>
            <div class="text-bold">{{index+1}}</div>
          </q-item-section>
          <q-separator vertical />
          <q-item-section>{{lesson}}</q-item-section>
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
          lessons: [
            '8:30 – 9:15',
            '9:25 – 10:10',
            '10:30 – 11:15',
            '11:35 – 12:20',
            '12:30 – 13:15',
            '13:25 – 14:10',
            '14:15 – 15:00'
          ]
        }
      },
    }
</script>
