<template>
    <layout-wrapper>
        <div class="container w-full h-screen flex flex-col justify-center items-center mx-auto pt-20 pb-20 px-6 md:px-0">
            <div class="mb-20">
                <p class="text-center text-lg font-medium text-cMain">
                Sorry, this page seems to top out.
                </p>
            </div>
            <base-button name="Back to top" link="/" />
        </div>
    </layout-wrapper>
</template>

<script>
export default {
  head() {
    return {
      title: 'PAGE NOT FOUND',
    }
  },
}
</script>