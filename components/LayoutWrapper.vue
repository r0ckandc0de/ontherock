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
    @media(min-width: 768px){
        padding-top: 0;
        max-width: 1100px;
        margin: 0 auto;
    }
}

</style>