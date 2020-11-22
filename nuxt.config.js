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
  