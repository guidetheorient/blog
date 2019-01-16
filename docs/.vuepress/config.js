var hljs = require('highlight.js'); // https://highlightjs.org/
const genArticleTitle = (path, nameArr) => {
  path = path.includes('/') ? path : path + '/'
  return nameArr.map((item, i) => {
    return `${path}${item}`
  })
}

module.exports = {
  base: '/blog/',
  title: 'guidetheorient\'s blog',
  description: 'guidetheorient\s blog',

  markdown: {
    // lineNumbers: true,

    config: md => {
      // md.use(require('markdown-it-highlightjs'), {style: 'github'})
    }
  },
  //theme lib  https://docs.craftcms.com/v3/
  themeConfig: {
    displayAllHeaders: false,
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
        title: 'blog',
        children: [
          ['blog/', 'Introduction'],
          'blog/TODO',
          'blog/职业生涯',
          'blog/2018-12-20 学习资源',
          'blog/2018-12-19 git撤销操作总结',
          'blog/2018-12-19 Vue使用小结',
          'blog/2018-12-19 开发小结',
        ]
      },
      {
        title: 'ECMAScript 6 入门',
        children: [
          ['ECMAScript 6 入门/', 'Introduction'],
          ...genArticleTitle('ECMAScript 6 入门', [
            'Iterator 和 for...of 循环',
            'Generator 函数的语法',
            'Generator 函数的异步应用',
            'async 函数',
            '2019-01-08 async'
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
          'node学习/5. HTTP基础'
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

  plugins: {},

  evergreen: true,
}
