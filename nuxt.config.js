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
  
