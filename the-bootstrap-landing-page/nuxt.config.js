export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic"
            }
        ],
        script: [{
                src: "~/assets/vendor/jquery/jquery.min.js",
                type: "text/javascript"
            },
            {
                src: "~/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
                type: "text/javascript"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [
        "~/assets/vendor/bootstrap/css/bootstrap.min.css",
        "~/assets/vendor/fontawesome-free/css/all.min.css",
        "~/assets/vendor/simple-line-icons/css/simple-line-icons.css",
        "~/assets/css/landing-page.min.css"
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};