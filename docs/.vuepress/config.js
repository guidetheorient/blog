var hljs = require('highlight.js'); // https://highlightjs.org/
const genArticleTitle = (path, nameArr) => {
  path = path.includes('/') ? path : path + '/'
  return nameArr.map((item, i) => {
    return `${path}${item}`
  })
}
// 汉字还是空格造成链接失效

module.exports = {
  base: '/blog/',
  title: 'guidetheorient\'s blog',
  description: 'guidetheorient\s blog',

  extendMarkdown(md) {
    // md.use(require('markdown-it-highlightjs'), {style: 'github'})
  },
  //theme lib  https://docs.craftcms.com/v3/
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 0,
    lastUpdated: 'Last Updated',

    editLinks: true,
    // editLinkText: '在 GitHub 上编辑此页',

    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Github ',
        link: 'https://github.com/guidetheorient/blog'
      },
    ],

    sidebar: [
      {
        title: '计划',
        children: [
          // ['计划/', 'Introduction'],
          '计划/收集箱',
          '计划/2019年度计划',
          '计划/原则',
          '计划/100-imitation-of-websites',
          '计划/第8周',
          '计划/第9周',
          '计划/2019年周计划汇总'
        ]
      },
      {
        title: 'blog',
        children: [
          ['blog/', 'Introduction'],
          'blog/blog选题',
          'blog/职业生涯',
          'blog/2018-12-20 学习资源',
          'blog/2018-12-19 git撤销操作总结',
          'blog/2018-12-19 Vue使用小结',
          'blog/2018-12-19 开发小结',
          'blog/2019-02-22 vue-cli2升级到webpack4.x',
          'blog/2019-02-25 webpack splitchunks试验',
          'blog/2019-02-26 post请求的content-type',
          'blog/2019-02-27 vue插件编写小结',
          'blog/2019-02-28 了解FLIP动画',
          'blog/2019-03-06 eslint配置指南',
          'blog/2019-04-07 requestAnimationFrame',
          'blog/2019-04-15 记一次vue性能优化',
          'blog/你不知道的Chrome调试技巧',
          'blog/如何使用Canvas制作出炫酷的网页背景特效',
        ]
      },
      {
        title: '资源整理',
        children: [
          // ['资源整理/', 'Introduction'],
          '资源整理/资源整理',
          '资源整理/Vue相关书签'
        ]
      },
      {
        title: 'ECMAScript 6 入门',
        children: [
          ['ECMAScript6入门/', 'Introduction'],
          ...genArticleTitle('ECMAScript6入门', [
            'iterator',
            'generator',
            'generator-async',
            'async函数',
            '2019-01-08 async'
          ])
        ]
      },
      {
        title: 'JavaScript高级程序设计',
        children: [
          ['JavaScript高级程序设计/', 'Introduction'],
          ...genArticleTitle('JavaScript高级程序设计', [
            '1. JavaScript简介',
          ])
        ]
      },
      {
        title: 'node学习',
        children: [
          ['node学习/', 'Introduction'],
          'node学习/1. 后端工程师之路',
          'node学习/2. shell基础操作',
          'node学习/3. nvm node npm的安装和配置',
          'node学习/4. nodeschool',
          'node学习/5. HTTP基础',
          'node学习/6. http server',
          'node学习/7. 模块机制',
          'node学习/8. fs'
        ]
      },
      {
        title: 'Pro Git',
        children: [
          ['pro-git/', 'Introduction'],
          'pro-git/2.2 basic of basic commands',
          'pro-git/2.3 git log',
          'pro-git/2.4 撤销',
          'pro-git/2.5 git remote',
          'pro-git/2.6 git tag',
          
          'pro-git/3.2-3.4 基本的分支操作.md',
          'pro-git/3.5 远程分支',
          'pro-git/3.6 git rebase',

          'pro-git/7.1 Revision Selection',
          'pro-git/7.3 Stashing and Cleaning',
          'pro-git/7.5 搜索',
          'pro-git/7.6 重写历史',
          'pro-git/7.7 reset checkout',
        ]
      },
      {
        title: 'Vue.js源码全方位深入解析',
        children: [
          ['Vue.js源码全方位深入解析/', 'Introduction'],
          ...genArticleTitle('Vue.js源码全方位深入解析', [
            'abc',
          ])
        ]
      },
      {
        title: 'CSS世界',
        children: [
          ['css世界/', 'Introduction'],
          'css世界/1.1 概述',
        ]
      },
      {
        title: 'JavaScript设计模式与开发实践',
        children: [
          ['JavaScript设计模式与开发实践/', 'Introduction'],
          'JavaScript设计模式与开发实践/1.1 概述',
          'JavaScript设计模式与开发实践/单例模式',
          'JavaScript设计模式与开发实践/发布-订阅模式',
        ]
      },
      {
        title: '图解HTTP',
        children: [
          ['图解HTTP/', 'Introduction'],
        ]
      },
    ]
  },

  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top'
  ],

  evergreen: true,
}
