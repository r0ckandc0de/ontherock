<template>
    <div class="wrapper bg-cBase">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'LayoutWrapper'
}
</script>

<style scoped>

.wrapper{
    /* padding-top: 60px; */
    @media(min-width: 768px){
        padding-top: 0;
    }
}

</style>