import ClientInfo from './src/clientinfo';
import styles from './src/footer.module.css';

export default {
  logo: <span>🔥 Mojo</span>,
  faviconGlyph: '🔥',
  project: {
    link: 'https://github.com/shadowqcom/mojo_CN'
  },
  docsRepositoryBase: 'https://github.com/shadowqcom/mojo_CN/blob/main/',
  feedback: {
    content: '反馈此页问题',
    labels: 'feedback',
    docsRepositoryBase: 'https://github.com/shadowqcom/mojo_CN/'
  },
  editLink: {
    text: '在GitHub编辑此页面'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // 默认折叠菜单
  },
  toc: {
    backToTop: true
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Mojo'
    }
  },
  banner: {
    key: 'Mojo社区',
    text: (
      <a href="https://mojoo.org" target="_blank">
        🎉  Modular官方推荐的Mojo社区   →
      </a>
    )
  },
  head: (
    <>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Mojo中文网，Mojo官网，Mojo社区，开发者社区，AI编程语言Mojo中文网，mojo中文文档，mojo中文教程,MojoCN,Mojoo" />
      <meta property="og:description" content="Mojo编程语言中文网官网，AI编程语言Mojo中文网，AI开发人员的新语言，Mojo 结合了 Python 的可用性和 C 的性能，解锁了 AI 硬件无与伦比的可编程性和 AI 模型的可扩展性。" />
    </>
  ),
  footer: {
    text: (
      <div className={styles.footer}>
        <p>Mojo中文网 | Mojo官网 | Mojo社区 | 开发者社区</p>
        <p>copyright © {new Date().getFullYear()}{' '}
          <a href="https://github.com/shadowqcom/mojo_CN" target="_blank">Mojo_CN</a>
          . All Rights Reserved.
        </p>
        <ClientInfo />
      </div>
    ),
  }
}