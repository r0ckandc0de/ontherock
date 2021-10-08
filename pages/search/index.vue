<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <!-- <layout-tab /> -->

    <div class="flex flex-col min-h-screen bg-cBase px-3">
      <!-- 検索 -->
      <div class="pt-4 md:pt-6">
        <button @click="getReset"><h2 class="font-sans text-lg text-cMain py-2 tracking-wider">Search</h2></button>
        <form
          action="."
          @submit.prevent
        >
          <div>
            <!-- <h2 class="font-sans text-lg text-cMain py-2">Search</h2> -->
            <div class="flex border-b">
                <input
                type="search"
                @keypress.enter="search"
                v-model="input"
                placeholder="Type it in"
                class="outline-none py-4 flex-1 min-w-0 bg-cBase text-cMain tracking-wider"
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

      <!-- タグの一覧ここから -->
      <div v-if="isTags" class="py-4">
        <div class="flex flex-col">
          <h2 class="font-sans text-lg text-cMain pt-8 pb-4 tracking-wider">Tags</h2>
          <layout-tag-wrapper>
            <base-tag 
              title="Boulder"
              url="tag/tdj53b2z-4n/"
              className="text-cPink border-cPink leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="Sport"
              url="tag/kxw_jvthdfv/"
              className="text-cPink border-cPink leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="Trad"
              url="tag/aa58o79k7/"
              className="text-cPink border-cPink leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="BigWall"
              url="tag/t2r1pghpocx/"
              className="text-cPink border-cPink leading-8 border text-center rounded-full"
            />
          </layout-tag-wrapper>
        </div>
        <div class="pt-10 pb-2">
        <!-- <div class="flex flex-col"> -->
          <!-- <h2 class="font-sans text-lg text-cMain pt-8 pb-2">Angles</h2> -->
          <layout-tag-wrapper>
            <base-tag 
              title="Slab"
              url="tag/vd-d9h944h/"
              className="text-cYellow border-cYellow leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="Roof"
              url="tag/vhvc2ex9adar/"
              className="text-cYellow border-cYellow leading-8 border text-center rounded-full"
            />
          </layout-tag-wrapper>
        </div>
        <div class="pt-10 pb-2">
          <layout-tag-wrapper>
            <base-tag 
              title="Stone Masters"
              url="tag/2tgmrydm0new/"
              className="text-cGreen border-cGreen leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="Stone Monkeys"
              url="tag/zpndasjqy/"
              className="text-cGreen border-cGreen leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="Wide Boyz"
              url="tag/nmj89vf2lbzz/"
              className="text-cGreen border-cGreen leading-8 border text-center rounded-full"
            />
            
          </layout-tag-wrapper>
        </div>
        <div class="pt-10 pb-2">
          <layout-tag-wrapper>
            <base-tag 
              title="Highball"
              url="tag/ryy-w9bbwn/"
              className="text-cPurple border-cPurple leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="R/X"
              url="tag/3ooaa5_85x/"
              className="text-cPurple border-cPurple leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="Free Solo"
              url="tag/t-gtv3o07i1a/"
              className="text-cPurple border-cPurple leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="Offwidth"
              url="tag/8c0cet1vmksy/"
              className="text-cPurple border-cPurple leading-8 border text-center rounded-full"
            />
          </layout-tag-wrapper>
        </div>
        <div class="pt-10 pb-2">
          <layout-tag-wrapper>
            <base-tag 
              title="El Capitan"
              url="tag/s4e_muied/"
              className="text-cBlue border-cBlue leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="Half Dome"
              url="tag/jtd7_zyla7d/"
              className="text-cBlue border-cBlue leading-8 border text-center rounded-full"
            />
            <base-tag 
              title="Patagonia"
              url="area/xj6xxbqim/"
              className="text-cBlue border-cBlue leading-8 border text-center rounded-full"
            />
          </layout-tag-wrapper>
        </div>
      </div>
      <!-- タグここまで -->
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
      axios.get(`${apiUrl}/${endPoint}?depth=3&q=${this.input}`, {
        headers: { 'X-API-KEY': apiKey }
        }).then(response => {
          console.log('response')
          this.movies.push(response.data.contents)
        })
      },

    getClear(){
      this.input = ''
      this.movies = []
    },
    getReset(){
      this.input = ''
      this.movies = []
      this.isTags = true   
    }

  },
};

</script>