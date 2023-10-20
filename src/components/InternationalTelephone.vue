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
    <div class=" max-w-md shadow-none  focus:ring-blue-500 focus:border-none border-none">
        <vue-tel-input @input="handleInput" :defaultCountry="defaultCountry" mode="international"></vue-tel-input>
    </div>
</template>

<style scoped>
.vue-tel-input {
    border-radius: 0px !important;
    padding: 0.2rem 0.5rem 0.2rem 0rem;
    display: flex;
    border: 1px solid #9ca3af;
}
</style>