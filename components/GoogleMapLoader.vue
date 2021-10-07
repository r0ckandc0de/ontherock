<template>
  <div>
    <div
      class="google-map"
      id="map"
      ref="googleMap"
    >
    </div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot
        :google="google"
        :map="map"
      />
    </template>
  </div>
</template>

<script>

export default {
    props: {
        mapConfig: Object,
        // apiKey: String
    },

    data() {
        return {
        google: null,
        map: null
        };
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
                // console.log(new this.google.maps.LatLng(-33.866, 151.196))
                this.initializeMap();
            }
        },500)
    },

    methods: {
        initializeMap() {
        const mapContainer = this.$refs.googleMap;
        this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
        }
    }
};
</script>

<style scoped>
.google-map {
    width: 100vw;
    min-height: 100vh;
}
</style>
