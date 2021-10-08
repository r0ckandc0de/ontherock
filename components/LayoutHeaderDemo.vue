<template>
  <header class="">
    <div class="head-wrapper">
      <div class="top-div"></div>
      <div class="title-wrapper">
        <h1 class="titleMain">
          <NuxtLink to="/" class="">
            <img class="logo" src="/images/logo_black.svg" alt="OntheRock">
          </NuxtLink>
        </h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data(){
      return{
          isOpen: false,
          windowSize: {
            x: 0,
            y: 0
          },
          minWidth: 768,
      }
  },
  mounted () {
    this.getWindowSize()
  },
  methods: {
    getWindowSize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  }
}
</script>

<style scoped>

header {
    position: absolute;
    z-index: 100;
 }

 .head-wrapper {
    position: relative;
}

.title-wrapper {
    position: absolute;
    top: 0%;
    left: 3rem;
    width: 8rem;
}

.top-div {
    background-color: black;
    height: 1rem;
    opacity: 7%;
    box-shadow: -5px 8px 7px black;
}

</style>