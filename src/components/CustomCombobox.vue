<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
    context: Object
})

const showDropdown = ref('false')

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
    console.log(showDropdown.value)
}

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

<template>
    <!-- Dropdown menu -->
    <div class=" max-w-md">
        <label for="input-group-search" class="sr-only">Search</label>
        <div class="relative items-end" @click="toggleDropdown" @click.stop="preventClose">
            <input type="text" id="input-group-search"
                class="block px-3 py-2 items-center w-full max-w-md ring-1 focus:outline-none ring-gray-400 focus-within:ring-blue-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded mb-1">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="material-icons w-4 h-4">unfold_more</i>
            </div>
        </div>


        <div id="dropdownSearch" v-if="showDropdown == true"
            class="z-10 bg-white max-w-md rounded-lg shadow  dark:bg-gray-700">
            <ul class="h-48 max-w-md px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownSearchButton">
                <li>
                    <div class="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="checkbox-item-11" type="checkbox" value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="checkbox-item-11"
                            class="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Bonnie
                            Green</label>
                    </div>
                </li>
                <li>
                    <div class="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input checked id="checkbox-item-12" type="checkbox" value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="checkbox-item-12"
                            class="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Jese
                            Leos</label>
                    </div>
                </li>
                <li>
                    <div class="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="checkbox-item-13" type="checkbox" value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="checkbox-item-13"
                            class="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Michael
                            Gough</label>
                    </div>
                </li>
                <li>
                    <div class="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="checkbox-item-14" type="checkbox" value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="checkbox-item-14"
                            class="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Robert
                            Wall</label>
                    </div>
                </li>
                <li>
                    <div class="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <input id="checkbox-item-15" type="checkbox" value=""
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="checkbox-item-15"
                            class="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Joseph
                            Mcfall</label>
                    </div>
                </li>

            </ul>

        </div>
    </div>
</template>

<style>
.material-icons {

    font-size: 20px !important;
    color: gray;
    cursor: pointer !important;
}
</style>