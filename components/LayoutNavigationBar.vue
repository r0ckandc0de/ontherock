<template>
  <div class="md:hidden bg-cWhite static uppercase font-semibold flex items-center md:flex-col md:ml-1 shadow-lg justify-around fixed w-screen bottom-0">
    <NuxtLink to="/">
    <div class="flex flex-col py-1">
      <div class="md:px-5 px-3 pt-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-cBlack h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>
      <div class="text-xxs m-auto">Home</div>
    </div>
    </NuxtLink>
    <NuxtLink to="/search">
      <div class="flex flex-col py-1">
        <div class="md:px-5 px-3 pt-1">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 m-auto">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <div class="text-xxs m-auto">Search</div>
      </div>
    </NuxtLink>
    <NuxtLink to="/map">
      <div class="flex flex-col py-1">
        <div class="md:px-5 px-3 pt-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div class="text-xxs m-auto">Map</div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
    name: 'LayoutNavigationBar'
}
</script>

<style scoped>

</style>