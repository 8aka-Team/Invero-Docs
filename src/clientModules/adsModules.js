// src/clientModules/adModule.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

async function injectExternLink() {
    try {
        // 1. 获取广告数据
        const response = await fetch('https://ad-api.8aka.org/ads');
        const links = await response.json();

        // 2. 验证数据格式
        if (!Array.isArray(links) || links.length === 0) return;

        // 3. 创建广告容器
        const adContainer = document.createElement('div');
        adContainer.className = 'extern-container';

        // 4. 创建广告元素
        links.forEach(ad => {
            const link = document.createElement('a');
            link.href = ad.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = ad.name;
            link.className = 'extern-link';
            adContainer.appendChild(link);
        });

        // 5. 响应式插入逻辑
        const updateAdPosition = () => {
            // 移除旧广告位置
            const existingAd = document.querySelector('.extern-container');
            if (existingAd) existingAd.remove();

            // 桌面端插入位置（导航栏右侧）
            if (window.innerWidth >= 996) {
                const desktopTarget = document.querySelector('.navbar__items--right');
                if (desktopTarget) {
                    desktopTarget.prepend(adContainer.cloneNode(true));
                }
            }
            // 移动端插入位置（侧边栏底部）
            else {
                const mobileTarget = document.querySelector('.menu__list');
                if (mobileTarget) {
                    const mobileAd = adContainer.cloneNode(true);
                    mobileAd.classList.add('mobile-ad');
                    mobileTarget.appendChild(mobileAd);
                }
            }
        };

        // 初始插入
        updateAdPosition();

        // 使用防抖处理窗口调整事件，减少频繁调用
        const debouncedUpdatePosition = debounce(updateAdPosition, 150);
        
        // 移除可能存在的事件监听器，避免重复绑定
        window.removeEventListener('resize', window._updateAdPosition);
        // 保存新的事件处理函数引用
        window._updateAdPosition = debouncedUpdatePosition;
        // 监听窗口变化
        window.addEventListener('resize', window._updateAdPosition);

        // 6. 基础样式
        // 如果已经添加过样式，则不重复添加
        if (!document.getElementById('extern-link-styles')) {
            const style = document.createElement('style');
            style.id = 'extern-link-styles';
            style.textContent = `
            .extern-container {
              display: flex;
              gap: 1rem;
              align-items: center;
            }
            .extern-link {
              color: var(--ifm-link-color);
              padding: 0.5rem;
              border-radius: 4px;
              transition: opacity 0.2s;
            }
            .extern-link:hover {
              opacity: 0.8;
              text-decoration: none;
            }
            .mobile-ad {
              flex-direction: column;
              padding: 1rem;
              border-top: 1px solid var(--ifm-color-emphasis-300);
              margin-top: auto;
            }
          `;
            document.head.appendChild(style);
        }

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
