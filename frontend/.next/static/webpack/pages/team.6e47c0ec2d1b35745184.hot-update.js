self["webpackHotUpdate_N_E"]("pages/team",{

/***/ "./components/team.js":
/*!****************************!*\
  !*** ./components/team.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./components/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\stask\\work\\reborn-ukraine\\frontend\\components\\team.js",
    _this = undefined,
    _s = $RefreshSig$();




var Team = function Team(_ref) {
  _s();

  var sectionTeam = _ref.sectionTeam,
      team = _ref.team;
  var selectedTeam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "team",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "team__content uk-container uk-container-large",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "team-header__heading team-header__heading_active",
          children: sectionTeam.attributes.titleTeam
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "team-header__heading",
          children: sectionTeam.attributes.titleStructure
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "team-members uk-grid uk-child-width-1-2",
        children: team.map(function (teamMember, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "team-member",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "team-member__image",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                image: teamMember.attributes.image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              className: "team-member__title",
              children: missionItem.attributes.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "team-member__description",
              children: missionItem.attributes.desc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_s(Team, "jPnY/Ufe0sSAseYFEqkQtornaww=");

_c = Team;
/* harmony default export */ __webpack_exports__["default"] = (Team);

var _c;

$RefreshReg$(_c, "Team");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZWFtLmpzIl0sIm5hbWVzIjpbIlRlYW0iLCJzZWN0aW9uVGVhbSIsInRlYW0iLCJzZWxlY3RlZFRlYW0iLCJ1c2VTdGF0ZSIsImF0dHJpYnV0ZXMiLCJ0aXRsZVRlYW0iLCJ0aXRsZVN0cnVjdHVyZSIsIm1hcCIsInRlYW1NZW1iZXIiLCJpIiwiaW1hZ2UiLCJtaXNzaW9uSXRlbSIsIm5hbWUiLCJkZXNjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDdEMsTUFBTUMsWUFBWSxHQUFHQywrQ0FBUSxDQUFDLElBQUQsQ0FBN0I7QUFDQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyxNQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLCtDQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsa0RBQWQ7QUFBQSxvQkFDR0gsV0FBVyxDQUFDSSxVQUFaLENBQXVCQztBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSSxtQkFBUyxFQUFDLHNCQUFkO0FBQUEsb0JBQ0dMLFdBQVcsQ0FBQ0ksVUFBWixDQUF1QkU7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVNFO0FBQUssaUJBQVMsRUFBQyx5Q0FBZjtBQUFBLGtCQUNHTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDQyxVQUFELEVBQWFDLENBQWIsRUFBbUI7QUFDM0IsOEJBQ0U7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsb0JBQWY7QUFBQSxxQ0FDRSw4REFBQywyQ0FBRDtBQUFXLHFCQUFLLEVBQUVELFVBQVUsQ0FBQ0osVUFBWCxDQUFzQk07QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRTtBQUFJLHVCQUFTLEVBQUMsb0JBQWQ7QUFBQSx3QkFDR0MsV0FBVyxDQUFDUCxVQUFaLENBQXVCUTtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBT0U7QUFBRyx1QkFBUyxFQUFDLDBCQUFiO0FBQUEsd0JBQ0dELFdBQVcsQ0FBQ1AsVUFBWixDQUF1QlM7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBLGFBQWtDSixDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBYUQsU0FkQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0FqQ0Q7O0dBQU1WLEk7O0tBQUFBLEk7QUFtQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVhbS42ZTQ3YzBlYzJkMWIzNTc0NTE4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi9pbWFnZVwiXG5cbmNvbnN0IFRlYW0gPSAoeyBzZWN0aW9uVGVhbSwgdGVhbSB9KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkVGVhbSA9IHVzZVN0YXRlKHRydWUpXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVhbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtX19jb250ZW50IHVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFtLWhlYWRlclwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZWFtLWhlYWRlcl9faGVhZGluZyB0ZWFtLWhlYWRlcl9faGVhZGluZ19hY3RpdmVcIj5cbiAgICAgICAgICAgIHtzZWN0aW9uVGVhbS5hdHRyaWJ1dGVzLnRpdGxlVGVhbX1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZWFtLWhlYWRlcl9faGVhZGluZ1wiPlxuICAgICAgICAgICAge3NlY3Rpb25UZWFtLmF0dHJpYnV0ZXMudGl0bGVTdHJ1Y3R1cmV9XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhbS1tZW1iZXJzIHVrLWdyaWQgdWstY2hpbGQtd2lkdGgtMS0yXCI+XG4gICAgICAgICAge3RlYW0ubWFwKCh0ZWFtTWVtYmVyLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYW0tbWVtYmVyX19pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBpbWFnZT17dGVhbU1lbWJlci5hdHRyaWJ1dGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlcl9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHttaXNzaW9uSXRlbS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZWFtLW1lbWJlcl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIHttaXNzaW9uSXRlbS5hdHRyaWJ1dGVzLmRlc2N9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVhbVxuIl0sInNvdXJjZVJvb3QiOiIifQ==