<template>
  <div class="flex-shrink-0 w-40 md:w-52 xl:w-64 mr-3">
    <NuxtLink :to="'/movie/' + id + '/'">
      <div class="w-full">
        <img class="max-w-full" :src="`https://i.ytimg.com/vi/${url}/mqdefault.jpg`" :alt="title">
      </div>
      <div class="mt-2">
        <h2 class="text-sm text-cMain tracking-wider line-clamp-2 md:line-clamp-4">{{ title }}</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props:{
    title:{
      type: String,
      required: true
    },
    url:{
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true,
    },
  }
}
</script>
