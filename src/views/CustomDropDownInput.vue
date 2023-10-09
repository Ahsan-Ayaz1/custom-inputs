<script setup>
import { createInput } from '@formkit/vue'
import { ref } from 'vue';
import DropdownSelect from '../components/DropdownSelect.vue';

const options = [
    {
        key: 'view_balance',
        label: 'View Balance'
    },
    {
        key: 'transfer_amount',
        label: 'View Balance'
    },
    {
        key: 'Send Messages',
        label: 'Send Messages'
    },
    {
        key: 'view_messages',
        label: 'View Messages'
    },
    {
        key: 'generate_reports',
        label: 'Generate Reports'
    },
    {
        key: 'view_transactions',
        label: 'View Transaction'
    },
    {
        key: 'Initiate_transfer',
        label: 'Initiate Transfer'
    },
    {
        key: 'View_pending',
        label: 'View Pending'
    },
    {
        key: 'add_user_roles',
        label: 'Add User Roles'
    },
]
const dropdown = createInput(DropdownSelect, {
    props: ['options'],
})

const permission = ref({})
</script>

<template>
    <FormKit type="form" v-model="permission">
        <FormKit :type="dropdown" label="Select users" name="permissions" :options="options" />
    </FormKit>
    <pre wrap>{{ permission }}</pre>
</template>