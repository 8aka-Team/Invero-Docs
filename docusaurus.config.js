// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const IS_CHINA_SITE = process.env.CHINA === 'true';
const ICP_LICENSE = process.env.ICP_LICENSE;


/** @type {import('@docusaurus/types').Config} */
const config = {
    future: {
        experimental_faster: true,
    },
    title: 'Invero',
    url: IS_CHINA_SITE ? 'https://invero.8aka.cn' : 'https://invero.8aka.org',

    baseUrl: '/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'ignore',
    favicon: 'img/invero_logo.png',

    organizationName: '8aka-Team',
    projectName: 'Invero-Docs',

    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN'],
    },
    clientModules: [
        require.resolve('./src/clientModules/routeModules.js'),
        require.resolve('./src/clientModules/adsModules.js'),
        require.resolve('./src/clientModules/fixNavbar.js'),
    ],
    customFields: {
        // ICP 备案号
        ICP_LICENSE: ICP_LICENSE,
        // 是否为中国站点
        IS_CHINA_SITE: IS_CHINA_SITE,
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js')
                },
                blog: {
                    showReadingTime: true
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            giscus: {
                repo: '8aka-Team/Invero-Docs',
                repoId: 'R_kgDOOFEX-w',
                category: 'General',
                categoryId: 'DIC_kwDOOFEX-84Cnupi'
            },
            zoom: {
                selector: '.markdown :not(em) > img',
                background: {
                    light: 'rgb(255, 255, 255)',
                    dark: 'rgb(50, 50, 50)',
                },
            },
            navbar: {
                title: 'Invero',
                logo: {
                    alt: 'Invero Logo',
                    src: 'img/invero_logo.png',
                },
                items: [
                    {
                        label: '文档',
                        type: 'doc',
                        docId: 'about',
                        position: 'left',
                    },
                    {
                        to: '/blog/',
                        label: '博客',
                        position: 'left'
                    },
                    {
                        to: '/download/',
                        label: '下载',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/8aka-Team/Invero',
                        position: 'right',
                        className: 'header-github-link',
                    },
                ],
            },
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: '文档',
                        items: [
                            {
                                label: '驿站主页',
                                to: 'https://8aka.org',
                            },
                            {
                                label: 'NitWikit',
                                to: 'https://nitwikit.8aka.org',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/8aka-Team/Invero-Docs',
                            },
                        ],
                    },
                    {
                        title: '交流',
                        items: [
                            {
                                label: 'QQ 群',
                                href: 'https://qm.qq.com/q/dENGavSflK',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} <b>8aka-Team</b>, All Rights Reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                language: ["en", "zh"],
            }),
        ],
    ],
    plugins: [
        'docusaurus-plugin-image-zoom'
    ]
};

module.exports = config;