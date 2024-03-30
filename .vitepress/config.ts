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
      { text: '快速开始', link: '/docs/index' },
      { text: '布道师计划', link: '/docs/guide' },
      { text: '关于我们', link: '/docs/about' }
    ],

    sidebar: [
      {
        text: '手册',
        items: [
          {text: '介绍', link: '/docs/manual/index'},
          {text: '开始使用',
          collapsed: true,
          items: [
            { text: '安装Mojo', link: '/docs/manual/get-started/Get_Mojo' },
            { text: 'Hello, world!', link: '/docs/manual/get-started/Hello_world' },
            ]
          },
          {text: '语言基础知识',
          collapsed: true,
          items: [
            { text: 'Introduction to Mojo', link: '/docs/manual/Language-basics/Introduction_to_Mojo' },
            { text: 'Functions', link: '/docs/manual/Language-basics/Functions' },
            { text: 'Variables', link: '/docs/manual/Language-basics/Variables' },
            { text: 'Structs', link: '/docs/manual/Language-basics/Structs' },
            { text: 'Modules and packages', link: '/docs/manual/Language-basics/Modules_and_packages' },
            ]
          },
          {text: '所有权',
          collapsed: true,
          items: [
            { text: 'Intro to value ownership', link: '/docs/manual/Value-ownership/Intro_to_value_ownership' },
            { text: 'Value semantics', link: '/docs/manual/Value-ownership/Value_semantics' },
            { text: 'Ownership and borrowing', link: '/docs/manual/Value-ownership/Ownership_and_borrowing' },
            ]
          },
          {text: '生命周期',
          collapsed: true,
          items: [
            { text: 'Intro to value lifecycle', link: '/docs/manual/Value-lifecycle/Intro_to_value_lifecycle' },
            { text: 'Life of a value', link: '/docs/manual/Value-lifecycle/Life_of_a_value' },
            { text: 'Death of a value', link: '/docs/manual/Value-lifecycle/Death_of_a_value' },
            ]
          },
          {text: '特征和参数',
          collapsed: true,
          items: [
            { text: 'Traits', link: '/docs/manual/Traits-and-parameters/Traits' },
            { text: 'Parameterization_compile_time_metaprogramming', link: '/docs/manual/Traits-and-parameters/Parameterization_compile_time_metaprogramming' },
            ]
          },
          {text: 'Python',
          collapsed: true,
          items: [
            { text: 'Python integration', link: '/docs/manual/Python/Python_integration' },
            { text: 'Python types', link: '/docs/manual/Python/Python_types' },
            ]
          },
          {text: '工具',
          collapsed: true,
          items: [
            { text: 'Debugging', link: '/docs/manual/Tools/Debugging' },
            ]
          },
        ],
      },
      {
        text: '参考',
        items: [
          {text: '标准库',
          collapsed: true,
          items: [
            { text: 'algorithm',
              collapsed: true,
              items: [
              { text: 'functional', link: '/docs/lib/algorithm/functional' },
              { text: 'reduction', link: '/docs/lib/algorithm/reduction' },
              { text: 'sort', link: '/docs/lib/algorithm/sort' },
              { text: 'swap', link: '/docs/lib/algorithm/swap' },
              ],
            },
            { text: 'autotune', link: '' },
            { text: 'base64', link: '' },
            { text: 'benchmark', link: '' },
            { text: 'buffer', link: '' },
            { text: 'builtin', link: '' },
            { text: 'collections', link: '' },
            { text: 'complex', link: '' },
            { text: 'mathe', link: '' },
            { text: 'memory', link: '' },
            { text: 'os', link: '' },
            { text: 'pathlib', link: '' },
            { text: 'python', link: '' },
            { text: 'random', link: '' },
            { text: 'stat', link: '' },
            { text: 'sys', link: '' },
            { text: 'tensor', link: '' },
            { text: 'testing', link: '' },
            { text: 'time', link: '' },
            { text: 'utils', link: '' },
            ]
          },
          { text: '装饰器',
              collapsed: true,
              items: [
              { text: '@always_inline', link: '' },
              { text: '@nonmaterializable', link: '' },
              { text: '@parameter', link: '' },
              { text: '@register_passable', link: '' },
              { text: '@staticmethod', link: '' },
              { text: '@unroll', link: '' },
              { text: '@value', link: '' },
              ],
          },
          { text: 'Mojo CLI',
          collapsed: true,
          items: [
          { text: 'mojo', link: '' },
          { text: 'mojo build', link: '' },
          { text: 'mojo debug', link: '' },
          { text: 'mojo demangle', link: '' },
          { text: 'mojo doc', link: '' },
          { text: 'mojo format', link: '' },
          { text: 'mojo package', link: '' },
          { text: 'mojo repl', link: '' },
          { text: 'mojo run', link: '' },
          ],
      },
        ],
      },
      {
        text: '例子',
        items: [
          { text: 'Overview', link: '' },
          { text: 'Low-level IR in Mojo', link: '' },
          { text: 'Mandelbrot in Mojo with Python plots', link: '' },
          { text: 'Matrix multiplication in Mojo', link: '' },
          { text: 'Low-level IR in Mojo', link: '' },
        ],
      },
      {
        text: 'Mojo中文网',
        items: [
          { text: '关于我们', link: '/docs/about' },
          { text: '加入群聊', link: '/docs/chat' },
          { text: '赞助我们', link: '/docs/sponsor'},
          { text: '布道师计划', link: '/docs/guide'},
          { text: '开发者社区', link: 'https://dev.mojocn.org/'},
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shadowqcom/mojo_CN' }
    ],

    footer: {
      message: 'Mojo中文网',
      copyright: 'Copyright &copy; 2024 MojoCN. All Rights Reserved. 影象限 版权所有'
    }
  }
})