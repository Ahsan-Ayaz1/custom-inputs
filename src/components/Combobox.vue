<script setup>
import { computed, ref, watch } from "vue"
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    context: Object
})

const multiple = ref(props.context.attrs.multiple)
const people = ref(props.context.options)
const selected = ref([])
const query = ref('')
const filteredPeople = computed(() =>
    query.value === ''
        ? people.value
        : people.value.filter((person) =>
            person.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)

watch(selected, (newValue, oldValue) => {
    if (newValue) {
        props.context.node.input(newValue)
    }
})
</script>

<template>
    <Combobox v-model="selected" :multiple="multiple">
        <div class="relative mt-1">
            <div
                class="relative px-3 py-2 flex items-center max-w-md ring-1  focus:outline-none ring-gray-400 focus-within:ring-blue-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded mb-1">
                <ComboboxButton class="w-full justify-between inset-y-0 right-0 flex items-center">
                    <ComboboxInput
                        class="w-full border-none focus:outline-none pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                        :displayValue="(person) => person.name" @change="query = $event.target.value" aria-hidden="true" />
                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </ComboboxButton>
            </div>
            <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                @after-leave="query = ''">
                <ComboboxOptions :multiple="multiple">
                    <div v-if="filteredPeople.length === 0 && query !== ''">
                        Nothing found.
                    </div>

                    <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                        v-slot="{ selected, active }" class="border rounded">
                        <li class="relative text-sm cursor-default max-w-md select-none py-2 pl-10 pr-4" :class="{
                            'bg-blue-500 text-white': active,
                            'text-gray-900': !active,
                        }">
                            <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                {{ person.name }}
                            </span>
                            <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                                :class="{ 'text-white': active, 'text-blue-500': !active }">
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ComboboxOption>
                </ComboboxOptions>
            </TransitionRoot>
        </div>
    </Combobox>
</template>
