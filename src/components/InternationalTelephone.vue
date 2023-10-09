<template>
    <div class="flex">
        <MazPhoneNumberInput v-model="phoneNumber" show-code-on-list @update="results = context.node.input($event)"
            :success="results?.isValid" :translations="{
                countrySelector: {
                    placeholder: 'Country code',
                    error: 'Choose country',
                    searchPlaceholder: 'Search a country',
                },

            }" />
    </div>
</template>

<script setup>
const props = defineProps({
    context: Object
})
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import { ref } from 'vue'
const phoneNumber = ref()
const results = ref()
</script>
