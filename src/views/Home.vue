<script setup>
import { createInput } from '@formkit/vue'
import { ref } from 'vue';
import InternationalTelephone from '../components/InternationalTelephone.vue';

const intTelephone = createInput(InternationalTelephone, {
    props: ['options'],
})

const country_details = ref({})
</script>

<template>
    <FormKit type="form" v-model="country_details">
        <FormKit :type="intTelephone" label="Select Country" name="counrty_detail" />
    </FormKit>
    <pre wrap>{{ country_details }}</pre>
</template>