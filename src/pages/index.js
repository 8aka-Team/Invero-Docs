import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function Banner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.banner}>
      <div className={styles.bannerInner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>{siteConfig.title}</h1>
          <p className={styles.bannerSubtitle}>
            <Translate>轻松创建高度自定义的 Minecraft GUI 插件，为您的服务器添加精美界面</Translate>
          </p>
          <div className={styles.bannerButtons}>
                <Link
              className={`${styles.bannerButton} ${styles.primaryButton}`}
                    to="/docs/about">
              <span className={styles.buttonIcon}>📚</span>
              <Translate>快速开始</Translate>
            </Link>
            <Link
              className={`${styles.bannerButton} ${styles.secondaryButton}`}
              to="/download">
              <span className={styles.buttonIcon}>📦</span>
              <Translate>立即下载</Translate>
                </Link>
            </div>
        </div>
        <div className={styles.bannerImageContainer}>
          <img 
            src="img/invero_titled_logo.png" 
            alt="Invero GUI 展示" 
            className={styles.bannerImage}
          />
        </div>
      </div>
    </div>
  );
}

const downloadOptions = [
  {
    title: translate({
      id: 'download.stable.title',
      message: '稳定版',
    }),
    icon: 'img/invero_logo.png',
    description: translate({
      id: 'download.stable.description',
      message: '推荐大多数用户使用的稳定版本，经过全面测试，适合生产环境',
    }),
    version: '1.0.0',
    buttonText: translate({
      id: 'download.button.download',
      message: '下载',
    }),
    url: 'https://github.com/8aka-Team/Invero/releases/latest',
  },
  {
    title: translate({
      id: 'download.dev.title',
      message: '开发版',
    }),
    icon: 'img/invero_logo.png',
    description: translate({
      id: 'download.dev.description',
      message: '包含最新功能但可能不够稳定的版本，适合尝试新功能和测试',
    }),
    version: '1.1.0-SNAPSHOT',
    buttonText: translate({
      id: 'download.button.download',
      message: '下载',
    }),
    url: 'https://github.com/8aka-Team/Invero/actions',
  },
  {
    title: translate({
      id: 'download.source.title',
      message: '源代码',
    }),
    icon: 'img/invero_logo.png',
    description: translate({
      id: 'download.source.description',
      message: '获取完整源代码，自行编译或为项目做出贡献',
    }),
    buttonText: translate({
      id: 'download.button.github',
      message: 'GitHub',
    }),
    url: 'https://github.com/8aka-Team/Invero',
  },
];

function DownloadOption({title, icon, description, version, buttonText, url}) {
  return (
    <div className={styles.downloadCard}>
      <img src={icon} alt={title} className={styles.cardIcon} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      {version && (
        <div className={styles.versionInfo}>
          <Translate>版本</Translate>: {version}
        </div>
      )}
      <Link className={styles.downloadButton} to={url}>
        {buttonText}
      </Link>
    </div>
  );
}

const features = [
  {
    title: translate({
      id: 'features.1.title', 
      message: '简单易用'
    }),
    description: translate({
      id: 'features.1.description',
      message: '通过简洁的配置方式创建界面，无需编写复杂代码，节省开发时间'
    }),
    icon: '🚀'
  },
  {
    title: translate({
      id: 'features.2.title',
      message: '高度自定义'
    }),
    description: translate({
      id: 'features.2.description',
      message: '提供丰富的组件和样式选项，让你创建独一无二的游戏界面'
    }),
    icon: '🎨'
  },
  {
    title: translate({
      id: 'features.3.title',
      message: '性能优化'
    }),
    description: translate({
      id: 'features.3.description',
      message: '高效的渲染机制和资源管理，确保即使在大型服务器上也能流畅运行'
    }),
    icon: '⚡'
  },
  {
    title: translate({
      id: 'features.4.title',
      message: '开源免费'
    }),
    description: translate({
      id: 'features.4.description',
      message: '完全开源的项目，欢迎社区贡献，持续更新和改进'
    }),
    icon: '🌟'
  },
  {
    title: translate({
      id: 'features.5.title',
      message: '多版本支持'
    }),
    description: translate({
      id: 'features.5.description',
      message: '兼容多个 Minecraft 版本，确保你的插件能在不同环境中正常运行'
    }),
    icon: '🔄'
  },
  {
    title: translate({
      id: 'features.6.title',
      message: '详细文档'
    }),
    description: translate({
      id: 'features.6.description',
      message: '提供完整的中文文档和示例，帮助你快速掌握插件的使用方法'
    }),
    icon: '📚'
  },
];

function FeatureCard({title, description, icon}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className={styles.contentSection}>
      <h2 className={styles.sectionTitle}>
        <Translate>功能特性</Translate>
      </h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
        title={translate({
        id: 'site.download.title',
        message: '下载',
      })}
      description={translate({
        id: 'site.download.description',
        message: '下载 Invero Minecraft GUI 插件',
      })}>
      <main className={styles.downloadPage}>
        <Banner />
        <FeaturesSection />
        </main>
    </Layout>
  );
}
