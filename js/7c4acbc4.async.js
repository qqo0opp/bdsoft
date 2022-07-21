(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-antd-md-loader/index.js?!./vueDocs/faq.zh-CN.md?vue&type=template&id=65790dd7&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--0-0!./node_modules/vue-antd-md-loader??ref--0-1!./vueDocs/faq.zh-CN.md?vue&type=template&id=65790dd7& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("h1", [_vm._v("常见问题")]), _vm._v(" "), _c("p", [_vm._v("以下整理了一些 Ant Design Vue 社区常见的问题和官方答复，在提问之前建议找找有没有类似的问题。")]), _vm._v(" "), _c("h3", { attrs: { id: "你们会提供-Sass/Stylus-等格式的样式文件吗？" } }, [_vm._v("你们会提供 Sass/Stylus 等格式的样式文件吗？ "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#你们会提供-Sass/Stylus-等格式的样式文件吗？" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("不。事实上你可以使用工具（请自行 Google）将 Less 转换成 Sass/Stylus 等。")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "当我点击-Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-内的另一个-popup-组件时它会消失，如何解决？"
    }
  }, [_vm._v("当我点击 "), _c("code", { pre: true }, [_vm._v("Select Dropdown DatePicker TimePicker Popover Popconfirm")]), _vm._v(" 内的另一个 popup 组件时它会消失，如何解决？ "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#当我点击-Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-内的另一个-popup-组件时它会消失，如何解决？"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("使用 "), _c("code", { pre: true }, [_vm._v('<a-select :getPopupContainer="trigger => trigger.parentNode">')]), _vm._v(" 来在 Popover 中渲染组件，或者使用其他的 getXxxxContainer 参数。")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-会跟随滚动条上下移动？"
    }
  }, [_c("code", { pre: true }, [_vm._v("Select Dropdown DatePicker TimePicker Popover Popconfirm")]), _vm._v(" 会跟随滚动条上下移动？ "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-会跟随滚动条上下移动？"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("使用 "), _c("code", { pre: true }, [_vm._v('<a-select :getPopupContainer="trigger => trigger.parentNode">')]), _vm._v(" 来将组件渲染到滚动区域内，或者使用其他的 getXxxxContainer 参数。")]), _vm._v(" "), _c("h3", { attrs: { id: "Form表单不支持双向绑定，不能使用v-model？" } }, [_c("code", { pre: true }, [_vm._v("Form")]), _vm._v("表单不支持双向绑定，不能使用"), _c("code", { pre: true }, [_vm._v("v-model")]), _vm._v("？ "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#Form表单不支持双向绑定，不能使用v-model？" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("第一、我们不推荐在 Form 中使用双向绑定，同一份数据可能在多处使用，如果使用双向绑定，那么数据的修改会同时同步到各个组件，但这并不是我们想要的， 你应该在表单提交成功或失败或确认时同步数据，使用非双向绑定的表单，你会拥有最大限度的控制数据修改/同步的权限。")]), _vm._v(" "), _c("p", [_vm._v("第二、如果你不使用表单的自动校验/收集功能，即没有使用"), _c("code", { pre: true }, [_vm._v("v-decorator")]), _vm._v("修饰过得组件，你依然可以使用"), _c("code", { pre: true }, [_vm._v("v-model")]), _vm._v("。")]), _vm._v(" "), _c("h3", { attrs: { id: "如何修改-Ant-Design-Vue-的默认主题？" } }, [_vm._v("如何修改 Ant Design Vue 的默认主题？ "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#如何修改-Ant-Design-Vue-的默认主题？" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("参考"), _c("a", { attrs: { href: "/docs/vue/customize-theme/" } }, [_vm._v("主题定制")]), _vm._v("。")]), _vm._v(" "), _c("h3", { attrs: { id: "如何配置-webpack-以优化-momentjs-的打包大小？" } }, [_vm._v("如何配置 webpack 以优化 momentjs 的打包大小？ "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#如何配置-webpack-以优化-momentjs-的打包大小？" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("参考：https://github.com/jmblog/how-to-optimize-momentjs-with-webpack 。")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "当我动态改变-defaultValue,defaultOpenKeys,-initialValue等defaultXxxx的时候它并没有生效。"
    }
  }, [_vm._v("当我动态改变 "), _c("code", { pre: true }, [_vm._v("defaultValue")]), _vm._v(","), _c("code", { pre: true }, [_vm._v("defaultOpenKeys")]), _vm._v(", "), _c("code", { pre: true }, [_vm._v("initialValue")]), _vm._v("等"), _c("code", { pre: true }, [_vm._v("defaultXxxx")]), _vm._v("的时候它并没有生效。 "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#当我动态改变-defaultValue,defaultOpenKeys,-initialValue等defaultXxxx的时候它并没有生效。"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_c("code", { pre: true }, [_vm._v("Input")]), _vm._v("/"), _c("code", { pre: true }, [_vm._v("Select")]), _vm._v(" 等的 "), _c("code", { pre: true }, [_vm._v("defaultXxxx")]), _vm._v("（例如 "), _c("code", { pre: true }, [_vm._v("defaultValue")]), _vm._v("）只有在组件第一次渲染的时候有效，此特性参考自"), _c("a", {
    attrs: {
      href: "https://reactjs.org/docs/forms.html#controlled-components"
    }
  }, [_vm._v("React")]), _vm._v("。切记：第一次、第一次、第一次....")]), _vm._v(" "), _c("h3", {
    attrs: { id: "当我设置了-Input/Select-等的-value-时它就无法修改了。" }
  }, [_vm._v("当我设置了 "), _c("code", { pre: true }, [_vm._v("Input")]), _vm._v("/"), _c("code", { pre: true }, [_vm._v("Select")]), _vm._v(" 等的 "), _c("code", { pre: true }, [_vm._v("value")]), _vm._v(" 时它就无法修改了。 "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#当我设置了-Input/Select-等的-value-时它就无法修改了。"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("尝试使用 "), _c("code", { pre: true }, [_vm._v("defaultValue")]), _vm._v(" 或 "), _c("code", { pre: true }, [_vm._v("change")]), _vm._v(" 或 "), _c("code", { pre: true }, [_vm._v("v-model")]), _vm._v(" 来改变 "), _c("code", { pre: true }, [_vm._v("value")]), _vm._v("。")]), _vm._v(" "), _c("h3", { attrs: { id: "ant-design-vue-覆盖了我的全局样式！" } }, [_vm._v("ant-design-vue 覆盖了我的全局样式！ "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#ant-design-vue-覆盖了我的全局样式！" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("是的，ant-design-vue 在设计的时候就是用来开发一个完整的应用的，为了方便，我们覆盖了一些全局样式，现在还不能移除，想要了解更多请追踪这个 issue：https://github.com/ant-design/ant-design/issues/4331 ，或者参考这个教程 "), _c("a", {
    attrs: {
      href: "docs/react/customize-theme#How-to-avoid-modifying-global-styles-?"
    }
  }, [_vm._v("How to avoid modifying global styles?")])]), _vm._v(" "), _c("h3", { attrs: { id: "ant-design-vue-在移动端体验不佳。" } }, [_c("code", { pre: true }, [_vm._v("ant-design-vue")]), _vm._v(" 在移动端体验不佳。 "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#ant-design-vue-在移动端体验不佳。" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_c("code", { pre: true }, [_vm._v("ant-design-vue")]), _vm._v(" 并非针对移动端设计。")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "当我指定了-DatePicker/RangePicker-的-mode-属性后，点击后无法选择年份/月份？"
    }
  }, [_vm._v("当我指定了 DatePicker/RangePicker 的 "), _c("code", { pre: true }, [_vm._v("mode")]), _vm._v(" 属性后，点击后无法选择年份/月份？ "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#当我指定了-DatePicker/RangePicker-的-mode-属性后，点击后无法选择年份/月份？"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("在业务开发中，你可能有年份选择，月份范围选择，周范围选择等需求，此时你给现有组件增加了 "), _c("code", { pre: true }, [_vm._v("mode")]), _vm._v(" 属性，却发现无法进行点击选择行为，面板也不会关闭。")]), _vm._v(" "), _c("p", [_vm._v("这是因为 "), _c("code", { pre: true }, [_vm._v('<DatePicker mode="year" />')]), _vm._v(" 不等于 "), _c("code", { pre: true }, [_vm._v("YearPicker")]), _vm._v("，"), _c("code", { pre: true }, [_vm._v('<RangePicker mode="month" />')]), _vm._v(" 不等于 "), _c("code", { pre: true }, [_vm._v("MonthRangePicker")]), _vm._v("。 "), _c("code", { pre: true }, [_vm._v("mode")]), _vm._v(" 属性是在 antd 3.0 时，为了控制面板展现状态而添加的属性，以支持"), _c("a", {
    attrs: {
      href: "https://github.com/ant-design/ant-design/issues/5190"
    }
  }, [_vm._v("展示时间面板")]), _vm._v("等需求而添加的。"), _c("code", { pre: true }, [_vm._v("mode")]), _vm._v(" 只会简单的改变当前显示的面板，不会修改默认的交互行为（比如 DatePicker 依然是点击日才会完成选择并关闭面板）。")]), _vm._v(" "), _c("h5", { attrs: { id: "解决办法" } }, [_vm._v("解决办法 "), _c("a", { staticClass: "anchor", attrs: { href: "#解决办法" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("以下文章均是 react 版本的实现文章，思路一致。参照 "), _c("a", {
    attrs: { href: "https://juejin.im/post/5cf65c366fb9a07eca6968f9" }
  }, [_vm._v("这篇文章")]), _vm._v(" 或者 "), _c("a", {
    attrs: { href: "https://www.cnblogs.com/zyl-Tara/p/10197177.html" }
  }, [_vm._v("这篇文章")]), _vm._v(" 里的做法，利用 "), _c("code", { pre: true }, [_vm._v("mode")]), _vm._v(" 和 "), _c("code", { pre: true }, [_vm._v("panelChange")]), _vm._v(" 等方法去封装一个 "), _c("code", { pre: true }, [_vm._v("YearPicker")]), _vm._v(" 等组件。我们计划在 ant-design-vue@2.0 中直接添加更多相关日期组件来支持这些需求。")])]);
}];
render._withStripped = true;



/***/ }),

/***/ "./vueDocs/faq.zh-CN.md":
/*!******************************!*\
  !*** ./vueDocs/faq.zh-CN.md ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _faq_zh_CN_md_vue_type_template_id_65790dd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.zh-CN.md?vue&type=template&id=65790dd7& */ "./vueDocs/faq.zh-CN.md?vue&type=template&id=65790dd7&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _faq_zh_CN_md_vue_type_template_id_65790dd7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _faq_zh_CN_md_vue_type_template_id_65790dd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vueDocs/faq.zh-CN.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vueDocs/faq.zh-CN.md?vue&type=template&id=65790dd7&":
/*!*************************************************************!*\
  !*** ./vueDocs/faq.zh-CN.md?vue&type=template&id=65790dd7& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_faq_zh_CN_md_vue_type_template_id_65790dd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--2!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??ref--0-0!../node_modules/vue-antd-md-loader??ref--0-1!./faq.zh-CN.md?vue&type=template&id=65790dd7& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-antd-md-loader/index.js?!./vueDocs/faq.zh-CN.md?vue&type=template&id=65790dd7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_faq_zh_CN_md_vue_type_template_id_65790dd7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_faq_zh_CN_md_vue_type_template_id_65790dd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=7c4acbc4.async.js.map