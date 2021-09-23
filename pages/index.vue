<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <layout-tab />
    <!-- トップ動画ここから -->
    <NuxtLink :to="`/movie/${topMovie[0].id}/`">
      <div class="relative invisible ">
        <!-- preload="none" preload="metadata" にするか -->
        <div class="absolute inset-0 transition duration-500 opacity-100">
          <video class="visible video" preload="none" poster="/images/preload2.png" autoplay loop muted playsinline webkit-playsinline="true">
            <source src="~/assets/video/short_sample_alex.mp4" type="video/mp4">
          </video>
        </div>
        
        <div class="transition duration-500 z-10 flex-1 py-7 md:py-20 lg:py-32">
          <div class="absolute top-40 left-40">
          <!-- <div class="invisible absolute top-0 right-0 px-3"> -->
            <p class="text-cBlack visible text-xs font-bold">
              {{ topMovie[0].title }}
            </p>
            <!-- <p class="text-cBlack visible text-xs font-bold">
              {{ topMovie[0].climber[0].name }}
            </p> -->
          </div>
        </div>
      </div>
    </NuxtLink>
    <!-- トップ動画ここまで -->
    <div class="bg-cBase pt-44 pb-5">
      <base-heading>Latest Videos</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <!-- {{ movies }} -->
          <base-card 
            v-for="(movie, index) in movies"
            :key='index'
            :title="movie.title"
            :url="movie.url"
            :id="movie.id"
          />
        </div>
    </div>
    <!-- Featuresここから -->
    <div class="bg-cBase py-5">
      <base-heading>Features / {{ featuresTitle }}</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card 
            v-for="(feature, index) in features"
            :key='index'
            :title="feature.title"
            :url="feature.url"
            :id="feature.id"
          />
        </div>
    </div>
    <!-- Tagsここから -->
    <!-- <div class="bg-cWhite py-5">
      <base-heading>Tags</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card />
          <base-card />
          <base-card />
          <base-card />
          <base-card />
        </div>
    </div> -->
    <!-- Garallyここから -->
    <div class="bg-cBase py-5">
      <base-heading>Gallery</base-heading>
        <div class="grid grid-cols-3 gap-0.5 px-0.5">
          <base-tile
            v-for="(gallery, index) in garallies"
            :key='index'
            :title="gallery.title"
            :url="gallery.url"
            :id="gallery.id"
            :pictureNumber=3
          />
        </div>
    </div>

    <div class="bg-cBase py-5">
      <base-heading>Boulder</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card 
            v-for="(boulder, index) in boulders"
            :key='index'
            :title="boulder.title"
            :url="boulder.url"
            :id="boulder.id"
          />
        </div>
    </div>

    <div class="bg-cBase py-5">
      <base-heading>Sport</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card 
            v-for="(sport, index) in sports"
            :key='index'
            :title="sport.title"
            :url="sport.url"
            :id="sport.id"
          />
        </div>
    </div>

    <div class="bg-cBase py-5">
      <base-heading>Trad</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card 
            v-for="(trad, index) in trads"
            :key='index'
            :title="trad.title"
            :url="trad.url"
            :id="trad.id"
          />
        </div>
    </div>

    <div class="bg-cBase py-5">
      <base-heading>BigWall</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card 
            v-for="(bigwall, index) in bigwalls"
            :key='index'
            :title="bigwall.title"
            :url="bigwall.url"
            :id="bigwall.id"
          />
        </div>
    </div>
  <!-- layoutここまで -->
  </layout-wrapper>
</template>

<script>
export default {

  data() {
    return {
      featuresTitle:'Lucid Dreaming',
    };
  },
  async asyncData({ $microcms }) {
    const movies = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 10 },
    });

    const topMovie = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 1, filters: 'top[equals]true' },
    });

    const features = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 10, filters: 'feature[equals]true' },
    });

    const garallies = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 16, filters: 'garally[equals]true' },
    });

    const boulders = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 10, filters: `tag[contains]tdj53b2z-4n`},
    });

    const sports = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 10, filters: `tag[contains]kxw_jvthdfv`},
    });

    const trads = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 10, filters: `tag[contains]aa58o79k7`},
    });

    const bigwalls = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 10, filters: `tag[contains]t2r1pghpocx`},
    });

    return{
      movies: movies.contents,
      topMovie: topMovie.contents,
      features: features.contents,
      garallies: garallies.contents,
      boulders: boulders.contents,
      sports: sports.contents,
      trads: trads.contents,
      bigwalls: bigwalls.contents
    }
  }
}

</script>