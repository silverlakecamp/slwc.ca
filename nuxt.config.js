module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Silver Lake Wesleyan Camp",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Silver Lake Wesleyan Camp" },
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#b0c954" },
      { rel: "msapplication-TileColor", content: "#b0c954" },
      { rel: "theme-color", content: "#b0c954" },
      { rel: "stylesheet", href: "//fonts.googleapis.com/css?family=Arvo|Montserrat|Raleway|Material+Icons" },
    ],
  },
  plugins: ["~/plugins/vuetify.js"],
  css: [
    'vuetify/dist/vuetify.min.css',
    '~/assets/style/app.css'
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#4b5a14" },
  /*
   ** Build configuration
   */
  build: {
    vendor: ["~/plugins/vuetify.js"],
    extractCSS: true,
  },
};
