<template>
    <header class="w-full md:static bg-cBase px-2 py-1 z-50">
        <div class="md:max-w-3xl mx-auto md:flex md:items-center">
          <div
            class="w-full mx-auto px-6 md:px-0 flex justify-center md:justify-between items-center h-10"
          >
            <h1>
              <NuxtLink to="/" class="text-cMain text-lg font-bold leading-relaxed inline-block py-2">
                On the Rock
              </NuxtLink>
            </h1>
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
        }
    }
}
</script>

<style scoped>

</style>