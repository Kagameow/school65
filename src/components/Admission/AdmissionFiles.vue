<template>
  <q-card>
    <q-card-section class="bg-primary text-white"  align="center">
      <div class="text-h6">Нормативна база</div>
    </q-card-section>
    <q-card-section>
      <q-list>
        <q-item clickable
                v-ripple
                tag="a"
                :href="file.url"
                target="_blank"
                v-for="file in docs" :key="file.url">
          <q-item-section avatar>
            <q-icon :color="file.iconColor || 'negative'" :name="file.icon || 'fas fa-file-pdf'"/>
          </q-item-section>
          <q-item-section>{{file.title}}</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
  export default {
    name: 'AdmissionFiles',
    data() {
      return {
        docs: [
          {
            url: 'https://drive.google.com/file/d/1EOBjUh1LNrSDatBl63-oUUV3ZaC-I1Fe/view?usp=sharing',
            title: 'Наказ Департаменту освіти і науки «Про внесення змін до наказу від 05.02.2020 № 21 «Про прийом ' +
              'дітей до 1-х класів закладів загальної середньої освіти міста Києва у 2020 році'
          },
          {
            url: 'https://drive.google.com/file/d/1BIh2bGbBzwGaGvDgsGI2J5oQNzRQily6/view?usp=sharing',
            title: 'Наказ Департаменту освіти і науки «Про внесення змін до наказу управління освіти Дніпровської ' +
              'районної в місті Киеві державної адміністрації від 25.02.2020 № 37 «Про прийом дітей до ' +
              '1-х класів закладів загальної середньоі освіти Дніпровського району м. Києва у 2020 році» '
          },
          {
            url: 'https://drive.google.com/file/d/1BdjIZvuacv-GQTw_DdFGHeP8OGvFDaOm/view?usp=sharing',
            title: 'Наказ Департаменту освіти і науки «Про прийом дітей до 1-х класів закладів загальної ' +
              'середньої освіти м. Києва 2020 р.»'
          },
          {
            url: 'https://drive.google.com/file/d/1i_wwpLlz1k0N0UL0_zqH6xZ_wog1Uw4S/view?usp=sharing',
            title: 'Наказ управління освіти «Про прийом дітей до 1-х класів закладів загальної середньої освіти ' +
              'Дніпровського району м. Києва 2020 р.»'
          },
          {
            url: 'https://drive.google.com/file/d/1Wqb8m5PoopHD__R1g0eYnHNKypjsNG5N/view?usp=sharing',
            title: 'Розпорядження РДА «Про закріплення за закладами загальної середньої освіти Дніпровського р-ну ' +
              'м. Києва територій обслуговування»'
          }
        ]
      }
    },
  }
</script>
