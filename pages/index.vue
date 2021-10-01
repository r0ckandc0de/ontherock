<template>
  <!-- layoutここから -->
  <layout-top-wrapper>
    <layout-tab />
    <!-- トップ動画ここから -->
    <NuxtLink :to="`/movie/${topMovie[0].id}/`">
      <!-- <div class="relative invisible"> -->
        <!-- preload="none" preload="metadata" にするか -->
        <div class="relartive inset-0 transition duration-500 opacity-100 md:w-full">
          <video class="visible video md:w-screen md:h-160 md:object-cover" preload="none" poster="/images/topAlex.png" autoplay loop muted playsinline webkit-playsinline="true">
            <source src="~/assets/video/short_sample_alex.mp4" type="video/mp4">
          </video>
        </div>
        
        <!-- <div class="transition duration-500 z-10 flex-1 py-7 md:py-20 lg:py-32">
          <div class="absolute top-64 left-40 md:top-140 md:left-100 lg:top-148 lg:left-112 xl:hidden">
          <div class="invisible absolute top-0 right-0 px-3">
            <p class="text-cBlack visible text-xs md:text-xl font-bold">
              {{ topMovie[0].title }}
            </p>
            <p class="text-cBlack visible text-xs font-bold">
              {{ topMovie[0].climber[0].name }}
            </p>
          </div>
        </div> -->
    </NuxtLink>
    <!-- トップ動画ここまで -->
    <div class="bg-cBase pt-4 md:pt-8 pb-5 md:ml-1/24">
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
    <div class="bg-cBase py-5 md:ml-1/24">
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
    <div class="bg-cBase py-5 md:mx-1/24">
      <base-heading>Gallery</base-heading>
        <div class="grid grid-cols-3 md:grid-cols-9 gap-0.5 px-0.5 md:px-3">
          <base-tile
            v-for="(gallery, index) in galleries"
            :key='index'
            :title="gallery.title"
            :url="gallery.url"
            :id="gallery.id"
            :pictureNumber=3
          />
        </div>
    </div>

    <div class="bg-cBase py-5 md:ml-1/24">
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

    <div class="bg-cBase py-5 md:ml-1/24">
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

    <div class="bg-cBase py-5 md:ml-1/24">
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

    <div class="bg-cBase py-5 md:ml-1/24">
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

    <div class="bg-cBase py-5 md:ml-1/24">
      <base-heading>Womens</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card 
            v-for="(women, index) in womens"
            :key='index'
            :title="women.title"
            :url="women.url"
            :id="women.id"
          />
        </div>
    </div>
  <!-- layoutここまで -->
  </layout-top-wrapper>
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

    const galleries = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 18, filters: 'gallery[equals]true' },
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

    const womens = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 10, filters: `tag[contains]b5wztuyhp`},
    });

    return{
      movies: movies.contents,
      topMovie: topMovie.contents,
      features: features.contents,
      galleries: galleries.contents,
      boulders: boulders.contents,
      sports: sports.contents,
      trads: trads.contents,
      bigwalls: bigwalls.contents,
      womens: womens.contents,
    }
  }
}

</script>