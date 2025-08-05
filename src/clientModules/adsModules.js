// src/clientModules/adModule.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

async function injectExternLink() {
    try {
        // 1. 检测当前语言，如果是英文则不显示广告
        const currentPath = window.location.pathname;
        const isEnglish = currentPath.startsWith('/en/') || currentPath === '/en';

        if (isEnglish) {
            // 移除已存在的广告
            const existingAd = document.querySelector('.extern-container');
            if (existingAd) existingAd.remove();
            return;
        }

        // 2. 获取广告数据
        const response = await fetch('https://ad-api.8aka.org/ads');
        const links = await response.json();

        // 3. 验证数据格式
        if (!Array.isArray(links) || links.length === 0) return;

        // 4. 创建广告容器
        const adContainer = document.createElement('div');
        adContainer.className = 'extern-container';

        // 5. 创建广告元素
        links.forEach(ad => {
            const link = document.createElement('a');
            link.href = ad.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = ad.name;
            link.className = 'extern-link';
            adContainer.appendChild(link);
        });

        // 6. 响应式插入逻辑
        const updateAdPosition = () => {
            // 移除旧广告位置
            const existingAd = document.querySelector('.extern-container');
            if (existingAd) existingAd.remove();

            // 重置样式类
            adContainer.classList.remove('mobile-ad', 'desktop-ad');

            // 大屏幕桌面端（导航栏右侧）- 提高断点到1200px避免换行
            if (window.innerWidth >= 1200) {
                const desktopTarget = document.querySelector('.navbar__items--right');
                if (desktopTarget) {
                    adContainer.classList.add('desktop-ad');
                    desktopTarget.prepend(adContainer);
                }
            }
            // 中等屏幕（1000-1199px）- 隐藏导航栏广告，避免换行
            else if (window.innerWidth >= 1000) {
                // 不在导航栏显示广告，避免换行问题
                return;
            }
            // 移动端和小屏幕（侧边栏底部）
            else {
                const mobileTarget = document.querySelector('.menu__list');
                if (mobileTarget) {
                    adContainer.classList.add('mobile-ad');
                    mobileTarget.appendChild(adContainer);
                }
            }
        };

        // 初始插入
        updateAdPosition();

        // 监听窗口变化
        window.addEventListener('resize', updateAdPosition);

        // 7. 优化的响应式样式
        const style = document.createElement('style');
        style.textContent = `
        .extern-container {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex-shrink: 0;
        }
        .extern-link {
          color: var(--ifm-link-color);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          transition: opacity 0.2s;
          font-size: 1rem;
          white-space: nowrap;
          text-decoration: none;
        }
        .extern-link:hover {
          opacity: 0.8;
          text-decoration: none;
        }
        
        /* 桌面端样式 - 更紧凑 */
        .desktop-ad {
          margin-right: 0.5rem;
        }
        .desktop-ad .extern-link {
          padding: 0.2rem 0.4rem;
          font-size: 1rem;
        }
        
        /* 移动端样式 */
        .mobile-ad {
          flex-direction: column;
          padding: 1rem;
          border-top: 1px solid var(--ifm-color-emphasis-300);
          margin-top: auto;
          gap: 0.5rem;
        }
        .mobile-ad .extern-link {
          padding: 0.5rem;
          text-align: center;
          width: 100%;
        }
        
        /* 确保导航栏不换行 */
        .navbar__items--right {
          flex-wrap: nowrap;
        }
      `;
        document.head.appendChild(style);

    } catch (error) {
        console.error('Failed to load ads:', error);
    }
}

// 只在客户端执行
if (ExecutionEnvironment.canUseDOM) {
    injectExternLink()
}
export function onRouteDidUpdate() {
    if (ExecutionEnvironment.canUseDOM) {
        injectExternLink();
    }
}
