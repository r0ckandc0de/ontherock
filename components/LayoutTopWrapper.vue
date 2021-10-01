<template>
    <div id="wrapper" class="wrapper bg-cBase">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'LayoutTopWrapper'
}
</script>

<style scoped>

.wrapper{
    @media(min-width: 768px){
        padding-top: 0;
        margin:0;
    }
}

</style>