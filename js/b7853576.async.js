(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-antd-md-loader/index.js?!./vueDocs/use-with-vue-cli.en-US.md?vue&type=template&id=0e67e796&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--0-0!./node_modules/vue-antd-md-loader??ref--0-1!./vueDocs/use-with-vue-cli.en-US.md?vue&type=template&id=0e67e796& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("h1", [_vm._v("Use in vue-cli 3")]), _vm._v(" "), _c("p", [_c("a", { attrs: { href: "https://github.com/vuejs/vue-cli" } }, [_vm._v("vue-cli")]), _vm._v(" is one of the best Vue application development tools. We are going to use "), _c("code", { pre: true }, [_vm._v("antd")]), _vm._v(" within it and modify the webpack config for some customized needs.")]), _vm._v(" "), _c("h2", { attrs: { id: "Install-and-Initialization" } }, [_vm._v("Install and Initialization "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#Install-and-Initialization" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("We need to install "), _c("code", { pre: true }, [_vm._v("vue-cli")]), _vm._v(" first, you may need install "), _c("a", { attrs: { href: "https://github.com/yarnpkg/yarn/" } }, [_vm._v("yarn")]), _vm._v(" too.")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("npm")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("install")]), _vm._v(" -g @vue/cli\n"), _c("span", { pre: true, attrs: { "class": "token comment" } }, [_vm._v("# OR")]), _vm._v("\n$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("yarn")]), _vm._v(" global "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("add")]), _vm._v(" @vue/cli\n")])]), _vm._v(" "), _c("p", [_vm._v("Create a new project named "), _c("code", { pre: true }, [_vm._v("antd-demo")]), _vm._v(".")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ vue create antd-demo\n")])]), _vm._v(" "), _c("p", [_vm._v("And, setup your vue project configuration.")]), _vm._v(" "), _c("p", [_vm._v("The tool will create and initialize environment and dependencies automatically, please try config your proxy setting or use another npm registry if any network errors happen during it.")]), _vm._v(" "), _c("p", [_vm._v("Then we go inside "), _c("code", { pre: true }, [_vm._v("antd-demo")]), _vm._v(" and start it.")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ "), _c("span", { pre: true, attrs: { "class": "token builtin class-name" } }, [_vm._v("cd")]), _vm._v(" antd-demo\n$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("npm")]), _vm._v(" run serve\n")])]), _vm._v(" "), _c("p", [_vm._v('Open the browser at http://localhost:8080/. It renders a header saying "Welcome to Your Vue.js App" on the page.')]), _vm._v(" "), _c("h2", { attrs: { id: "Import-antd" } }, [_vm._v("Import antd "), _c("a", { staticClass: "anchor", attrs: { href: "#Import-antd" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("Below is the default directory structure.")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-null" } }, [_vm._v("├── README.md\n├── babel.config\n├── package.json\n├── public\n│   ├── favicon.ico\n│   └── index.html\n├── src\n│   ├── assets\n│   │   └── logo.png\n│   ├── components\n│   │   └── HelloWorld.vue\n│   ├── App.vue\n│   └── main.js\n└── yarn.lock\n")])]), _vm._v(" "), _c("p", [_vm._v("Now we install "), _c("code", { pre: true }, [_vm._v("ant-design-vue")]), _vm._v(" from yarn or npm.")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("yarn")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("add")]), _vm._v(" ant-design-vue\n")])]), _vm._v(" "), _c("p", [_vm._v("Modify "), _c("code", { pre: true }, [_vm._v("src/main.js")]), _vm._v(", import Button component from "), _c("code", { pre: true }, [_vm._v("antd")]), _vm._v(".")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-jsx" } }, [_c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" Vue "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'vue'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" Button "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue/lib/button'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'ant-design-vue/dist/antd.css'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("import")]), _vm._v(" App "), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("from")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'./App'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("component")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _vm._v("Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("name"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v(" Button"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\nVue"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("config"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _vm._v("productionTip "), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v("=")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token boolean" } }, [_vm._v("false")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n\n"), _c("span", { pre: true, attrs: { "class": "token keyword" } }, [_vm._v("new")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token class-name" } }, [_vm._v("Vue")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("{")]), _vm._v("\n  "), _c("span", {
    pre: true,
    attrs: { "class": "token function-variable function" }
  }, [_vm._v("render")]), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v(":")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token parameter" } }, [_vm._v("h")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token operator" } }, [_vm._v("=>")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("h")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _vm._v("App"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(",")]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("}")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(".")]), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("$mount")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("(")]), _c("span", { pre: true, attrs: { "class": "token string" } }, [_vm._v("'#app'")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(")")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(";")]), _vm._v("\n")])]), _vm._v(" "), _c("p", [_vm._v("Modify "), _c("code", { pre: true }, [_vm._v("src/App.vue")]), _vm._v("。")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-jsx" } }, [_c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("<")]), _vm._v("template")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(">")])]), _c("span", { pre: true, attrs: { "class": "token plain-text" } }, [_vm._v("\n  ")]), _c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("<")]), _vm._v("div")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token attr-name" } }, [_vm._v("id")]), _c("span", { pre: true, attrs: { "class": "token attr-value" } }, [_c("span", {
    pre: true,
    attrs: { "class": "token punctuation attr-equals" }
  }, [_vm._v("=")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v('"')]), _vm._v("app"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v('"')])]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(">")])]), _c("span", { pre: true, attrs: { "class": "token plain-text" } }, [_vm._v("\n    ")]), _c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("<")]), _vm._v("img")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token attr-name" } }, [_vm._v("src")]), _c("span", { pre: true, attrs: { "class": "token attr-value" } }, [_c("span", {
    pre: true,
    attrs: { "class": "token punctuation attr-equals" }
  }, [_vm._v("=")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v('"')]), _vm._v("./assets/logo.png"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v('"')])]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(">")])]), _c("span", { pre: true, attrs: { "class": "token plain-text" } }, [_vm._v("\n    ")]), _c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("<")]), _vm._v("a-button")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token attr-name" } }, [_vm._v("type")]), _c("span", { pre: true, attrs: { "class": "token attr-value" } }, [_c("span", {
    pre: true,
    attrs: { "class": "token punctuation attr-equals" }
  }, [_vm._v("=")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v('"')]), _vm._v("primary"), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v('"')])]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(">")])]), _c("span", { pre: true, attrs: { "class": "token plain-text" } }, [_vm._v("Button>")]), _c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("</")]), _vm._v("a-button")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(">")])]), _c("span", { pre: true, attrs: { "class": "token plain-text" } }, [_vm._v("\n    ")]), _c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("<")]), _vm._v("router-view")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("/>")])]), _c("span", { pre: true, attrs: { "class": "token plain-text" } }, [_vm._v("\n  ")]), _c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("</")]), _vm._v("div")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(">")])]), _c("span", { pre: true, attrs: { "class": "token plain-text" } }, [_vm._v("\n")]), _c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token tag" } }, [_c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v("</")]), _vm._v("template")]), _c("span", { pre: true, attrs: { "class": "token punctuation" } }, [_vm._v(">")])]), _c("span", { pre: true, attrs: { "class": "token plain-text" } }, [_vm._v("\n...\n")])])]), _vm._v(" "), _c("p", [_vm._v("Ok, you should now see a blue primary button displayed on the page. Next you can choose any components of "), _c("code", { pre: true }, [_vm._v("antd")]), _vm._v(" to develop your application. Visit other workflows of "), _c("code", { pre: true }, [_vm._v("vue-cli")]), _vm._v(" at its "), _c("a", {
    attrs: {
      href: "https://github.com/vuejs/vue-cli/blob/master/README.md"
    }
  }, [_vm._v("User Guide ")]), _vm._v(".")]), _vm._v(" "), _c("h2", { attrs: { id: "Advanced-Guides" } }, [_vm._v("Advanced Guides "), _c("a", { staticClass: "anchor", attrs: { href: "#Advanced-Guides" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("We are successfully running antd components now but in the real world, there are still lots of problems about antd-demo. For instance, we actually import all styles of components in the project which may be a network performance issue.")]), _vm._v(" "), _c("p", [_vm._v("Now we need to customize the default webpack config.")]), _vm._v(" "), _c("h3", { attrs: { id: "Use-babel-plugin-import" } }, [_vm._v("Use babel-plugin-import "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#Use-babel-plugin-import" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_c("a", {
    attrs: { href: "https://github.com/ant-design/babel-plugin-import" }
  }, [_vm._v("babel-plugin-import")]), _vm._v(" is a babel plugin for importing components on demand ("), _c("a", { attrs: { href: "/docs/vue/getting-started/#Import-on-Demand" } }, [_vm._v("How does it work?")]), _vm._v(").")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-bash" } }, [_vm._v("$ "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("yarn")]), _vm._v(" "), _c("span", { pre: true, attrs: { "class": "token function" } }, [_vm._v("add")]), _vm._v(" babel-plugin-import --dev\n")])]), _vm._v(" "), _c("h4", { attrs: { id: "if-you-use-vue-cli-2" } }, [_vm._v("if you use vue-cli 2 "), _c("a", { staticClass: "anchor", attrs: { href: "#if-you-use-vue-cli-2" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("Modify "), _c("code", { pre: true }, [_vm._v(".babelrc")]), _vm._v(".")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-diff" } }, [_c("span", { pre: true, attrs: { "class": "token unchanged" } }, [_c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" {\n")]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('   "presets": [\n')]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('     ["env", {\n')]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('       "modules": false,\n')]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('       "targets": {\n')]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('         "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]\n')]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v("       }\n")]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v("     }],\n")]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('     "stage-2"\n')]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v("   ],\n")])]), _c("span", { pre: true, attrs: { "class": "token deleted-sign deleted" } }, [_c("span", { pre: true, attrs: { "class": "token prefix deleted" } }, [_vm._v("-")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('   "plugins": ["transform-vue-jsx", "transform-runtime"]\n')])]), _c("span", { pre: true, attrs: { "class": "token inserted-sign inserted" } }, [_c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('   "plugins": [\n')]), _c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('     "transform-vue-jsx",\n')]), _c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('     "transform-runtime",\n')]), _c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('     ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]\n')]), _c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v("   ]\n")])]), _c("span", { pre: true, attrs: { "class": "token unchanged" } }, [_c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" }\n")])])])]), _vm._v(" "), _c("h4", { attrs: { id: "if-you-use-vue-cli-3" } }, [_vm._v("if you use vue-cli 3 "), _c("a", { staticClass: "anchor", attrs: { href: "#if-you-use-vue-cli-3" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("Modify "), _c("code", { pre: true }, [_vm._v("babel.config.js")])]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-diff" } }, [_c("span", { pre: true, attrs: { "class": "token unchanged" } }, [_c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v("module.exports = {\n")]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(' presets: ["@vue/app"],\n')])]), _c("span", { pre: true, attrs: { "class": "token inserted-sign inserted" } }, [_c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" plugins: [\n")]), _c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v("    [\n")]), _c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('      "import",\n')]), _c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v('      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }\n')]), _c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v("    ]\n")]), _c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v("  ]\n")])]), _vm._v("};\n")])]), _vm._v(" "), _c("p", [_vm._v("Remove the "), _c("code", { pre: true }, [_vm._v("import 'ant-design-vue/dist/antd.css';")]), _vm._v(" statement added before because "), _c("code", { pre: true }, [_vm._v("babel-plugin-import")]), _vm._v(" will import styles and import components like below:")]), _vm._v(" "), _c("pre", { pre: true }, [_c("code", { pre: true, attrs: { "v-pre": "", "class": "language-diff" } }, [_c("span", { pre: true, attrs: { "class": "token unchanged" } }, [_c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" // src/main.js\n")]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" import Vue from 'vue'\n")])]), _c("span", { pre: true, attrs: { "class": "token deleted-sign deleted" } }, [_c("span", { pre: true, attrs: { "class": "token prefix deleted" } }, [_vm._v("-")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" import Button from 'ant-design-vue/lib/button';\n")])]), _c("span", { pre: true, attrs: { "class": "token inserted-sign inserted" } }, [_c("span", { pre: true, attrs: { "class": "token prefix inserted" } }, [_vm._v("+")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" import { Button } from 'ant-design-vue';\n")])]), _c("span", { pre: true, attrs: { "class": "token deleted-sign deleted" } }, [_c("span", { pre: true, attrs: { "class": "token prefix deleted" } }, [_vm._v("-")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" import 'ant-design-vue/dist/antd.css'\n")])]), _c("span", { pre: true, attrs: { "class": "token unchanged" } }, [_c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" import App from './App'\n")])]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token unchanged" } }, [_c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" Vue.component(Button.name, Button)\n")])]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token unchanged" } }, [_c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" Vue.config.productionTip = false\n")])]), _vm._v("\n"), _c("span", { pre: true, attrs: { "class": "token unchanged" } }, [_c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" new Vue({\n")]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v("   render: h => h(App)\n")]), _c("span", { pre: true, attrs: { "class": "token prefix unchanged" } }, [_vm._v(" ")]), _c("span", { pre: true, attrs: { "class": "token line" } }, [_vm._v(" }).$mount('#app')\n")])])])]), _vm._v(" "), _c("p", [_vm._v("Then reboot with "), _c("code", { pre: true }, [_vm._v("npm run dev")]), _vm._v(" and visit the demo page, you should not find any "), _c("a", {
    attrs: {
      href: "https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"
    }
  }, [_vm._v("warning messages")]), _vm._v(" in the console, which prove that the "), _c("code", { pre: true }, [_vm._v("import on demand")]), _vm._v(" config is working now. You will find more info about it in "), _c("a", { attrs: { href: "/docs/vue/getting-started/#Import-on-Demand" } }, [_vm._v("this guide")]), _vm._v(".")]), _vm._v(" "), _c("h3", { attrs: { id: "Customize-Theme" } }, [_vm._v("Customize Theme "), _c("a", { staticClass: "anchor", attrs: { href: "#Customize-Theme" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("According to the "), _c("a", { attrs: { href: "/docs/vue/customize-theme" } }, [_vm._v("Customize Theme documentation")]), _vm._v(", to customize the theme, we need to modify "), _c("code", { pre: true }, [_vm._v("less")]), _vm._v(" variables with tools such as "), _c("a", { attrs: { href: "https://github.com/webpack/less-loader" } }, [_vm._v("less-loader")]), _vm._v(".")])]);
}];
render._withStripped = true;



