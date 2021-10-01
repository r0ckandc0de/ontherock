<template>
    <ul :class="className">
        <slot />
    </ul>
</template>

<script>
export default {
    name: 'LayoutTagWrapper',
    props:{
    className:{
        type: String,
        default:'grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6'
    },
    }
}
</script>

<style scoped>

</style>