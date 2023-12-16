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
          {text: '快速开始',
          collapsed: true,
          items: [
            { text: '安装SDK', link: '/docs/get-started/install' },
            { text: 'hello world', link: '/docs/get-started/hello_world' },
            ]
          },
          { text: '语法基础', link: '/docs/basics' },
          { text: '函数', link: '/docs/functions' },
          { text: '变量', link: '/docs/Variables' },
          { text: '数据结构', link: '/docs/structs' },
          { text: '特征', link: '/docs/traits' },
          {text: 'Value ownership',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/docs/values/introduction' },
            { text: 'Value semantics', link: '/docs/values/value_semantics' },
            { text: 'Ownership and borrowing', link: '/docs/values/ownership_and_borrowing' },
            ]
          },
          {text: 'Value lifecycle',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/docs/lifecycle/introduction' },
            { text: 'Life of a value', link: '/docs/lifecycle/life_of_a_value' },
            { text: 'Death of a value', link: '/docs/lifecycle/death_of_a_value' },
            ]
          },
          { text: '元编程', link: '/docs/metaprogramming' },
          {text: 'Python',
          collapsed: true,
          items: [
            { text: 'Python integration', link: '/docs/python/python_integration' },
            { text: 'Python types', link: '/docs/python/python_types' },
            ]
          },
          {text: '装饰器',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/docs/decorators/overview' },
            { text: '@always_inline', link: '/docs/decorators/@always_inline' },
            { text: '@noncapturing', link: '/docs/decorators/@noncapturing' },
            { text: '@nonmaterializable', link: '/docs/decorators/@nonmaterializable' },
            { text: '@parameter', link: '/docs/decorators/@parameter' },
            { text: '@register_passable', link: '/docs/decorators/@register_passable' },
            { text: '@unroll', link: '/docs/decorators/@unroll' },
            { text: '@value', link: '/docs/decorators/@value' },
            ]
          },
          { text: '模块和包', link: '/docs/modules_and_packages' },
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