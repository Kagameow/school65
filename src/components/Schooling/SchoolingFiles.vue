<template>
  <q-card>
    <q-card-section class="bg-primary text-white" align="center">
      <div class="text-h6">Освітні програми</div>
    </q-card-section>
    <q-card-section>
      <q-list>
        <q-item
          target="_blank"
          v-for="file in docs" :key="file.url">
          <q-item-section avatar>
            <q-btn flat
                   round
                   color="primary"
                   icon="fas fa-file-word"
                   :href="file.doc"
                   type="a"
                   target="_blank"/>
          </q-item-section>
          <q-item-section avatar>
            <q-btn flat
                   round
                   color="negative"
                   icon="fas fa-file-pdf"
                   :href="file.pdf"
                   type="a"
                   target="_blank"/>
          </q-item-section>
          <q-item-section>{{file.title}}</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>
<script>
  export default {
    name: 'SchoolingFiles',
    data() {
      return {
        docs: [
          {
            pdf: 'https://drive.google.com/file/d/13jhDteMK_2TWXwYkDb4arA7q6hLHfn7q/view?usp=sharing',
            doc: 'https://drive.google.com/file/d/1HnLbsZ79BhhB17WX5t69s7vESqnQ0jpE/view?usp=sharing',
            title: 'Освітня програма 1-2 класи'
          },
          {
            pdf: 'https://drive.google.com/file/d/1cEKsvBrv4TgpinaeZ6XocGEVYvApeN3p/view?usp=sharing',
            doc: 'https://drive.google.com/file/d/1LVyO1vD-kBxBhULLE9Zfvn3Ve1GCaG4z/view?usp=sharing',
            title: 'Освітня програма 3-4 класи'
          },
          {
            pdf: 'https://drive.google.com/file/d/1ErYG3x5H8bhTzKR8WAKXBjD1yj3K1S3d/view?usp=sharing',
            doc: 'https://drive.google.com/file/d/1cT6F2M89vGHLsiC56WqirByVTSy8OC8W/view?usp=sharing',
            title: 'Експериментальний навчальний план для 3-Б класу'
          },
          {
            pdf: 'https://drive.google.com/file/d/1B8s2FB-cnQOGquMff6sQqRF3d8HmX9Jt/view?usp=sharing',
            doc: 'https://drive.google.com/file/d/1cdcaIr8NV4uXZuOq_8ntI5Ku5t8zqZfo/view?usp=sharing',
            title: 'Освітня програма 5-9 класи'
          },
          {
            pdf: 'https://drive.google.com/file/d/1ucw6575eDw2gg5U70s_TxSPCbZx1Ty9p/view?usp=sharing',
            doc: 'https://drive.google.com/file/d/12eMIK5JT4Tlxlhl-RaBv-evVYO4H5cQQ/view?usp=sharing',
            title: 'Освітня програма 10-11 класи'
          }
        ]
      }
    }
  }
</script>
