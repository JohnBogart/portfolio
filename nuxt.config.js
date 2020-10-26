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
  ]
}
