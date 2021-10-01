<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <layout-tab />
    <GmapMap
    ref="gmap"
    map-type-id="roadmap"
    :center="maplocation"
    :zoom="zoom"
    :style="styleMap"
    :options="mapOptions"
    >

    <GmapMarker
    v-for="(m, index) in markers"
    :key="index"
    :title="m.name"
    :position="{ lat: m.lat, lng: m.lng }"
    :clickable="true"
    :draggable="false"
    @click="onClickMarker(index, m)"
    />

    <GmapInfoWindow
    :options="infoOptions"
    :position="infoWindowPos"
    :opened="infoWinOpen"
    @closeclick="infoWinOpen = false"
    >
      <NuxtLink :to="'/area/' + marker.id + '/'">
        <div class="text-center font-sans text-cBase">
          <div class="text-base leading-4">{{ marker.name }}</div>
        </div>
      </NuxtLink>
      
    </GmapInfoWindow>
    </GmapMap>


  <!-- layoutここまで -->
  </layout-wrapper>
</template>

<script>

export default {

  data() {
    return {
    //  maplocation: { lng: 0, lat: 0 },
    maplocation: { lng: 37.741667, lat: -119.6025 },
      zoom: 8,
      styleMap: {
        width: '100vw',
        height: '100vh',
      },
      mapOptions: {
        streetViewControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false,
        styles: [],
      },
      infoOptions: {
        minWidth: 160,
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      infoWindowPos: null,
      infoWinOpen: false,
      marker: {
        name: '',
        position: { lat: 0, lng: 0 },
      },
    };
  },
  async mounted() {
    const currentPosTmp = await this.getCurrentPosition()
    const currentPos = {
      lat: currentPosTmp.coords.latitude,
      lng: currentPosTmp.coords.longitude,
    }
    this.maplocation = currentPos
  },
  methods: {
    getCurrentPosition() {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    },
    onClickMarker(index, marker) {
      this.$refs.gmap.$mapPromise.then((map) => {
        map.panTo({lat: marker.lat, lng: marker.lng})
      })
      this.infoWindowPos = { lat: marker.lat, lng: marker.lng }
      this.marker = marker
      this.infoWinOpen = true
    },
  },
  async asyncData({ $microcms }) {
    const markers = await $microcms.get({
      endpoint: 'area',
      queries: { limit: 100},
    });

    return{
      markers: markers.contents,

    }
  }
}

</script>

<style scoped>

@media(min-width: 768px){

  #wrapper{
      margin: 0;
  }

  .tab {
    width: 100vw;
  }

}

</style>