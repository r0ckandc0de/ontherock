<template>
  <layout-wrapper>
    <layout-tab />
      <layout-movie-list-wrapper>
          <base-heading>{{ area[0].name }}</base-heading>
          <layout-movie-list>
            <base-card 
              v-for="(movie, index) in movies"
              :key='index'
              :title="movie.title"
              :url="movie.url"
              :id="movie.id"
              :isVimeo="movie.isVimeo"
              :vimeoImage="movie.vimeoImage"
            />
        </layout-movie-list>
      </layout-movie-list-wrapper>
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

iframe {
    max-width: 100%;
    margin: 0 auto;
}

img {
    margin: 0 auto;
}

.news {
    text-align: -webkit-center;
}

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