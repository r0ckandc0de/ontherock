<template>
  <div class="bg-cWhite static uppercase font-semibold flex items-center md:flex-col md:ml-1 shadow-lg justify-around fixed w-screen bottom-0">
    <NuxtLink to="/">
      <div class="md:p-5 p-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-cBlack h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </div>
    </NuxtLink>
    <NuxtLink to="/search">
      <div class="md:p-5 p-3">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </NuxtLink>
      <!-- <div class="md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-cBlack h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
      </div> -->
  </div>
</template>

<script>
export default {
    name: 'LayoutNavigationBar'
}
</script>

<style scoped>

</style>