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

    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Pro Git', link: '/pro-git/' },
      { text: 'Github ', link: 'https://github.com/guidetheorient/blog' },
    ],

    sidebar: [
      {
        title: 'Pro Git',
        children: [
          ['pro-git/', 'Introduction'],
          'pro-git/7.1 Revision Selection',
          'pro-git/7.3 Stashing and Cleaning',
          'pro-git/7.5 搜索',
          'pro-git/7.6 重写历史',
          'pro-git/7.7 reset checkout',
        ]
      },
      {
        title: 'Pro Git 2 TEST',
        children: [
            ['pro-git2-test/', 'Introduction'],
            'pro-git2-test/a',
            'pro-git2-test/b',
        ]
      },
    ]
  },

  plugins: {
  },

  evergreen: true,
}
