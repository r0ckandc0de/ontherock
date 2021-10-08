<template>
<div :class="className">
    <slot />
</div>
</template>

<script>
export default {
    name: 'LayoutMovieListWrapper',
    props:{
    className:{
        type: String,
        default:'bg-cBase min-h-screen py-5 px-3'
    },
    }
}
</script>

<style scoped>

</style>