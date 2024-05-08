import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import ClientInfo from './src/clientinfo';
import styles from './src/footer.module.css';

export default {
  logo: <span>🔥 Mojo</span>,
  faviconGlyph: '🔥',
  project: {
    link: 'https://github.com/shadowqcom/mojo_CN'
  },
  chat: {
    link: '/chat',
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="currentColor">
        <path d="M44 8H4V38H19L24 43L29 38H44V8Z"/>
        <path d="M21 15L20 32" stroke="#FFF" stroke-width="4" stroke-linecap="round"/>
        <path d="M28 15L27 32" stroke="#FFF" stroke-width="4" stroke-linecap="round"/>
        <path d="M33 20L16 20" stroke="#FFF" stroke-width="4" stroke-linecap="round"/>
        <path d="M32 27L15 27" stroke="#FFF" stroke-width="4" stroke-linecap="round"/>
      </svg>
    )
  },
  docsRepositoryBase: 'https://github.com/shadowqcom/mojo_CN',
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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Mojo中文网，Mojo官网，Mojo社区，开发者社区" />
      <meta property="og:description" content="Mojo编程语言中文网官网，AI编程语言Mojo中文网，AI开发人员的新语言，Mojo 结合了 Python 的可用性和 C 的性能。" />
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