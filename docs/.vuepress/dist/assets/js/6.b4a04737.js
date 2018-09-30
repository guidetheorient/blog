(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{61:function(s,a,t){"use strict";t.r(a);var i=t(0),e=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"what-b"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-b","aria-hidden":"true"}},[s._v("#")]),s._v(" what b")]),s._v(" "),t("h2",{attrs:{id:"查看不同commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看不同commit","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看不同commit")]),s._v(" "),t("h3",{attrs:{id:"git-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-log","aria-hidden":"true"}},[s._v("#")]),s._v(" git log")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",[t("code",{staticClass:"hljs language-bash"},[t("span",{staticClass:"hljs-comment"},[s._v("# 查看历史commit")]),s._v("\ngit "),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("# 查看历史commit - 生成简短且唯一的commit id值，一行")]),s._v("\ngit "),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v(" --abbrev-commit --pretty=oneline\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("h3",{attrs:{id:"git-show"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-show","aria-hidden":"true"}},[s._v("#")]),s._v(" git show")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",[t("code",{staticClass:"hljs language-bash"},[t("span",{staticClass:"hljs-comment"},[s._v("# 查看某个commit, id前几位即可")]),s._v("\ngit show <commit id>\n"),t("span",{staticClass:"hljs-comment"},[s._v("# 分支名，查询分支最新一次commit")]),s._v("\ngit show <branch name>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("h3",{attrs:{id:"git-reflog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-reflog","aria-hidden":"true"}},[s._v("#")]),s._v(" git reflog")]),s._v(" "),t("p",[s._v("git reflog只保存在本地")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",[t("code",{staticClass:"hljs language-bash"},[t("span",{staticClass:"hljs-comment"},[s._v("# 查看HEAD和分支引用记录")]),s._v("\ngit reflog\n"),t("span",{staticClass:"hljs-comment"},[s._v("# 像git log一样显示详细的git reflog, branch name可选")]),s._v("\ngit "),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v(" -g [<branch name>]\n"),t("span",{staticClass:"hljs-comment"},[s._v("# 查看一次HEAD记录")]),s._v("\ngit show HEAD@{0}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("h3",{attrs:{id:"祖先引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#祖先引用","aria-hidden":"true"}},[s._v("#")]),s._v(" 祖先引用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",[t("code",{staticClass:"hljs language-bash"},[t("span",{staticClass:"hljs-comment"},[s._v("# HEAD的父提交")]),s._v("\ngit show HEAD^\ngit show d921970^\n"),t("span",{staticClass:"hljs-comment"},[s._v("# 当合并时，合并提交有多个父提交，否则只有一个父提交")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("# 首个父提交为合并时所在分支")]),s._v("\ngit show d921970^2\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("# HEAD的首个祖先提交 === git show HEAD^")]),s._v("\ngit show HEAD~\n"),t("span",{staticClass:"hljs-comment"},[s._v("# 首个父提交的首个父提交（git merge时所在的分支为首个）")]),s._v("\ngit show HEAD~2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("h2",{attrs:{id:"提交范围-show-commit-diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交范围-show-commit-diff","aria-hidden":"true"}},[s._v("#")]),s._v(" 提交范围 show commit diff")]),s._v(" "),t("h3",{attrs:{id:"双点号-多点-三点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双点号-多点-三点","aria-hidden":"true"}},[s._v("#")]),s._v(" 双点号 | 多点 | 三点")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",[t("code",{staticClass:"hljs language-bash"},[t("span",{staticClass:"hljs-comment"},[s._v("# 查看前面不包含后面的commit (master为base dev为对比)")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("# 以下三条等价")]),s._v("\ngit "),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v(" master..dev\ngit "),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v(" dev ^master\ngit "),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v(" dev --not master\n"),t("span",{staticClass:"hljs-comment"},[s._v("# 远程也可 (本地有远程无)")]),s._v("\ngit "),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v(" origin/master..HEAD\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("# 包含在refA refB，但不包含在refC中的提交")]),s._v("\ngit "),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v(" refA refB ^refC\ngit "),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v(" refA refB --not refC\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("# master与dev之间不同的")]),s._v("\n"),t("span",{staticClass:"hljs-comment"},[s._v("# [--left-right]显示每个不同的commit属于哪个branch，其中 < 代表左边一个，即master")]),s._v("\ngit "),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v(" master...dev [--left-right]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("hr"),s._v(" "),t("h2",{attrs:{id:"暂时用不上的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#暂时用不上的","aria-hidden":"true"}},[s._v("#")]),s._v(" 暂时用不上的")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",[t("code",{staticClass:"hljs language-bash"},[t("span",{staticClass:"hljs-comment"},[s._v("# 生成当前状态对应的或预期生成的SHA-1值")]),s._v("\ngit rev-parse <branch name>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})])])}],!1,null,null,null);e.options.__file="b.md";a.default=e.exports}}]);