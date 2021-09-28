<template>
  <!-- layoutここから -->
  <layout-wrapper>
    <layout-tab />
    <p>hogehoge</p>

  <!-- layoutここまで -->
  </layout-wrapper>
</template>

<script>
export default {

  data() {
    return {
      
    };
  },
  async asyncData({ $microcms }) {
    const movies = await $microcms.get({
      endpoint: 'movie',
      queries: { limit: 10 },
    });

    return{
      movies: movies.contents,

    }
  }
}

</script>