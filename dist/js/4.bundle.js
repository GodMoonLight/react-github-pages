(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/Gist/Editor.jsx":
/*!*****************************!*\
  !*** ./src/Gist/Editor.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Markdown */ \"./src/Markdown/index.js\");\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Input */ \"./src/Input/index.jsx\");\n/* harmony import */ var _Editor_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Editor.css */ \"./src/Gist/Editor.css\");\n/* harmony import */ var _Editor_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Editor_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Textarea */ \"./src/Textarea/index.jsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ \"./src/Button/index.js\");\n/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../history */ \"./src/history.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Utils */ \"./src/Utils/index.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Context */ \"./src/Context/index.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError(\"Cannot instantiate an arrow function\"); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Editor =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Editor, _Component);\n\n  function Editor(props) {\n    var _this2 = this;\n\n    var _this;\n\n    _classCallCheck(this, Editor);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editor).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"setDesc\", function (description) {\n      _newArrowCheck(this, _this2);\n\n      _this.setState({\n        description: description\n      });\n    }.bind(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"setTitle\", function (title) {\n      _newArrowCheck(this, _this2);\n\n      _this.setState({\n        title: title\n      });\n    }.bind(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"setContent\", function (content) {\n      _newArrowCheck(this, _this2);\n\n      _this.setState({\n        content: content\n      });\n    }.bind(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"setNewGist\", function (data, title, content) {\n      _newArrowCheck(this, _this2);\n\n      var context = _this.props.context;\n\n      var newGist = _objectSpread({}, data, {\n        title: title,\n        content: content\n      });\n\n      context.setGist(newGist);\n      _history__WEBPACK_IMPORTED_MODULE_7__[\"default\"].push(\"/gists/\".concat(data.id));\n    }.bind(this));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSave\", function () {\n      var _this3 = this;\n\n      _newArrowCheck(this, _this2);\n\n      var _this$state = _this.state,\n          content = _this$state.content,\n          title = _this$state.title,\n          description = _this$state.description;\n      var _this$props = _this.props,\n          id = _this$props.id,\n          originalTitle = _this$props.title;\n\n      if (id) {\n        _Utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].updateGist(id, title, description, content, originalTitle).then(function (_ref) {\n          var data = _ref.data;\n\n          _newArrowCheck(this, _this3);\n\n          _this.setNewGist(data, title, content);\n        }.bind(this));\n      } else {\n        _Utils__WEBPACK_IMPORTED_MODULE_8__[\"default\"].createGist(title, description, content).then(function (_ref2) {\n          var data = _ref2.data;\n\n          _newArrowCheck(this, _this3);\n\n          _this.setNewGist(data, title, content);\n        }.bind(this));\n      }\n    }.bind(this));\n\n    var _this$props2 = _this.props,\n        _title = _this$props2.title,\n        _description = _this$props2.description,\n        _content = _this$props2.content;\n    _this.state = {\n      title: _title,\n      description: _description,\n      content: _content\n    };\n    return _this;\n  }\n\n  _createClass(Editor, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state2 = this.state,\n          title = _this$state2.title,\n          description = _this$state2.description,\n          content = _this$state2.content;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Title :\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"gist-title-input\",\n        value: title,\n        onChange: this.setTitle\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        onClick: this.handleSave\n      }, \"Save\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Description :\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Textarea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        value: description,\n        onChange: this.setDesc\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Markdown__WEBPACK_IMPORTED_MODULE_2__[\"MarkdownEditor\"], {\n        className: \"gist-markdown-edit\",\n        data: content,\n        onChange: this.setContent\n      }));\n    }\n  }]);\n\n  return Editor;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nEditor.defaultProps = {\n  title: '',\n  description: '',\n  content: '',\n  id: null\n};\nEditor.propTypes = {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape().isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_Context__WEBPACK_IMPORTED_MODULE_9__[\"consumer\"])(Editor));\n\n//# sourceURL=webpack:///./src/Gist/Editor.jsx?");

/***/ })

}]);