/***/ }),

/***/ "./vueDocs/use-with-vue-cli.en-US.md":
/*!*******************************************!*\
  !*** ./vueDocs/use-with-vue-cli.en-US.md ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_with_vue_cli_en_US_md_vue_type_template_id_0e67e796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-with-vue-cli.en-US.md?vue&type=template&id=0e67e796& */ "./vueDocs/use-with-vue-cli.en-US.md?vue&type=template&id=0e67e796&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _use_with_vue_cli_en_US_md_vue_type_template_id_0e67e796___WEBPACK_IMPORTED_MODULE_0__["render"],
  _use_with_vue_cli_en_US_md_vue_type_template_id_0e67e796___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vueDocs/use-with-vue-cli.en-US.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vueDocs/use-with-vue-cli.en-US.md?vue&type=template&id=0e67e796&":
/*!**************************************************************************!*\
  !*** ./vueDocs/use-with-vue-cli.en-US.md?vue&type=template&id=0e67e796& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_use_with_vue_cli_en_US_md_vue_type_template_id_0e67e796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--2!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??ref--0-0!../node_modules/vue-antd-md-loader??ref--0-1!./use-with-vue-cli.en-US.md?vue&type=template&id=0e67e796& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-antd-md-loader/index.js?!./vueDocs/use-with-vue-cli.en-US.md?vue&type=template&id=0e67e796&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_use_with_vue_cli_en_US_md_vue_type_template_id_0e67e796___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_use_with_vue_cli_en_US_md_vue_type_template_id_0e67e796___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=b7853576.async.js.map