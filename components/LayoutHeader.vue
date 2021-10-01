<template>
    <header class="w-full md:static bg-cBase px-2 py-1 z-50">
        <div class="mx-auto md:flex md:items-center">
          <div
            class="w-full mx-auto px-6 md:px-0 flex justify-center md:justify-between items-center h-10"
          >
            <div class="flex justify-center">
              <h1>
                <NuxtLink to="/" class="text-cMain text-lg font-bold leading-relaxed inline-block py-2">
                    <img class="w-40 mt-5" src="/images/logo_white.svg" alt="OntheRock">
                </NuxtLink>
              </h1>
            </div>
            <div class="hidden">
              <NuxtLink to="/search"><i class="las la-search text-cMain text-2xl la-flip-horizontal"></i></NuxtLink>
            </div>

            <!-- <div class="text-cBlack md:hidden">
              <button class="focus:outline-none" @click="isOpen = !isOpen">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    v-show="!isOpen"
                    d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
                  />
                  <path
                    v-show="isOpen"
                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                  />
                </svg>
              </button>
            </div> -->
          </div>
          <!-- <p>{{ windowSize }}</p> -->
          <div v-if="windowSize.x  >= minWidth" class="flex">
            <NuxtLink to="/map">
              <div class="text-cMain flex flex-col py-1">
                <div class="md:px-5 px-3 pt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/search">
              <div class="flex flex-col py-1">
                <div class="text-cMain md:px-5 px-3 pt-1">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6 m-auto">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </NuxtLink>
          </div>
          <!-- <nav
            class="w-full md:block absolute left-0 md:static bg-cWhite md:bg-none z-20"
            :class="isOpen ? 'block' : 'hidden'"
          >
            <ul class="md:flex md:justify-end md:items-end">
              <li class="w-full md:w-auto md:ml-5">
                <a
                  href="/concept/"
                  class="text-cBlack md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                  >コンセプト</a
                >
              </li>
              <li class="w-full md:w-auto md:ml-5">
                <a
                  href="/shop/"
                  class="text-cBlack md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                  >店舗情報</a
                >
              </li>
              <li class="w-full md:w-auto md:ml-5">
                <a
                  href="/menu/"
                  class="text-cBlack md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                  >メニュー</a
                >
              </li>
              <li class="w-full md:w-auto md:ml-5">
                <a
                  href="/information/"
                  class="text-cBlack md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
                  >お知らせ</a
                >
              </li>
            </ul>
          </nav> -->
        </div>
    </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data(){
      return{
          isOpen: false,
          windowSize: {
            x: 0,
            y: 0
          },
          minWidth: 768,
      }
  },
  mounted () {
    this.getWindowSize()
  },
  methods: {
    getWindowSize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  }
}
</script>

<style scoped>

</style>