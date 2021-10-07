

<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <layout-tab />
    <!-- <pre class="text-cMain">{{ markers }}</pre> -->
    <my-map 
    :markers='markers'
    :mapConfig="mapConfig"
    />
    <!-- <my-map :markers='[
        {"lat":35.6432027,"lng":139.6729435},
        {"lat":35.5279833,"lng":139.6989209},
        {"lat":35.6563623,"lng":139.7215211},
        {"lat":35.6167531,"lng":139.5469376},
        {"lat":35.6950961,"lng":139.5037899}
      ]'
    /> -->
    <!-- <layout-google-map
    :myLatLng="{lat: -25.344, lng: 131.036}"
    :zoom="4"
    /> -->
  <!-- layoutここまで -->
  </layout-wrapper>
</template>

<script>

export default {

  data() {
    return {
      markers:[],
      mapConfig: {
        zoom: 8,
        center: {"lat":37.741667,"lng":-119.6025}
      }
    };
  },
  async created(){
    const currentPosTmp = await this.getCurrentPosition()
    const currentPos = {
      lat: currentPosTmp.coords.latitude,
      lng: currentPosTmp.coords.longitude,
    }
    this.mapConfig = {
      zoom: 8,
      center: {"lat":currentPos.lat,"lng":currentPos.lng}
    }
    this.markers = this.areas.map(el =>{
      return {
        "lat":el.lat,
        "lng":el.lng
      }
    })
  },
  methods: {
    getCurrentPosition() {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    },
    // onClickMarker(index, marker) {
    //   this.$refs.gmap.$mapPromise.then((map) => {
    //     map.panTo({lat: marker.lat, lng: marker.lng})
    //   })
    //   this.infoWindowPos = { lat: marker.lat, lng: marker.lng }
    //   this.marker = marker
    //   this.infoWinOpen = true
    // },
  },
  async asyncData({ $microcms }) {
    const areas = await $microcms.get({
      endpoint: 'area',
      queries: { limit: 100},
    });

    return{
      areas: areas.contents,
    }
  }
}

</script>

<style scoped>

</style>