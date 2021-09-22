<template>
  <li :class="className">
    <NuxtLink :to="url">{{ title }}</NuxtLink>
  </li>
</template>

<script>
export default {
  name: 'BaseTag',
  props:{
    title:{
      type: String,
      required: true
    },
    url:{
      type: String,
      default:'/',
    },
    className:{
        type: String,
        default:'text-cMain border-cMain leading-8 border text-center rounded-full'
    },
  }
}
</script>
