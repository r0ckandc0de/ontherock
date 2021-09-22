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
        default:'grid grid-cols-2 gap-3'
    },
    }
}
</script>

<style scoped>

</style>