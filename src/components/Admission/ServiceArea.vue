<template>
    <q-card align="center">
        <q-card-section class="bg-primary text-white">
            <div class="text-h6">Територія обслуговування СШ №65</div>
        </q-card-section>
        <q-markup-table dense wrap-cells>
            <thead>
            <tr>
                <th class="text-left">Вулиця/Адреса</th>
                <th class="text-right">№ будинків</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in tableContent" :key="row.street">
                <td class="text-left">{{row.street}}</td>
                <td class="text-right">{{row.buildings}}</td>
            </tr>
            </tbody>
        </q-markup-table>
    </q-card>
</template>

<script>
    export default {
        name: 'ServiceArea',
      data() {
        return {
          tableContent: [
            {
              street: 'Челябінська',
              buildings: '1, 3, 5Б, 7, 9, 9Б, 11, 15, 17, 19'
            },
            {
              street: 'Нестайка',
              buildings: '1/18, 3, 3А, 5, 6, 8'
            },
            {
              street: 'Шептицького Митрополита',
              buildings: '1/2, 7, 10, 12, 14, 20, 20А, 22В, 24, 24В, 24Г, приватні будинки'
            },
            {
              street: 'Каховська',
              buildings: '60, 63, 65, 67, 69, 69А, 69/12, 71'
            },
            {
              street: 'Станція Київ-Дніпровський, 21 км',
              buildings: 'приватні будинки'
            },
            {
              street: 'Золота',
              buildings: 'приватні будинки'
            },
            {
              street: 'Комбінатна',
              buildings: '25, 25А, приватні будинки'
            },
            {
              street: 'Маланюка',
              buildings: '101, приватні будинки'
            },
            {
              street: 'Силікатна',
              buildings: 'приватні будинки'
            },
            {
              street: 'Цегельна',
              buildings: 'приватні будинки'
            },
            {
              street: 'Микільсько-Слобідська',
              buildings: '1, 1А'
            },
            {
              street: 'Андрія Аболмасова',
              buildings: '2, 3, 4, 4А, 5, 6, 7'
            },
            {
              street: 'Русанівські сади',
              buildings: 'приватні будинки'
            },
            {
              street: 'провулок Слобідський',
              buildings: 'приватні будинки'
            },
            {
              street: 'Чернігівська',
              buildings: '51'
            },
          ]
        }
      },
    }
</script>
