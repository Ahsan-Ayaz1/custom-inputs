<template>
  <nav class="bg-gray-200 py-6 px-10 grid grid-cols-2 items-center">
    <RouterLink :to="{ name: 'Home' }" class="col-span-1">
      Custom Input
    </RouterLink>

    <div class="col-span-1 flex justify-end items-center">
      <RouterLink :to="{ name: 'CustomDropDownInput' }">
        <button class="border py-2 px-4 rounded border-gray-500">Drop Down Input</button>
      </RouterLink>
    </div>
  </nav>
</template>