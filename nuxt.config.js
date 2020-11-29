module.exports = {
  head: {
    title: "SEO helper",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content:
          "This is seo helper repo for nuxt.js"
      },
      {
        property: "og:description",
        content:
          "This is seo helper repo for nuxt.js"
      },
      {
        property: "og:title",
        content: "A good title"
      },
      {
        property: "og:image",
        content: "https://www.robomx.com/logo.png"
      },
      {
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        property: "twitter:site",
        content: "robomxHQ"
      },
      {
        property: "twitter:title",
        content: "A good title"
      },
      {
        property: "twitter:description",
        content: "a good looking description for your website!"
      },
      {
        property: "twitter:image",
        content: "https://www.robomx.com/logo.png"
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: '{{web-link}}'
      },
    ],
  },
  plugins: [
    {
      src: "@/plugins/filters.js"
    },
  ],
  /*
    ** Nuxt.js modules
    */
  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  sitemap: {
    hostname: '',
  },
  robots: {
    Sitemap: process.env.DOMAIN + "/sitemap.xml",
  },
};
  
