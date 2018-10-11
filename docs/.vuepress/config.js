var hljs = require('highlight.js'); // https://highlightjs.org/

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
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',

    editLinks: true,
    // editLinkText: '在 GitHub 上编辑此页',

    nav: [{
        text: 'Home',
        link: '/'
      },
      // { text: 'Pro Git', link: '/pro-git/' },
      {
        text: 'Github ',
        link: 'https://github.com/guidetheorient/blog'
      },
    ],

    sidebar: [{
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
    ]
  },

  plugins: {},

  evergreen: true,
}
