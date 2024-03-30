import { defineConfig } from 'vitepress'


export default defineConfig({
  lastUpdated: true,
  lang: 'zh_CN',
  title: "Mojo中文网",
  description: "AI编程语言Mojo中文网，AI开发人员的新语言，Mojo 结合了 Python 的可用性和 C 的性能，",
  head:[
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    //谷歌广告
    [
      'script', 
      { async: '', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9179261695088632', crossorigin:'anonymous'}
    ],

    //谷歌统计分析
    [
      'script', 
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-7BDPKHVLRK' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-7BDPKHVLRK');`
    ]
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/img/mojofire.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '开发者社区', link: 'https://dev.mojocn.org/' },
      { text: '快速开始', link: '/docs/start' },
      { text: '布道师计划', link: '/docs/guide' },
      { text: '关于我们', link: '/docs/about' }
    ],

    sidebar: [
      {
        text: '文档目录',
        items: [
          { text: '简介', link: '/docs/index' },
          {text: 'Get started',
          collapsed: false,
          items: [
            { text: 'Get Mojo', link: '/docs/get-started/Get_Mojo' },
            { text: 'Hello, world!', link: '/docs/get-started/Hello_world' },
            ]
          },
          {text: 'Language basics',
          collapsed: false,
          items: [
            { text: 'Introduction to Mojo', link: '/docs/Language-basics/Introduction_to_Mojo' },
            { text: 'Functions', link: '/docs/Language-basics/Functions' },
            { text: 'Variables', link: '/docs/Language-basics/Variables' },
            { text: 'Structs', link: '/docs/Language-basics/Structs' },
            { text: 'Modules and packages', link: '/docs/Language-basics/Modules_and_packages' },
            ]
          },
          {text: 'Value ownership',
          collapsed: false,
          items: [
            { text: 'Intro to value ownership', link: '/docs/Value-ownership/Intro_to_value_ownership' },
            { text: 'Value semantics', link: '/docs/Value-ownership/Value_semantics' },
            { text: 'Ownership and borrowing', link: '/docs/Value-ownership/Ownership_and_borrowing' },
            ]
          },
          {text: 'Value lifecycle',
          collapsed: false,
          items: [
            { text: 'Intro to value lifecycle', link: '/docs/Value-lifecycle/Intro_to_value_lifecycle' },
            { text: 'Life of a value', link: '/docs/Value-lifecycle/Life_of_a_value' },
            { text: 'Death of a value', link: '/docs/Value-lifecycle/Death_of_a_value' },
            ]
          },
          {text: 'Traits and parameters',
          collapsed: false,
          items: [
            { text: 'Traits', link: '/docs/Traits-and-parameters/Traits' },
            { text: 'Parameterization_compile_time_metaprogramming', link: '/docs/Traits-and-parameters/Parameterization_compile_time_metaprogramming' },
            ]
          },
          {text: 'Python',
          collapsed: false,
          items: [
            { text: 'Python integration', link: '/docs/Python/Python_integration' },
            { text: 'Python types', link: '/docs/Python/Python_types' },
            ]
          },
          {text: 'Tools',
          collapsed: false,
          items: [
            { text: 'Debugging', link: '/docs/Tools/Debugging' },
            ]
          },
          
          { text: '————————————', link: '' },
          { text: '关于我们', link: '/docs/about' },
          { text: '加入群聊', link: '/docs/chat' },
          { text: '赞助我们', link: '/docs/sponsor'},
          { text: '布道师计划', link: '/docs/guide'},
          { text: '开发者社区', link: 'https://dev.mojocn.org/'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shadowqcom/mojo_CN' }
    ],

    footer: {
      message: 'Mojo中文网',
      copyright: 'Copyright &copy; 2023 MojoCN. All Rights Reserved. 影象限 版权所有'
    }
  }
})