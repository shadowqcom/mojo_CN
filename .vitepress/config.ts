import { defineConfig } from 'vitepress'


export default defineConfig({
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
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-W1TZBYS8G8' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-W1TZBYS8G8');`
    ]
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/img/mojofire.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/docs/start' },
      { text: '加入社群', link: '/docs/chat' },
      { text: '关于我们', link: '/docs/about' }
    ],

    sidebar: [
      {
        text: '文档目录',
        items: [
          { text: '关于我们', link: '/docs/about' },
          {text: '快速开始',
          collapsed: true,
          items: [
            { text: '安装SDK', link: '/docs/get-started/install' },
            { text: 'hello world', link: '/docs/get-started/hello_world' },
            { text: 'Mojo语法基础', link: '/docs/get-started/Mojo_language_basics' },
            { text: '模块和包', link: '/docs/get-started/modules_and_packages' }
            ]
          },
          { text: '编程手册', link: '/docs/Programming_manual' },
          { text: 'Mojo笔记本', link: '/docs/Mojo_notebooks' },
          { text: 'Mojo图书馆', link: '/docs/Mojo_library' },
          {text: 'Mojo CLI',
          collapsed: true,
          items: [
            { text: 'mojo', link: '/docs/Mojo-CLI/Mojo_CLI' },
            { text: 'mojo build', link: '/docs/Mojo-CLI/Mojo_CLI' },
            { text: 'mojo demangle', link: '/docs/Mojo-CLI/Mojo_CLI' },
            { text: 'mojo doc', link: '/docs/Mojo-CLI/Mojo_CLI' },
            { text: 'mojo format', link: '/docs/Mojo-CLI/Mojo_CLI' },
            { text: 'mojo package', link: '/docs/Mojo-CLI/Mojo_CLI' },
            { text: 'mojo repl', link: '/docs/Mojo-CLI/Mojo_CLI' },
            { text: 'mojo run', link: '/docs/Mojo-CLI/Mojo_CLI' }
            ]
          },
          { text: '加入群聊', link: '/docs/chat' },
          { text: '赞助我们', link: '/docs/sponsor'},
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

