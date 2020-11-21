<template>
    <div>Hello SEO</div>
</template>

<script>
export default {
  head() {
    return this.$seo.getMetaTags('Nice title', 'This is seo helper repo for nuxt.js');
  },
}
</script>