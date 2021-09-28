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
      <!-- <p style="color: #000">
        {{ marker.name }}
      </p> -->
      <NuxtLink :to="'/area/' + marker.id + '/'">
        <div class="text-center">
          {{ marker.name }}
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
     maplocation: { lng: 0, lat: 0 },
      zoom: 8,
      styleMap: {
        width: '100%',
        height: '100vh',
      },
      mapOptions: {
        streetViewControl: false,
        styles: [],
      },
      infoOptions: {
        minWidth: 200,
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
      // this.$refs.gmp.panTo(marker.position)
      // this.$refs.gmp.panTo({ lat: marker.lat, lng: marker.lng })
      this.$refs.gmap.$mapPromise.then((map) => {
        map.panTo({lat: marker.lat, lng: marker.lng})
      })
      // this.infoWindowPos = marker.position
      this.infoWindowPos = { lat: marker.lat, lng: marker.lng }
      this.marker = marker
      this.infoWinOpen = true
    },
  },
  async asyncData({ $microcms }) {
    const markers = await $microcms.get({
      endpoint: 'area',
    });

    return{
      markers: markers.contents,

    }
  }
}

</script>