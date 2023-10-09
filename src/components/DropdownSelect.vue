<template>
    <div>
        <button id="dropdownSearchButton" @click.stop="preventClose" @click="toggleDropdown"
            class="inline-flex items-center px-4 py-4 text-sm font-medium text-center text-white bg-customBlue rounded dark:bg-customBlue dark:hover:bg-customBlue dark:focus:ring-customBlue"
            type="button">
            {{ selectedOption.length }} Items Selected
            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>
        <!-- Dropdown menu -->
        <transition name="fade" mode="out-in">
            <div v-if="showDropdown" id="dropdownSearch"
                class="z-10 p-2 origin-top bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                    <!-- Iterate over the items array and create checkboxes -->
                    <li v-for="(item, index) in options" :key="index">
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input :id="'checkbox-item-' + index" type="checkbox" :value="item.key" v-model="selectedOption"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label :for="'checkbox-item-' + index"
                                class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                {{ item.label }}
                            </label>
                        </div>
                    </li>
                </ul>
                <div class="mt-2">You select :{{ selectedOption.length }}</div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
const props = defineProps({
    context: Object
})

const showDropdown = ref(false);
const selectedOption = ref([]);
const options = props.context.options
watch(selectedOption, (newValue, oldValue) => {
    props.context.node.input(getSelectedObject())
})

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};

const getSelectedObject = () => {
    const selectedObject = {};
    options.forEach((item) => {
        selectedObject[item.key] = selectedOption.value.includes(item.key);
    });
    return selectedObject;
};

const closeDropdown = (event) => {
    const dropdown = document.getElementById('dropdownSearch');
    if (showDropdown.value && dropdown && !dropdown.contains(event.target)) {
        showDropdown.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
});

const preventClose = (event) => {
    event.stopPropagation();
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter {
    transition: all 0.2s ease-in-out;
    transform: scale(0, 0);
}

.fade-leave-to {
    opacity: 0;
}
</style>