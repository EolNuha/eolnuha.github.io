export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  transition: {
    name: "bounce",
    mode: "out-in",
  },
  layout: "default",
  head: {
    title: "Portfolio | Eol Nuha",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "description",
        content:
          "Eol Nuha is a highly skilled Frontend Developer at GjirafaTech. He has a strong background in various programming languages, including Python, JavaScript, HTML, CSS, Vue.js, Nuxt.js, React.js, Django, Flask, and he is well-equipped to tackle any challenge that arises.",
      },
      {
        name: "keywords",
        hid: "keywords",
        content: "eol nuha, eol, nuha, eol nuha portfolio",
      },
      {
        property: "og:title",
        hid: "og-title",
        content: "Portfolio | Eol Nuha",
      },
      {
        property: "og:image",
        content:
          "https://raw.githubusercontent.com/EolNuha/eolnuha.com/master/website/static/portfolio/images/preview.png",
      },
      {
        property: "og:description",
        content:
          "Eol Nuha is a highly skilled Frontend Developer at GjirafaTech. He has a strong background in various programming languages, including Python, JavaScript, HTML, CSS, Vue.js, Nuxt.js, React.js, Django, Flask, and he is well-equipped to tackle any challenge that arises.",
      },
      {
        name: "twitter:title",
        hid: "twitter-title",
        content: "Portfolio | Eol Nuha",
      },
      {
        name: "twitter:image",
        content:
          "https://raw.githubusercontent.com/EolNuha/eolnuha.com/master/website/static/portfolio/images/preview.png",
      },
      {
        name: "twitter:description",
        content:
          "Eol Nuha is a highly skilled Frontend Developer at GjirafaTech. He has a strong background in various programming languages, including Python, JavaScript, HTML, CSS, Vue.js, Nuxt.js, React.js, Django, Flask, and he is well-equipped to tackle any challenge that arises.",
      },
      {
        name: "google-site-verification",
        content: "frJ1iTP8J6nnDrllgLvnmDvupEWQRDwI4sC5nfTHemE",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/sitemap"],

  sitemap: {
    hostname: "https://eolnuha.github.io",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
