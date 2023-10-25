<script setup>
import { createInput } from '@formkit/vue'
import { ref } from 'vue';
import InternationalTelephone from '../components/InternationalTelephone.vue';
import Combobox from "../components/Combobox.vue"
import CustomCombobox from '../components/CustomCombobox.vue';

const intTelephone = createInput(InternationalTelephone, {
    props: ['options'],
})

// For Custom input (Combobox)
const options = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

const comboBox = createInput(Combobox, {
    props: ['options'],
})

const customCombobox = createInput(CustomCombobox, {
    props: ['options'],
})

const country_details = ref({})
const selectedItem = ref([])
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

            <FormKit type="radio" label="Stuffed animal" :options="{
                teddy: 'Bear',
                lama: 'Lama',
                lizard: 'Lizard',
                giraffe: 'Giraffe'
            }" help="What is your favorite stuffed animal?" />

            <FormKit :type="comboBox" label="Combobox" :multiple="true" :options="options" name="SelectedOptions"
                v-model="selectedItem" help="Select or Search Option" id="headlessui-combobox-input-2" />

            <FormKit :type="customCombobox" label="CustomCombobox" :options="options" name="SelectedOptions"
                help="Select or Search Option" id="" />

        </FormKit>
    </div>
</template>