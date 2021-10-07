<template>
  <div>
    <div id="map"></div>
    <template v-if="!!this.google && !!this.map">
      <map-provider
        :google="google"
        :map="map"
      >
        <slot/>
      </map-provider>
    </template>
  </div>
</template>

<script>
export default {
    name: 'MapLoader',
    props:{
        mapConfig: Object,
        apiKey: String
  },
    data(){
        return {
          google: null,
          map: null
        }
    },
    mounted(){
        if(!window.mapLoadStarted){
            window.mapLoadStarted = true;
            let script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDTgHt6YMKaFmbw_VyIP-PvV6FPHSoKuAQ&callback=initMap';
            script.async = true;
            document.head.appendChild(script);
        }

        window.initMap = () => {
            window.mapLoaded = true;
        }

        let timer = setInterval(() => {
            if(window.mapLoaded){
                clearInterval(timer);
                this.google = window.google
                this.initializeMap()
            }
        },500)
    },

  methods: {
    initializeMap (){
      const mapContainer = this.$el.querySelector('#map')
      const { Map } = this.google.maps
      this.map = new Map(mapContainer, this.mapConfig)
    }
  }
}
</script>

<style scoped>
#map {
  height: 100vh;
  width: 100%;
}
</style>