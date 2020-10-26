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
  css: [
    'bulma/css/bulma.css'
  ],
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~/css/main.scss',
    ]
  }
}
