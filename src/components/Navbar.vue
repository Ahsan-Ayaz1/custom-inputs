<template>
  <nav class="bg-gray-200 p-6 grid grid-cols-3">
    <RouterLink :to="{ name: 'Home' }" class="col-span-1">
      Country Code Input
    </RouterLink>

    <div class="col-span-1 flex justify-end items-center">
      <RouterLink :to="{ name: 'CustomDropDownInput' }">
        <button class="border py-2 px-4 rounded border-gray-500">Drop Down Input</button>
      </RouterLink>
    </div>
  </nav>
</template>