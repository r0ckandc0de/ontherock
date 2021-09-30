<template>
    <div class="tab h-12 md:h-14 flex bg-cBase">
        <ul class="flex justify-around items-center tracking-wider overflow-x-scroll md:justify-center w-full h-full">
            <li class="text-cMain border-b-2 mx-4 lg:mx-6">
                <NuxtLink :to="'/tag/' + boulderTagId + '/'">Boulder</NuxtLink>
            </li>
            <li class="text-cMain border-b-2 mx-4 lg:mx-6">
                <NuxtLink :to="'/tag/' + sportTagId + '/'">Sport</NuxtLink>
            </li>
            <li class="text-cMain border-b-2 mx-4 lg:mx-6">
                <NuxtLink :to="'/tag/' + tradTagId + '/'">Trad</NuxtLink>
            </li>
            <li class="text-cMain border-b-2 mx-4 lg:mx-6">
                <NuxtLink :to="'/tag/' + bigwallTagId + '/'">BigWall</NuxtLink>
            </li>
        </ul>
        <!-- <button class="flex items-center justify-center right-0 w-16 h-full md:hidden">
            <span class="text-xl">▶</span>
        </button> -->
    </div>
</template>

<script>
export default {
    name: 'LayoutTab',
    data(){
        return{
            boulderTagId:'tdj53b2z-4n',
            sportTagId:'kxw_jvthdfv',
            tradTagId:'aa58o79k7',
            bigwallTagId:'t2r1pghpocx',
        }
    }
}
</script>

<style scoped>

</style>