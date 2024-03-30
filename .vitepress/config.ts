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
      { text: '快速开始', link: '/mojo/index' },
      { text: '布道师计划', link: '/mojo/guide' },
      { text: '关于我们', link: '/mojo/about' }
    ],

    sidebar: [
      {
        text: '手册',
        items: [
          {text: '介绍', link: '/mojo/manual/index'},
          {text: '开始使用',
          collapsed: true,
          items: [
            { text: '安装Mojo', link: '/mojo/manual/getstarted/getmojo' },
            { text: 'Hello, world!', link: '/mojo/manual/getstarted/helloworld' },
            ]
          },
          {text: '语言基础知识',
          collapsed: true,
          items: [
            { text: 'Introduction to Mojo', link: '/mojo/manual/languagebasics/introductiontomojo' },
            { text: 'Functions', link: '/mojo/manual/languagebasics/functions' },
            { text: 'Variables', link: '/mojo/manual/languagebasics/variables' },
            { text: 'Structs', link: '/mojo/manual/languagebasics/structs' },
            { text: 'Modules and packages', link: '/mojo/manual/languagebasics/modulesandpackages' },
            ]
          },
          {text: '所有权',
          collapsed: true,
          items: [
            { text: 'Intro to value ownership', link: '/mojo/manual/valueownership/introtovalueownership' },
            { text: 'Value semantics', link: '/mojo/manual/valueownership/valuesemantics' },
            { text: 'Ownership and borrowing', link: '/mojo/manual/valueownership/ownershipandborrowing' },
            ]
          },
          {text: '生命周期',
          collapsed: true,
          items: [
            { text: 'Intro to value lifecycle', link: '/mojo/manual/valuelifecycle/introtovaluelifecycle' },
            { text: 'Life of a value', link: '/mojo/manual/valuelifecycle/lifeofavalue' },
            { text: 'Death of a value', link: '/mojo/manual/valuelifecycle/deathofavalue' },
            ]
          },
          {text: '特征和参数',
          collapsed: true,
          items: [
            { text: 'Traits', link: '/mojo/manual/traitsandparameters/traits' },
            { text: 'Parameterization_compile_time_metaprogramming', link: '/mojo/manual/traitsandparameters/parameterizationcompiletimemetaprogramming' },
            ]
          },
          {text: 'Python',
          collapsed: true,
          items: [
            { text: 'Python integration', link: '/mojo/manual/python/Pythonintegration' },
            { text: 'Python types', link: '/mojo/manual/python/pythontypes' },
            ]
          },
          {text: '工具',
          collapsed: true,
          items: [
            { text: 'Debugging', link: '/mojo/manual/tools/debugging' },
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
              { text: 'functional', link: '' },
              { text: 'reduction', link: '' },
              { text: 'sort', link: '' },
              { text: 'swap', link: '' },
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
          { text: '关于我们', link: '/mojo/about' },
          { text: '加入群聊', link: '/mojo/chat' },
          { text: '赞助我们', link: '/mojo/sponsor'},
          { text: '布道师计划', link: '/mojo/guide'},
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