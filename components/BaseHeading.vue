<template>
    <h2 :class="className">
        <slot />
    </h2>
</template>

<script>
export default {

    props:{
        className:{
            type: String,
            default:'font-sans text-lg text-cMain tracking-wide ml-3 mb-5'
        }
    },
    name: 'BaseHeading',
}
</script>

<style scoped>

</style>