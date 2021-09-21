<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <layout-tab />

    <div class="flex flex-col min-h-screen bg-cBase px-3">
      <!-- 検索 -->
      <div class="pt-4 md:pt-6">
        <form
          action="."
          @submit.prevent
        >
          <div class="">
            <h2 class="font-sans text-lg text-cMain py-2">Search</h2>
            <div class="flex border-b">
                <input
                type="search"
                @keypress.enter="search"
                v-model="input"
                placeholder="Type it in"
                class="outline-none py-4 flex-1 min-w-0 bg-cBase text-cMain"
                >

            </div>
          </div>
        </form>
      </div>

      <layout-movie-list :bool="movies.length >= 1">
        <base-card 
          v-for="(movie, index) in movies[0]"
          :key='index'
          :title="movie.title"
          :url="movie.url"
          :id="movie.id"
        />
        <div v-show="movies[0] == ''">
          <p class="text-cMain">sorry... No Movies</p>
        </div>
      </layout-movie-list>

      <!-- タグの一覧 -->
      <div v-if="isTags" class="py-4">
        <div class="flex flex-col">
          <h2 class="font-sans text-lg text-cMain pt-8 pb-2">Type</h2>
          <ul class="grid grid-cols-2 gap-3">
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Boulder</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Sport</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Trad</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">BigWall</NuxtLink></li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h2 class="font-sans text-lg text-cMain pt-8 pb-2">Angles</h2>
          <ul class="grid grid-cols-2 gap-3">
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Slab</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Roof</NuxtLink></li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h2 class="font-sans text-lg text-cMain pt-8 pb-2">Boulder</h2>
          <ul class="grid grid-cols-2 gap-3">
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Highball</NuxtLink></li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h2 class="font-sans text-lg text-cMain pt-8 pb-2">Sport</h2>
          <ul class="grid grid-cols-2 gap-3">
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Highball</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Sport</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Trad</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">BigWall</NuxtLink></li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h2 class="font-sans text-lg text-cMain pt-8 pb-2">Trad</h2>
          <ul class="grid grid-cols-2 gap-3">
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">R/X</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Offwidth</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Wide Boyz</NuxtLink></li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h2 class="font-sans text-lg text-cMain pt-8 pb-2">BigWall</h2>
          <ul class="grid grid-cols-2 gap-3">
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">El Capitan</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Half Dome</NuxtLink></li>
            <li class="text-cBase bg-cMain border-cMain  border text-center"><NuxtLink to="/search">Patagonia</NuxtLink></li>
          </ul>
        </div>
      </div>
      <!-- タグここまで -->

      <!-- <div class="box-x-wrapper">
        <div class="mt-6">
          <div class="py-2 fs-small-regular">Boulder</div>
          <ul class="grid grid-cols-12 gap-4 my-4">
            <li class="flex flex-col col-span-6">
              <button class="transition-colors duration-100 ease-in bg-base-elevated-light hover:bg-base-push-light">
                <div class="flex items-center w-full h-12 p-3 space-x-2 fs-base-interface-bold">
                  <span>Tag</span>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div> -->
    </div>

  <!-- layoutここまで -->
  </layout-wrapper>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      input:'',
      searchable: false,
      movies:[],
      isTags:true
    };
  },

  methods: {

    search() {
      if(this.input === '') return
      console.log(this.input)
      const apiUrl = this.$config.apiUrl
      const apiKey = this.$config.apiKey
      const endPoint = 'movie'

      this.movies = []
      this.isTags = false
      axios.get(`${apiUrl}/${endPoint}?q=${this.input}`, {
        headers: { 'X-API-KEY': apiKey }
        }).then(response => {
          console.log('response')
          this.movies.push(response.data.contents)
        })
      },

    getClear(){
      this.input = ''
      this.movies = []
    }

  },
};

</script>