// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
      title: 'Geely Galaxy Showroom',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover the latest Geely Galaxy models here.' },
        { name: 'keywords', content: 'Geely, Galaxy, car, luxury, automobile' },
        { name: 'author', content: 'Hooyar Lotfy' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'https://dm30webimages.geely.com/GeelyPromotion/AYINHE/L7/logo/bai2.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lalezar&family=Roboto+Mono:ital,wght@0,441;1,441&family=Scheherazade+New:wght@400;500;600;700&family=Vazirmatn:wght@100..900&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.min.css' }
      ]
    }
  },
  build: {
    transpile: ['gsap']
  }
})
