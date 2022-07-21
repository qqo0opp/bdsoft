(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-antd-md-loader/index.js?!./vueDocs/getting-started.zh-CN.md?vue&type=template&id=603bfa35&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--0-0!./node_modules/vue-antd-md-loader??ref--0-1!./vueDocs/getting-started.zh-CN.md?vue&type=template&id=603bfa35& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;
  return _c("div", [_c("h1", [_vm._v("快速上手")]), _vm._v(" "), _c("p", [_vm._v("Ant Design Vue 致力于提供给程序员"), _c("strong", [_vm._v("愉悦")]), _vm._v("的开发体验。")]), _vm._v(" "), _c("blockquote", [_c("p", [_vm._v("在开始之前，推荐先学习 "), _c("a", { attrs: { href: "https://cn.vuejs.org/" } }, [_vm._v("Vue")]), _vm._v(" 和 "), _c("a", { attrs: { href: "http://babeljs.io/docs/learn-es2015/" } }, [_vm._v("ES2015")]), _vm._v("，并正确安装和配置了 "), _c("a", { attrs: { href: "https://nodejs.org/" } }, [_vm._v("Node.js")]), _vm._v(" v8.9 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式。如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。")])]), _vm._v(" "), _c("h2", { attrs: { id: "使用-vue-cli@3" } }, [_vm._v("使用 vue-cli@3 "), _c("a", { staticClass: "anchor", attrs: { href: "#使用-vue-cli@3" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("我们为新版的 vue-cli 准备了相应的 "), _c("a", {
    attrs: {
      href: "https://github.com/vueComponent/vue-cli-plugin-ant-design"
    }
  }, [_vm._v("Ant Design Vue")]), _vm._v(" 插件，你可以用它们快速地搭建一个基于 Ant Design Vue 的项目。")]), _vm._v(" "), _c("h2", { attrs: { id: "在线演示" } }, [_vm._v("在线演示 "), _c("a", { staticClass: "anchor", attrs: { href: "#在线演示" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("最简单的使用方式参照以下 CodeSandbox 演示，也推荐 Fork 本例来进行 "), _c("code", { pre: true }, [_vm._v("Bug Report")]), _vm._v("。")]), _vm._v(" "), _c("ul", [_c("li", [_c("a", { attrs: { href: "https://codesandbox.io/s/2wpk21kzvr" } }, [_c("img", {
    attrs: {
      src: "https://codesandbox.io/static/img/play-codesandbox.svg",
      alt: "Vue Antd Template"
    }
  })])])]), _vm._v(" "), _c("h2", { attrs: { id: "引入-ant-design-vue" } }, [_vm._v("引入 ant-design-vue "), _c("a", { staticClass: "anchor", attrs: { href: "#引入-ant-design-vue" } }, [_vm._v("#")])]), _vm._v(" "), _c("h3", { attrs: { id: "1.-安装脚手架工具" } }, [_vm._v("1. 安装脚手架工具 "), _c("a", { staticClass: "anchor", attrs: { href: "#1.-安装脚手架工具" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_c("a", { attrs: { href: "https://github.com/vuejs/vue-cli" } }, [_vm._v("vue-cli")])]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("npm")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("install")]), _vm._v(" -g @vue/cli\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("# OR")]), _vm._v("\n$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("yarn")]), _vm._v(" global "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("add")]), _vm._v(" @vue/cli\n")])]), _vm._v(" "), _c("h3", { attrs: { id: "2.-创建一个项目" } }, [_vm._v("2. 创建一个项目 "), _c("a", { staticClass: "anchor", attrs: { href: "#2.-创建一个项目" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("使用命令行进行初始化。")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ vue create antd-demo\n")])]), _vm._v(" "), _c("p", [_vm._v("并配置项目。")]), _vm._v(" "), _c("p", [_vm._v("若安装缓慢报错，可尝试用 "), _c("code", { pre: true }, [_vm._v("cnpm")]), _vm._v(" 或别的镜像源自行安装："), _c("code", { pre: true }, [_vm._v("rm -rf node_modules && cnpm install")]), _vm._v("。")]), _vm._v(" "), _c("h3", { attrs: { id: "3.-使用组件" } }, [_vm._v("3. 使用组件 "), _c("a", { staticClass: "anchor", attrs: { href: "#3.-使用组件" } }, [_vm._v("#")])]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("npm")]), _vm._v(" i --save ant-design-vue\n")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("完整引入")])]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-jsx" } }, [_c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" Vue "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" Antd "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" App "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'./App'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue/dist/antd.css'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("config"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("productionTip "), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v("=")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token boolean" } }, [_vm._v("false")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("use")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _vm._v("Antd"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("/* eslint-disable no-new */")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("new")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token class-name" } }, [_vm._v("Vue")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("el")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'#app'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("components")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v(" App "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("template")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'<App/>'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n")])]), _vm._v(" "), _c("p", [_vm._v("以上代码便完成了 Antd 的引入。需要注意的是，样式文件需要单独引入。")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("局部导入组件")])]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-jsx" } }, [_c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" Vue "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v(" Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v(" message "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" App "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'./App'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("config"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("productionTip "), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v("=")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token boolean" } }, [_vm._v("false")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("/* v1.1.2 */")]), _vm._v("\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("component")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _vm._v("Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("name"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v(" Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("component")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _vm._v("Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("Group"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("name"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v(" Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("Group"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("/* v1.1.3+ 自动注册Button下组件，如Button.Group */")]), _vm._v("\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("use")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _vm._v("Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token class-name" } }, [_vm._v("Vue")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("prototype"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("$message "), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v("=")]), _vm._v(" message"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("/* eslint-disable no-new */")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("new")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token class-name" } }, [_vm._v("Vue")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("el")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'#app'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("components")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v(" App "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("template")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'<App/>'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n")])]), _vm._v(" "), _c("blockquote", [_c("p", [_vm._v("你可以在左侧菜单选用更多组件。")])]), _vm._v(" "), _c("h3", { attrs: { id: "4.-组件列表" } }, [_vm._v("4. 组件列表 "), _c("a", { staticClass: "anchor", attrs: { href: "#4.-组件列表" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_c("a", {
    attrs: {
      href: "https://github.com/vueComponent/ant-design-vue/blob/master/components/index.js"
    }
  }, [_vm._v("完整组件列表")])]), _vm._v(" "), _c("h2", { attrs: { id: "兼容性" } }, [_vm._v("兼容性 "), _c("a", { staticClass: "anchor", attrs: { href: "#兼容性" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("Ant Design Vue 支持所有的现代浏览器和 IE9+。")]), _vm._v(" "), _c("p", [_vm._v("对于 IE 系列浏览器，需要提供 "), _c("a", { attrs: { href: "https://github.com/es-shims/es5-shim" } }, [_vm._v("es5-shim")]), _vm._v(" 和 "), _c("a", { attrs: { href: "https://github.com/paulmillr/es6-shim" } }, [_vm._v("es6-shim")]), _vm._v(" 等 Polyfills 的支持。")]), _vm._v(" "), _c("p", [_vm._v("如果你使用了 babel，强烈推荐使用 "), _c("a", { attrs: { href: "https://babeljs.io/docs/usage/polyfill/" } }, [_vm._v("babel-polyfill")]), _vm._v(" 和 "), _c("a", {
    attrs: {
      href: "https://babeljs.io/docs/plugins/transform-runtime/"
    }
  }, [_vm._v("babel-plugin-transform-runtime")]), _vm._v(" 来替代以上两个 shim。")]), _vm._v(" "), _c("blockquote", [_c("p", [_vm._v("避免同时使用 babel 和 shim 两种兼容方法，以规避 "), _c("a", {
    attrs: {
      href: "https://github.com/ant-design/ant-design/issues/6512"
    }
  }, [_vm._v("#6512")]), _vm._v(" 中所遇问题")])]), _vm._v(" "), _c("h2", { attrs: { id: "按需加载" } }, [_vm._v("按需加载 "), _c("a", { staticClass: "anchor", attrs: { href: "#按需加载" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("如果你在开发环境的控制台看到下面的提示，那么你可能使用了 "), _c("code", { pre: true }, [_vm._v("import { Button } from 'ant-design-vue';")]), _vm._v(" 的写法引入了 antd 下所有的模块，这会影响应用的网络性能。")]), _vm._v(" "), _c("blockquote", [_c("p", [_c("img", {
    attrs: {
      src: "https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",
      alt: ""
    }
  })])]), _vm._v(" "), _c("p", [_vm._v("可以通过以下的写法来按需加载组件。")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-jsx" } }, [_c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" Button "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue/lib/button'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue/lib/button/style'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("// 或者 ant-design-vue/lib/button/style/css 加载 css 文件")]), _vm._v("\n")])]), _vm._v(" "), _c("p", [_vm._v("如果你使用了 babel，那么可以使用 "), _c("a", {
    attrs: { href: "https://github.com/ant-design/babel-plugin-import" }
  }, [_vm._v("babel-plugin-import")]), _vm._v(" 来进行按需加载，加入这个插件后。你可以仍然这么写：")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-jsx" } }, [_c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v(" Button "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n")])]), _vm._v(" "), _c("p", [_vm._v("插件会帮你转换成 "), _c("code", { pre: true }, [_vm._v("ant-design-vue/lib/xxx")]), _vm._v(" 的写法。另外此插件配合 "), _c("a", {
    attrs: {
      href: "https://github.com/ant-design/babel-plugin-import#usage"
    }
  }, [_vm._v("style")]), _vm._v(" 属性可以做到模块样式的按需自动加载。")]), _vm._v(" "), _c("blockquote", [_c("p", [_vm._v("注意，babel-plugin-import 的 "), _c("code", { pre: true }, [_vm._v("style")]), _vm._v(" 属性除了引入对应组件的样式，也会引入一些必要的全局样式。如果你不需要它们，建议不要使用此属性。你可以 "), _c("code", { pre: true }, [_vm._v("import 'ant-design-vue/dist/antd.css")]), _vm._v(" 手动引入，并覆盖全局样式。")])]), _vm._v(" "), _c("h2", { attrs: { id: "配置主题和字体" } }, [_vm._v("配置主题和字体 "), _c("a", { staticClass: "anchor", attrs: { href: "#配置主题和字体" } }, [_vm._v("#")])]), _vm._v(" "), _c("ul", [_c("li", [_c("a", { attrs: { href: "/docs/vue/customize-theme-cn" } }, [_vm._v("改变主题")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"
    }
  }, [_vm._v("使用本地字体")])])]), _vm._v(" "), _c("h2", { attrs: { id: "小贴士" } }, [_vm._v("小贴士 "), _c("a", { staticClass: "anchor", attrs: { href: "#小贴士" } }, [_vm._v("#")])]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("你可以享用 "), _c("code", { pre: true }, [_vm._v("npm")]), _vm._v(" 生态圈里的所有模块。")]), _vm._v(" "), _c("li", [_vm._v("虽然 Vue 官方推荐模板编写组件，不过对于复杂组件，"), _c("a", {
    attrs: {
      href: "https://github.com/vuejs/babel-plugin-transform-vue-jsx"
    }
  }, [_vm._v("jsx")]), _vm._v("未必不是一个更好的选择。")])])]);
}];
render._withStripped = true;



/***/ }),

