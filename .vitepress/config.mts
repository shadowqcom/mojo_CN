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
    editLink: {
      pattern: 'https://github.com/shadowqcom/mojo_CN/tree/main/:path'
    },
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
              { text: 'functional', link: 'mojo/reference/algorithm/functional' },
              { text: 'reduction', link: 'mojo/reference/algorithm/reduction' },
              { text: 'sort', link: 'mojo/reference/algorithm/sort' },
              { text: 'swap', link: 'mojo/reference/algorithm/swap' },
              ],
            },
            { text: 'autotuning', link: 'mojo/reference/autotuning/autotuning' },
            { text: 'base64', link: 'mojo/reference/base64/base64' },
            { text: 'benchmark', 
              collapsed: true,
              items: [
              { text: 'benchmark', link: 'mojo/reference/benchmark/benchmark' },
              { text: 'compiler', link: 'mojo/reference/benchmark/compiler' },
              { text: 'momory', link: 'mojo/reference/benchmark/memory'},
              ],
            },
            { text: 'buffer',
              collapsed: true,
              items: [
              { text: 'buffer', link: 'mojo/reference/buffer/buffer' },
              { text: 'list', link: 'mojo/reference/buffer/list' },
              { text: 'memory', link: 'mojo/reference/buffer/memory' },
              ],
            },
            { text: 'builtin', 
              collapsed: true,
              items: [
                { text: 'anytype', link: 'mojo/reference/builtin/anytype' },
                { text: 'bool', link: 'mojo/reference/builtin/bool' },
                { text: 'breakpoint', link: 'mojo/reference/builtin/breakpoint' },
                { text: 'builtin_list', link: 'mojo/reference/builtin/builtin_list' },
                { text: 'builtin_slice', link: 'mojo/reference/builtin/builtin_slice' },
                { text: 'constrained', link: 'mojo/reference/builtin/constrained' },
                { text: 'coroutine', link: 'mojo/reference/builtin/coroutine' },
                { text: 'debug_assert', link: 'mojo/reference/builtin/debug_assert' },
                { text: 'dtype', link: 'mojo/reference/builtin/dtype' },
                { text: 'equality_comparable', link: 'mojo/reference/builtin/equality_comparable' },
                { text: 'error', link: 'mojo/reference/builtin/error' },
                { text: 'file', link: 'mojo/reference/builtin/file' },
                { text: 'float_literal', link: 'mojo/reference/builtin/float_literal' },
                { text: 'hash', link: 'mojo/reference/builtin/hash' },
                { text: 'hex', link: 'mojo/reference/builtin/hex' },
                { text: 'int', link: 'mojo/reference/builtin/int' },
                { text: 'int_literal', link: 'mojo/reference/builtin/int_literal' },
                { text: 'io', link: 'mojo/reference/builtin/io' },
                { text: 'len', link: 'mojo/reference/builtin/len' },
                { text: 'object', link: 'mojo/reference/builtin/object' },
                { text: 'range', link: 'mojo/reference/builtin/range' },
                { text: 'rebind', link: 'mojo/reference/builtin/rebind' },
                { text: 'simd', link: 'mojo/reference/builtin/simd' },
                { text: 'str', link: 'mojo/reference/builtin/str' },
                { text: 'string', link: 'mojo/reference/builtin/string' },
                { text: 'string_literal', link: 'mojo/reference/builtin/string_literal' },
                { text: 'tuple', link: 'mojo/reference/builtin/tuple' },
                { text: 'type_aliases', link: 'mojo/reference/builtin/type_aliases' },
                { text: 'value', link: 'mojo/reference/builtin/value' },
              ],
            },
            { text: 'collections', 
              collapsed: true,
              items: [
                { text: 'dict', link: 'mojo/reference/collections/dict' },
                { text: 'list', link: 'mojo/reference/collections/list' },
                { text: 'optional', link: 'mojo/reference/collections/optional' },
                { text: 'set', link: 'mojo/reference/collections/set' },
                { text: 'vector', link: 'mojo/reference/collections/vector' },
              ],
            },
            { text: 'complex', link: 'mojo/reference/complex/complex' },
            { text: 'math', 
              collapsed: true,
              items: [
                { text: 'bit', link: 'mojo/reference/math/bit' },
                { text: 'limit', link: 'mojo/reference/math/limit' },
                { text: 'math', link: 'mojo/reference/math/math' },
                { text: 'polynomial', link: 'mojo/reference/math/polynomial' },
              ], 
            },
            { text: 'memory', 
              collapsed: true,
              items: [
                { text: 'anypointer', link: 'mojo/reference/memory/anypointer' },
                { text: 'memory', link: 'mojo/reference/memory/memory' },
                { text: 'unsafe', link: 'mojo/reference/memory/unsafe' },
              ],
            },
            { text: 'os',
              collapsed: true,
              items: [
                { text: 'atomic', link: 'mojo/reference/os/atomic' },
                { text: 'env', link: 'mojo/reference/os/env' },
                { text: 'fstat', link: 'mojo/reference/os/fstat' },
                { text: 'os', link: 'mojo/reference/os/os' },
                { text: 'path', link: 'mojo/reference/os/path' },
                { text: 'pathlike', link: 'mojo/reference/os/pathlike' },
              ],
            },
            { text: 'pathlib', link: 'mojo/reference/pathlib/path' },
            { text: 'python', 
              collapsed: true,  
              items: [
                { text: 'object', link: 'mojo/reference/python/object' },
                { text: 'python', link: 'mojo/reference/python/python' },
              ],
            },
            { text: 'random', link: 'mojo/reference/random/random' },
            { text: 'stat', link: 'mojo/reference/stat/stat' },
            { text: 'sys', 
              collapsed: true,
              items: [
                { text: 'arg', link: 'mojo/reference/sys/arg' },
                { text: 'debug', link: 'mojo/reference/sys/debug' },
                { text: 'ffi', link: 'mojo/reference/sys/ffi' },
                { text: 'info', link: 'mojo/reference/sys/info' },
                { text: 'intrinsics', link: 'mojo/reference/sys/intrinsics' },
                { text: 'param_env', link: 'mojo/reference/sys/param_env' },
              ],
            },
            { text: 'tensor', 
              collapsed: true,
              items: [
                { text: 'random', link: 'mojo/reference/tensor/random' },
                { text: 'tensor', link: 'mojo/reference/tensor/tensor' },
                { text: 'tensor_shape', link: 'mojo/reference/tensor/tensor_shape' },
                { text: 'tensor_spec', link: 'mojo/reference/tensor/tensor_spec' },
              ],
            },
            { text: 'testing', link: 'mojo/reference/testing/testing' },
            { text: 'time', link: 'mojo/reference/time/time' },
            { text: 'utils', 
              collapsed: true,
              items: [
                { text: 'index', link: 'mojo/reference/utils/utilsindex' },
                { text: 'inlined_string', link: 'mojo/reference/utils/inlined_string' },
                { text: 'loop', link: 'mojo/reference/utils/loop' },
                { text: 'static_tuple', link: 'mojo/reference/utils/static_tuple' },
                { text: 'stringref', link: 'mojo/reference/utils/stringref' },
                { text: 'variant', link: 'mojo/reference/utils/variant' },
              ],
            },
            ]
          },
          { text: '装饰器',
              collapsed: true,
              items: [
              { text: '@always_inline', link: 'mojo/decorators/@always_inline' },
              { text: '@nonmaterializable', link: 'mojo/decorators/@nonmaterializable' },
              { text: '@parameter', link: 'mojo/decorators/@parameter' },
              { text: '@register_passable', link: 'mojo/decorators/@register_passable' },
              { text: '@staticmethod', link: 'mojo/decorators/@staticmethod' },
              { text: '@unroll', link: 'mojo/decorators/@unroll' },
              { text: '@value', link: 'mojo/decorators/@value' },
              ],
          },
          { text: '命令行',
          collapsed: true,
          items: [
          { text: 'mojo', link: 'mojo/mojocli/mojo' },
          { text: 'mojo build', link: 'mojo/mojocli/mojo build' },
          { text: 'mojo debug', link: 'mojo/mojocli/mojo debug' },
          { text: 'mojo demangle', link: 'mojo/mojocli/mojo demangle' },
          { text: 'mojo doc', link: 'mojo/mojocli/mojo doc' },
          { text: 'mojo format', link: 'mojo/mojocli/mojo format' },
          { text: 'mojo package', link: 'mojo/mojocli/mojo package' },
          { text: 'mojo repl', link: 'mojo/mojocli/mojo repl' },
          { text: 'mojo run', link: 'mojo/mojocli/mojo run' },
          ],
      },
        ],
      },
      {
        text: '例子',
        items: [
          { text: '开源项目参考', link: 'https://dev.mojocn.org/t/Show_Mojo' },
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