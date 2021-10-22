<template>
  <layout-wrapper>
    <layout-tab />
    <div class="text-cMain">{{ $t('welcome') }}</div>
    <ul>
      <li v-if="$i18n.locale !== 'en'">
        <nuxt-link :to="switchLocalePath('en')" class="text-cMain">English</nuxt-link>
      </li>
      <li v-if="$i18n.locale !== 'ja'">
        <nuxt-link :to="switchLocalePath('ja')" class="text-cMain">日本語</nuxt-link>
      </li>
    </ul>
    <div v-if="$i18n.locale === 'ja'">
      <!-- <pre class="text-cMain">{{ area }}</pre> -->
      <div v-html="area[0].news" class="news"></div>
      <div v-html="area[0].facility" class="facility"></div>
      <div v-html="area[0].map" class="googleMap"></div>
      <div v-html="area[0].twitter" class="twitter"></div>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

      <div id="fb-root"></div>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v12.0" nonce="NyahAgtx"></script>
      <div class="fb-page" data-href="https://www.facebook.com/freeclimbjp" data-tabs="timeline" data-width="" data-height="315" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/freeclimbjp" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/freeclimbjp">日本フリークライミング協会</a></blockquote></div>
      <!-- <span v-html="area[0].facebook" class="facebook" ></span> -->
    </div>

    <div v-if="$i18n.locale !== 'ja'">
      <layout-movie-list-wrapper>
          <base-heading>{{ area[0].name }}</base-heading>
          <layout-movie-list>
            <base-card 
              v-for="(movie, index) in movies"
              :key='index'
              :title="movie.title"
              :url="movie.url"
              :id="movie.id"
            />
        </layout-movie-list>
      </layout-movie-list-wrapper>
    </div>
  </layout-wrapper>
</template>

<script>

export default {
  async asyncData({ $microcms, params, error }) {
    try {

      const movies = await $microcms.get({
        endpoint: 'movie',
        queries: { filters: `area[equals]${params.id}` },
      })

      const area = await $microcms.get({
        endpoint: 'area',
        queries: { filters: `id[equals]${params.id}` },
      })

      return {
        movies: movies.contents,
        area: area.contents
      }
    } catch (err) {
      error({
        errorCode: 404,
      })
    }
  },
}
</script>

<style scoped>

.video {
position: relative;
height: 0;
padding: 30px 0 56.25%;
overflow: hidden;
}

.video iframe {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}

</style>