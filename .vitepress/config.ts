import { defineConfig } from 'vitepress'


export default defineConfig({
  lang: 'zh_CN',
  title: "Mojo中文网",
  description: "AI编程语言Mojo中文网，AI开发人员的新语言，Mojo 结合了 Python 的可用性和 C 的性能，",
  head:[
    ['link', {rel: 'icon', href: '/favicon.ico'}],
  ],

  themeConfig: {
    logo: '/img/fire.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/docs/start' }
    ],

    sidebar: [
      {
        text: '文档目录',
        items: [
          { text: '简介', link: '/docs/about' },
          { text: '安装SDK', link: '/docs/install' },
          { text: '快速开始', link: '/docs/start' },
          { text: '进阶操作', link: '/docs/pro' },
          { text: '加入群聊', link: '/docs/chat' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: '' }
    // ],

    footer: {
      message: 'Mojo中文网 由Mojofire提供',
      copyright: 'Copyright &copy; 2023 Mojofire. All Rights Reserved.'
    }
  }
})

