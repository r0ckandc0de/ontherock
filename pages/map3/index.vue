<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <layout-tab />
    <!-- <google-map-demo /> -->
    <google-map-loader
        :mapConfig="mapConfig"
    >
    

    <template slot-scope="{ google, map }">
      
      <google-map-marker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
        @parent-event="parentEvent(marker)"
      />

      <!-- <google-map-marker
        :marker="markers[1]"
        :google="google"
        :map="map"
      /> -->

      <div v-if="isOpen" id="window">
        
        <div 
        class="text-cMain mt-24 md:mt-26 bg-cBase bg-opacity-75 absolute top-0 w-screen h-screen
        ">
          <!-- <div class="close-button"> -->
          <button type="button" @click="closeWindow" class="close-button bg-white rounded-md p-2 inline-flex items-center justify-center absolute text-cBase hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-24 px-4 md:max-w-2xl lg:max-w-6xl">
            <base-card 
              v-for="(movie, index) in targetMovies"
              :key='index'
              :title="movie.title"
              :url="movie.url"
              :id="movie.id"
            />
          </div>
        </div>
      </div>

    </template>
    
    </google-map-loader>
    

  </layout-wrapper>
</template>

<script>

import { mapSettings } from "@/constants/mapSettings";

export default {

  data() {
    return {
      maplocation: { lng: 37.741667, lat: -119.6025 },
      areaId: null,
      isOpen:false
    };
  },
  // async mounted() {
  //   const currentPosTmp = await this.getCurrentPosition()
  //   const currentPos = {
  //     lat: currentPosTmp.coords.latitude,
  //     lng: currentPosTmp.coords.longitude,
  //   }
  //   this.maplocation = currentPos
  // },
  methods: {
    parentEvent(marker){
      this.areaId = marker.id
      this.isOpen = true

    },
    closeWindow(){
      this.isOpen = false
    },
    // onClickMarker(marker) {
    //   console.log('hoge')
    //   this.areaName = marker.title
    //   window.alert(this.areaName)
    //   console.log(marker)
    // }
    // getCurrentPosition() {
    //   return new Promise(function (resolve, reject) {
    //     navigator.geolocation.getCurrentPosition(resolve, reject)
    //   })
    // },
  },
  computed: {
    mapConfig() {
      return {
        zoom:8,
        // ...mapSettings,
        center: this.mapCenter
      };
    },
    mapCenter() {
      return this.markers[1].position;
      // return this.maplocation;
      // return {lat: -33.866, lng: 151.196}
    },
    markers(){
      return this.areas.map(area=>{
        return {
          id: area.id,
          position:{lat: area.lat, lng: area.lng},
          title:area.name
        }
      })
    },
    targetErea(){
      return this.areas.filter(area =>{
        return area.id === this.areaId
      })
    },
    targetMovies(){
      return this.movies.filter(movie =>{
        return movie.area.id === this.areaId
      })
    }
  },
  async asyncData({ $microcms }) {
    const areas = await $microcms.get({
      endpoint: 'area',
      queries: { limit: 100},
    });
    
    const movies = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 50 },
    });

    return{
      areas: areas.contents,
      movies: movies.contents,
    }
  }
};

</script>

<style scoped>

.close-button{
  top: 1%;
  right: 1%;
}

@media(min-width: 768px){

  #wrapper{
      margin: 0;
  }

  .tab {
    width: 100vw;
  }

}

</style>