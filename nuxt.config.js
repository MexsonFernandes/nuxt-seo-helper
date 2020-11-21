module.exports = {
    head: {
      title: "RoboMx",
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
            "Feel the tech. We are on a mission to embark technology to be used to augment life of humans."
        },
        {
          property: "og:description",
          content:
            "Feel the tech. We are on a mission to embark technology to be used to augment life of humans."
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff"
        },
        {
          name: "msapplication-TileImage",
          content: "/pwa/ms-icon-144x144.png"
        },
        {
          name: "theme-color",
          content: "#1B1B1B"
        }
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico"
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        },
        {
          rel: "apple-touch-icon",
          sizes: "57x57",
          href: "/pwa/apple-icon-57x57.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "60x60",
          href: "/pwa/apple-icon-60x60.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "72x72",
          href: "/pwa/apple-icon-72x72.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "76x76",
          href: "/pwa/apple-icon-76x76.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "114x114",
          href: "/pwa/apple-icon-114x114.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "120x120",
          href: "/pwa/apple-icon-120x120.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "144x144",
          href: "/pwa/apple-icon-144x144.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/pwa/apple-icon-152x152.png"
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/pwa/apple-icon-180x180.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/pwa/android-icon-192x192.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/pwa/favicon-32x32.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/pwa/favicon-96x96.png"
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/pwa/favicon-16x16.png"
        }
      ],
      script: []
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
  