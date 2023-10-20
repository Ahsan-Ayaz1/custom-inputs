<script setup>
import { ref, onMounted, watch } from "vue";
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";
const props = defineProps({
    context: Object
})
const countryData = ref(null);
const defaultCountry = ref('GB')

const handleInput = (number, phoneObject) => {
    countryData.value = phoneObject;
};

watch(countryData, (newValue, oldValue) => {
    if (newValue != undefined) {
        countryData.value = newValue;
        props.context.node.input(countryData.value)
    }
});
</script>

<template>
    <div class=" max-w-md shadow-none">
        <vue-tel-input @input="handleInput" :defaultCountry="defaultCountry" mode="international"></vue-tel-input>
    </div>
</template>

<style scoped></style>