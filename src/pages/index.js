import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './index.module.css';

// 移动端Hero
function MobileHeroSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={styles.mobileHero}>
      <div className={styles.mobileHeroContent}>
        {/* 标题 */}
        <div className={styles.mobileHeroTitle}>
          <h1 className={styles.mobileTitleMain}>{siteConfig.title}</h1>
          <p className={styles.mobileHeroSubtitle}>
            <Translate>轻松创建高度自定义的 Minecraft GUI 插件</Translate>
          </p>
        </div>

        {/* 特色 */}
        <div className={styles.mobileHeroTags}>
          <span className={styles.mobileTag}>
            <span className={styles.mobileTagIcon}>🚀</span>
            <Translate>简单易用</Translate>
          </span>
          <span className={styles.mobileTag}>
            <span className={styles.mobileTagIcon}>🎨</span>
            <Translate>高度自定义</Translate>
          </span>
          <span className={styles.mobileTag}>
            <span className={styles.mobileTagIcon}>💎</span>
            <Translate>开源免费</Translate>
          </span>
        </div>

        {/* 按钮 */}
        <div className={styles.mobileHeroActions}>
          <Link className={styles.mobileActionButton} to="/docs/about">
            <span className={styles.mobileActionIcon}>📖</span>
            <span className={styles.mobileActionText}>
              <Translate>快速开始</Translate>
            </span>
          </Link>
          <Link className={styles.mobileActionButton} to="/download">
            <span className={styles.mobileActionIcon}>📦</span>
            <span className={styles.mobileActionText}>
              <Translate>立即下载</Translate>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Hero
function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rightScrollY, setRightScrollY] = useState(0);
  const [isRightScrollComplete, setIsRightScrollComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    // 右侧滚动处理
    const handleRightScroll = (e) => {
      const container = e.target;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      setRightScrollY(scrollTop);

      // 检查是否滚动到底部
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      setIsRightScrollComplete(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // 为右侧滚动区域添加滚动监听
    const rightScrollContainer = document.querySelector(`.${styles.heroRight}`);
    if (rightScrollContainer) {
      rightScrollContainer.addEventListener('scroll', handleRightScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rightScrollContainer) {
        rightScrollContainer.removeEventListener('scroll', handleRightScroll);
      }
    };
  }, []);

  return (
    <section className={styles.hero}>
      {/* 背景 */}
      <div className={styles.heroBackground}>
        <div
          className={styles.backgroundParticles}
          style={{
            transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px)`
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{ '--delay': `${i * 0.5}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* 左侧侧边栏 */}
      <div className={styles.heroLeft}>
        {/* 标题 */}
        <div className={styles.logoTitleSection}>
          <div className={styles.heroTitle}>
            <span className={styles.titleMain}>{siteConfig.title}</span>
            <div className={styles.titleGlow}></div>
          </div>
        </div>

        {/* 介绍 */}
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>
            <Translate>轻松创建高度自定义的 Minecraft GUI 插件</Translate>
          </p>

          {/*标签 */}
          <div className={styles.heroTags}>
            <span className={styles.tag}>
              <span className={styles.tagIcon}>🚀</span>
              <Translate>简单易用</Translate>
            </span>
            <span className={styles.tag}>
              <span className={styles.tagIcon}>🎨</span>
              <Translate>高度自定义</Translate>
            </span>
            <span className={styles.tag}>
              <span className={styles.tagIcon}>💎</span>
              <Translate>开源免费</Translate>
            </span>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className={styles.heroActions}>
          <Link className={styles.actionLink} to="/docs/about">
            <div className={styles.actionIcon}>📖</div>
            <div className={styles.actionContent}>
              <span className={styles.actionText}>
                <Translate>快速开始</Translate>
              </span>
              <span className={styles.actionDesc}>
                <Translate>查看文档</Translate>
              </span>
            </div>
            <div className={styles.actionArrow}>→</div>
          </Link>
          <Link className={styles.actionLink} to="/download">
            <div className={styles.actionIcon}>📦</div>
            <div className={styles.actionContent}>
              <span className={styles.actionText}>
                <Translate>立即下载</Translate>
              </span>
              <span className={styles.actionDesc}>
                <Translate>获取最新版本</Translate>
              </span>
            </div>
            <div className={styles.actionArrow}>↓</div>
          </Link>
        </div>


      </div>

      {/* 右侧滚动卡片 */}
      <div className={styles.heroRight}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardsHeader}>
            <h3 className={styles.cardsTitle}>
              <Translate>为什么选择 Invero？</Translate>
            </h3>
            <div className={styles.cardsTitleLine}></div>
          </div>
          <div className={styles.cardsGrid}>
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} index={idx} />
            ))}
          </div>

          {/* 滚动提示 */}
          <div className={styles.scrollHint}>
            <div className={styles.scrollHintText}>
              <Translate>继续向下滚动探索更多</Translate>
            </div>
            <div className={styles.scrollHintArrow}>↓</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 功能特性数据
