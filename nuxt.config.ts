// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title:
        "NakSelesaiHutangCepat.my - Settle hutang, tambah pendapatan dan simpanan anda",
      meta: [
        {
          name: "description",
          content:
            "Kami ada cara untuk anda mengurangkan komitmen sekurang-kurangnya 40% sampai sifar hutang. Malah kami beri solusi tambah simpanan sampai 5-6 angka! Lagi best, cara tambah duit side income RM2K-RM20K++!",
        },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-config", content: "/favicon/browserconfig.xml" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "152x152",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
        {
          rel: "mask-icon",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#5bbad5",
        },
        { rel: "shortcut icon", href: "/favicon/favicon.ico" },
      ],

      script: [],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@vesp/nuxt-fontawesome", "nuxt-aos"],
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config.js",
    exposeConfig: true,
    config: {},
    viewer: true,
  },
  fontawesome: {
    component: "fa",
    suffix: true,
    icons: {
      solid: [
        "users",
        "users-cog",
        "comments",
        "comments-dollar",
        "business-time",
        "chalkboard-teacher",
        "archive",
        "dollar-sign",
        "arrow-right",
        "arrow-left",
        "check",
        "check-double",
        "cubes",
        "anchor",
        "warehouse",
        "running",
        "allergies",
        "house-damage",
        "hands-helping",
        "angle-double-up",
        "hand-holding-usd",
      ],
    },
  },
});
