self["webpackHotUpdate_N_E"]("pages/en",{

/***/ "./components/scrollTop.js":
/*!*********************************!*\
  !*** ./components/scrollTop.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\scrollTop.js",
    _this = undefined;



var ScrollTop = function ScrollTop(_ref) {
  var projects = _ref.projects;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: "scroll-top",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_1__.default, {
      image: projects.attributes.iconNext
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = ScrollTop;
/* harmony default export */ __webpack_exports__["default"] = (ScrollTop);

var _c;

$RefreshReg$(_c, "ScrollTop");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/en/index.js":
/*!***************************!*\
  !*** ./pages/en/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/seo */ "./components/seo.js");
/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/welcome */ "./components/welcome.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/about */ "./components/about.js");
/* harmony import */ var _components_mission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/mission */ "./components/mission.js");
/* harmony import */ var _components_partners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/partners */ "./components/partners.js");
/* harmony import */ var _components_donations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/donations */ "./components/donations.js");
/* harmony import */ var _components_win__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/win */ "./components/win.js");
/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/contacts */ "./components/contacts.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/footer */ "./components/footer.js");
/* harmony import */ var _components_articles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/articles */ "./components/articles.js");
/* harmony import */ var _components_scrollTop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/scrollTop */ "./components/scrollTop.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\pages\\en\\index.js",
    _this = undefined;

/* eslint-disable prettier/prettier */













