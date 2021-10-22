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
            default:'font-sans text-lg text-cMain tracking-wide mb-5 md:text-xl lg:text-2xl'
        }
    },
    name: 'BaseHeading',
}
</script>

<style scoped>

</style>