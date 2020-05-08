<template>
    <q-card align="center">
        <q-card-section class="bg-primary text-white">
            <div class="text-h6">Графік прийому документів</div>
        </q-card-section>
        <q-markup-table flat wrap-cells>
            <tr>
                <td class="text-left">Понеділок</td>
                <td class="text-right">13:00 - 18:00</td>
            </tr>
            <tr>
                <td class="text-left">Четвер</td>
                <td class="text-right">09:00 - 15:00</td>
            </tr>
        </q-markup-table>
        <q-separator/>
        <q-card-section>
            <div class="text-subtitle2">Попередній запис за телефоном:</div>
            <div class="text-h6">
                <q-icon name="phone"/>
                (044) 362-05-90
            </div>
        </q-card-section>
    </q-card>
</template>
<script>
    export default {
        name: 'ReceptionSchedule'
    }
</script>
