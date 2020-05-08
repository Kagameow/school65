<template>
    <q-card>
        <q-img
                src="../../assets/school-diagonal.jpg"
                basic
        >
            <div class="text-h6 absolute-bottom">Наші контакти</div>
        </q-img>
        <q-card-section>
            <q-list>
                <q-item clickable
                        v-ripple
                        tag="a"
                        href="https://goo.gl/maps/5wfkewCC4pc3BFJ59"
                        target="_blank">
                    <q-item-section avatar>
                        <q-icon color="primary" name="place"/>
                    </q-item-section>
                    <q-item-section>вул. Челябінська, 5, м.Київ, 02002</q-item-section>
                </q-item>

                <q-item clickable
                        v-ripple
                        tag="a"
                        href="tel: +380443620590">
                    <q-item-section avatar>
                        <q-icon color="primary" name="phone"/>
                    </q-item-section>
                    <q-item-section>+380 44 362 05 90</q-item-section>
                </q-item>

                <q-item clickable
                        v-ripple
                        tag="a"
                        href="mailto: sch65@i.ua">
                    <q-item-section avatar>
                        <q-icon color="primary" name="alternate_email"/>
                    </q-item-section>
                    <q-item-section>sch65@i.ua</q-item-section>
                </q-item>

                <q-item clickable
                        v-ripple
                        tag="a"
                        href="https://www.facebook.com/school65.kiev.ua/"
                        target="_blank">
                    <q-item-section avatar>
                        <q-icon color="primary" name="fab fa-facebook-square"/>
                    </q-item-section>
                    <q-item-section>
                        Спеціалізована школа 65 м.Києва
                    </q-item-section>
                </q-item>

                <q-item>
                    <q-item-section avatar>
                        <q-icon color="primary" name="payment"/>
                    </q-item-section>
                    <q-item-section>Код ЄДРПОУ: 22874879</q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
    </q-card>
</template>
<script>
    export default {
        name: 'ContactsCard'
    }
</script>
