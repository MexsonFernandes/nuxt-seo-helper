# Nuxt SEO Helper

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMexsonFernandes%2Fnuxt-seo-helper&count_bg=%23231582&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

Its always important to position your site on search engine. I have compiled some stuff here where you can refer.

## Plugin

Add the `seo.js` file to `plugins` folder.

You can use `this.$seo.<func-name>` in vue files globally.

## Example

```
...
export default {
  head() {
    return this.$seo.getSeoMetaTags('This is title', 'This is a very long description')
  },
...
```
