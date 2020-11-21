const utils = {
  name: "SEO",
  getMetaTags(title, description) {
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
          property: "twitter:title",
          content: title
        },
        {
          property: "twitter:description",
          content: description
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
      ]
    };
  }
};

export default ({ app }, inject) => {
  inject("seo", utils);
};
