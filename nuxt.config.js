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
