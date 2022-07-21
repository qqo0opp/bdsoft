(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-antd-md-loader/index.js?!./vueDocs/faq.en-US.md?vue&type=template&id=1e65afff&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??ref--0-0!./node_modules/vue-antd-md-loader??ref--0-1!./vueDocs/faq.en-US.md?vue&type=template&id=1e65afff& ***!
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
  return _c("div", [_c("h1", [_vm._v("FAQ")]), _vm._v(" "), _c("p", [_vm._v("Here are the frequently asked questions about Ant Design Vue that you should look up before you ask in community or create new issue.")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "Are-you-going-to-provide-Sass/Stylus(etc...)-style-file?"
    }
  }, [_vm._v("Are you going to provide Sass/Stylus(etc...) style file? "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#Are-you-going-to-provide-Sass/Stylus(etc...)-style-file?"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("No, actually, you can convert Less to Sass/Stylus(etc...) with tools (which you can Google).")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-disappear-when-I-click-another-popup-component-inside-it,-How-to-resolve-it?"
    }
  }, [_c("code", { pre: true }, [_vm._v("Select Dropdown DatePicker TimePicker Popover Popconfirm")]), _vm._v(" disappear when I click another popup component inside it, How to resolve it? "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-disappear-when-I-click-another-popup-component-inside-it,-How-to-resolve-it?"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("Use "), _c("code", { pre: true }, [_vm._v('<a-select :getPopupContainer="trigger => trigger.parentNode">')]), _vm._v(" to render component inside Popover. (Or other getXxxxContainer props)")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-scroll-with-the-page?"
    }
  }, [_c("code", { pre: true }, [_vm._v("Select Dropdown DatePicker TimePicker Popover Popconfirm")]), _vm._v(" scroll with the page? "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#Select-Dropdown-DatePicker-TimePicker-Popover-Popconfirm-scroll-with-the-page?"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("Use "), _c("code", { pre: true }, [_vm._v('<a-select :getPopupContainer="trigger => trigger.parentNode">')]), _vm._v(" to render component inside the scroll area. (Or other getXxxxContainer props).")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "Form-does-not-support-two-way-binding,-can't-use-v-model?"
    }
  }, [_c("code", { pre: true }, [_vm._v("Form")]), _vm._v(" does not support two-way binding, can't use "), _c("code", { pre: true }, [_vm._v("v-model")]), _vm._v("? "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#Form-does-not-support-two-way-binding,-can't-use-v-model?"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("First, we do not recommend using two-way binding in the Form, the same data may be used in multiple places, if you use two-way binding, then the data modification will be synchronized to each component, but this is not what we want, you Data should be synchronized when the form is submitted successfully or fails or confirmed. With a non-bidirectionally bound form, you have maximum control over data modification/synchronization.")]), _vm._v(" "), _c("p", [_vm._v("Second, if you don't use the form's automatic check/collection feature, ie you don't use the "), _c("code", { pre: true }, [_vm._v("v-decorator")]), _vm._v(" modifier, you can still use "), _c("code", { pre: true }, [_vm._v("v-model")]), _vm._v(".")]), _vm._v(" "), _c("h3", { attrs: { id: "How-to-modify-the-default-theme-of-Ant-Design-Vue?" } }, [_vm._v("How to modify the default theme of Ant Design Vue? "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#How-to-modify-the-default-theme-of-Ant-Design-Vue?"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("See "), _c("a", { attrs: { href: "/docs/vue/customize-theme/" } }, [_vm._v("Customize Theme")]), _vm._v(".")]), _vm._v(" "), _c("h3", { attrs: { id: "How-to-optimize-momentjs-bundle-size-with-webpack?" } }, [_vm._v("How to optimize momentjs bundle size with webpack? "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#How-to-optimize-momentjs-bundle-size-with-webpack?"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("See: https://github.com/jmblog/how-to-optimize-momentjs-with-webpack")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "It-doesn't-work-when-I-change-defaultValue,defaultOpenKeys,-initialValue-dynamically."
    }
  }, [_vm._v("It doesn't work when I change "), _c("code", { pre: true }, [_vm._v("defaultValue")]), _vm._v(","), _c("code", { pre: true }, [_vm._v("defaultOpenKeys")]), _vm._v(", "), _c("code", { pre: true }, [_vm._v("initialValue")]), _vm._v(" dynamically. "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#It-doesn't-work-when-I-change-defaultValue,defaultOpenKeys,-initialValue-dynamically."
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("The "), _c("code", { pre: true }, [_vm._v("defaultXxxx")]), _vm._v(" (like "), _c("code", { pre: true }, [_vm._v("defaultValue")]), _vm._v(") of "), _c("code", { pre: true }, [_vm._v("Input")]), _vm._v("/"), _c("code", { pre: true }, [_vm._v("Select")]), _vm._v("(etc...) only works in first render. This feature is referenced from "), _c("a", {
    attrs: {
      href: "https://facebook.github.io/react/docs/forms.html#controlled-components"
    }
  }, [_vm._v("React")]), _vm._v(".")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "I-set-the-value-of-Input/Select(etc...),-and-then,-it-cannot-be-changed-by-user's-action."
    }
  }, [_vm._v("I set the "), _c("code", { pre: true }, [_vm._v("value")]), _vm._v(" of "), _c("code", { pre: true }, [_vm._v("Input")]), _vm._v("/"), _c("code", { pre: true }, [_vm._v("Select")]), _vm._v("(etc...), and then, it cannot be changed by user's action. "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#I-set-the-value-of-Input/Select(etc...),-and-then,-it-cannot-be-changed-by-user's-action."
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("Try "), _c("code", { pre: true }, [_vm._v("defaultValue")]), _vm._v(" or "), _c("code", { pre: true }, [_vm._v("change")]), _vm._v(" or "), _c("code", { pre: true }, [_vm._v("v-model")]), _vm._v(" to change "), _c("code", { pre: true }, [_vm._v("value")]), _vm._v(".")]), _vm._v(" "), _c("h3", { attrs: { id: "ant-design-vue-override-my-global-styles!" } }, [_vm._v("ant-design-vue override my global styles! "), _c("a", {
    staticClass: "anchor",
    attrs: { href: "#ant-design-vue-override-my-global-styles!" }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("Yes, ant-design-vue is designed to develop a complete background application, we override some global styles for styling convenience, and it can't be removed now. More info trace https://github.com/ant-design/ant-design/issues/4331 .")]), _vm._v(" "), _c("p", [_vm._v("Or, follow the instructions in "), _c("a", {
    attrs: {
      href: "docs/react/customize-theme#How-to-avoid-modifying-global-styles-?"
    }
  }, [_vm._v("How to avoid modifying global styles?")])]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "ant-design-vue-makes-only-poor-user-experience-on-mobile."
    }
  }, [_c("code", { pre: true }, [_vm._v("ant-design-vue")]), _vm._v(" makes only poor user experience on mobile. "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#ant-design-vue-makes-only-poor-user-experience-on-mobile."
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_c("code", { pre: true }, [_vm._v("ant-design-vue")]), _vm._v(" is not designed for mobile.")]), _vm._v(" "), _c("h3", {
    attrs: {
      id: "When-I-set-mode-to-DatePicker/RangePicker,-I-cannot-select-year-or-month-anymore?"
    }
  }, [_vm._v("When I set "), _c("code", { pre: true }, [_vm._v("mode")]), _vm._v(" to DatePicker/RangePicker, I cannot select year or month anymore? "), _c("a", {
    staticClass: "anchor",
    attrs: {
      href: "#When-I-set-mode-to-DatePicker/RangePicker,-I-cannot-select-year-or-month-anymore?"
    }
  }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("In a real world development, you may need a YearPicker, MonthRangePicker or WeekRangePicker. You are trying to add "), _c("code", { pre: true }, [_vm._v("mode")]), _vm._v(" to DatePicker/RangePicker expected to implement those pickers. However, the DatePicker/RangePicker cannot be selected and the panels won't close now.")]), _vm._v(" "), _c("p", [_vm._v("That is because "), _c("code", { pre: true }, [_vm._v('<DatePicker mode="year" />')]), _vm._v(" do not equal to "), _c("code", { pre: true }, [_vm._v("YearPicker")]), _vm._v(", "), _c("code", { pre: true }, [_vm._v('<RangePicker mode="month" />')]), _vm._v(" do not equal to "), _c("code", { pre: true }, [_vm._v("MonthRangePicker")]), _vm._v(" either. The "), _c("code", { pre: true }, [_vm._v("mode")]), _vm._v(" property was added to support "), _c("a", {
    attrs: {
      href: "https://github.com/ant-design/ant-design/issues/5190"
    }
  }, [_vm._v("showing time picker panel in DatePicker")]), _vm._v(", which simply control the displayed panel and won't change the original date picking behavior of "), _c("code", { pre: true }, [_vm._v("DatePicker/RangePicker")]), _vm._v(" (for instance you still need to click date cell to finish selection in a DatePicker, whatever the "), _c("code", { pre: true }, [_vm._v("mode")]), _vm._v(" is).")]), _vm._v(" "), _c("h5", { attrs: { id: "Solution" } }, [_vm._v("Solution "), _c("a", { staticClass: "anchor", attrs: { href: "#Solution" } }, [_vm._v("#")])]), _vm._v(" "), _c("p", [_vm._v("The following articles are the implementation articles of the react version, the ideas are the same. In "), _c("a", {
    attrs: { href: "https://juejin.im/post/5cf65c366fb9a07eca6968f9" }
  }, [_vm._v("one article")]), _vm._v(" or "), _c("a", {
    attrs: { href: "https://www.cnblogs.com/zyl-Tara/p/10197177.html" }
  }, [_vm._v("another article")]), _vm._v(" approach, using methods "), _c("code", { pre: true }, [_vm._v("mode")]), _vm._v(" and "), _c("code", { pre: true }, [_vm._v("panelChange")]), _vm._v(" to encapsulate a component such as "), _c("code", { pre: true }, [_vm._v("YearPicker")]), _vm._v(". We plan to add more date related components directly in ant-design-vue@2.0 to support these needs.")])]);
}];
render._withStripped = true;



/***/ }),

/***/ "./vueDocs/faq.en-US.md":
/*!******************************!*\
  !*** ./vueDocs/faq.en-US.md ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _faq_en_US_md_vue_type_template_id_1e65afff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.en-US.md?vue&type=template&id=1e65afff& */ "./vueDocs/faq.en-US.md?vue&type=template&id=1e65afff&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _faq_en_US_md_vue_type_template_id_1e65afff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _faq_en_US_md_vue_type_template_id_1e65afff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vueDocs/faq.en-US.md"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vueDocs/faq.en-US.md?vue&type=template&id=1e65afff&":
/*!*************************************************************!*\
  !*** ./vueDocs/faq.en-US.md?vue&type=template&id=1e65afff& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_faq_en_US_md_vue_type_template_id_1e65afff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--2!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??ref--0-0!../node_modules/vue-antd-md-loader??ref--0-1!./faq.en-US.md?vue&type=template&id=1e65afff& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-antd-md-loader/index.js?!./vueDocs/faq.en-US.md?vue&type=template&id=1e65afff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_faq_en_US_md_vue_type_template_id_1e65afff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_ref_0_0_node_modules_vue_antd_md_loader_index_js_ref_0_1_faq_en_US_md_vue_type_template_id_1e65afff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=36555e68.async.js.map