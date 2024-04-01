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
    ],
    
    //微软统计分析
    ['script', { type: 'text/javascript' }, `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "lpo3k0x6fh");
    `]
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/img/mojofire.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '开发者社区', link: 'https://dev.mojocn.org/' },
      { text: '快速开始', link: '/mojo/manual/index' },
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
            { text: 'Mojo入门', link: '/mojo/manual/languagebasics/introductiontomojo' },
            { text: '函数', link: '/mojo/manual/languagebasics/functions' },
            { text: '变量', link: '/mojo/manual/languagebasics/variables' },
            { text: '结构体', link: '/mojo/manual/languagebasics/structs' },
            { text: '模块和包', link: '/mojo/manual/languagebasics/modulesandpackages' },
            ]
          },
          {text: '所有权',
          collapsed: true,
          items: [
            { text: '值的所有权介绍', link: '/mojo/manual/valueownership/introtovalueownership' },
            { text: '值语义', link: '/mojo/manual/valueownership/valuesemantics' },
            { text: '所有权和借用', link: '/mojo/manual/valueownership/ownershipandborrowing' },
            ]
          },
          {text: '生命周期',
          collapsed: true,
          items: [
            { text: '值生命周期简介', link: '/mojo/manual/valuelifecycle/introtovaluelifecycle' },
            { text: '值的生命周期', link: '/mojo/manual/valuelifecycle/lifeofavalue' },
            { text: '值的销毁', link: '/mojo/manual/valuelifecycle/deathofavalue' },
            ]
          },
          {text: '特征和参数',
          collapsed: true,
          items: [
            { text: '特征', link: '/mojo/manual/traitsandparameters/traits' },
            { text: '参数化：编译时元编程', link: '/mojo/manual/traitsandparameters/parameterizationcompiletimemetaprogramming' },
            ]
          },
          {text: 'Python',
          collapsed: true,
          items: [
            { text: 'Python集成', link: '/mojo/manual/python/pythonintegration' },
            { text: 'Python类型', link: '/mojo/manual/python/pythontypes' },
            ]
          },
          {text: '工具',
          collapsed: true,
          items: [
            { text: '调试', link: '/mojo/manual/tools/debugging' },
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
      copyright: `Copyright &copy; ${new Date().getFullYear()} MojoCN. All Rights Reserved. 影象限 版权所有`
    }
  }
})