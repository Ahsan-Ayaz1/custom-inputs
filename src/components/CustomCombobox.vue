<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

const showDropdown = ref(false)
const selectedItems = ref([]);
const query = ref('')
const multiple = ref(props.context.attrs.multiple)
console.log(multiple)
const props = defineProps({
    context: Object
})

const peoples = ref(props.context.options)


const filteredPeople = computed(() =>
    query.value === ''
        ? peoples.value
        : peoples.value.filter((person) =>
            person.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)

const isSelected = (itemName) => {
    return selectedItems.value.includes(itemName);
};

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value
}

const closeDropdown = (event) => {
    const dropdown = document.getElementById('dropdownSearch');
    if (showDropdown.value && dropdown && !dropdown.contains(event.target)) {
        showDropdown.value = false;
    }
};

const selectItem = (itemName) => {
    if (multiple.value == true) {
        const index = selectedItems.value.indexOf(itemName);
        if (index !== -1) {
            selectedItems.value.splice(index, 1);
        } else {
            selectedItems.value.push(itemName);
        }
    } else {
        selectedItems.value = [itemName];
        showDropdown.value = false;
    }
};



watch(selectedItems.value, (newValue, oldValue) => {
    if (newValue) {
        props.context.node.input(newValue)
    }
})

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
    <div class="max-w-md">
        <label for="input-group-search" class="sr-only">Search</label>
        <div class="relative items-end" @click="toggleDropdown" @click.stop="preventClose">
            <input type="text" id="input-group-search" v-model="query"
                class="block px-3 py-2 items-center w-full max-w-md ring-1 focus:outline-none ring-gray-400 focus-within:ring-blue-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded mb-1">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="material-icons w-4 h-4">unfold_more</i>
            </div>
        </div>

        <div class="text-sm" v-if="filteredPeople.length === 0 && query !== ''">
            Nothing found.
        </div>

        <div id="dropdownSearch" v-if="showDropdown" class="z-10 bg-white max-w-md rounded-lg   dark:bg-gray-700 hcr">
            <ul class="max-w-md pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownSearchButton">
                <li class="border" v-for="item in filteredPeople" :key="item.id">
                    <div @click="selectItem(item.name)"
                        class="flex items-center my-1 pl-2 rounded hover:bg-blue-600 hover:text-white group">
                        <i :class="{ 'active': isSelected(item.name) }"
                            :style="{ visibility: isSelected(item.name) ? 'visible' : 'hidden' }"
                            class="material-icons group-hover:text-white">check</i>
                        <label :for="item.name" :class="{ 'font-semibold ': isSelected(item.name) }"
                            class="w-full py-2 ml-2 text-sm font-medium group-hover:text-white text-gray-900 rounded dark:text-gray-300">
                            {{ item.name }}
                        </label>
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
}

.active {
    color: #3B82F6;
}
</style>