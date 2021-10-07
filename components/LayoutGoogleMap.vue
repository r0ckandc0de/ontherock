<template>
    <div>
        <h1>from GoogleMap</h1>
        <div ref="map" style="height:500px;width:800px;"></div>
    </div>
</template>

<script>
export default {
    name: 'LayoutGoogleMap',
    props:{
        myLatLng:{
            type:Object,
            required:true,
        },
        zoom:{
            type:Number,
            required:true,
        }
    },
    data(){
        return {
            map:'',
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
            this.map = new window.google.maps.Map(this.$refs.map, {
                center: this.myLatLng,
                zoom: 4
            });
            new window.google.maps.Marker({position:this.myLatLng, map:this.map})
            }
        },500)
    },
}
</script>