/***/ "./vueDocs/getting-started.zh-CN.md":
/*!******************************************!*\
  !*** ./vueDocs/getting-started.zh-CN.md ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getting_started_zh_CN_md_vue_type_template_id_603bfa35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getting-started.zh-CN.md?vue&type=template&id=603bfa35& */ "./vueDocs/getting-started.zh-CN.md?vue&type=template&id=603bfa35&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _getting_started_zh_CN_md_vue_type_template_id_603bfa35___WEBPACK_IMPORTED_MODULE_0__["render"],
  _getting_started_zh_CN_md_vue_type_template_id_603bfa35___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vueDocs/getting-started.zh-CN.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vueDocs/getting-started.zh-CN.md?vue&type=template&id=603bfa35&":
/*!*************************************************************************!*\
  !*** ./vueDocs/getting-started.zh-CN.md?vue&type=template&id=603bfa35& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_getting_started_zh_CN_md_vue_type_template_id_603bfa35___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--2!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??ref--0-0!../node_modules/vue-antd-md-loader??ref--0-1!./getting-started.zh-CN.md?vue&type=template&id=603bfa35& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-antd-md-loader/index.js?!./vueDocs/getting-started.zh-CN.md?vue&type=template&id=603bfa35&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_getting_started_zh_CN_md_vue_type_template_id_603bfa35___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_getting_started_zh_CN_md_vue_type_template_id_603bfa35___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=6c92922b.async.js.map