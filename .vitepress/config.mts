import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DjangoCode",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/img/logo.svg' }]
  ],
  themeConfig: {
    logo: "/img//logo.svg",
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Archives', link: '/archives' },
      { text: '', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/python-course/': [
        {
          text: 'Module 1: Python básico',
          collapsed: false,
          items: [
            {text: 'Instalar Python y vsCode', link: '/python-course/tools'},
            {text: 'Python input function', link: '/python-course/input-function'},
            {text: 'Tipos de datos primitivos', link: '/python-course/primitive-data-types'},
            {text: 'Operaciones matemáticas en Python', link: '/python-course/python-mathematical-operations'},
            {text: 'Variables, Lists y Print', link: '/python-course/variables-listas'},
            {text: 'Control de flujo y operadores lógicos', link: '/python-course/logical-operators'},
            {text: 'Python Loops', link:'/python-course/python-loops'},
            {text: 'Python functions & Karel', link:'/python-course/python-functions'},
          ],
        },
        {
          text: 'Module 2: Python Intermedio',
          collapsed: true,
          items: [
            {
              text: 'Python intro', link: '/python/intro'
            },
          ],
        },
        {
          text: 'Module 3: APIs',
          collapsed: true,
          items: [
            {
              text: 'Python intro', link: '/python/intro'
            },
          ],
        },
        {
          text: 'Module 4: Analisis de Datos y Visualizacion',
          collapsed: true,
          items: [
            {
              text: 'Python intro', link: '/python/intro'
            },
          ],
        },
        {
          text: 'Module 5: Web Scraping',
          collapsed: true,
          items: [
            {
              text: 'Python intro', link: '/python/intro'
            },
          ],
        },
        {
          text: 'Module 6: Python Object Oriented Programming',
          collapsed: true,
          items: [
            {
              text: 'Python intro', link: '/python/intro'
            },
          ],
        },
        {
          text: 'Module 7: Base de Datos y GUIS',
          collapsed: true,
          items: [
            {
              text: 'Python intro', link: '/python/intro'
            },
          ],
        },
        {
          text: 'Module 8: Desarrollo Web con Django',
          collapsed: true,
          items: [
            {
              text: 'Python intro', link: '/python/intro'
            },
          ],
        },
        {
          text: 'Module 9: Data Science y Machine Learning',
          collapsed: true,
          items: [
            {
              text: 'Python intro', link: '/python/intro'
            },
          ],
        },
        {
          text: 'Module 10: Python Packages para PyPi',
          collapsed: true,
          items: [
            {
              text: 'Python intro', link: '/python/intro'
            },
          ],
        },
      ],
      
      '/django-course/': [
        {
          text: 'Django guide',
          collapsed: true,
          items: [
            {
              text: 'Install tools', link: '/django-course/tools'
            },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/almircoo/' },
      { icon: "twitter", link: "" },
      { icon: "discord", link: "" },
    ]
    
  }
})
