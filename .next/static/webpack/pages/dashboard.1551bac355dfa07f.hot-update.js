"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./hooks/use-request.tsx":
/*!*******************************!*\
  !*** ./hooks/use-request.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst useRequest = (param)=>{\n    let { url , method , body , onSuccess  } = param;\n    var _this = undefined;\n    _s();\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const doRequest = async function() {\n        let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n        try {\n            setErrors(null);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][method](url, {\n                ...body,\n                ...props\n            });\n            if (onSuccess) {\n                onSuccess(response.data);\n            }\n            return response.data;\n        } catch (err) {\n            if (err.response && err.response.data && err.response.data.errors) {\n                setErrors(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"alert alert-danger\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Ooops....\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\grace\\\\Desktop\\\\Projects\\\\v44-tier3-team-39\\\\hooks\\\\use-request.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"my-0\",\n                            children: err.response.data.errors.map((err)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: err.message\n                                }, err.message, false, {\n                                    fileName: \"C:\\\\Users\\\\grace\\\\Desktop\\\\Projects\\\\v44-tier3-team-39\\\\hooks\\\\use-request.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 19\n                                }, _this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\grace\\\\Desktop\\\\Projects\\\\v44-tier3-team-39\\\\hooks\\\\use-request.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\grace\\\\Desktop\\\\Projects\\\\v44-tier3-team-39\\\\hooks\\\\use-request.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, _this));\n            } else {\n                setErrors(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"alert alert-danger\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Ooops....\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\grace\\\\Desktop\\\\Projects\\\\v44-tier3-team-39\\\\hooks\\\\use-request.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"An error occurred.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\grace\\\\Desktop\\\\Projects\\\\v44-tier3-team-39\\\\hooks\\\\use-request.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\grace\\\\Desktop\\\\Projects\\\\v44-tier3-team-39\\\\hooks\\\\use-request.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, _this));\n            }\n        }\n    };\n    return {\n        doRequest,\n        errors\n    };\n};\n_s(useRequest, \"CBiIfGMAaAtFFE/cKx87b00YZJU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequest);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFDWjtBQVNqQyxNQUFNRSxhQUFhLFNBS0k7UUFMSCxFQUNsQkMsSUFBRyxFQUNIQyxPQUFNLEVBQ05DLEtBQUksRUFDSkMsVUFBUyxFQUNPOzs7SUFDaEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFxQixJQUFJO0lBRTdELE1BQU1RLFlBQVksaUJBQTJCO1lBQXBCQyx5RUFBYSxDQUFDO1FBQ3JDLElBQUk7WUFDRkYsVUFBVSxJQUFJO1lBQ2QsTUFBTUcsV0FBMEIsTUFBTVgsNkNBQUssQ0FBQ0ksT0FBTyxDQUFDRCxLQUFLO2dCQUFFLEdBQUdFLElBQUk7Z0JBQUUsR0FBR0ssS0FBSztZQUFDO1lBRTdFLElBQUlKLFdBQVc7Z0JBQ2JBLFVBQVVLLFNBQVNDLElBQUk7WUFDekIsQ0FBQztZQUVELE9BQU9ELFNBQVNDLElBQUk7UUFDdEIsRUFBRSxPQUFPQyxLQUFVO1lBQ2YsSUFBSUEsSUFBSUYsUUFBUSxJQUFJRSxJQUFJRixRQUFRLENBQUNDLElBQUksSUFBSUMsSUFBSUYsUUFBUSxDQUFDQyxJQUFJLENBQUNMLE1BQU0sRUFBRTtnQkFDakVDLHdCQUNFLDhEQUFDTTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOzRCQUFHRixXQUFVO3NDQUNYRixJQUFJRixRQUFRLENBQUNDLElBQUksQ0FBQ0wsTUFBTSxDQUFDVyxHQUFHLENBQUMsQ0FBQ0wsb0JBQzdCLDhEQUFDTTs4Q0FBc0JOLElBQUlPLE9BQU87bUNBQXpCUCxJQUFJTyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O1lBSzlCLE9BQU87Z0JBQ0xaLHdCQUNFLDhEQUFDTTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNLO3NDQUFFOzs7Ozs7Ozs7Ozs7WUFHVCxDQUFDO1FBQ0g7SUFDSjtJQUVBLE9BQU87UUFBRVo7UUFBV0Y7SUFBTztBQUM3QjtHQTFDTUw7QUE0Q04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlLXJlcXVlc3QudHN4P2FmNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBVc2VSZXF1ZXN0UHJvcHMge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIG1ldGhvZDogXCJnZXRcIiB8IFwicG9zdFwiIHwgXCJwdXRcIiB8IFwicGF0Y2hcIiB8IFwiZGVsZXRlXCI7XHJcbiAgYm9keT86IGFueTtcclxuICBvblN1Y2Nlc3M/OiAoZGF0YTogYW55KSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCB1c2VSZXF1ZXN0ID0gKHtcclxuICB1cmwsXHJcbiAgbWV0aG9kLFxyXG4gIGJvZHksXHJcbiAgb25TdWNjZXNzXHJcbn06IFVzZVJlcXVlc3RQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZTxKU1guRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBkb1JlcXVlc3QgPSBhc3luYyAocHJvcHM6IGFueSA9IHt9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRFcnJvcnMobnVsbCk7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlID0gYXdhaXQgYXhpb3NbbWV0aG9kXSh1cmwsIHsgLi4uYm9keSwgLi4ucHJvcHMgfSk7XHJcblxyXG4gICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSAmJiBlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMpIHtcclxuICAgICAgICAgIHNldEVycm9ycyhcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICA8aDQ+T29vcHMuLi4uPC9oND5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXktMFwiPlxyXG4gICAgICAgICAgICAgICAge2Vyci5yZXNwb25zZS5kYXRhLmVycm9ycy5tYXAoKGVycjogeyBtZXNzYWdlOiBzdHJpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtlcnIubWVzc2FnZX0+e2Vyci5tZXNzYWdlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldEVycm9ycyhcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICA8aDQ+T29vcHMuLi4uPC9oND5cclxuICAgICAgICAgICAgICA8cD5BbiBlcnJvciBvY2N1cnJlZC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4geyBkb1JlcXVlc3QsIGVycm9ycyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDsiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZVJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJib2R5Iiwib25TdWNjZXNzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiZG9SZXF1ZXN0IiwicHJvcHMiLCJyZXNwb25zZSIsImRhdGEiLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsInVsIiwibWFwIiwibGkiLCJtZXNzYWdlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/use-request.tsx\n"));

/***/ })

});