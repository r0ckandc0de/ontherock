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
import { mapSettings } from "@/constants/mapSettings";

export default {
    data() {
        return {
        google: null,
        map: null,
        maplocation: { lng: 37.741667, lat: -119.6025 },
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
                this.initializeMap();
            }
        },500)
    },

    methods: {
        async initializeMap() {
          const mapContainer = this.$refs.googleMap;
          const currentPosTmp = await this.getCurrentPosition()
          const currentPos = {
            lat: currentPosTmp.coords.latitude,
            lng: currentPosTmp.coords.longitude,
          }
          this.maplocation = currentPos

          this.map = new this.google.maps.Map(mapContainer, {
            zoom: 8,
            //mapの詳細設定
            // ...mapSettings,
            center: this.maplocation
          });
        },
        getCurrentPosition() {
          return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject)
          })
        },
    }
};
</script>

<style scoped>
.google-map {
    width: 100vw;
    min-height: 100vh;
}
</style>
