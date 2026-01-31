import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OneSkill",
  description: "The App Store for your AI Agent",
  
  // 部署到 Cloudflare Pages 时通常不需要 base，除非有特殊子路径需求
  // base: '/',

  themeConfig: {
    logo: { text: 'OneSkill' }, // 暂时用文字Logo，以后可以换图片
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xu-xiang/oneskill' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright © 2024-present OneSkill Contributors'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/what-is-oneskill' },
          { text: 'Registry', link: 'https://www.skillsdirectory.com/skills' }
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'What is OneSkill?', link: '/guide/what-is-oneskill' },
              { text: 'Quick Start', link: '/guide/quick-start' }
            ]
          },
          {
            text: 'Reference',
            items: [
              { text: 'Commands', link: '/guide/commands' }
            ]
          }
        ],
        actionButton: {
            text: 'Get Started',
            link: '/guide/what-is-oneskill'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/what-is-oneskill' },
          { text: '注册表', link: 'https://www.skillsdirectory.com/skills' }
        ],
        sidebar: [
          {
            text: '介绍',
            items: [
              { text: '什么是 OneSkill?', link: '/zh/guide/what-is-oneskill' },
              { text: '快速开始', link: '/zh/guide/quick-start' }
            ]
          },
          {
            text: '参考',
            items: [
              { text: '命令手册', link: '/zh/guide/commands' }
            ]
          }
        ],
        outlineTitle: '页面导航',
        lastUpdatedText: '最后更新于',
        docFooter: {
          prev: '上一页',
          next: '下一页'
        }
      }
    }
  }
})
