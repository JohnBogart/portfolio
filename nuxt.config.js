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
    'bulma/css/bulma.css',
    '~/css/main.scss'
  ],
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~/css/variables.scss',
    ]
  }
}
