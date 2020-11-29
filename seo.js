const utils = {
  name: "SEO",
    getSeoMetaTags(
    title,
    description,
    url = "https://www.mexsonfernades.com/",
    image = "https://www.robomx.com/logo.png",
    ogType = "website"
  ) {
    return {
      title: title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description
        },
       {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: description
        },
        {
          property: "og:type",
          content: ogType
        },
        {
          property: "og:url",
          content: url
        },
        {
          property: "og:site_name",
          content: "RoboMx"
        },
        {
          property: "og:image",
          content: image
        },
        {
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          property: "twitter:site",
          content: {{TWIITER_HANDLE}}
        },
        {
          property: "twitter:title",
          content: title
        },
        {
          property: "twitter:description",
          content: description
        },
        {
          property: "twitter:image",
          content: image
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          itemprop: "name",
          content: title
        },
        {
          itemprop: "content",
          content: description
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: url
        },
      ],
    };
  }
};

export default ({ app }, inject) => {
  inject("seo", utils);
};
