(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{105:function(t,a,e){"use strict";e.r(a);var n=e(0),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_2-6-git-tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-git-tag","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.6 git tag")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TODO")]),t._v(" "),e("p",[t._v("通过GPG签名如何辨明身份，并防止像email和username一样被盗用？")])]),t._v(" "),e("blockquote",[e("p",[t._v("参考"),e("br"),t._v(" "),e("a",{attrs:{href:"https://rem.co/blog/2015/02/12/git-the-difference-between-lightweight-and-annotated-tags/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("1. Git: The Difference Between Lightweight and Annotated Tags"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://code.i-harness.com/en/q/afb0db",target:"_blank",rel:"noopener noreferrer"}},[t._v("2. [git] What is the difference between an annotated and unannotated tag?\n"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"为什么要打tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要打tag","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么要打tag?")]),t._v(" "),e("p",[t._v("tag(注释tag)可以辨别tagger的身份（包括tagger，date，GPG signature），在DVCS中非常有效")]),t._v(" "),e("h3",{attrs:{id:"轻量-lightweight-标签和注释-annotated-标签的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#轻量-lightweight-标签和注释-annotated-标签的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 轻量(lightweight)标签和注释(annotated)标签的区别")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("git tag v1.4 -m 'message'虽然没有"),e("code",[t._v("-a")]),t._v("，但是添加的是注释标签")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("annotated")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("lightweight")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("定义")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("* 包含用户信息，签名等，类似于一个commit")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指向某次提交的指针")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("用途")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("* managing releases / versions"),e("br"),t._v("* shared in public repositories and branches")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("* private"),e("br"),t._v("* temporary")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("选择")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("总是使用annotated tag")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列举所有tag")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列举包含1.1的tag")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -l "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*1.1*"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打轻量标签")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag v1.4-lw\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打注释标签")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 必须写提交信息")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a v1.4 -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my version v1.4'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 补加标签")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a v1.2 9fceb02\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# push到仓库（默认是不会push到远程的）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一个tagname 或 --tags所有")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tagname "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" --tags"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看tag内容")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show v1.4\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除tag")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d v1.4\n")])])]),e("h3",{attrs:{id:"暂时没什么用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#暂时没什么用","aria-hidden":"true"}},[t._v("#")]),t._v(" 暂时没什么用")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 辨别tag种类 outputs commit for lightweight, tag for annotated.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cat-file -t "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在特定标签创建一个新分支")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("new branch name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v2.0.0\n")])])])])},[],!1,null,null,null);a.default=s.exports}}]);