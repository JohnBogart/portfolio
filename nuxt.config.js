export default {
  srcDir: 'src/',
  target: 'static',
  ssr: false,
  router: {
    base: '/'
  },
  head: {
    title: 'John Bogart'
  },
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-buefy'
  ],
  styleResources: {
    scss: [
      '~/css/main.scss'
    ]
  }
}
