<template>
  <div>
    <div
      class="google-map"
      id="map"
      ref="googleMap"
      style="height:500px;width:800px;"
    >
    </div>
    <div id="content">Hello world!</div>
  </div>
</template>

<script>

export default {
    // props: {
    //     mapConfig: Object,
    //     // apiKey: String
    // },
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
                class Popup extends this.google.maps.OverlayView {
            position;
            containerDiv;
            constructor(position, content) {
                super();
                this.position = position;
                console.log(this.position)
                content.classList.add("popup-bubble");

                // This zero-height div is positioned at the bottom of the bubble.
                const bubbleAnchor = document.createElement("div");

                bubbleAnchor.classList.add("popup-bubble-anchor");
                bubbleAnchor.appendChild(content);
                // This zero-height div is positioned at the bottom of the tip.
                this.containerDiv = document.createElement("div");
                this.containerDiv.classList.add("popup-container");
                this.containerDiv.appendChild(bubbleAnchor);
                // Optionally stop clicks, etc., from bubbling up to the map.
                Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
            }
            /** Called when the popup is added to the map. */
            onAdd() {
                this.getPanes().floatPane.appendChild(this.containerDiv);
            }
            /** Called when the popup is removed from the map. */
            onRemove() {
                if (this.containerDiv.parentElement) {
                    this.containerDiv.parentElement.removeChild(this.containerDiv);
                }
            }
            /** Called each frame when the popup needs to draw itself. */
            draw() {
                const divPosition = this.getProjection().fromLatLngToDivPixel(
                    this.position
                );
                // Hide the popup when it is far out of view.
                // console.log(divPosition)
                const display =
                    Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
                    ? "block"
                    : "none";

                if (display === "block") {
                    this.containerDiv.style.left = divPosition.x + "px";
                    this.containerDiv.style.top = divPosition.y + "px";
                }

                if (this.containerDiv.style.display !== display) {
                    this.containerDiv.style.display = display;
                }
            }
        }

    const popup = new Popup(
        // new this.google.maps.LatLng(this.marker.position.lat, this.marker.position.lng),
        new this.google.maps.LatLng(-33.866, 151.196),
        // { lng: 37.741667, lat: -119.6025 },
        document.getElementById("content")
    );


    popup.setMap(this.map)
            }
        },500)

    },

    methods: {
        initializeMap() {
        const mapContainer = this.$refs.googleMap;
        this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
        }
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
            //   return this.markers[1].position;
            // return this.maplocation;
            return {lat: -33.866, lng: 151.196}
        },
        markers(){
            return this.areas.map(area=>{
                return {
                id: area.id,
                position:{lat: area.lat, lng: area.lng}
                }
            })
        }
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
};
</script>

<style scoped>
.google-map {
    width: 100%;
    min-height: 100%;
}
</style>
