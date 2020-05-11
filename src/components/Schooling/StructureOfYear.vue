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
      <q-date minimal v-model="date"/>
    </q-card-section>
        <q-card-section align="center">
          some text will be here
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
        date: '2019/01/01'
      }
    }
  }
</script>
