<script setup>
import { createInput } from '@formkit/vue'
import { ref } from 'vue';
import InternationalTelephone from '../components/InternationalTelephone.vue';
import Combobox from "../components/Combobox.vue"

const intTelephone = createInput(InternationalTelephone, {
    props: ['options'],
})

const comboBox = createInput(Combobox, {
    props: ['options'],
})

const country_details = ref({})
const selectedItem = ref({})
</script>

<template>
    <div class="px-10">
        <FormKit type="form">
            <FormKit :type="intTelephone" label="Select Country" v-model="country_details" name="counrty_detail" />
            <pre>{{ country_details }}</pre>
            <FormKit type="text" name="name" id="name" validation="required|not:Admin" label="Name" help="Your full name"
                placeholder="Please add your name" />
            <FormKit prefix-icon="uploadCloud" type="file" label="Documents" accept=".pdf,.doc,.docx,.xml,.md,.csv"
                help="Select as many documents as you would like." />

            <FormKit v-model="value" type="radio" label="Stuffed animal" :options="{
                teddy: 'Bear',
                lama: 'Lama',
                lizard: 'Lizard',
                giraffe: 'Giraffe'
            }" help="What is your favorite stuffed animal?" />
            <pre>{{ value }}</pre>
            <FormKit :type="comboBox" label="Combobox" name="SelectedOptions" v-model="selectedItem"
                help="Select or Search Option" />
            <pre>{{ selectedItem }}</pre>
        </FormKit>
    </div>
</template>