<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
    name: 'MapProvider',
    props: {
        google: Object,
        map: Object,
    },
    provide() {
        return {
        google: this.google,
        map: this.map
        }
    },
}
</script>