(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-antd-md-loader/index.js?!./vueDocs/getting-started.en-US.md?vue&type=template&id=19289c5d&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--0-0!./node_modules/vue-antd-md-loader??ref--0-1!./vueDocs/getting-started.en-US.md?vue&type=template&id=19289c5d& ***!
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
  return _c("div", [_c("h1", [_vm._v("Getting Started")]), _vm._v(" "), _c("p", [_vm._v("Ant Design Vue is dedicated to providing a "), _c("strong", [_vm._v("good development experience")]), _vm._v(" for programmers. Make sure that you had installed "), _c("a", { attrs: { href: "https://nodejs.org/" } }, [_vm._v("Node.js")]), _vm._v("(> v8.9) correctly.")]), _vm._v(" "), _c("blockquote", [_c("p", [_vm._v("Before delving into Ant Design Vue, a good knowledge base of "), _c("a", { attrs: { href: "https://cn.vuejs.org/" } }, [_vm._v("Vue")]), _vm._v(" and "), _c("a", { attrs: { href: "http://babeljs.io/docs/learn-es2015/" } }, [_vm._v("JavaScript ES2015")]), _vm._v(" is needed.")])]), _vm._v(" "), _c("h2", { attrs: { id: "Use-vue-cli@3" } }, [_vm._v("Use vue-cli@3 "), _c("a", { staticClass: "anchor", attrs: { href: "#Use-vue-cli@3" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("We provide an "), _c("a", {
    attrs: {
      href: "https://github.com/vueComponent/vue-cli-plugin-ant-design"
    }
  }, [_vm._v("Ant Design Vue")]), _vm._v(" plugin for vue-cli@3, which you can use to quickly build an Ant Design Vue-based project.")]), _vm._v(" "), _c("h2", { attrs: { id: "Playground" } }, [_vm._v("Playground "), _c("a", { staticClass: "anchor", attrs: { href: "#Playground" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("The following CodeSandbox demo is the simplest use case, and it's also a good habit to fork this demo to provide a re-producible demo while reporting a bug.")]), _vm._v(" "), _c("ul", [_c("li", [_c("a", { attrs: { href: "https://codesandbox.io/s/2wpk21kzvr" } }, [_c("img", {
    attrs: {
      src: "https://codesandbox.io/static/img/play-codesandbox.svg",
      alt: "Vue Antd Template"
    }
  })])])]), _vm._v(" "), _c("h2", { attrs: { id: "Import-ant-design-vue" } }, [_vm._v("Import ant-design-vue "), _c("a", { staticClass: "anchor", attrs: { href: "#Import-ant-design-vue" } }, [_vm._v("#")])]), _vm._v(" "), _c("h3", { attrs: { id: "1.-Installation" } }, [_vm._v("1. Installation "), _c("a", { staticClass: "anchor", attrs: { href: "#1.-Installation" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_c("a", { attrs: { href: "https://github.com/vuejs/vue-cli" } }, [_vm._v("vue-cli")])]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("npm")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("install")]), _vm._v(" -g @vue/cli\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("# OR")]), _vm._v("\n$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("yarn")]), _vm._v(" global "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("add")]), _vm._v(" @vue/cli\n")])]), _vm._v(" "), _c("h3", { attrs: { id: "2.-Create-a-New-Project" } }, [_vm._v("2. Create a New Project "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#2.-Create-a-New-Project" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("A new project can be created using CLI tools.")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ vue create antd-demo\n")])]), _vm._v(" "), _c("p", [_vm._v("And, setup your vue project configuration.")]), _vm._v(" "), _c("h3", { attrs: { id: "3.-Use-antd's-Components" } }, [_vm._v("3. Use antd's Components "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#3.-Use-antd's-Components" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("npm")]), _vm._v(" i --save ant-design-vue\n")])]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Fully import")])]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-jsx" } }, [_c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" Vue "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" Antd "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" App "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'./App'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue/dist/antd.css'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("config"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("productionTip "), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v("=")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token boolean" } }, [_vm._v("false")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("use")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _vm._v("Antd"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("/* eslint-disable no-new */")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("new")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token class-name" } }, [_vm._v("Vue")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("el")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'#app'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("components")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v(" App "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("template")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'<App/>'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n")])]), _vm._v(" "), _c("p", [_vm._v("The above imports Antd entirely. Note that CSS file needs to be imported separately.")]), _vm._v(" "), _c("p", [_c("strong", [_vm._v("Only import the components you need")])]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-jsx" } }, [_c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" Vue "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v(" Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v(" message "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" App "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'./App'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("config"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("productionTip "), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v("=")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token boolean" } }, [_vm._v("false")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("/* v1.1.2 */")]), _vm._v("\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("component")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _vm._v("Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("name"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v(" Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("component")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _vm._v("Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("Group"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("name"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v(" Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("Group"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("/* v1.1.3+ Automatically register components under Button, such as Button.Group */")]), _vm._v("\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("use")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _vm._v("Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token class-name" } }, [_vm._v("Vue")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("prototype"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("$message "), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v("=")]), _vm._v(" message"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("/* eslint-disable no-new */")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("new")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token class-name" } }, [_vm._v("Vue")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("el")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'#app'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("components")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v(" App "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token literal-property property" }
  }, [_vm._v("template")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'<App/>'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n")])]), _vm._v(" "), _c("blockquote", [_c("p", [_vm._v("All the components in antd are listed in the sidebar.")])]), _vm._v(" "), _c("h3", { attrs: { id: "4.-Component-list" } }, [_vm._v("4. Component list "), _c("a", { staticClass: "anchor", attrs: { href: "#4.-Component-list" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_c("a", {
    attrs: {
      href: "https://github.com/vueComponent/ant-design-vue/blob/master/components/index.js"
    }
  }, [_vm._v("Component list")])]), _vm._v(" "), _c("h2", { attrs: { id: "Compatibility" } }, [_vm._v("Compatibility "), _c("a", { staticClass: "anchor", attrs: { href: "#Compatibility" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("Ant Design Vue supports all the modern browsers and IE9+.")]), _vm._v(" "), _c("p", [_vm._v("You need to provide "), _c("a", { attrs: { href: "https://github.com/es-shims/es5-shim" } }, [_vm._v("es5-shim")]), _vm._v(" and "), _c("a", { attrs: { href: "https://github.com/paulmillr/es6-shim" } }, [_vm._v("es6-shim")]), _vm._v(" and other polyfills for IE browsers.")]), _vm._v(" "), _c("p", [_vm._v("If you are using babel, we strongly recommend using "), _c("a", { attrs: { href: "https://babeljs.io/docs/usage/polyfill/" } }, [_vm._v("babel-polyfill")]), _vm._v(" and "), _c("a", {
    attrs: {
      href: "https://babeljs.io/docs/plugins/transform-runtime/"
    }
  }, [_vm._v("babel-plugin-transform-runtime")]), _vm._v(" instead of those two shims.")]), _vm._v(" "), _c("blockquote", [_c("p", [_vm._v("Please avoid using both the babel and shim methods at the same time.")])]), _vm._v(" "), _c("h2", { attrs: { id: "Import-on-Demand" } }, [_vm._v("Import on Demand "), _c("a", { staticClass: "anchor", attrs: { href: "#Import-on-Demand" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("If you see logs like below screenshot, you might be importing all components by writing "), _c("code", { pre: true }, [_vm._v("import { Button } from 'ant-design-vue';")]), _vm._v(". This will affect your app's network performance.")]), _vm._v(" "), _c("blockquote", [_c("p", [_c("img", {
    attrs: {
      src: "https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",
      alt: ""
    }
  })])]), _vm._v(" "), _c("p", [_vm._v("However, we can import individual components on demand:")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-jsx" } }, [_c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" Button "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue/lib/button'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue/lib/button/style'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("// or ant-design-vue/lib/button/style/css for css format file")]), _vm._v("\n")])]), _vm._v(" "), _c("p", [_vm._v("We strongly recommend using "), _c("a", {
    attrs: { href: "https://github.com/ant-design/babel-plugin-import" }
  }, [_vm._v("babel-plugin-import")]), _vm._v(", which can convert the following code to the 'ant-design-vue/lib/xxx' way:")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-jsx" } }, [_c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v(" Button "), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n")])]), _vm._v(" "), _c("p", [_vm._v("And this plugin can load styles too, read "), _c("a", {
    attrs: {
      href: "https://github.com/ant-design/babel-plugin-import#usage"
    }
  }, [_vm._v("usage")]), _vm._v(" for more details.")]), _vm._v(" "), _c("blockquote", [_c("p", [_vm._v("FYI, babel-plugin-import's "), _c("code", { pre: true }, [_vm._v("style")]), _vm._v(" option will importing some global reset styles, don't use it if you don't need those styles. You can import styles manually via "), _c("code", { pre: true }, [_vm._v("import 'ant-design-vue/dist/antd.css'")]), _vm._v(" and override the global reset styles.")])]), _vm._v(" "), _c("h2", { attrs: { id: "Customization" } }, [_vm._v("Customization "), _c("a", { staticClass: "anchor", attrs: { href: "#Customization" } }, [_vm._v("#")])]), _vm._v(" "), _c("ul", [_c("li", [_c("a", { attrs: { href: "/docs/vue/customize-theme" } }, [_vm._v("Customize Theme")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"
    }
  }, [_vm._v("Local Iconfont")])])]), _vm._v(" "), _c("h2", { attrs: { id: "Tips" } }, [_vm._v("Tips "), _c("a", { staticClass: "anchor", attrs: { href: "#Tips" } }, [_vm._v("#")])]), _vm._v(" "), _c("ul", [_c("li", [_vm._v("You can use any "), _c("code", { pre: true }, [_vm._v("npm")]), _vm._v(" modules.")]), _vm._v(" "), _c("li", [_vm._v("Although Vue's official recommended template to write components, JSX is a better choice for complex components.")])])]);
}];
render._withStripped = true;



/***/ }),

/***/ "./vueDocs/getting-started.en-US.md":
/*!******************************************!*\
  !*** ./vueDocs/getting-started.en-US.md ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getting_started_en_US_md_vue_type_template_id_19289c5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getting-started.en-US.md?vue&type=template&id=19289c5d& */ "./vueDocs/getting-started.en-US.md?vue&type=template&id=19289c5d&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _getting_started_en_US_md_vue_type_template_id_19289c5d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _getting_started_en_US_md_vue_type_template_id_19289c5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vueDocs/getting-started.en-US.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vueDocs/getting-started.en-US.md?vue&type=template&id=19289c5d&":
/*!*************************************************************************!*\
  !*** ./vueDocs/getting-started.en-US.md?vue&type=template&id=19289c5d& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_getting_started_en_US_md_vue_type_template_id_19289c5d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--2!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??ref--0-0!../node_modules/vue-antd-md-loader??ref--0-1!./getting-started.en-US.md?vue&type=template&id=19289c5d& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-antd-md-loader/index.js?!./vueDocs/getting-started.en-US.md?vue&type=template&id=19289c5d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_getting_started_en_US_md_vue_type_template_id_19289c5d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_getting_started_en_US_md_vue_type_template_id_19289c5d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=adf9463b.async.js.map