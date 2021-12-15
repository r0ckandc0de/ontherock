<template>
  <!-- layoutここから -->
  <layout-top-wrapper>
    <layout-tab />
    <!-- トップ動画ここから -->
    <NuxtLink :to="`/movie/${topMovie[0].id}/`">
        <div class="relative inset-0 md:w-full">
          <video class="visible video md:w-screen md:h-96 lg:h-128 md:object-cover" preload="none" poster="/images/preload.png" autoplay loop muted playsinline webkit-playsinline="true">
            <source src="~/assets/video/short_sample_alex.mp4" type="video/mp4">

          </video>
          <div class="top-title absolute bottom-2 right-2 md:bottom-4 md:right-6 lg:right-10">
              <p class="text-cMain visible text-xs md:text-xl lg:text-2xl font-semibold">
                {{ topMovie[0].title }}
              </p>
          </div>

        </div>
    </NuxtLink>
    <!-- トップ動画ここまで -->
    <div class="bg-cBase pt-4 md:pt-8 pb-5 md:ml-1/24">
      <base-heading>Latest Videos</base-heading>
        <div class="overflow-x-scroll scrollbar-hide flex ml-3">
          <base-card 
            v-for="(movie, index) in movies"
            :key='index'
            :title="movie.title"
            :url="movie.url"
            :id="movie.id"
            :isVimeo="movie.isVimeo"
            :vimeoImage="movie.vimeoImage"
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
            :isVimeo="feature.isVimeo"
            :vimeoImage="feature.vimeoImage"
          />
        </div>
    </div>
    <!-- Garallyここから -->
    <div class="bg-cBase py-5 md:mx-1/24">
      <base-heading>Gallery</base-heading>
        <div class="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-9 gap-0.5 px-0.5 md:px-3">
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
            :isVimeo="boulder.isVimeo"
            :vimeoImage="boulder.vimeoImage"
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
            :isVimeo="sport.isVimeo"
            :vimeoImage="sport.vimeoImage"
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
            :isVimeo="trad.isVimeo"
            :vimeoImage="trad.vimeoImage"
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
            :isVimeo="bigwall.isVimeo"
            :vimeoImage="bigwall.vimeoImage"
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
            :isVimeo="women.isVimeo"
            :vimeoImage="women.vimeoImage"
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
  },
  head () {
    return {
      titleTemplate: null,
      title: 'On The Rock',
    }
  },
}

</script>

<style scoped>

.top-title{
    text-shadow: #171717 1px 0 10px;
}

</style>