var Home = function Home(_ref) {
  var langSwithes = _ref.langSwithes,
      about = _ref.about,
      categories = _ref.categories,
      homepage = _ref.homepage,
      welcome = _ref.welcome,
      sectionMission = _ref.sectionMission,
      missions = _ref.missions,
      missionSlides = _ref.missionSlides,
      sectionPartner = _ref.sectionPartner,
      partners = _ref.partners,
      sectionWin = _ref.sectionWin,
      sectionContacts = _ref.sectionContacts,
      sectionFooter = _ref.sectionFooter,
      socials = _ref.socials,
      sectionDonation = _ref.sectionDonation,
      articles = _ref.articles,
      projects = _ref.projects,
      lang = _ref.lang;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    page: "home-page",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_2__.default, {
      seo: homepage.attributes.seo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_welcome__WEBPACK_IMPORTED_MODULE_3__.default, {
      welcome: welcome,
      homepage: homepage,
      categories: categories,
      sectionDonation: sectionDonation,
      langSwithes: langSwithes,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_about__WEBPACK_IMPORTED_MODULE_4__.default, {
      about: about
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mission__WEBPACK_IMPORTED_MODULE_5__.default, {
      sectionMission: sectionMission,
      missions: missions,
      missionSlides: missionSlides,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_articles__WEBPACK_IMPORTED_MODULE_11__.default, {
      articles: articles,
      categories: categories,
      projects: projects,
      missions: missions,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_partners__WEBPACK_IMPORTED_MODULE_6__.default, {
      sectionPartner: sectionPartner,
      partners: partners
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_donations__WEBPACK_IMPORTED_MODULE_7__.default, {
      sectionContacts: sectionContacts,
      sectionDonation: sectionDonation,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_win__WEBPACK_IMPORTED_MODULE_8__.default, {
      sectionWin: sectionWin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contacts__WEBPACK_IMPORTED_MODULE_9__.default, {
      sectionContacts: sectionContacts
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_10__.default, {
      sectionFooter: sectionFooter,
      socials: socials,
      categories: categories,
      lang: lang
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zY3JvbGxUb3AuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VuL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNjcm9sbFRvcCIsInByb2plY3RzIiwiYXR0cmlidXRlcyIsImljb25OZXh0IiwiSG9tZSIsImxhbmdTd2l0aGVzIiwiYWJvdXQiLCJjYXRlZ29yaWVzIiwiaG9tZXBhZ2UiLCJ3ZWxjb21lIiwic2VjdGlvbk1pc3Npb24iLCJtaXNzaW9ucyIsIm1pc3Npb25TbGlkZXMiLCJzZWN0aW9uUGFydG5lciIsInBhcnRuZXJzIiwic2VjdGlvbldpbiIsInNlY3Rpb25Db250YWN0cyIsInNlY3Rpb25Gb290ZXIiLCJzb2NpYWxzIiwic2VjdGlvbkRvbmF0aW9uIiwiYXJ0aWNsZXMiLCJsYW5nIiwic2VvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbEMsc0JBQ0U7QUFBUSxhQUFTLEVBQUMsWUFBbEI7QUFBQSwyQkFDRSw4REFBQywyQ0FBRDtBQUFXLFdBQUssRUFBRUEsUUFBUSxDQUFDQyxVQUFULENBQW9CQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7S0FBTUgsUztBQVFOLCtEQUFlQSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BcUJOO0FBQUEsTUFuQkNDLFdBbUJELFFBbkJDQSxXQW1CRDtBQUFBLE1BbEJDQyxLQWtCRCxRQWxCQ0EsS0FrQkQ7QUFBQSxNQWpCQ0MsVUFpQkQsUUFqQkNBLFVBaUJEO0FBQUEsTUFoQkNDLFFBZ0JELFFBaEJDQSxRQWdCRDtBQUFBLE1BZkNDLE9BZUQsUUFmQ0EsT0FlRDtBQUFBLE1BZENDLGNBY0QsUUFkQ0EsY0FjRDtBQUFBLE1BYkNDLFFBYUQsUUFiQ0EsUUFhRDtBQUFBLE1BWkNDLGFBWUQsUUFaQ0EsYUFZRDtBQUFBLE1BWENDLGNBV0QsUUFYQ0EsY0FXRDtBQUFBLE1BVkNDLFFBVUQsUUFWQ0EsUUFVRDtBQUFBLE1BVENDLFVBU0QsUUFUQ0EsVUFTRDtBQUFBLE1BUkNDLGVBUUQsUUFSQ0EsZUFRRDtBQUFBLE1BUENDLGFBT0QsUUFQQ0EsYUFPRDtBQUFBLE1BTkNDLE9BTUQsUUFOQ0EsT0FNRDtBQUFBLE1BTENDLGVBS0QsUUFMQ0EsZUFLRDtBQUFBLE1BSkNDLFFBSUQsUUFKQ0EsUUFJRDtBQUFBLE1BSENuQixRQUdELFFBSENBLFFBR0Q7QUFBQSxNQUZDb0IsSUFFRCxRQUZDQSxJQUVEO0FBQ0wsc0JBQ0UsOERBQUMsdURBQUQ7QUFBUSxRQUFJLEVBQUMsV0FBYjtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQUssU0FBRyxFQUFFYixRQUFRLENBQUNOLFVBQVQsQ0FBb0JvQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx3REFBRDtBQUFTLGFBQU8sRUFBRWIsT0FBbEI7QUFBMkIsY0FBUSxFQUFFRCxRQUFyQztBQUErQyxnQkFBVSxFQUFFRCxVQUEzRDtBQUF1RSxxQkFBZSxFQUFFWSxlQUF4RjtBQUF5RyxpQkFBVyxFQUFFZCxXQUF0SDtBQUFtSSxVQUFJLEVBQUVnQjtBQUF6STtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyxzREFBRDtBQUFPLFdBQUssRUFBRWY7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQyx3REFBRDtBQUFTLG9CQUFjLEVBQUVJLGNBQXpCO0FBQXlDLGNBQVEsRUFBRUMsUUFBbkQ7QUFBNkQsbUJBQWEsRUFBRUMsYUFBNUU7QUFBMkYsVUFBSSxFQUFFUztBQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRSw4REFBQywwREFBRDtBQUFVLGNBQVEsRUFBRUQsUUFBcEI7QUFBOEIsZ0JBQVUsRUFBRWIsVUFBMUM7QUFBc0QsY0FBUSxFQUFFTixRQUFoRTtBQUEwRSxjQUFRLEVBQUVVLFFBQXBGO0FBQThGLFVBQUksRUFBRVU7QUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBTUUsOERBQUMseURBQUQ7QUFBVSxvQkFBYyxFQUFFUixjQUExQjtBQUEwQyxjQUFRLEVBQUVDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FLDhEQUFDLDBEQUFEO0FBQVcscUJBQWUsRUFBRUUsZUFBNUI7QUFBNkMscUJBQWUsRUFBRUcsZUFBOUQ7QUFBK0UsVUFBSSxFQUFFRTtBQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFRRSw4REFBQyxvREFBRDtBQUFLLGdCQUFVLEVBQUVOO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQVNFLDhEQUFDLHlEQUFEO0FBQVUscUJBQWUsRUFBRUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBVUUsOERBQUMsd0RBQUQ7QUFBUSxtQkFBYSxFQUFFQyxhQUF2QjtBQUFzQyxhQUFPLEVBQUVDLE9BQS9DO0FBQXdELGdCQUFVLEVBQUVYLFVBQXBFO0FBQWdGLFVBQUksRUFBRWM7QUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FwQ0Q7O0tBQU1qQixJOztBQWlITiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbi5iNmFiYjQ3Y2M5NzBmMjMwNTQ0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5cbmNvbnN0IFNjcm9sbFRvcCA9ICh7IHByb2plY3RzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNjcm9sbC10b3BcIj5cbiAgICAgIDxOZXh0SW1hZ2UgaW1hZ2U9e3Byb2plY3RzLmF0dHJpYnV0ZXMuaWNvbk5leHR9IC8+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9wXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvd2VsY29tZVwiXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWJvdXRcIlxuaW1wb3J0IE1pc3Npb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWlzc2lvblwiXG5pbXBvcnQgUGFydG5lcnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFydG5lcnNcIlxuaW1wb3J0IERvbmF0aW9ucyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9kb25hdGlvbnNcIlxuaW1wb3J0IFdpbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy93aW5cIlxuaW1wb3J0IENvbnRhY3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRhY3RzXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9vdGVyXCJcbmltcG9ydCBBcnRpY2xlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hcnRpY2xlc1wiXG5pbXBvcnQgU2Nyb2xsVG9wIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Njcm9sbFRvcFwiXG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCJcblxuY29uc3QgSG9tZSA9IChcbiAgICAgIHsgIFxuICAgICAgICBsYW5nU3dpdGhlcyxcbiAgICAgICAgYWJvdXQsXG4gICAgICAgIGNhdGVnb3JpZXMsXG4gICAgICAgIGhvbWVwYWdlLFxuICAgICAgICB3ZWxjb21lLFxuICAgICAgICBzZWN0aW9uTWlzc2lvbixcbiAgICAgICAgbWlzc2lvbnMsXG4gICAgICAgIG1pc3Npb25TbGlkZXMsXG4gICAgICAgIHNlY3Rpb25QYXJ0bmVyLFxuICAgICAgICBwYXJ0bmVycyxcbiAgICAgICAgc2VjdGlvbldpbixcbiAgICAgICAgc2VjdGlvbkNvbnRhY3RzLFxuICAgICAgICBzZWN0aW9uRm9vdGVyLFxuICAgICAgICBzb2NpYWxzLFxuICAgICAgICBzZWN0aW9uRG9uYXRpb24sXG4gICAgICAgIGFydGljbGVzLFxuICAgICAgICBwcm9qZWN0cyxcbiAgICAgICAgbGFuZ1xuICAgICAgfVxuICApID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHBhZ2U9XCJob21lLXBhZ2VcIj5cbiAgICAgIDxTZW8gc2VvPXtob21lcGFnZS5hdHRyaWJ1dGVzLnNlb30gLz5cbiAgICAgIDxXZWxjb21lIHdlbGNvbWU9e3dlbGNvbWV9IGhvbWVwYWdlPXtob21lcGFnZX0gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gc2VjdGlvbkRvbmF0aW9uPXtzZWN0aW9uRG9uYXRpb259IGxhbmdTd2l0aGVzPXtsYW5nU3dpdGhlc30gbGFuZz17bGFuZ30vPlxuICAgICAgPEFib3V0IGFib3V0PXthYm91dH0vPlxuICAgICAgPE1pc3Npb24gc2VjdGlvbk1pc3Npb249e3NlY3Rpb25NaXNzaW9ufSBtaXNzaW9ucz17bWlzc2lvbnN9IG1pc3Npb25TbGlkZXM9e21pc3Npb25TbGlkZXN9IGxhbmc9e2xhbmd9IC8+XG4gICAgICA8QXJ0aWNsZXMgYXJ0aWNsZXM9e2FydGljbGVzfSBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSBwcm9qZWN0cz17cHJvamVjdHN9IG1pc3Npb25zPXttaXNzaW9uc30gbGFuZz17bGFuZ30vPlxuICAgICAgPFBhcnRuZXJzIHNlY3Rpb25QYXJ0bmVyPXtzZWN0aW9uUGFydG5lcn0gcGFydG5lcnM9e3BhcnRuZXJzfS8+XG4gICAgICA8RG9uYXRpb25zIHNlY3Rpb25Db250YWN0cz17c2VjdGlvbkNvbnRhY3RzfSBzZWN0aW9uRG9uYXRpb249e3NlY3Rpb25Eb25hdGlvbn0gbGFuZz17bGFuZ30vPlxuICAgICAgPFdpbiBzZWN0aW9uV2luPXtzZWN0aW9uV2lufS8+XG4gICAgICA8Q29udGFjdHMgc2VjdGlvbkNvbnRhY3RzPXtzZWN0aW9uQ29udGFjdHN9Lz5cbiAgICAgIDxGb290ZXIgc2VjdGlvbkZvb3Rlcj17c2VjdGlvbkZvb3Rlcn0gc29jaWFscz17c29jaWFsc30gY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30gbGFuZz17bGFuZ30vPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgbGFuZyA9IFwiZW5cIlxuICBjb25zdCBbXG4gICAgICBhcnRpY2xlc1JlcyxcbiAgICAgIHNlY3Rpb25Qcm9qZWN0UmVzLFxuICAgICAgc2VjdGlvbkRvbmF0aW9uUmVzLFxuICAgICAgc2VjdGlvblNvY2lhbHNSZXMsXG4gICAgICBzZWN0aW9uRm9vdGVyUmVzLFxuICAgICAgc2VjdGlvbkNvbnRhY3RzUmVzLFxuICAgICAgc2VjdGlvbldpblJlcyxcbiAgICAgIHNlY3Rpb25QYXJ0bmVyUmVzLFxuICAgICAgcGFydG5lcnNSZXMsXG4gICAgICBzZWN0aW9uTWlzc2lvblJlcyxcbiAgICAgIG1pc3Npb25zUmVzLFxuICAgICAgbWlzc2lvblNsaWRlc1JlcyxcbiAgICAgIGNhdGVnb3JpZXNSZXMsXG4gICAgICB3ZWxjb21lUmVzLFxuICAgICAgYWJvdXRSZXMsXG4gICAgICBsYW5nU3dpdGNoZXNSZXMsXG4gICAgICBob21lcGFnZVJlcyxcbiAgICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZmV0Y2hBUEkoXCIvYXJ0aWNsZXNcIiwgeyAgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLXByb2plY3RcIiwgeyBsb2NhbGU6IGxhbmcsICBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLWRvbmF0aW9uXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zb2NpYWxzXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLWZvb3RlclwiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvc2VjdGlvbi1jb250YWN0XCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLXdpblwiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvc2VjdGlvbi1wYXJ0bmVyXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9wYXJ0bmVyc1wiLCB7IHBvcHVsYXRlOiBcIipcIiB9KSxcbiAgICAgIGZldGNoQVBJKFwiL3NlY3Rpb24tbWlzc2lvblwiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvbWlzc2lvbnNcIiwgeyBsb2NhbGU6IGxhbmcsIHBvcHVsYXRlOiB7XG4gICAgICAgIHRpdGxlOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogeyBwb3B1bGF0ZTogXCIqXCIgfSxcbiAgICAgICAgaW1hZ2U6IHsgcG9wdWxhdGU6IFwiKlwiIH0sXG4gICAgICB9IH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvbWlzc2lvbnMtc2xpZGVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvY2F0ZWdvcmllc1wiLCB7IGxvY2FsZTogbGFuZywgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvc2VjdGlvbi13ZWxjb21lXCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9zZWN0aW9uLWFib3V0XCIsIHsgbG9jYWxlOiBsYW5nLCBwb3B1bGF0ZTogXCIqXCIgfSksXG4gICAgICBmZXRjaEFQSShcIi9sYW5nLXN3aXRjaGVzXCIsIHsgcG9wdWxhdGU6IFwiKlwiIH0pLFxuICAgICAgZmV0Y2hBUEkoXCIvaG9tZXBhZ2VcIiwge1xuICAgICAgICBsb2NhbGU6IGxhbmcsXG4gICAgICAgIHBvcHVsYXRlOiB7XG4gICAgICAgICAgc2VvOiB7IHBvcHVsYXRlOiBcIipcIiB9LFxuICAgICAgICAgIGxvZ286IHsgcG9wdWxhdGU6IFwiKlwifVxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhcnRpY2xlczogYXJ0aWNsZXNSZXMuZGF0YSxcbiAgICAgIHByb2plY3RzOiBzZWN0aW9uUHJvamVjdFJlcy5kYXRhLFxuICAgICAgc2VjdGlvbkRvbmF0aW9uOiBzZWN0aW9uRG9uYXRpb25SZXMuZGF0YSxcbiAgICAgIHNvY2lhbHM6IHNlY3Rpb25Tb2NpYWxzUmVzLmRhdGEsXG4gICAgICBzZWN0aW9uRm9vdGVyOiBzZWN0aW9uRm9vdGVyUmVzLmRhdGEsXG4gICAgICBzZWN0aW9uQ29udGFjdHM6IHNlY3Rpb25Db250YWN0c1Jlcy5kYXRhLFxuICAgICAgc2VjdGlvbldpbjogc2VjdGlvbldpblJlcy5kYXRhLFxuICAgICAgc2VjdGlvblBhcnRuZXI6IHNlY3Rpb25QYXJ0bmVyUmVzLmRhdGEsXG4gICAgICBwYXJ0bmVyczogcGFydG5lcnNSZXMuZGF0YSxcbiAgICAgIHNlY3Rpb25NaXNzaW9uOiBzZWN0aW9uTWlzc2lvblJlcy5kYXRhLFxuICAgICAgbWlzc2lvbnM6IG1pc3Npb25zUmVzLmRhdGEsXG4gICAgICBtaXNzaW9uU2xpZGVzOiBtaXNzaW9uU2xpZGVzUmVzLmRhdGEsXG4gICAgICBhYm91dDogYWJvdXRSZXMuZGF0YSxcbiAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNSZXMuZGF0YSxcbiAgICAgIGxhbmdTd2l0aGVzOiBsYW5nU3dpdGNoZXNSZXMuZGF0YSxcbiAgICAgIGhvbWVwYWdlOiBob21lcGFnZVJlcy5kYXRhLFxuICAgICAgd2VsY29tZTogd2VsY29tZVJlcy5kYXRhLFxuICAgICAgbGFuZzogbGFuZyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=