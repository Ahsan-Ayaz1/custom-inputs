<script setup>
import { ref, onMounted, watch } from "vue";
import { VueTelInput } from "vue3-tel-input";
import "vue3-tel-input/dist/vue3-tel-input.css";
const props = defineProps({
    context: Object
})

console.log(props.context)
const countryData = ref(null);

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
    <div
        class="formkit-input appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none max-w-md  border-none text-base text-gray-700 placeholder-gray-400">
        <vue-tel-input @input="handleInput" mode="international"></vue-tel-input>
    </div>
</template>

<style scoped></style>