<template>
    <div id="wrapper" class="wrapper bg-cBase">
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
        max-width: 700px;
        margin:0;
        margin: 0 auto;
    }
}

.wrapper{
    @media(min-width: 1024px){
        padding-top: 0;
        max-width: 960px;
        margin:0;
        margin: 0 auto;
    }
}

.wrapper{
    @media(min-width: 1280px){
        padding-top: 0;
        max-width: 1100px;
        margin:0;
        margin: 0 auto;
    }
}

</style>