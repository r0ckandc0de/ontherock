<template>
  <div>
    <h1>Map</h1>
    <map-loader 
      :map-config="mapConfig"
      apiKey="AIzaSyDTgHt6YMKaFmbw_VyIP-PvV6FPHSoKuAQ"
    >
      <template v-for="(marker, index) in markers">
        <child-marker :position="marker" :key=index />
      </template>
    </map-loader>
  </div>
</template>

<script>
export default {
    name: 'MyMap',
    props: {
        markers: Array,
        mapConfig: Object,
    },
    data(){
        return {
          // mapConfig: {
          //     zoom: 12,
          //     center: this.markers[0]
          // }
        }
    },
}
</script>