<template>
<div :class="className">
    <div
    v-show="bool"
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <slot />
    </div>
</div>
</template>

<script>
export default {
    name: 'LayoutMovieList',
    props:{
    className:{
        type: String,
        default:'pt-4'
        // default:'h-screen pt-4'
    },
    bool:{
        type: Boolean,
        default:true
    },
    }
}
</script>

<style scoped>

</style>