const features = [
  {
    title: translate({
      id: 'features.1.title',
      message: '简单易用'
    }),
    description: translate({
      id: 'features.1.description',
      message: '通过简洁的配置方式创建界面，无需编写复杂代码'
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
      message: '提供丰富的组件和样式选项，创建独一无二的界面'
    }),
    icon: '🎨'
  },
  {
    title: translate({
      id: 'features.3.title',
      message: '开源免费'
    }),
    description: translate({
      id: 'features.3.description',
      message: '完全开源的项目，欢迎社区贡献，持续更新'
    }),
    icon: '💎'
  },
  {
    title: translate({
      id: 'features.4.title',
      message: '性能优化'
    }),
    description: translate({
      id: 'features.4.description',
      message: '高效的渲染机制，确保流畅的用户体验'
    }),
    icon: '⚡'
  },
  {
    title: translate({
      id: 'features.5.title',
      message: '多版本支持'
    }),
    description: translate({
      id: 'features.5.description',
      message: '兼容多个 Minecraft 版本，适应不同环境'
    }),
    icon: '🔄'
  }
];

// 功能特性卡片组件
function FeatureCard({ title, description, icon, index }) {
  return (
    <div
      className={styles.featureCard}
      style={{
        '--index': index,
        '--delay': `${index * 0.1}s`
      }}
    >
      <div className={styles.cardGlow}></div>
      <div className={styles.cardContent}>
        <div className={styles.cardIcon}>{icon}</div>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardBorder}></div>
    </div>
  );
}





// 主页面组件
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // 检测右侧滚动完成，允许页面继续滚动
    const handleWheel = (e) => {
      const heroSection = document.querySelector(`.${styles.hero}`);
      const heroRight = document.querySelector(`.${styles.heroRight}`);

      if (!heroSection || !heroRight) return;

      // 检查鼠标是否在Hero区域内
      const rect = heroSection.getBoundingClientRect();
      const isInHero = e.clientY >= rect.top && e.clientY <= rect.bottom;

      if (isInHero) {
        const scrollTop = heroRight.scrollTop;
        const scrollHeight = heroRight.scrollHeight;
        const clientHeight = heroRight.clientHeight;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
        const isAtTop = scrollTop <= 10;

        // 如果向下滚动且右侧已到底部，允许页面滚动
        if (e.deltaY > 0 && isAtBottom) {
          return; // 允许页面滚动
        }

        // 如果向上滚动且右侧已到顶部，允许页面滚动
        if (e.deltaY < 0 && isAtTop && window.scrollY > 0) {
          return; // 允许页面滚动
        }

        // 否则阻止页面滚动，转发给右侧
        e.preventDefault();
        e.stopPropagation();
        heroRight.scrollTop += e.deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <Layout
      title={translate({
        id: 'site.home.title',
        message: '首页',
      })}
      description={translate({
        id: 'site.home.description',
        message: 'Invero - 轻松创建高度自定义的 Minecraft GUI 插件',
      })}>
      <MobileHeroSection />
      <HeroSection />
    </Layout>
  );
}
