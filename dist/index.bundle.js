"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --background-color: black;\n    --white-color: white;\n}\n\nbody {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: var(--white-color);\n\n    background-color: var(--background-color);\n    background-repeat: no-repeat;\n    background-position: bottom 0px left 0px;\n\n    display: flex;\n    flex-direction: column;\n}\n\n#mainInfoBody {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#rightInfoBody,\n#leftInfoBody {\n    display: flex;\n    flex-direction: column;\n    /* max-width: 40%; */\n}\n\n#location {\n    font-size: 2.2rem;\n    line-height: 1;\n    margin-bottom: 1rem;\n}\n\n#dayDate,\n#time {\n    font-size: .9rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n#time {\n    margin-top: 0.15rem;\n}\n\n#tempInfoBody {\n    margin-top: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 0.75rem;\n}\n\n#weatherIcon {\n    width: 4rem;\n}\n\n#temperature {\n    font-size: 3.2rem;\n    line-height: 1;\n}\n\n#tempUnitBody {\n    display: flex;\n    flex-direction: column;\n}\n\n#celcius,\n#farenheit {\n    line-height: 1;\n    font-size: 1.4rem;\n    padding: 0.3rem;\n}\n\n#celcius {\n    border-bottom: 2px solid var(--white-color);\n}\n\n#farenheit {\n    border-top: 2px solid var(--white-color);\n}\n\n.activeUnit {\n    font-weight: 700;\n    font-size: 1.55rem;\n}\n\n#weatherType {\n    margin-top: 0.4rem;\n    font-size: 2.5rem;\n    line-height: 1;\n    font-weight: 600;\n}\n\n#locationSearch {\n    margin-top: 1rem;\n    color: var(--white-color);\n    background-color: var(--background-color);\n    border: none;\n    outline: none;\n    padding-left: 0.4rem;\n    padding-bottom: 0.2rem;\n    font-size: 0.85rem;\n    font-weight: 500;\n    border-bottom: 2px solid var(--white-color);\n}\n\n#error {\n    margin-top: 0.25rem;\n    line-height: 1;\n    font-size: 0.8rem;\n    font-weight: 600;\n}\n\n.rightInfoSubBody {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin-bottom: 0.8rem;\n    gap: 0.5rem;\n}\n\n.rightInfoSubBody img {\n    width: 32px;\n}\n\n.subBodyInfo {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.subBodyInfoType {\n    line-height: 1;\n    margin-bottom: 0.3rem;\n    font-size: 0.75rem;\n    font-weight: 800;\n}\n\n.subBodyInfoValue {\n    line-height: 1;\n    font-size: 1.2rem;\n    font-weight: 650;\n}\n\n#sliderControlBody {\n    padding: 1rem;\n    display: flex;\n    margin-top: 1.5rem;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#forecastSlider {\n    width: 100%;\n    height: 5px;\n    margin-bottom: 0.75rem;\n    outline: none;\n    appearance: none;\n    background-color: var(--white-color);\n    /* border: 2px solid black; */\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-webkit-slider-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: var(--background-color);\n    cursor: pointer;\n    border: 2px solid var(--white-color);\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-moz-range-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: var(--background-color);\n    cursor: pointer;\n    border: 2px solid var(--white-color);\n    border-radius: 0.25rem;\n}\n\n#hourLabels {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; \n    width: 100%;\n}\n\n/*These the labels where time is mentioned under slider*/\noption {   \n    padding: .2rem 0.2rem 0.2rem 0.75rem;\n    font-size: 1.1rem;\n    font-weight: 650;\n}\n\n#forecastDayBody {\n    padding: 1rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.forecastDayCard {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.forecastDayCard .forecastDayName {\n    font-size: 1.4rem;\n    font-weight: 650;\n    line-height: 1;\n    margin-bottom: 0.6rem;\n    flex-grow: 1 1 auto;\n}\n\n.forecastDayCard img {\n    width: 65px;\n}\n\n.forecastDayCard .forecastDayWeatherType {\n    font-size: 1.25rem;\n    font-weight: 625;\n    line-height: 1;\n    margin-top: 0.25rem;\n    margin-bottom: 0.4rem;\n}\n\n.forecastDayCard .forecastDayMaxTemp,\n.forecastDayCard .forecastDayMinTemp,\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed {\n    font-size: 1.1rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed  {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    gap: 4px;\n}\n\n.forecastDayCard .forecastDayChanceOfRain img,\n.forecastDayCard .forecastDayWindSpeed img{\n    width: 20px;\n}\n\n.activeForecastDayCard {\n    /* border: 2px solid black; */\n    border-radius: 0.5rem;\n    background: linear-gradient(rgba(100,100,100,0.2), rgba(250,250,250,0.4));\n}\n\n\n@media(max-width: 420px) {\n    #mainInfoBody {\n        flex-direction: column;\n        align-items: flex-start;\n        justify-items: flex-start;\n        gap: 10px;\n    }\n\n    #rightInfoBody{\n        flex-direction: row;\n        gap: 10px;\n        flex-wrap: wrap;\n    }\n\n    .rightInfoSubBody {\n        flex-direction: column;\n        justify-content: space-between;\n        \n    }\n\n    option {\n        padding: .15rem;\n        font-size: 1.0rem;\n        font-weight: 500;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --background-color: black;\n    --white-color: white;\n}\n\nbody {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: var(--white-color);\n\n    background-color: var(--background-color);\n    background-repeat: no-repeat;\n    background-position: bottom 0px left 0px;\n\n    display: flex;\n    flex-direction: column;\n}\n\n#mainInfoBody {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#rightInfoBody,\n#leftInfoBody {\n    display: flex;\n    flex-direction: column;\n    /* max-width: 40%; */\n}\n\n#location {\n    font-size: 2.2rem;\n    line-height: 1;\n    margin-bottom: 1rem;\n}\n\n#dayDate,\n#time {\n    font-size: .9rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n#time {\n    margin-top: 0.15rem;\n}\n\n#tempInfoBody {\n    margin-top: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 0.75rem;\n}\n\n#weatherIcon {\n    width: 4rem;\n}\n\n#temperature {\n    font-size: 3.2rem;\n    line-height: 1;\n}\n\n#tempUnitBody {\n    display: flex;\n    flex-direction: column;\n}\n\n#celcius,\n#farenheit {\n    line-height: 1;\n    font-size: 1.4rem;\n    padding: 0.3rem;\n}\n\n#celcius {\n    border-bottom: 2px solid var(--white-color);\n}\n\n#farenheit {\n    border-top: 2px solid var(--white-color);\n}\n\n.activeUnit {\n    font-weight: 700;\n    font-size: 1.55rem;\n}\n\n#weatherType {\n    margin-top: 0.4rem;\n    font-size: 2.5rem;\n    line-height: 1;\n    font-weight: 600;\n}\n\n#locationSearch {\n    margin-top: 1rem;\n    color: var(--white-color);\n    background-color: var(--background-color);\n    border: none;\n    outline: none;\n    padding-left: 0.4rem;\n    padding-bottom: 0.2rem;\n    font-size: 0.85rem;\n    font-weight: 500;\n    border-bottom: 2px solid var(--white-color);\n}\n\n#error {\n    margin-top: 0.25rem;\n    line-height: 1;\n    font-size: 0.8rem;\n    font-weight: 600;\n}\n\n.rightInfoSubBody {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin-bottom: 0.8rem;\n    gap: 0.5rem;\n}\n\n.rightInfoSubBody img {\n    width: 32px;\n}\n\n.subBodyInfo {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.subBodyInfoType {\n    line-height: 1;\n    margin-bottom: 0.3rem;\n    font-size: 0.75rem;\n    font-weight: 800;\n}\n\n.subBodyInfoValue {\n    line-height: 1;\n    font-size: 1.2rem;\n    font-weight: 650;\n}\n\n#sliderControlBody {\n    padding: 1rem;\n    display: flex;\n    margin-top: 1.5rem;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#forecastSlider {\n    width: 100%;\n    height: 5px;\n    margin-bottom: 0.75rem;\n    outline: none;\n    appearance: none;\n    background-color: var(--white-color);\n    /* border: 2px solid black; */\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-webkit-slider-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: var(--background-color);\n    cursor: pointer;\n    border: 2px solid var(--white-color);\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-moz-range-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: var(--background-color);\n    cursor: pointer;\n    border: 2px solid var(--white-color);\n    border-radius: 0.25rem;\n}\n\n#hourLabels {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; \n    width: 100%;\n}\n\n/*These the labels where time is mentioned under slider*/\noption {   \n    padding: .2rem 0.2rem 0.2rem 0.75rem;\n    font-size: 1.1rem;\n    font-weight: 650;\n}\n\n#forecastDayBody {\n    padding: 1rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.forecastDayCard {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.forecastDayCard .forecastDayName {\n    font-size: 1.4rem;\n    font-weight: 650;\n    line-height: 1;\n    margin-bottom: 0.6rem;\n    flex-grow: 1 1 auto;\n}\n\n.forecastDayCard img {\n    width: 65px;\n}\n\n.forecastDayCard .forecastDayWeatherType {\n    font-size: 1.25rem;\n    font-weight: 625;\n    line-height: 1;\n    margin-top: 0.25rem;\n    margin-bottom: 0.4rem;\n}\n\n.forecastDayCard .forecastDayMaxTemp,\n.forecastDayCard .forecastDayMinTemp,\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed {\n    font-size: 1.1rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed  {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    gap: 4px;\n}\n\n.forecastDayCard .forecastDayChanceOfRain img,\n.forecastDayCard .forecastDayWindSpeed img{\n    width: 20px;\n}\n\n.activeForecastDayCard {\n    /* border: 2px solid black; */\n    border-radius: 0.5rem;\n    background: linear-gradient(rgba(100,100,100,0.2), rgba(250,250,250,0.4));\n}\n\n\n@media(max-width: 420px) {\n    #mainInfoBody {\n        flex-direction: column;\n        align-items: flex-start;\n        justify-items: flex-start;\n        gap: 10px;\n    }\n\n    #rightInfoBody{\n        flex-direction: row;\n        gap: 10px;\n        flex-wrap: wrap;\n    }\n\n    .rightInfoSubBody {\n        flex-direction: column;\n        justify-content: space-between;\n        \n    }\n\n    option {\n        padding: .15rem;\n        font-size: 1.0rem;\n        font-weight: 500;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_makeHtmlElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/makeHtmlElements.js */ "./src/modules/makeHtmlElements.js");
/* harmony import */ var _modules_getWeatherInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getWeatherInfo.js */ "./src/modules/getWeatherInfo.js");





console.log('weather app');

(0,_modules_makeHtmlElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_getWeatherInfo_js__WEBPACK_IMPORTED_MODULE_2__["default"])('Greenwich');


// let rgbaValue = ['rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)',
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)',
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)',
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)',
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)',
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)',
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)',
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)',
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)',
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 
// 'rgba(19, 26, 63, 0.07)', 'rgba(19, 26, 63, 0.07)', 'rgba(18, 26, 63, 0.07)', 'rgba(17, 25, 62, 0.07)', 'rgba(17, 25, 62, 0.07)', 'rgba(15, 23, 60, 0.07)', 
// 'rgba(15, 23, 60, 0.07)', 'rgba(13, 22, 59, 0.07)', 'rgba(13, 22, 59, 0.07)', 'rgba(12, 21, 58, 0.07)', 'rgba(12, 21, 58, 0.07)', 'rgba(9, 20, 56, 0.07)', 
// 'rgba(9, 20, 56, 0.07)', 'rgba(7, 18, 55, 0.07)', 'rgba(7, 18, 55, 0.07)', 'rgba(5, 17, 53, 0.07)', 'rgba(5, 17, 53, 0.07)', 'rgba(3, 15, 51, 0.07)', 
// 'rgba(3, 15, 51, 0.07)', 'rgba(14, 20, 63, 0.07)', 'rgba(14, 20, 63, 0.07)', 'rgba(30, 26, 79, 0.07)', 'rgba(30, 26, 79, 0.07)', 'rgba(42, 31, 91, 0.07)',
// 'rgba(50, 34, 99, 0.07)', 'rgba(58, 37, 107, 0.07)', 'rgba(67, 41, 114, 0.07)', 'rgba(67, 41, 114, 0.07)', 'rgba(83, 47, 130, 0.07)', 'rgba(83, 47, 130, 0.07)',
// 'rgba(83, 47, 130, 0.07)', 'rgba(103, 55, 150, 0.07)', 'rgba(103, 55, 150, 0.07)', 'rgba(111, 58, 158, 0.07)', 'rgba(123, 63, 170, 0.07)',
// 'rgba(117, 66, 174, 0.07)', 'rgba(111, 70, 178, 0.07)', 'rgba(104, 73, 182, 0.07)', 'rgba(98, 77, 186, 0.07)', 'rgba(98, 77, 186, 0.07)',
// 'rgba(86, 84, 194, 0.07)', 'rgba(86, 84, 194, 0.07)', 'rgba(77, 89, 200, 0.07)', 'rgba(77, 89, 200, 0.07)', 'rgba(64, 96, 207, 0.07)',
// 'rgba(64, 96, 207, 0.07)', 'rgba(52, 103, 215, 0.07)', 'rgba(52, 103, 215, 0.07)', 'rgba(52, 103, 215, 0.07)', 'rgba(36, 112, 225, 0.07)',
// 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)',
// 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)',
// 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)',
// 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)',
// 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)',
// 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(36, 112, 225, 0.07)', 'rgba(28, 115, 228, 0.07)', 
// 'rgba(28, 115, 228, 0.07)', 'rgba(24, 116, 225, 0.07)', 'rgba(24, 116, 225, 0.07)', 'rgba(21, 117, 222, 0.07)', 'rgba(21, 117, 222, 0.07)', 'rgba(18, 118, 220, 0.07)', 
// 'rgba(18, 118, 220, 0.07)', 'rgba(14, 119, 218, 0.07)', 'rgba(14, 119, 218, 0.07)', 'rgba(11, 120, 216, 0.07)', 'rgba(11, 120, 216, 0.07)',
// 'rgba(8, 121, 213, 0.07)', 'rgba(4, 122, 210, 0.07)', 'rgba(4, 122, 210, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)', 'rgba(2, 122, 209, 0.07)',
// 'rgba(4, 122, 210, 0.07)', 'rgba(4, 122, 210, 0.07)', 'rgba(4, 122, 210, 0.07)', 'rgba(11, 120, 216, 0.07)', 'rgba(11, 120, 216, 0.07)', 'rgba(15, 119, 218, 0.07)',
// 'rgba(15, 119, 218, 0.07)', 'rgba(18, 118, 220, 0.07)', 'rgba(18, 118, 220, 0.07)', 'rgba(22, 117, 223, 0.07)', 'rgba(22, 117, 223, 0.07)', 'rgba(22, 117, 223, 0.07)',
// 'rgba(24, 116, 225, 0.07)', 'rgba(26, 116, 226, 0.07)', 'rgba(30, 115, 229, 0.07)', 'rgba(30, 115, 229, 0.07)', 'rgba(42, 108, 221, 0.07)', 'rgba(49, 105, 217, 0.07)',
// 'rgba(49, 105, 217, 0.07)', 'rgba(49, 105, 217, 0.07)', 'rgba(49, 105, 217, 0.07)', 'rgba(49, 105, 217, 0.07)', 'rgba(49, 105, 217, 0.07)', 'rgba(77, 89, 200, 0.07)',
// 'rgba(80, 87, 198, 0.07)', 'rgba(86, 84, 194, 0.07)', 'rgba(92, 80, 190, 0.07)', 'rgba(104, 73, 182, 0.07)', 'rgba(111, 70, 178, 0.07)', 'rgba(111, 70, 178, 0.07)',
// 'rgba(120, 65, 172, 0.07)', 'rgba(115, 60, 162, 0.07)', 'rgba(107, 57, 154, 0.07)', 'rgba(99, 53, 146, 0.07)', 'rgba(91, 50, 138, 0.07)', 'rgba(91, 50, 138, 0.07)',
// 'rgba(79, 45, 126, 0.07)', 'rgba(71, 42, 118, 0.07)', 'rgba(71, 42, 118, 0.07)', 'rgba(54, 36, 103, 0.07)', 'rgba(54, 36, 103, 0.07)', 'rgba(38, 29, 87, 0.07)',
// 'rgba(38, 29, 87, 0.07)', 'rgba(26, 25, 75, 0.07)', 'rgba(26, 25, 75, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)',
// 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)',
// 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)',
// 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(10, 18, 59, 0.07)', 'rgba(3, 15, 51, 0.07)', 'rgba(3, 15, 51, 0.07)', 'rgba(4, 16, 53, 0.07)',
// 'rgba(4, 16, 53, 0.07)', 'rgba(7, 18, 54, 0.07)', 'rgba(7, 18, 54, 0.07)', 'rgba(9, 19, 56, 0.07)', 'rgba(9, 19, 56, 0.07)', 'rgba(11, 21, 57, 0.07)',
// 'rgba(11, 21, 57, 0.07)', 'rgba(13, 22, 59, 0.07)', 'rgba(13, 22, 59, 0.07)', 'rgba(15, 23, 60, 0.07)', 'rgba(15, 23, 60, 0.07)', 'rgba(15, 23, 60, 0.07)',
// 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)',
// 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)',
// 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 
// 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)',
// 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)',
// 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)',
// 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)', 'rgba(18, 25, 62, 0.07)'];



/***/ }),

/***/ "./src/modules/background.js":
/*!***********************************!*\
  !*** ./src/modules/background.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateBackground)
/* harmony export */ });
/* harmony import */ var _process_store_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process_store_values.js */ "./src/modules/process_store_values.js");


const updateBackgroundColor = (function() {

    // transition period is basically 30 mins before and after sunrise and sunset.
    // when ever the current time is in this range we use these hex value to change the color of the background
    // all the transition array colors are from night to sunrise to noon to sunset to night
    const nightColor = '#2e3678';
    const dayColor = '#31bdff';
    const transitionFormNightToSunrise = ['#2e3678', '#353874', '#3c3970', '#443b6c', '#4b3d67', '#523e63', '#59405f', '#60425b', '#684357', '#6f4553', '#76474f', '#7d484a', '#844a46', '#8c4c42', '#934d3e', '#9a4f3a', '#a15036', '#a95232', '#b0542e', '#b75529', '#be5725', '#c55921', '#cd5a1d', '#d45c19', '#db5e15', '#e25f11', '#e9610c', '#f16308', '#f86404', '#ff6600'];
    const transitionFromSunriseToNoon = ['#ff6600', '#f86909', '#f16c12', '#ea6f1a', '#e37223', '#db752c', '#d47835', '#cd7b3e', '#c67e46', '#bf814f', '#b88458', '#b18761', '#aa8a6a', '#a38d72', '#9c907b', '#949384', '#8d968d', '#869995', '#7f9c9e', '#789fa7', '#71a2b0', '#6aa5b9', '#63a8c1', '#5cabca', '#55aed3', '#4db1dc', '#46b4e5', '#3fb7ed', '#38baf6', '#31bdff'];
    const transitionFromNoonToSunset = ['#31bdff', '#38baf6', '#3fb7ed', '#46b3e5', '#4db0dc', '#55add3', '#5caaca', '#63a7c1', '#6aa4b9', '#71a0b0', '#789da7', '#7f9a9e', '#869795', '#8d948d', '#949184', '#9c8d7b', '#a38a72', '#aa876a', '#b18461', '#b88158', '#bf7e4f', '#c67a46', '#cd773e', '#d47435', '#db712c', '#e36e23', '#ea6b1a', '#f16712', '#f86409', '#ff6100'];
    const transitionFromSunsetToNight = ['#ff6100', '#f86004', '#f15e08', '#e95d0c', '#e25b11', '#db5a15', '#d45819', '#cd571d', '#c55521', '#be5425', '#b75229', '#b0512e', '#a94f32', '#a14e36', '#9a4c3a', '#934b3e', '#8c4942', '#844846', '#7d464a', '#76454f', '#6f4353', '#684257', '#60405b', '#593f5f', '#523d63', '#4b3c67', '#443a6c', '#3c3970', '#353774', '#2e3678'];

    function sliderValueChanged() {
        // console.log();
        // processSliderValue();
        // getCurrentTime();
        // getCurrentDayAndTime();
        // getTimeToSunriseAndSunset();
        updateBackgroundColorVariable();
    }

    function updateBackgroundColorVariable() {
        let color = getBackgroundColor();
        // console.log(color);
        document.documentElement.style.setProperty('--background-color', color);
    }

    function getCurrentDayAndTime() {
        let activeForeCastDay = Number(document.querySelector('.activeForecastDayCard').getAttribute('id').charAt(0));
        let currentTime;
        if(activeForeCastDay === 0) {
            currentTime = getCurrentTimeOfLocationPlusSliderValue();
            if(Number(currentTime.hrs) <= 23 && Number(currentTime.min) <= 59) {
                // console.log(activeForeCastDay, currentTime);
                return {
                    activeDay: activeForeCastDay, 
                    currentTime
                };
            } else {
                currentTime.hrs = Number(currentTime.hrs) % 24;
                activeForeCastDay = 1;
                // console.log(activeForeCastDay, currentTime);
                return {
                    activeDay: activeForeCastDay, 
                    currentTime
                };
            }
        } else {
            currentTime = processSliderValue();
            // console.log(activeForeCastDay, currentTime);
            return {
                activeDay: activeForeCastDay, 
                currentTime
            };
        }
    }
    
    function processSliderValue() {
        let sliderValue = document.getElementById('forecastSlider').value.split('.')[0];
        let hrs = Math.floor(sliderValue / 60);
        let min = sliderValue % 60;
        min = min < 10 ? '0'+min : min;
        // console.log('Slider value time ' + hrs + ":" + min);
        return {
            hrs,
            min
        };
    }

    function getCurrentTimeOfLocationPlusSliderValue() {
        let currentTime  = (0,_process_store_values_js__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', 'time');
        let hrs = currentTime.split(':')[0];
        let min = 0;  // not taking the current time mins because we are adding the slider value mins to the current time which will automatically make it the current min as the mins of slider value are already starting
        let sliderValueTime = processSliderValue();
        hrs = Number(hrs) + Number(sliderValueTime.hrs);
        min = Number(min) + Number(sliderValueTime.min);
        if(min > 59) {
            min = min % 60;
            hrs += 1;
        }
        min = min < 10 ? '0'+ min : min;
        // console.log(hrs+ ":"+ min);
        return {
            hrs,
            min
        }
    }

    function convertTimeTo24HrClock(time) {
        let hrs, min;
        if(time.split(' ')[1] === 'AM') {
            time = time.replace(' AM', '');
            hrs = time.split(':')[0];
            min = time.split(':')[1];
            hrs = hrs === '12' ? '00' : hrs;
        } else if(time.split(' ')[1] === 'PM') {
            time = time.replace(' PM', '');
            hrs = time.split(':')[0];
            min = time.split(':')[1];
            hrs = hrs === '12' ? hrs : Number(hrs) + 12;
        }
        return hrs + ":" + min;
    }

    function timeSubtract(currentTime1, sunsetSunriseTime) {
        currentTime1 = Number(currentTime1.split(':')[0]) * 60 + Number(currentTime1.split(':')[1]);
        sunsetSunriseTime = Number(sunsetSunriseTime.split(':')[0]) * 60 + Number(sunsetSunriseTime.split(':')[1]);
        return sunsetSunriseTime - currentTime1;
    }

    function getBackgroundColor() {
        const object = getTimeToSunriseAndSunset();
        // console.log(object);
        const timeToSunrise = object.timeToSunrise;
        const timeToSunset = object.timeToSunset;
        // console.log(timeToSunrise, timeToSunset);

        if(timeToSunrise > -1 && timeToSunset > -1) {
            // console.log('Before Sunrise and after midnight');
            if(timeToSunrise < 30) {
                // console.log('transition period from night to sunrise');
                // we are doing 29 - sunrise time because at index 0 it is night hex value so we want the hex value of sunrise when time to sunrise is 0 so we are doing this.
                return transitionFormNightToSunrise[29 - timeToSunrise]; 
            } else {
                return nightColor;
            }
        } else if(timeToSunrise < 0 && timeToSunset > -1) {
            // console.log('Between Sunrise and Sunset');
            if(timeToSunrise < 0 && timeToSunrise >= -30) {
                // console.log('transition period from sunrise to noon');
                // we are multiplying with -1 here since time to sunrise is negative and subrating -1 since index starts from 0 to 29
                return transitionFromSunriseToNoon[(timeToSunrise) * (-1) - 1]
            } else if(timeToSunset < 30) {
                // console.log('transition period from noon to sunset');
                // the reason for 29 - time is same as the transition from night to sunrise as the 0 index is actually noon hex value and 29 is sunset. So to get correct value 
                return transitionFromNoonToSunset[29 - timeToSunset];
            } else {
                return dayColor;
            }
        } else if(timeToSunrise < 0 && timeToSunset < 0) {
            // console.log('After sunset before midnight');
            if(timeToSunset < 0 && timeToSunset >= -30) {
                // console.log('transition period from sunset to night');
                // we are multiplying with -1 here since time to sunset is negative and subrating -1 since index starts from 0 to 29
                return transitionFromSunsetToNight[(timeToSunset) * (-1) -1];
            } else {
                return nightColor;
            }
        }
    }
    
    function getTimeToSunriseAndSunset() {
        let currentDayAndTime = getCurrentDayAndTime();
        let currentTime = currentDayAndTime.currentTime.hrs + ':' + currentDayAndTime.currentTime.min;
        // console.log(currentDayAndTime, currentTime);
        let astroData = (0,_process_store_values_js__WEBPACK_IMPORTED_MODULE_0__["default"])('getAstro', {dayIndex: currentDayAndTime.activeDay});
        let astroData24hrFormat = Object.assign({}, astroData);
        for(let attributeName in astroData24hrFormat) {
            astroData24hrFormat[attributeName] = convertTimeTo24HrClock(astroData24hrFormat[attributeName]);
        }
        // console.log(astroData24hrFormat);
        let timeToSunrise = timeSubtract(currentTime, astroData24hrFormat['sunrise']);
        let timeToSunset = timeSubtract(currentTime, astroData24hrFormat['sunset']);
        // console.log(timeToSunrise, timeToSunset);
        return {
            timeToSunrise,
            timeToSunset
        }
    }

    return {
        sliderValueChanged,
    }

})();


function updateBackground() {
    updateBackgroundColor.sliderValueChanged();
}

// document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');

/* 
import pyperclip as clip
color = clip.paste()
color = color.split('\r\n')
*/


/***/ }),

/***/ "./src/modules/getWeatherInfo.js":
/*!***************************************!*\
  !*** ./src/modules/getWeatherInfo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherInfo)
/* harmony export */ });
/* harmony import */ var _process_store_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process_store_values.js */ "./src/modules/process_store_values.js");
/* harmony import */ var _updateInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateInfo.js */ "./src/modules/updateInfo.js");



async function getWeatherInfo(locationName) {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=053785ea687c447299e70926222812&q=${locationName}&days=3&aqi=no&alerts=no`, {mode: 'cors'});
        // console.log(response.status);
        // console.log(response.ok);
        if(response.status == '200') {
            // console.log(response);
            let data = await response.json();
            // console.log(data);
            (0,_process_store_values_js__WEBPACK_IMPORTED_MODULE_0__["default"])('set', data);
            (0,_updateInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"])({functionCode: 1});
        } else if(!response.ok) {
            // console.log('bad request');
            let error = 'Sorry. Bad request. No location found with such name.';
            (0,_updateInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"])({functionCode: 4, error});
        }
    } catch(err) {
        console.log('Error Happened');  
        console.log(err);
    }

} 



/***/ }),

/***/ "./src/modules/makeHtmlElements.js":
/*!*****************************************!*\
  !*** ./src/modules/makeHtmlElements.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeDom)
/* harmony export */ });
/* harmony import */ var _getWeatherInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherInfo.js */ "./src/modules/getWeatherInfo.js");
/* harmony import */ var _updateInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateInfo.js */ "./src/modules/updateInfo.js");
/* harmony import */ var _assets_images_placeholder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/placeholder.png */ "./src/assets/images/placeholder.png");
/* harmony import */ var _assets_images_feelsLike_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/feelsLike.svg */ "./src/assets/images/feelsLike.svg");
/* harmony import */ var _assets_images_humidity_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/humidity.svg */ "./src/assets/images/humidity.svg");
/* harmony import */ var _assets_images_chanceOfRain_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/chanceOfRain.svg */ "./src/assets/images/chanceOfRain.svg");
/* harmony import */ var _assets_images_windSpeed_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/windSpeed.svg */ "./src/assets/images/windSpeed.svg");
/* harmony import */ var _assets_images_pressure_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/pressure.svg */ "./src/assets/images/pressure.svg");
/* harmony import */ var _assets_images_raindrop_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/raindrop.svg */ "./src/assets/images/raindrop.svg");
/* harmony import */ var _assets_images_wind_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/wind.svg */ "./src/assets/images/wind.svg");










 // for the forecast cards

const DOM = (function() {
    function makeDiv(id = null, className = null, textContent, dataAttribute, dataAttributeValue = '', title =null) {
        let div = document.createElement('div');
        if(id) {
            div.setAttribute('id', id);
        }
        if(className) {
            div.setAttribute('class', className);
        }
        if(textContent) {
            div.textContent = textContent;
        }
        if(dataAttribute) {
            div.setAttribute(dataAttribute, dataAttributeValue);
        }
        if(title) {
            div.setAttribute('title', title);
        }
        return div;
    }

    function makeImage(id=null, url=_assets_images_placeholder_png__WEBPACK_IMPORTED_MODULE_2__) {
        let img = new Image();
        if(id) {
            img.setAttribute('id', id);
        }
        img.src = url;
        return img;
    }
    
    function createMainInfoBody() {
        const body = document.querySelector('body');
        let mainInfoBody = makeDiv('mainInfoBody');
        body.appendChild(mainInfoBody);
    }
    
    function createLeftRightInfoBody() {
        const mainInfoBody = document.getElementById('mainInfoBody');
        let leftInfoBody = makeDiv('leftInfoBody');
        let rightInfoBody = makeDiv('rightInfoBody');  
        mainInfoBody.appendChild(leftInfoBody);
        mainInfoBody.appendChild(rightInfoBody);
    }
    
    function createLocationBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let locationBody = makeDiv('location', null, 'Location', 'data-updateable', 'yes', 'Location Name');
        // locationBody.setAttribute('data-updateable', 'yes');
        // locationBody.textContent = 'Location';
        leftInfoBody.appendChild(locationBody);
    }
    
    function createDayDateBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let dayDateBody = makeDiv('dayDate', null, 'Day, Date', 'data-updateable', 'yes', 'Day and Date');
        // dayDateBody.setAttribute('data-updateable', 'yes');
        // dayDateBody.textContent = 'Day, Date';
        leftInfoBody.appendChild(dayDateBody);
    }
    
    function createTimeBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let timeBody = makeDiv('time', null, 'Time', 'data-updateable', 'yes', 'Time in 24 hr format');
        // timeBody.setAttribute('data-updateable', 'yes');
        // timeBody.textContent = 'Time';
        leftInfoBody.appendChild(timeBody);
    }
    
    function createTempInfoBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let tempInfoBody = makeDiv('tempInfoBody');
        leftInfoBody.appendChild(tempInfoBody);
    }
    
    function createWeatherIcon() {
        const tempInfoBody = document.getElementById('tempInfoBody');
        let weatherIcon = makeImage('weatherIcon');
        weatherIcon.setAttribute('data-updateable', 'yes');
        weatherIcon.setAttribute('title', 'Weather Icon');
        tempInfoBody.appendChild(weatherIcon);
    }
    
    function createTempValueBody() {
        const tempInfoBody = document.getElementById('tempInfoBody');
        let tempValueBody = makeDiv('temperature', null, '#', 'data-updateable', 'yes', 'Temperature in °C');
        // tempValueBody.setAttribute('data-updateable', 'yes');
        // tempValueBody.textContent = '#';
        tempInfoBody.appendChild(tempValueBody);
    }
    
    function createTempUnitBody() {
        const tempInfoBody = document.getElementById('tempInfoBody');
        let tempUnitBody = makeDiv('tempUnitBody');
        tempInfoBody.appendChild(tempUnitBody);
    }
    
    function createTempUnits() {
        const tempUnitBody = document.getElementById('tempUnitBody');
        let celciusBody = makeDiv('celcius', 'activeUnit', '°C', null, null, 'Celcius');
        let farenheitBody = makeDiv('farenheit', null, '°F', null, null, 'Farenheit');
        celciusBody.addEventListener('click', tempUnitsClicked);
        // celciusBody.setAttribute('class', 'activeUnit');
        farenheitBody.addEventListener('click', tempUnitsClicked);
        // celciusBody.textContent = '°C';
        // farenheitBody.textContent = '°F';
        tempUnitBody.appendChild(celciusBody);
        tempUnitBody.appendChild(farenheitBody);
    }
    
    function tempUnitsClicked(event) {
        let unitClicked = event.target;
        let activeUnit = document.querySelector('.activeUnit');
        const temp = document.getElementById('temperature');
        temp.setAttribute('title', `Temperature in °${unitClicked.getAttribute('id').charAt(0).toUpperCase()}`);
        if(!unitClicked.classList.contains('activeUnit')) {
            activeUnit.classList.remove('activeUnit');
            unitClicked.classList.add('activeUnit');
            (0,_updateInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"])({functionCode: 2});
        }
    }
    
    function createWeatherTypeInfoBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let weatherTypeInfoBody = makeDiv('weatherType', null, 'Weather Type', 'data-updateable', 'yes', 'Weather Condition');
        // weatherTypeInfoBody.setAttribute('data-updateable', 'yes');
        // weatherTypeInfoBody.textContent = 'Weather Type';
        leftInfoBody.appendChild(weatherTypeInfoBody);
    }
    
    function createSearchBox() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let searchBox = document.createElement('input');
        searchBox.setAttribute('id', 'locationSearch');
        searchBox.setAttribute('type', 'search');
        searchBox.setAttribute('placeholder', 'Search Location...');
        searchBox.addEventListener('keydown', (event) => {
            if(event.code === 'Enter' || event.code === 'NumpadEnter') {
                (0,_getWeatherInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(searchBox.value);
            }
        });
        leftInfoBody.appendChild(searchBox);
    }

    function createErrorReporterBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let errorReporterBody = makeDiv('error', null, '', 'data-updateable', 'yes');
        // errorReporterBody.setAttribute('data-updateable', 'yes');
        // errorReporterBody.textContent = '';
        leftInfoBody.appendChild(errorReporterBody);
    }
    
    function createRightInfoSubBody(id, infoTypeText, infoValueText, url) {
        const rightInfoBody = document.getElementById('rightInfoBody');
        let subBodyMain = makeDiv(null, 'rightInfoSubBody');
        let img = makeImage(null, url);
        let subBodyInfo = makeDiv(null, 'subBodyInfo');
        let infoType = makeDiv(null, 'subBodyInfoType', infoTypeText);
        // infoType.textContent = infoTypeText;
        let infoValue = makeDiv(id, 'subBodyInfoValue', infoValueText, 'data-updateable', 'yes', infoTypeText);
        // infoValue.setAttribute('data-updateable', 'yes');
        // infoValue.textContent = infoValueText;
    
        subBodyInfo.appendChild(infoType);
        subBodyInfo.appendChild(infoValue);
        subBodyMain.appendChild(img);
        subBodyMain.appendChild(subBodyInfo);
        rightInfoBody.appendChild(subBodyMain);
    }
    
    function populateRightInfoBody() {
        createRightInfoSubBody('feelsLike', 'Feels Like', 'value °C', _assets_images_feelsLike_svg__WEBPACK_IMPORTED_MODULE_3__);
        createRightInfoSubBody('humidity', 'Humidity', 'value %', _assets_images_humidity_svg__WEBPACK_IMPORTED_MODULE_4__);
        createRightInfoSubBody('chanceOfRain', 'Chance Of Rain', 'value %', _assets_images_chanceOfRain_svg__WEBPACK_IMPORTED_MODULE_5__);
        createRightInfoSubBody('windSpeed', 'Wind Speed', 'value km/h', _assets_images_windSpeed_svg__WEBPACK_IMPORTED_MODULE_6__);
        createRightInfoSubBody('pressure', 'Pressure', 'value mb', _assets_images_pressure_svg__WEBPACK_IMPORTED_MODULE_7__);
    }

    function createSilderBody() {
        const body = document.querySelector('body');
        let sliderControlBody = makeDiv('sliderControlBody');
        body.appendChild(sliderControlBody);
    }

    function createSliderTicks() {
        let datalist = document.createElement('datalist');
        datalist.setAttribute('id', 'hourLabels');
        datalist.setAttribute('data-updateable', 'yes');
        for(let i=0; i<9; i++) {
            let option = document.createElement('option');
            // option.setAttribute('value', `${i}`); // not using the value attribute as we just want to display the label and the value is directly taken fron the slider 
            option.setAttribute('label', `${i}`); // label is here for me the updatedisplay info will update the label
            datalist.appendChild(option);
        }
        return datalist;
    }

    function createSlider() {
        const sliderControlBody = document.getElementById('sliderControlBody');
        let slider = document.createElement('input');
        slider.setAttribute('id', 'forecastSlider');
        slider.setAttribute('type', 'range');
        slider.setAttribute('min', '0');
        slider.setAttribute('max', '1439');
        slider.setAttribute('value', '0');
        slider.setAttribute('step', 'any');
        slider.addEventListener('input', sliderValueChanged);
        sliderControlBody.appendChild(slider);
        let ticks = createSliderTicks(24); // no need to add the ticks to the list attribute of the slider since then it need to be changed each time hourly or daily selected.
        // slider.setAttribute('list', ticks.getAttribute('i'))
        sliderControlBody.appendChild(ticks);
    }

    function sliderValueChanged() {
        (0,_updateInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"])({functionCode: 3});
    }

    function createForecastDayBody() {
        const body = document.querySelector('body');
        let forecastDayBody = makeDiv('forecastDayBody');
        body.appendChild(forecastDayBody);
    }

    function changeStyleOfTheForecastDayCardClicked(targetIndexNumber) {
        let forecastDayCardClicked = document.getElementById(`${targetIndexNumber}dayForecastCard`);
        let currentActiveForecastDayCard = document.querySelector('.activeForecastDayCard');
        if(currentActiveForecastDayCard.classList.contains('activeForecastDayCard')) {
            currentActiveForecastDayCard.classList.remove('activeForecastDayCard');
            forecastDayCardClicked.classList.add('activeForecastDayCard');
        }
    }

    function forecastDayCardClicked(event) {
        let targetIndexNumber = event.target.getAttribute('id').split('')[0];
        changeStyleOfTheForecastDayCardClicked(targetIndexNumber);
        // console.log(event.target.getAttribute('id').split('')[0]);
        // call updateInfo so that the display Info can be updated on clicked of forecastDay card
        (0,_updateInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"])({functionCode: 5, dayIndex: Number(targetIndexNumber)});
    }

    function createForeCastDayCard(id) {
        const forecastDayBody = document.getElementById('forecastDayBody');
        let forecastDayCard = makeDiv(`${id}dayForecastCard`,'forecastDayCard');
        if(id === 0) {
            forecastDayCard.classList.add('activeForecastDayCard');
        }
        forecastDayCard.addEventListener('click', forecastDayCardClicked);

        let forecastDayName = makeDiv(`${id}dayForecastDayDayName`, 'forecastDayName', `Day ${id}`, 'data-updateable', 'yes', 'Day');
        let forecastDayWeatherIcon = makeImage(`${id}dayForecastDayWeatherIcon`); // this is make a image so dont pass the div function parameters
        let forecastDayWeatherType = makeDiv(`${id}dayForecastDayWeatherType`, 'forecastDayWeatherType', `${id} Weather Type`, 'data-updateable', 'yes', 'Weather Condition');
        let forecastDayMaxTemp = makeDiv(`${id}dayForecastDayMaxTemp`, 'forecastDayMaxTemp', `${id} Max Temp #`, 'data-updateable', 'yes', 'Maximum Temperature');
        let forecastDayMinTemp = makeDiv(`${id}dayForecastDayMinTemp`, 'forecastDayMinTemp', `${id} Min Temp #`, 'data-updateable', 'yes', 'Minimum Temperature');
        let forecastDayChanceOfRain = makeDiv(`${id}dayForecastDayChanceOfRain`, 'forecastDayChanceOfRain', `${id} value %`, 'data-updateable', 'yes', 'Chance of Rain');
        let rainImg = makeImage(`${id}rainImg`, _assets_images_raindrop_svg__WEBPACK_IMPORTED_MODULE_8__);
        forecastDayChanceOfRain.appendChild(rainImg);
        let forecastDayWindSpeed = makeDiv(`${id}dayForecastDayWindSpeed`, 'forecastDayWindSpeed', `${id} value kph`, 'data-updateable', 'yes', 'Wind Speed');
        let windImg = makeImage(`${id}windImg`, _assets_images_wind_svg__WEBPACK_IMPORTED_MODULE_9__);
        forecastDayWindSpeed.appendChild(windImg);

        forecastDayCard.appendChild(forecastDayName);
        forecastDayCard.appendChild(forecastDayWeatherIcon);
        forecastDayCard.appendChild(forecastDayWeatherType);
        forecastDayCard.appendChild(forecastDayMaxTemp);
        forecastDayCard.appendChild(forecastDayMinTemp);
        forecastDayCard.appendChild(forecastDayChanceOfRain);
        forecastDayCard.appendChild(forecastDayWindSpeed);
        forecastDayBody.appendChild(forecastDayCard);
    }

    function createAllForecastDayCard() {
        // numberOfDayForecastDataAvailable depends on the number of day data that api is giving right now i have only 2 ahead day fore cast data so 2
        let numberOfDayForecastDataAvailable = 3;
        for(let i=0; i<numberOfDayForecastDataAvailable; i++) {
            createForeCastDayCard(i);
        }
    }

    return {
        1: createMainInfoBody(),
        2: createLeftRightInfoBody(),
        3: createLocationBody(),
        4: createDayDateBody(),
        5: createTimeBody(),
        6: createTempInfoBody(),
        7: createWeatherIcon(),
        8: createTempValueBody(),
        9: createTempUnitBody(),
        10: createTempUnits(),
        11: createWeatherTypeInfoBody(),
        12: createSearchBox(),
        13: createErrorReporterBody(),
        14: populateRightInfoBody(),
        15: createSilderBody(),
        16: createSlider(),
        17: createForecastDayBody(),
        18: createAllForecastDayCard(),
    };

})();

function makeDom() {
    for(let dom in DOM) {
        dom;
    }
}


/***/ }),

/***/ "./src/modules/process_store_values.js":
/*!*********************************************!*\
  !*** ./src/modules/process_store_values.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherSet_Get)
/* harmony export */ });


const weather = (function() {
    let currentWeatherAttributeValues, currentDayHourlyForecastWeatherAttributeValues, forecastDayAttributeValues;

    function getCurrent(attributeName) {
        return currentWeatherAttributeValues[attributeName];
    }

    function setCurrent(data) {
        currentWeatherAttributeValues = {};
        currentWeatherAttributeValues = {
            location: data.location.name,
            dayDate: data.location.localtime.split(' ')[0],
            time: data.location.localtime.split(' ')[1],
            weatherIcon: data.current.condition.icon,
            temperature: {
                'c': data.current.temp_c,
                'f': data.current.temp_f,
            },
            weatherType: data.current.condition.text,
            feelsLike: {
                c: data.current.feelslike_c,
                f: data.current.feelslike_f,
            },
            humidity: data.current.humidity,
            chanceOfRain: data.forecast.forecastday['0'].hour[Number(data.location.localtime.split(' ')[1].split(':')[0])].chance_of_rain,
            windSpeed: {
                kph: data.current.wind_kph,
                mph: data.current.wind_mph,
            },
            pressure: {
                mb: data.current.pressure_in,
                in: data.current.pressure_mb,
            }
        }
    }

    function hourlyWeatherDataObjectFactory(data) {
        let object = {
            dayDate: data.time.split(' ')[0],
            time: data.time.split(' ')[1],
            weatherIcon: data.condition.icon,
            temperature: {
                'c': data.temp_c,
                'f': data.temp_f,
            },
            weatherType: data.condition.text,
            feelsLike: {
                c: data.feelslike_c,
                f: data.feelslike_f,
            },
            humidity: data.humidity,
            chanceOfRain: data.chance_of_rain,
            windSpeed: {
                kph: data.wind_kph,
                mph: data.wind_mph,
            },
            pressure: {
                mb: data.pressure_in,
                in: data.pressure_mb,
            }
        }
        return object;
    }

    function setHourlyForecast(data) {
        let currentHour = currentWeatherAttributeValues['time'].split(':')[0];
        let todayHourData = data.forecast.forecastday[0].hour.slice(Number(currentHour));
        let tomorrowHourData = data.forecast.forecastday[1].hour.slice(0,Number(currentHour));
        let forecast24HourData = todayHourData.concat(tomorrowHourData);
        todayHourData = [];
        tomorrowHourData = [];
        // console.log(forecast24HourData);
        currentDayHourlyForecastWeatherAttributeValues = [];
        for(let hourData in forecast24HourData) {
            let object = hourlyWeatherDataObjectFactory(forecast24HourData[hourData]);
            currentDayHourlyForecastWeatherAttributeValues.push(object);
        }
        // console.log(hourlyForecastWeatherAttributeValues);
    }

    function getHourlyForecast(pos, attributeName) {
        return currentDayHourlyForecastWeatherAttributeValues[pos][attributeName];
    }
    
    function averageForecastDataObjectFactory(data, index) {
        let object = {
            astro: {
                moonrise: data.astro.moonrise,
                moonset: data.astro.moonset,
                sunrise: data.astro.sunrise,
                sunset: data.astro.sunset,
            },
            average: {
                DayName: data.date,
                WeatherIcon: data.day.condition.icon,
                WeatherType: data.day.condition.text,
                MaxTemp: {
                    c: data.day.maxtemp_c,
                    f: data.day.maxtemp_f
                },
                MinTemp: {
                    c: data.day.mintemp_c,
                    f: data.day.mintemp_f
                },
                ChanceOfRain: data.day.daily_chance_of_rain,
                WindSpeed: {
                    kph: data.day.maxwind_kph,
                    mph: data.day.maxwind_mph
                }
            },
            hourly: [],
        }
        if(index === '0') {
            // console.log('object returned');
            return object;
        }
        for(let hourData in data.hour) {
            object.hourly.push(hourlyWeatherDataObjectFactory(data.hour[hourData]));
        }
        // console.log(object.hourly[1]);
        return object;
    }

    function setDayForecast(data) {
        let averageForecastData = data.forecast.forecastday;
        forecastDayAttributeValues = [];
        for(let data in averageForecastData) {
            forecastDayAttributeValues.push(averageForecastDataObjectFactory(averageForecastData[data], data));          
        }
        // console.log(forecastDayAttributeValues);
    }

    function getAverageForeCast(dayIndex, attributeName) {
        return forecastDayAttributeValues[Number(dayIndex)].average[attributeName];
    }

    function getHourlyDailyForecastData(dayIndex, hourIndex, attributeName) {
        // console.log(attributeName);
        // console.log(forecastDayAttributeValues[dayIndex].hourly[hourIndex][attributeName]);
        return (forecastDayAttributeValues[dayIndex].hourly[hourIndex][attributeName]);
    }

    function getAstroData(dayIndex) {
        // console.log(dayIndex)
        // console.log(forecastDayAttributeValues);
        return forecastDayAttributeValues[dayIndex]['astro'];
    }

    return {
        getCurrent,
        setCurrent,
        setHourlyForecast, // for current day
        getHourlyForecast,
        setDayForecast, // for day that are ahead of current days
        getAverageForeCast,
        getHourlyDailyForecastData,
        getAstroData,
    }

})();

    
function weatherSet_Get(func, option) {
    
    switch(func) {
        case 'getCurrent':
            return weather.getCurrent(option);
        case 'set':
            weather.setCurrent(option);
            weather.setHourlyForecast(option);
            weather.setDayForecast(option);
            break;
        case 'getHourly':
            return(weather.getHourlyForecast(option.hourIndex, option.attributeName));
        case 'getAverage':
            return(weather.getAverageForeCast(option.dayIndex, option.attributeName));
        case 'getDayHourly':
            // console.log(weather.getHourlyDailyForecastData(option.dayIndex, option.hourIndex, option.attributeName));
            // console.log(option.attributeName);
            return weather.getHourlyDailyForecastData(option.dayIndex, option.hourIndex, option.attributeName);
        case 'getAstro':
            return weather.getAstroData(Number(option.dayIndex));
        default:
            break;
    }
}

/***/ }),

/***/ "./src/modules/updateInfo.js":
/*!***********************************!*\
  !*** ./src/modules/updateInfo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateControl)
/* harmony export */ });
/* harmony import */ var _process_store_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process_store_values */ "./src/modules/process_store_values.js");
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.js */ "./src/modules/background.js");



const update = (function() {

    function updateAllDisplayValues(dataCategory, hrs, dayIndex) {
        // console.log(dataCategory + ' ' + hrs);

        // we don't want these functions to be called when we are changing the slider value
        // but we want these function to be called when the page is loaded for first time or new location is entered
        // when the slider is in current hour range we want the values to be taken from the current data not forecast data
        // when slider value is changed in current hour range we send null in both the data cat and hrs variable
        // on the first load or on loaction entered the data cat and hrs is undefined
        // so these functions are called on first load but not when slider value is changed in the current hour range
        // as we are sending null in the function parameters

        if(dataCategory === undefined) { 
            updateLocation();
            updateForecastSliderValue();
            updateForeCastSliderLabels();
            updateForecastDayBody();
            updateActiveForecastDayCard()
            updateError();
        }

        updateDayDate(dataCategory, hrs, dayIndex);
        updateTime(dataCategory, hrs, dayIndex);
        updateWeatherIcon(dataCategory, hrs, dayIndex);
        updateTemperature(dataCategory, hrs, dayIndex);
        updateWeatherType(dataCategory, hrs, dayIndex);
        updateFeelLikeTemperature(dataCategory, hrs, dayIndex);
        updateHumidity(dataCategory, hrs, dayIndex);
        updateChanceOfRain(dataCategory, hrs, dayIndex);
        updateWindSpeed(dataCategory, hrs, dayIndex);
        updatePressure(dataCategory, hrs, dayIndex);
        (0,_background_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    function updateLocation() {
        let element = document.getElementById('location');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', 'location');
        element.textContent = attributeValue;
    }

    function formatDayDate(attributeValue) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
        let dateSuffix = ['th', 'st', 'nd', 'rd'];
        let date = new Date(attributeValue);
        let day = date.getDate();
        if(day % 10 < 4) {
            day = day + dateSuffix[day % 10];
        } else {
            day = day + 'th';
        }
        return weekdays[date.getDay()] + ", " + day + ', ' + months[date.getMonth()] + ' ' + date.getFullYear();
    }
    
    function updateDayDate(dataCategory, hrs, day) {
        let element = document.getElementById('dayDate');
        let id = element.getAttribute('id');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', id);
        element.textContent = formatDayDate(attributeValue);
    }

    function updateTime(dataCategory, hrs, day){
        let element = document.getElementById('time');
        let id = element.getAttribute('id');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', id);
        // we want the time to update on change of the slider but the time on loading of new loaction should be taken from current
        // when the slider is changed we send the data category value then the value of time is updated according to the forecast slider value of time
        // when we change the slider in the current hour range we send null in data cat value then also the value of time need to be updated according to fore cast slider value
        if(dataCategory || dataCategory === null) {
            let min = processSliderValue('min');
            attributeValue = attributeValue.split(':')[0] + ':' + min;
        } else {
            attributeValue = Number(attributeValue.split(':')[0]) < 10 ? 0 + attributeValue : attributeValue;
        }
        // console.log(attributeValue);
        element.textContent = attributeValue;
    }
    
    function updateWeatherIcon(dataCategory, hrs, day) {
        let element = document.getElementById('weatherIcon');
        let id = element.getAttribute('id');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', id);
        element.src = attributeValue;
    }
    
    function updateTemperature(dataCategory, hrs, day) {
        let element = document.getElementById('temperature');
        let id = element.getAttribute('id');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', id);
        let activeUnit = document.querySelector('.activeUnit').getAttribute('id').charAt(0);
        element.textContent = attributeValue[activeUnit];
    }
    
    function updateWeatherType(dataCategory, hrs, day) {
        let element = document.getElementById('weatherType');
        let id = element.getAttribute('id');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', id);
        element.textContent = attributeValue;
    }

    function updateFeelLikeTemperature(dataCategory, hrs, day) {
        let element = document.getElementById('feelsLike');
        let id = element.getAttribute('id');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', id);
        let activeUnit = document.querySelector('.activeUnit').getAttribute('id').charAt(0);
        element.textContent = attributeValue[activeUnit] + ' °' + activeUnit.toUpperCase();
    }

    function updateHumidity(dataCategory, hrs, day) {
        let element = document.getElementById('humidity');
        let id = element.getAttribute('id');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', id);
        element.textContent = attributeValue + " %";
    }
    
    function updateChanceOfRain(dataCategory, hrs, day) {
        let element = document.getElementById('chanceOfRain');
        let id = element.getAttribute('id');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', id);
        element.textContent = attributeValue + " %";
    }

    function updateWindSpeed(dataCategory, hrs, day) {
        let element = document.getElementById('windSpeed');
        let id = element.getAttribute('id');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', id);
        element.textContent = attributeValue['kph'] + " kph";
    }
    
    function updatePressure(dataCategory, hrs, day) {
        let element = document.getElementById('pressure');
        let id = element.getAttribute('id');
        let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])(dataCategory, {hourIndex: hrs, attributeName: id, dayIndex: day}) || (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', id);
        element.textContent = attributeValue['mb'] + " mb";
    }

    function updateForecastSliderValue(sliderValue) {
        // slider value is undefined usually but when the forecast day card is clicked this is 0 since day starts at 0:00 hrs
        const forecastSlider = document.getElementById('forecastSlider');
        let currentMin = sliderValue || Number((0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', 'time').split(':')[1]);
        // console.log(currentMin);
        forecastSlider.value = `${Number(currentMin)}`;
        // forecastSlider.value = '0';
    }

    function updateForeCastSliderLabels(firstSliderLable) {
        let currentHour = firstSliderLable || Number((0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getCurrent', 'time').split(':')[0]);
        let hourLabels = Array.from(document.querySelectorAll('option'));
        // console.log(hourLabels);
        for(let label in hourLabels) {
            // console.log(label);
            if(label === '0' || label === '8') {
                hourLabels[label].label = '';
            } else {
                currentHour = Number(currentHour) + 3;
                currentHour = currentHour > 23 ? currentHour%23-1 : currentHour;
                hourLabels[label].label = currentHour < 10 ? `0${currentHour}:00` : `${currentHour}:00`;
            }
        }        
    }

    function updateTemperatureUnitsChanged() {
        let dataCategory, hrs, dayIndex;
        const activeForecastDayCardDayIndex = Number(document.querySelector('.activeForecastDayCard').getAttribute('id').charAt(0));
        if(activeForecastDayCardDayIndex === 0) {  // here we are checking if the current day is selected so we get the hourly data but if not then dayHourly data
            if(! (processSliderValue('hrs') === 0)) {
                hrs = processSliderValue('hrs');
                dataCategory = 'getHourly';
            } else {
                hrs = null;
                dataCategory = null;
            }
        } else {
            hrs = processSliderValue('hrs');
            dataCategory = 'getDayHourly';
            dayIndex = activeForecastDayCardDayIndex;
        }

        updateTemperature(dataCategory, hrs, dayIndex);
        updateFeelLikeTemperature(dataCategory, hrs, dayIndex);
        updateForecastDayTemperatureUnit(); // this only updates the card temperature units so no attribute necessary as it is done in that function 
    } 

    function updateForecastHourInfo() {
        let dataCategory, hrs, dayIndex;
        const activeForecastDayCardDayIndex = Number(document.querySelector('.activeForecastDayCard').getAttribute('id').charAt(0));
        if(activeForecastDayCardDayIndex === 0) {
            if(! (processSliderValue('hrs') === 0)) {
                hrs = processSliderValue('hrs');
                dataCategory = 'getHourly';
            } else {
                hrs = null;
                dataCategory = null;
            }
        } else {
            hrs = processSliderValue('hrs');
            dataCategory = 'getDayHourly';
            dayIndex = activeForecastDayCardDayIndex;
        }

        // hrs = processSliderValue('hrs');
        // dataCategory = 'getHourly';
        updateAllDisplayValues(dataCategory, hrs, dayIndex);
    }

    function processSliderValue(hrs_min) {
        let sliderValue = document.getElementById('forecastSlider').value.split('.')[0];
        // console.log(sliderValue);
        let hrs = Math.floor(sliderValue / 60);
        let min = sliderValue % 60;
        min = min < 10 ? '0'+min : min;
        // console.log(hrs+ ":"+ min);
        if(hrs_min === 'hrs' || !hrs_min) {
            return hrs;
        } else if(hrs_min === 'min') {
            return min;
        }
    }

    function updateError(err) {
        const error = document.getElementById('error');
        error.textContent = err;
    }

    function updateForecastDayTemperatureUnit() {
        let activeUnit = document.querySelector('.activeUnit').getAttribute('id').charAt(0);
        let maxTemps = Array.from(document.getElementsByClassName('forecastDayMaxTemp'));
        let minTemps = Array.from(document.getElementsByClassName('forecastDayMinTemp'));

        for(let maxTemp in maxTemps) {
            let element = maxTemps[maxTemp];
            let dayIndex = element.getAttribute('id').split('dayForecastDay')[0];
            let attributeName = element.getAttribute('id').split('dayForecastDay')[1];
            let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getAverage', {dayIndex, attributeName});
            element.textContent = attributeValue[activeUnit] + ' °' + activeUnit.toUpperCase();
        }

        for(let minTemp in minTemps) {
            let element = minTemps[minTemp];
            let dayIndex = element.getAttribute('id').split('dayForecastDay')[0];
            let attributeName = element.getAttribute('id').split('dayForecastDay')[1];
            let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getAverage', {dayIndex, attributeName});
            element.textContent = attributeValue[activeUnit] + ' °' + activeUnit.toUpperCase();
        }
    }

    function updateForecastDayCard(dayCard) {
        // console.log(dayCard);
        let splitValue = 'dayForecastDay';
        let dayCardId = dayCard.getAttribute('id');
        let dayIndex = dayCardId.charAt(0);
        for(let child of dayCard.children) {
            let attributeName = child.getAttribute('id').split(splitValue)[1];
            // console.log(attributeName);
            let attributeValue = (0,_process_store_values__WEBPACK_IMPORTED_MODULE_0__["default"])('getAverage', {dayIndex, attributeName});
            // this is not good practice sorry
            switch(attributeName) {
                case 'DayName':
                    let day = formatDayDate(attributeValue);
                    child.textContent = day.split(', ')[0];
                    break;
                case 'WeatherIcon': 
                    child.src = attributeValue;
                    break;
                case 'WeatherType':
                    child.textContent = attributeValue;
                    break;
                // case 'MaxTemp':
                //     let activeUnit = document.querySelector('.activeUnit').getAttribute('id').charAt(0);
                //     child.textContent = attributeValue[activeUnit] + ' °' + activeUnit.toUpperCase();
                //     break;
                case 'MinTemp':
                    // let activeUni = document.querySelector('.activeUnit').getAttribute('id').charAt(0);
                    // child.textContent = attributeValue[activeUni] + ' °' + activeUni.toUpperCase();
                    updateForecastDayTemperatureUnit();
                    break;
                case 'ChanceOfRain':
                    let chanceOfRainChild = child.lastChild;
                    child.textContent = attributeValue + ' %';
                    child.appendChild(chanceOfRainChild);
                    break;
                case 'WindSpeed':
                    let windSpeedChild = child.lastChild;
                    child.textContent = attributeValue['kph'] + ' kph';
                    child.appendChild(windSpeedChild);
                    break;
            }
        }
    }

    function  updateForecastDayBody(){
        const forecastDayCards = Array.from(document.getElementsByClassName('forecastDayCard'));
        // console.log(forecastDayCards);
        for(let card in forecastDayCards) {
            updateForecastDayCard(forecastDayCards[card]);
        }
    }

    function updateDisplayValueAccordingToForecastDayCardClicked(dayIndex) {
        if(dayIndex === 0) {
            updateAllDisplayValues();
        } else {
            // updating the slider value and the label values here since i was not able to find a solution to update them in updatealldisplay
            // value function without using if and else which might make it jank and difficult to under stand with all the undefined
            // and null values i am sending it to make it work which makes it already very jank so sorry
            updateForecastSliderValue('0');
            updateForeCastSliderLabels('0');
            updateAllDisplayValues('getDayHourly', 0, Number(dayIndex));
        }
    }
    
    function updateActiveForecastDayCard() {
        const activeForecastDay = document.querySelector('.activeForecastDayCard');
        const currentDayCard = document.getElementById('0dayForecastCard');
        if(! currentDayCard.classList.contains('activeForecastDayCard')) {
            activeForecastDay.classList.remove('activeForecastDayCard');
            currentDayCard.classList.add('activeForecastDayCard');
        }
    }


    return {
        updateAllDisplayValues,
        updateTemperatureUnitsChanged,
        updateForecastHourInfo,
        updateError,
        updateDisplayValueAccordingToForecastDayCardClicked,
    }
})();

function updateControl(option) {
    if(option.functionCode === 1) {
        update.updateAllDisplayValues();
    } else if(option.functionCode === 2) {
        update.updateTemperatureUnitsChanged();
    } else if(option.functionCode === 3) {
        update.updateForecastHourInfo();
    } else if(option.functionCode === 4) {
        update.updateError(option.error);
    } else if(option.functionCode === 5) {
        update.updateDisplayValueAccordingToForecastDayCardClicked(option.dayIndex);
    }
}

/***/ }),

/***/ "./src/assets/images/chanceOfRain.svg":
/*!********************************************!*\
  !*** ./src/assets/images/chanceOfRain.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "693f7d94a7e40c657e94.svg";

/***/ }),

/***/ "./src/assets/images/feelsLike.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/feelsLike.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef215e35b0b0ecdc13c3.svg";

/***/ }),

/***/ "./src/assets/images/humidity.svg":
/*!****************************************!*\
  !*** ./src/assets/images/humidity.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "742e95b6fe720c089f03.svg";

/***/ }),

/***/ "./src/assets/images/placeholder.png":
/*!*******************************************!*\
  !*** ./src/assets/images/placeholder.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e21a34004cec43a3d39f.png";

/***/ }),

/***/ "./src/assets/images/pressure.svg":
/*!****************************************!*\
  !*** ./src/assets/images/pressure.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "586d2203690f0d31095f.svg";

/***/ }),

/***/ "./src/assets/images/raindrop.svg":
/*!****************************************!*\
  !*** ./src/assets/images/raindrop.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e985c4f009ad450c222b.svg";

/***/ }),

/***/ "./src/assets/images/wind.svg":
/*!************************************!*\
  !*** ./src/assets/images/wind.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8deef610d04df5b5fd89.svg";

/***/ }),

/***/ "./src/assets/images/windSpeed.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/windSpeed.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c164c5b962ef930a4207.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxjQUFjLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFN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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSXVEOztBQUV2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLG9FQUFjO0FBQ3pDO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBYyxjQUFjLHNDQUFzQztBQUMxRixrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHYztBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3THVEO0FBQ1g7O0FBRTdCO0FBQ2Y7QUFDQSx1SEFBdUgsYUFBYSw0QkFBNEIsYUFBYTtBQUM3SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFjO0FBQzFCLFlBQVksMERBQWEsRUFBRSxnQkFBZ0I7QUFDM0MsVUFBVTtBQUNWO0FBQ0E7QUFDQSxZQUFZLDBEQUFhLEVBQUUsdUJBQXVCO0FBQ2xEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmlEO0FBQ0w7O0FBRVU7QUFDQztBQUNGO0FBQ1E7QUFDTjtBQUNGO0FBQ0E7QUFDUixDQUFDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQywyREFBTTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCx1REFBdUQ7QUFDN0c7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBYSxFQUFFLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4REFBYztBQUM5QjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSx5REFBUztBQUMvRSxrRUFBa0Usd0RBQVE7QUFDMUUsNEVBQTRFLDREQUFZO0FBQ3hGLHdFQUF3RSx5REFBUztBQUNqRixtRUFBbUUsd0RBQVE7QUFDM0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixLQUFLO0FBQzFCO0FBQ0EsK0NBQStDLEVBQUUsSUFBSTtBQUNyRCw0Q0FBNEMsRUFBRSxJQUFJO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwwREFBYSxFQUFFLGdCQUFnQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0VBQWdFLGtCQUFrQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQWEsRUFBRSxxREFBcUQ7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxHQUFHO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxHQUFHLGtEQUFrRCxHQUFHO0FBQ2pHLGtEQUFrRCxHQUFHLDZCQUE2QjtBQUNsRixnREFBZ0QsR0FBRyx5REFBeUQsSUFBSTtBQUNoSCw0Q0FBNEMsR0FBRyxpREFBaUQsSUFBSTtBQUNwRyw0Q0FBNEMsR0FBRyxpREFBaUQsSUFBSTtBQUNwRyxpREFBaUQsR0FBRywyREFBMkQsSUFBSTtBQUNuSCxtQ0FBbUMsR0FBRyxVQUFVLHdEQUFRO0FBQ3hEO0FBQ0EsOENBQThDLEdBQUcscURBQXFELElBQUk7QUFDMUcsbUNBQW1DLEdBQUcsVUFBVSxvREFBSTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9DQUFvQztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVRBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpRUFBYyxnQkFBZ0Isd0JBQXdCO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUVBQWMsZ0JBQWdCLHdCQUF3QjtBQUN2RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpRUFBYyxnQkFBZ0Isd0JBQXdCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWM7QUFDZjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL2dldFdlYXRoZXJJbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvbWFrZUh0bWxFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL3Byb2Nlc3Nfc3RvcmVfdmFsdWVzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvdXBkYXRlSW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIC0td2hpdGUtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSAwcHggbGVmdCAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluSW5mb0JvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyaWdodEluZm9Cb2R5LFxcbiNsZWZ0SW5mb0JvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBtYXgtd2lkdGg6IDQwJTsgKi9cXG59XFxuXFxuI2xvY2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jZGF5RGF0ZSxcXG4jdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4jdGltZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuMTVyZW07XFxufVxcblxcbiN0ZW1wSW5mb0JvZHkge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMC43NXJlbTtcXG59XFxuXFxuI3dlYXRoZXJJY29uIHtcXG4gICAgd2lkdGg6IDRyZW07XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuI3RlbXBVbml0Qm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjZWxjaXVzLFxcbiNmYXJlbmhlaXQge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG59XFxuXFxuI2NlbGNpdXMge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4jZmFyZW5oZWl0IHtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuLmFjdGl2ZVVuaXQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuNTVyZW07XFxufVxcblxcbiN3ZWF0aGVyVHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jbG9jYXRpb25TZWFyY2gge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4jZXJyb3Ige1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5yaWdodEluZm9TdWJCb2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5yaWdodEluZm9TdWJCb2R5IGltZyB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4uc3ViQm9keUluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc3ViQm9keUluZm9UeXBlIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uc3ViQm9keUluZm9WYWx1ZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcXG59XFxuXFxuI3NsaWRlckNvbnRyb2xCb2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI2ZvcmVjYXN0U2xpZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4jZm9yZWNhc3RTbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4jZm9yZWNhc3RTbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbiNob3VyTGFiZWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qVGhlc2UgdGhlIGxhYmVscyB3aGVyZSB0aW1lIGlzIG1lbnRpb25lZCB1bmRlciBzbGlkZXIqL1xcbm9wdGlvbiB7ICAgXFxuICAgIHBhZGRpbmc6IC4ycmVtIDAuMnJlbSAwLjJyZW0gMC43NXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XFxufVxcblxcbiNmb3JlY2FzdERheUJvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZm9yZWNhc3REYXlDYXJkIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlOYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxuICAgIGZsZXgtZ3JvdzogMSAxIGF1dG87XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgaW1nIHtcXG4gICAgd2lkdGg6IDY1cHg7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5V2VhdGhlclR5cGUge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MjU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5TWF4VGVtcCxcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheU1pblRlbXAsXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4sXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlXaW5kU3BlZWQge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluLFxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5V2luZFNwZWVkICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluIGltZyxcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheVdpbmRTcGVlZCBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uYWN0aXZlRm9yZWNhc3REYXlDYXJkIHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTAwLDEwMCwxMDAsMC4yKSwgcmdiYSgyNTAsMjUwLDI1MCwwLjQpKTtcXG59XFxuXFxuXFxuQG1lZGlhKG1heC13aWR0aDogNDIwcHgpIHtcXG4gICAgI21haW5JbmZvQm9keSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICNyaWdodEluZm9Cb2R5e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcblxcbiAgICAucmlnaHRJbmZvU3ViQm9keSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgb3B0aW9uIHtcXG4gICAgICAgIHBhZGRpbmc6IC4xNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzSEFBc0g7SUFDdEgseUJBQXlCOztJQUV6Qix5Q0FBeUM7SUFDekMsNEJBQTRCO0lBQzVCLHdDQUF3Qzs7SUFFeEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtBQUNu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Y2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIC0td2hpdGUtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSAwcHggbGVmdCAwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluSW5mb0JvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyaWdodEluZm9Cb2R5LFxcbiNsZWZ0SW5mb0JvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBtYXgtd2lkdGg6IDQwJTsgKi9cXG59XFxuXFxuI2xvY2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jZGF5RGF0ZSxcXG4jdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4jdGltZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuMTVyZW07XFxufVxcblxcbiN0ZW1wSW5mb0JvZHkge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMC43NXJlbTtcXG59XFxuXFxuI3dlYXRoZXJJY29uIHtcXG4gICAgd2lkdGg6IDRyZW07XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuI3RlbXBVbml0Qm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjZWxjaXVzLFxcbiNmYXJlbmhlaXQge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG59XFxuXFxuI2NlbGNpdXMge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4jZmFyZW5oZWl0IHtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuLmFjdGl2ZVVuaXQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuNTVyZW07XFxufVxcblxcbiN3ZWF0aGVyVHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jbG9jYXRpb25TZWFyY2gge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4jZXJyb3Ige1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5yaWdodEluZm9TdWJCb2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5yaWdodEluZm9TdWJCb2R5IGltZyB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4uc3ViQm9keUluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc3ViQm9keUluZm9UeXBlIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uc3ViQm9keUluZm9WYWx1ZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcXG59XFxuXFxuI3NsaWRlckNvbnRyb2xCb2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI2ZvcmVjYXN0U2xpZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4jZm9yZWNhc3RTbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4jZm9yZWNhc3RTbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbiNob3VyTGFiZWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qVGhlc2UgdGhlIGxhYmVscyB3aGVyZSB0aW1lIGlzIG1lbnRpb25lZCB1bmRlciBzbGlkZXIqL1xcbm9wdGlvbiB7ICAgXFxuICAgIHBhZGRpbmc6IC4ycmVtIDAuMnJlbSAwLjJyZW0gMC43NXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XFxufVxcblxcbiNmb3JlY2FzdERheUJvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZm9yZWNhc3REYXlDYXJkIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlOYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxuICAgIGZsZXgtZ3JvdzogMSAxIGF1dG87XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgaW1nIHtcXG4gICAgd2lkdGg6IDY1cHg7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5V2VhdGhlclR5cGUge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MjU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5TWF4VGVtcCxcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheU1pblRlbXAsXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4sXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlXaW5kU3BlZWQge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluLFxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5V2luZFNwZWVkICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluIGltZyxcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheVdpbmRTcGVlZCBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uYWN0aXZlRm9yZWNhc3REYXlDYXJkIHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMTAwLDEwMCwxMDAsMC4yKSwgcmdiYSgyNTAsMjUwLDI1MCwwLjQpKTtcXG59XFxuXFxuXFxuQG1lZGlhKG1heC13aWR0aDogNDIwcHgpIHtcXG4gICAgI21haW5JbmZvQm9keSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICNyaWdodEluZm9Cb2R5e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcblxcbiAgICAucmlnaHRJbmZvU3ViQm9keSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgb3B0aW9uIHtcXG4gICAgICAgIHBhZGRpbmc6IC4xNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IG1ha2VEb20gIGZyb20gJy4vbW9kdWxlcy9tYWtlSHRtbEVsZW1lbnRzLmpzJztcbmltcG9ydCBnZXRXZWF0aGVySW5mbyBmcm9tICcuL21vZHVsZXMvZ2V0V2VhdGhlckluZm8uanMnO1xuXG5jb25zb2xlLmxvZygnd2VhdGhlciBhcHAnKTtcblxubWFrZURvbSgpO1xuZ2V0V2VhdGhlckluZm8oJ0dyZWVud2ljaCcpO1xuXG5cbi8vIGxldCByZ2JhVmFsdWUgPSBbJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsXG4vLyAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJyxcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsIFxuLy8gJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJyxcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJyxcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJyxcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJyxcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJyxcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJyxcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJyxcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsIFxuLy8gJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgXG4vLyAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCBcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsIFxuLy8gJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgXG4vLyAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCBcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsIFxuLy8gJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgXG4vLyAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCBcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsIFxuLy8gJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgXG4vLyAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCBcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsIFxuLy8gJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgXG4vLyAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCBcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsIFxuLy8gJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgXG4vLyAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCBcbi8vICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsIFxuLy8gJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTksIDI2LCA2MywgMC4wNyknLCAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgXG4vLyAncmdiYSgxOSwgMjYsIDYzLCAwLjA3KScsICdyZ2JhKDE5LCAyNiwgNjMsIDAuMDcpJywgJ3JnYmEoMTgsIDI2LCA2MywgMC4wNyknLCAncmdiYSgxNywgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE3LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTUsIDIzLCA2MCwgMC4wNyknLCBcbi8vICdyZ2JhKDE1LCAyMywgNjAsIDAuMDcpJywgJ3JnYmEoMTMsIDIyLCA1OSwgMC4wNyknLCAncmdiYSgxMywgMjIsIDU5LCAwLjA3KScsICdyZ2JhKDEyLCAyMSwgNTgsIDAuMDcpJywgJ3JnYmEoMTIsIDIxLCA1OCwgMC4wNyknLCAncmdiYSg5LCAyMCwgNTYsIDAuMDcpJywgXG4vLyAncmdiYSg5LCAyMCwgNTYsIDAuMDcpJywgJ3JnYmEoNywgMTgsIDU1LCAwLjA3KScsICdyZ2JhKDcsIDE4LCA1NSwgMC4wNyknLCAncmdiYSg1LCAxNywgNTMsIDAuMDcpJywgJ3JnYmEoNSwgMTcsIDUzLCAwLjA3KScsICdyZ2JhKDMsIDE1LCA1MSwgMC4wNyknLCBcbi8vICdyZ2JhKDMsIDE1LCA1MSwgMC4wNyknLCAncmdiYSgxNCwgMjAsIDYzLCAwLjA3KScsICdyZ2JhKDE0LCAyMCwgNjMsIDAuMDcpJywgJ3JnYmEoMzAsIDI2LCA3OSwgMC4wNyknLCAncmdiYSgzMCwgMjYsIDc5LCAwLjA3KScsICdyZ2JhKDQyLCAzMSwgOTEsIDAuMDcpJyxcbi8vICdyZ2JhKDUwLCAzNCwgOTksIDAuMDcpJywgJ3JnYmEoNTgsIDM3LCAxMDcsIDAuMDcpJywgJ3JnYmEoNjcsIDQxLCAxMTQsIDAuMDcpJywgJ3JnYmEoNjcsIDQxLCAxMTQsIDAuMDcpJywgJ3JnYmEoODMsIDQ3LCAxMzAsIDAuMDcpJywgJ3JnYmEoODMsIDQ3LCAxMzAsIDAuMDcpJyxcbi8vICdyZ2JhKDgzLCA0NywgMTMwLCAwLjA3KScsICdyZ2JhKDEwMywgNTUsIDE1MCwgMC4wNyknLCAncmdiYSgxMDMsIDU1LCAxNTAsIDAuMDcpJywgJ3JnYmEoMTExLCA1OCwgMTU4LCAwLjA3KScsICdyZ2JhKDEyMywgNjMsIDE3MCwgMC4wNyknLFxuLy8gJ3JnYmEoMTE3LCA2NiwgMTc0LCAwLjA3KScsICdyZ2JhKDExMSwgNzAsIDE3OCwgMC4wNyknLCAncmdiYSgxMDQsIDczLCAxODIsIDAuMDcpJywgJ3JnYmEoOTgsIDc3LCAxODYsIDAuMDcpJywgJ3JnYmEoOTgsIDc3LCAxODYsIDAuMDcpJyxcbi8vICdyZ2JhKDg2LCA4NCwgMTk0LCAwLjA3KScsICdyZ2JhKDg2LCA4NCwgMTk0LCAwLjA3KScsICdyZ2JhKDc3LCA4OSwgMjAwLCAwLjA3KScsICdyZ2JhKDc3LCA4OSwgMjAwLCAwLjA3KScsICdyZ2JhKDY0LCA5NiwgMjA3LCAwLjA3KScsXG4vLyAncmdiYSg2NCwgOTYsIDIwNywgMC4wNyknLCAncmdiYSg1MiwgMTAzLCAyMTUsIDAuMDcpJywgJ3JnYmEoNTIsIDEwMywgMjE1LCAwLjA3KScsICdyZ2JhKDUyLCAxMDMsIDIxNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJyxcbi8vICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJywgJ3JnYmEoMzYsIDExMiwgMjI1LCAwLjA3KScsICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJyxcbi8vICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJywgJ3JnYmEoMzYsIDExMiwgMjI1LCAwLjA3KScsICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJyxcbi8vICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJywgJ3JnYmEoMzYsIDExMiwgMjI1LCAwLjA3KScsICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJyxcbi8vICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJywgJ3JnYmEoMzYsIDExMiwgMjI1LCAwLjA3KScsICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJyxcbi8vICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJywgJ3JnYmEoMzYsIDExMiwgMjI1LCAwLjA3KScsICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJyxcbi8vICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgzNiwgMTEyLCAyMjUsIDAuMDcpJywgJ3JnYmEoMzYsIDExMiwgMjI1LCAwLjA3KScsICdyZ2JhKDM2LCAxMTIsIDIyNSwgMC4wNyknLCAncmdiYSgyOCwgMTE1LCAyMjgsIDAuMDcpJywgXG4vLyAncmdiYSgyOCwgMTE1LCAyMjgsIDAuMDcpJywgJ3JnYmEoMjQsIDExNiwgMjI1LCAwLjA3KScsICdyZ2JhKDI0LCAxMTYsIDIyNSwgMC4wNyknLCAncmdiYSgyMSwgMTE3LCAyMjIsIDAuMDcpJywgJ3JnYmEoMjEsIDExNywgMjIyLCAwLjA3KScsICdyZ2JhKDE4LCAxMTgsIDIyMCwgMC4wNyknLCBcbi8vICdyZ2JhKDE4LCAxMTgsIDIyMCwgMC4wNyknLCAncmdiYSgxNCwgMTE5LCAyMTgsIDAuMDcpJywgJ3JnYmEoMTQsIDExOSwgMjE4LCAwLjA3KScsICdyZ2JhKDExLCAxMjAsIDIxNiwgMC4wNyknLCAncmdiYSgxMSwgMTIwLCAyMTYsIDAuMDcpJyxcbi8vICdyZ2JhKDgsIDEyMSwgMjEzLCAwLjA3KScsICdyZ2JhKDQsIDEyMiwgMjEwLCAwLjA3KScsICdyZ2JhKDQsIDEyMiwgMjEwLCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsIFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCBcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCBcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLCAncmdiYSgyLCAxMjIsIDIwOSwgMC4wNyknLFxuLy8gJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJywgJ3JnYmEoMiwgMTIyLCAyMDksIDAuMDcpJyxcbi8vICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsICdyZ2JhKDIsIDEyMiwgMjA5LCAwLjA3KScsXG4vLyAncmdiYSg0LCAxMjIsIDIxMCwgMC4wNyknLCAncmdiYSg0LCAxMjIsIDIxMCwgMC4wNyknLCAncmdiYSg0LCAxMjIsIDIxMCwgMC4wNyknLCAncmdiYSgxMSwgMTIwLCAyMTYsIDAuMDcpJywgJ3JnYmEoMTEsIDEyMCwgMjE2LCAwLjA3KScsICdyZ2JhKDE1LCAxMTksIDIxOCwgMC4wNyknLFxuLy8gJ3JnYmEoMTUsIDExOSwgMjE4LCAwLjA3KScsICdyZ2JhKDE4LCAxMTgsIDIyMCwgMC4wNyknLCAncmdiYSgxOCwgMTE4LCAyMjAsIDAuMDcpJywgJ3JnYmEoMjIsIDExNywgMjIzLCAwLjA3KScsICdyZ2JhKDIyLCAxMTcsIDIyMywgMC4wNyknLCAncmdiYSgyMiwgMTE3LCAyMjMsIDAuMDcpJyxcbi8vICdyZ2JhKDI0LCAxMTYsIDIyNSwgMC4wNyknLCAncmdiYSgyNiwgMTE2LCAyMjYsIDAuMDcpJywgJ3JnYmEoMzAsIDExNSwgMjI5LCAwLjA3KScsICdyZ2JhKDMwLCAxMTUsIDIyOSwgMC4wNyknLCAncmdiYSg0MiwgMTA4LCAyMjEsIDAuMDcpJywgJ3JnYmEoNDksIDEwNSwgMjE3LCAwLjA3KScsXG4vLyAncmdiYSg0OSwgMTA1LCAyMTcsIDAuMDcpJywgJ3JnYmEoNDksIDEwNSwgMjE3LCAwLjA3KScsICdyZ2JhKDQ5LCAxMDUsIDIxNywgMC4wNyknLCAncmdiYSg0OSwgMTA1LCAyMTcsIDAuMDcpJywgJ3JnYmEoNDksIDEwNSwgMjE3LCAwLjA3KScsICdyZ2JhKDc3LCA4OSwgMjAwLCAwLjA3KScsXG4vLyAncmdiYSg4MCwgODcsIDE5OCwgMC4wNyknLCAncmdiYSg4NiwgODQsIDE5NCwgMC4wNyknLCAncmdiYSg5MiwgODAsIDE5MCwgMC4wNyknLCAncmdiYSgxMDQsIDczLCAxODIsIDAuMDcpJywgJ3JnYmEoMTExLCA3MCwgMTc4LCAwLjA3KScsICdyZ2JhKDExMSwgNzAsIDE3OCwgMC4wNyknLFxuLy8gJ3JnYmEoMTIwLCA2NSwgMTcyLCAwLjA3KScsICdyZ2JhKDExNSwgNjAsIDE2MiwgMC4wNyknLCAncmdiYSgxMDcsIDU3LCAxNTQsIDAuMDcpJywgJ3JnYmEoOTksIDUzLCAxNDYsIDAuMDcpJywgJ3JnYmEoOTEsIDUwLCAxMzgsIDAuMDcpJywgJ3JnYmEoOTEsIDUwLCAxMzgsIDAuMDcpJyxcbi8vICdyZ2JhKDc5LCA0NSwgMTI2LCAwLjA3KScsICdyZ2JhKDcxLCA0MiwgMTE4LCAwLjA3KScsICdyZ2JhKDcxLCA0MiwgMTE4LCAwLjA3KScsICdyZ2JhKDU0LCAzNiwgMTAzLCAwLjA3KScsICdyZ2JhKDU0LCAzNiwgMTAzLCAwLjA3KScsICdyZ2JhKDM4LCAyOSwgODcsIDAuMDcpJyxcbi8vICdyZ2JhKDM4LCAyOSwgODcsIDAuMDcpJywgJ3JnYmEoMjYsIDI1LCA3NSwgMC4wNyknLCAncmdiYSgyNiwgMjUsIDc1LCAwLjA3KScsICdyZ2JhKDEwLCAxOCwgNTksIDAuMDcpJywgJ3JnYmEoMTAsIDE4LCA1OSwgMC4wNyknLCAncmdiYSgxMCwgMTgsIDU5LCAwLjA3KScsXG4vLyAncmdiYSgxMCwgMTgsIDU5LCAwLjA3KScsICdyZ2JhKDEwLCAxOCwgNTksIDAuMDcpJywgJ3JnYmEoMTAsIDE4LCA1OSwgMC4wNyknLCAncmdiYSgxMCwgMTgsIDU5LCAwLjA3KScsICdyZ2JhKDEwLCAxOCwgNTksIDAuMDcpJywgJ3JnYmEoMTAsIDE4LCA1OSwgMC4wNyknLFxuLy8gJ3JnYmEoMTAsIDE4LCA1OSwgMC4wNyknLCAncmdiYSgxMCwgMTgsIDU5LCAwLjA3KScsICdyZ2JhKDEwLCAxOCwgNTksIDAuMDcpJywgJ3JnYmEoMTAsIDE4LCA1OSwgMC4wNyknLCAncmdiYSgxMCwgMTgsIDU5LCAwLjA3KScsICdyZ2JhKDEwLCAxOCwgNTksIDAuMDcpJyxcbi8vICdyZ2JhKDEwLCAxOCwgNTksIDAuMDcpJywgJ3JnYmEoMTAsIDE4LCA1OSwgMC4wNyknLCAncmdiYSgxMCwgMTgsIDU5LCAwLjA3KScsICdyZ2JhKDMsIDE1LCA1MSwgMC4wNyknLCAncmdiYSgzLCAxNSwgNTEsIDAuMDcpJywgJ3JnYmEoNCwgMTYsIDUzLCAwLjA3KScsXG4vLyAncmdiYSg0LCAxNiwgNTMsIDAuMDcpJywgJ3JnYmEoNywgMTgsIDU0LCAwLjA3KScsICdyZ2JhKDcsIDE4LCA1NCwgMC4wNyknLCAncmdiYSg5LCAxOSwgNTYsIDAuMDcpJywgJ3JnYmEoOSwgMTksIDU2LCAwLjA3KScsICdyZ2JhKDExLCAyMSwgNTcsIDAuMDcpJyxcbi8vICdyZ2JhKDExLCAyMSwgNTcsIDAuMDcpJywgJ3JnYmEoMTMsIDIyLCA1OSwgMC4wNyknLCAncmdiYSgxMywgMjIsIDU5LCAwLjA3KScsICdyZ2JhKDE1LCAyMywgNjAsIDAuMDcpJywgJ3JnYmEoMTUsIDIzLCA2MCwgMC4wNyknLCAncmdiYSgxNSwgMjMsIDYwLCAwLjA3KScsXG4vLyAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLFxuLy8gJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJyxcbi8vICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCBcbi8vICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsXG4vLyAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLFxuLy8gJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KScsICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJyxcbi8vICdyZ2JhKDE4LCAyNSwgNjIsIDAuMDcpJywgJ3JnYmEoMTgsIDI1LCA2MiwgMC4wNyknLCAncmdiYSgxOCwgMjUsIDYyLCAwLjA3KSddO1xuXG4iLCJpbXBvcnQgd2VhdGhlclNldF9HZXQgZnJvbSBcIi4vcHJvY2Vzc19zdG9yZV92YWx1ZXMuanNcIjtcblxuY29uc3QgdXBkYXRlQmFja2dyb3VuZENvbG9yID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gdHJhbnNpdGlvbiBwZXJpb2QgaXMgYmFzaWNhbGx5IDMwIG1pbnMgYmVmb3JlIGFuZCBhZnRlciBzdW5yaXNlIGFuZCBzdW5zZXQuXG4gICAgLy8gd2hlbiBldmVyIHRoZSBjdXJyZW50IHRpbWUgaXMgaW4gdGhpcyByYW5nZSB3ZSB1c2UgdGhlc2UgaGV4IHZhbHVlIHRvIGNoYW5nZSB0aGUgY29sb3Igb2YgdGhlIGJhY2tncm91bmRcbiAgICAvLyBhbGwgdGhlIHRyYW5zaXRpb24gYXJyYXkgY29sb3JzIGFyZSBmcm9tIG5pZ2h0IHRvIHN1bnJpc2UgdG8gbm9vbiB0byBzdW5zZXQgdG8gbmlnaHRcbiAgICBjb25zdCBuaWdodENvbG9yID0gJyMyZTM2NzgnO1xuICAgIGNvbnN0IGRheUNvbG9yID0gJyMzMWJkZmYnO1xuICAgIGNvbnN0IHRyYW5zaXRpb25Gb3JtTmlnaHRUb1N1bnJpc2UgPSBbJyMyZTM2NzgnLCAnIzM1Mzg3NCcsICcjM2MzOTcwJywgJyM0NDNiNmMnLCAnIzRiM2Q2NycsICcjNTIzZTYzJywgJyM1OTQwNWYnLCAnIzYwNDI1YicsICcjNjg0MzU3JywgJyM2ZjQ1NTMnLCAnIzc2NDc0ZicsICcjN2Q0ODRhJywgJyM4NDRhNDYnLCAnIzhjNGM0MicsICcjOTM0ZDNlJywgJyM5YTRmM2EnLCAnI2ExNTAzNicsICcjYTk1MjMyJywgJyNiMDU0MmUnLCAnI2I3NTUyOScsICcjYmU1NzI1JywgJyNjNTU5MjEnLCAnI2NkNWExZCcsICcjZDQ1YzE5JywgJyNkYjVlMTUnLCAnI2UyNWYxMScsICcjZTk2MTBjJywgJyNmMTYzMDgnLCAnI2Y4NjQwNCcsICcjZmY2NjAwJ107XG4gICAgY29uc3QgdHJhbnNpdGlvbkZyb21TdW5yaXNlVG9Ob29uID0gWycjZmY2NjAwJywgJyNmODY5MDknLCAnI2YxNmMxMicsICcjZWE2ZjFhJywgJyNlMzcyMjMnLCAnI2RiNzUyYycsICcjZDQ3ODM1JywgJyNjZDdiM2UnLCAnI2M2N2U0NicsICcjYmY4MTRmJywgJyNiODg0NTgnLCAnI2IxODc2MScsICcjYWE4YTZhJywgJyNhMzhkNzInLCAnIzljOTA3YicsICcjOTQ5Mzg0JywgJyM4ZDk2OGQnLCAnIzg2OTk5NScsICcjN2Y5YzllJywgJyM3ODlmYTcnLCAnIzcxYTJiMCcsICcjNmFhNWI5JywgJyM2M2E4YzEnLCAnIzVjYWJjYScsICcjNTVhZWQzJywgJyM0ZGIxZGMnLCAnIzQ2YjRlNScsICcjM2ZiN2VkJywgJyMzOGJhZjYnLCAnIzMxYmRmZiddO1xuICAgIGNvbnN0IHRyYW5zaXRpb25Gcm9tTm9vblRvU3Vuc2V0ID0gWycjMzFiZGZmJywgJyMzOGJhZjYnLCAnIzNmYjdlZCcsICcjNDZiM2U1JywgJyM0ZGIwZGMnLCAnIzU1YWRkMycsICcjNWNhYWNhJywgJyM2M2E3YzEnLCAnIzZhYTRiOScsICcjNzFhMGIwJywgJyM3ODlkYTcnLCAnIzdmOWE5ZScsICcjODY5Nzk1JywgJyM4ZDk0OGQnLCAnIzk0OTE4NCcsICcjOWM4ZDdiJywgJyNhMzhhNzInLCAnI2FhODc2YScsICcjYjE4NDYxJywgJyNiODgxNTgnLCAnI2JmN2U0ZicsICcjYzY3YTQ2JywgJyNjZDc3M2UnLCAnI2Q0NzQzNScsICcjZGI3MTJjJywgJyNlMzZlMjMnLCAnI2VhNmIxYScsICcjZjE2NzEyJywgJyNmODY0MDknLCAnI2ZmNjEwMCddO1xuICAgIGNvbnN0IHRyYW5zaXRpb25Gcm9tU3Vuc2V0VG9OaWdodCA9IFsnI2ZmNjEwMCcsICcjZjg2MDA0JywgJyNmMTVlMDgnLCAnI2U5NWQwYycsICcjZTI1YjExJywgJyNkYjVhMTUnLCAnI2Q0NTgxOScsICcjY2Q1NzFkJywgJyNjNTU1MjEnLCAnI2JlNTQyNScsICcjYjc1MjI5JywgJyNiMDUxMmUnLCAnI2E5NGYzMicsICcjYTE0ZTM2JywgJyM5YTRjM2EnLCAnIzkzNGIzZScsICcjOGM0OTQyJywgJyM4NDQ4NDYnLCAnIzdkNDY0YScsICcjNzY0NTRmJywgJyM2ZjQzNTMnLCAnIzY4NDI1NycsICcjNjA0MDViJywgJyM1OTNmNWYnLCAnIzUyM2Q2MycsICcjNGIzYzY3JywgJyM0NDNhNmMnLCAnIzNjMzk3MCcsICcjMzUzNzc0JywgJyMyZTM2NzgnXTtcblxuICAgIGZ1bmN0aW9uIHNsaWRlclZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coKTtcbiAgICAgICAgLy8gcHJvY2Vzc1NsaWRlclZhbHVlKCk7XG4gICAgICAgIC8vIGdldEN1cnJlbnRUaW1lKCk7XG4gICAgICAgIC8vIGdldEN1cnJlbnREYXlBbmRUaW1lKCk7XG4gICAgICAgIC8vIGdldFRpbWVUb1N1bnJpc2VBbmRTdW5zZXQoKTtcbiAgICAgICAgdXBkYXRlQmFja2dyb3VuZENvbG9yVmFyaWFibGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVCYWNrZ3JvdW5kQ29sb3JWYXJpYWJsZSgpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gZ2V0QmFja2dyb3VuZENvbG9yKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbG9yKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2tncm91bmQtY29sb3InLCBjb2xvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudERheUFuZFRpbWUoKSB7XG4gICAgICAgIGxldCBhY3RpdmVGb3JlQ2FzdERheSA9IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlRm9yZWNhc3REYXlDYXJkJykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKSk7XG4gICAgICAgIGxldCBjdXJyZW50VGltZTtcbiAgICAgICAgaWYoYWN0aXZlRm9yZUNhc3REYXkgPT09IDApIHtcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lID0gZ2V0Q3VycmVudFRpbWVPZkxvY2F0aW9uUGx1c1NsaWRlclZhbHVlKCk7XG4gICAgICAgICAgICBpZihOdW1iZXIoY3VycmVudFRpbWUuaHJzKSA8PSAyMyAmJiBOdW1iZXIoY3VycmVudFRpbWUubWluKSA8PSA1OSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZUZvcmVDYXN0RGF5LCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRGF5OiBhY3RpdmVGb3JlQ2FzdERheSwgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWUuaHJzID0gTnVtYmVyKGN1cnJlbnRUaW1lLmhycykgJSAyNDtcbiAgICAgICAgICAgICAgICBhY3RpdmVGb3JlQ2FzdERheSA9IDE7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aXZlRm9yZUNhc3REYXksIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVEYXk6IGFjdGl2ZUZvcmVDYXN0RGF5LCBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFRpbWUgPSBwcm9jZXNzU2xpZGVyVmFsdWUoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZUZvcmVDYXN0RGF5LCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGl2ZURheTogYWN0aXZlRm9yZUNhc3REYXksIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHByb2Nlc3NTbGlkZXJWYWx1ZSgpIHtcbiAgICAgICAgbGV0IHNsaWRlclZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVjYXN0U2xpZGVyJykudmFsdWUuc3BsaXQoJy4nKVswXTtcbiAgICAgICAgbGV0IGhycyA9IE1hdGguZmxvb3Ioc2xpZGVyVmFsdWUgLyA2MCk7XG4gICAgICAgIGxldCBtaW4gPSBzbGlkZXJWYWx1ZSAlIDYwO1xuICAgICAgICBtaW4gPSBtaW4gPCAxMCA/ICcwJyttaW4gOiBtaW47XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTbGlkZXIgdmFsdWUgdGltZSAnICsgaHJzICsgXCI6XCIgKyBtaW4pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJzLFxuICAgICAgICAgICAgbWluXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWVPZkxvY2F0aW9uUGx1c1NsaWRlclZhbHVlKCkge1xuICAgICAgICBsZXQgY3VycmVudFRpbWUgID0gd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCAndGltZScpO1xuICAgICAgICBsZXQgaHJzID0gY3VycmVudFRpbWUuc3BsaXQoJzonKVswXTtcbiAgICAgICAgbGV0IG1pbiA9IDA7ICAvLyBub3QgdGFraW5nIHRoZSBjdXJyZW50IHRpbWUgbWlucyBiZWNhdXNlIHdlIGFyZSBhZGRpbmcgdGhlIHNsaWRlciB2YWx1ZSBtaW5zIHRvIHRoZSBjdXJyZW50IHRpbWUgd2hpY2ggd2lsbCBhdXRvbWF0aWNhbGx5IG1ha2UgaXQgdGhlIGN1cnJlbnQgbWluIGFzIHRoZSBtaW5zIG9mIHNsaWRlciB2YWx1ZSBhcmUgYWxyZWFkeSBzdGFydGluZ1xuICAgICAgICBsZXQgc2xpZGVyVmFsdWVUaW1lID0gcHJvY2Vzc1NsaWRlclZhbHVlKCk7XG4gICAgICAgIGhycyA9IE51bWJlcihocnMpICsgTnVtYmVyKHNsaWRlclZhbHVlVGltZS5ocnMpO1xuICAgICAgICBtaW4gPSBOdW1iZXIobWluKSArIE51bWJlcihzbGlkZXJWYWx1ZVRpbWUubWluKTtcbiAgICAgICAgaWYobWluID4gNTkpIHtcbiAgICAgICAgICAgIG1pbiA9IG1pbiAlIDYwO1xuICAgICAgICAgICAgaHJzICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgbWluID0gbWluIDwgMTAgPyAnMCcrIG1pbiA6IG1pbjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaHJzKyBcIjpcIisgbWluKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhycyxcbiAgICAgICAgICAgIG1pblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udmVydFRpbWVUbzI0SHJDbG9jayh0aW1lKSB7XG4gICAgICAgIGxldCBocnMsIG1pbjtcbiAgICAgICAgaWYodGltZS5zcGxpdCgnICcpWzFdID09PSAnQU0nKSB7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5yZXBsYWNlKCcgQU0nLCAnJyk7XG4gICAgICAgICAgICBocnMgPSB0aW1lLnNwbGl0KCc6JylbMF07XG4gICAgICAgICAgICBtaW4gPSB0aW1lLnNwbGl0KCc6JylbMV07XG4gICAgICAgICAgICBocnMgPSBocnMgPT09ICcxMicgPyAnMDAnIDogaHJzO1xuICAgICAgICB9IGVsc2UgaWYodGltZS5zcGxpdCgnICcpWzFdID09PSAnUE0nKSB7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5yZXBsYWNlKCcgUE0nLCAnJyk7XG4gICAgICAgICAgICBocnMgPSB0aW1lLnNwbGl0KCc6JylbMF07XG4gICAgICAgICAgICBtaW4gPSB0aW1lLnNwbGl0KCc6JylbMV07XG4gICAgICAgICAgICBocnMgPSBocnMgPT09ICcxMicgPyBocnMgOiBOdW1iZXIoaHJzKSArIDEyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBocnMgKyBcIjpcIiArIG1pbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aW1lU3VidHJhY3QoY3VycmVudFRpbWUxLCBzdW5zZXRTdW5yaXNlVGltZSkge1xuICAgICAgICBjdXJyZW50VGltZTEgPSBOdW1iZXIoY3VycmVudFRpbWUxLnNwbGl0KCc6JylbMF0pICogNjAgKyBOdW1iZXIoY3VycmVudFRpbWUxLnNwbGl0KCc6JylbMV0pO1xuICAgICAgICBzdW5zZXRTdW5yaXNlVGltZSA9IE51bWJlcihzdW5zZXRTdW5yaXNlVGltZS5zcGxpdCgnOicpWzBdKSAqIDYwICsgTnVtYmVyKHN1bnNldFN1bnJpc2VUaW1lLnNwbGl0KCc6JylbMV0pO1xuICAgICAgICByZXR1cm4gc3Vuc2V0U3VucmlzZVRpbWUgLSBjdXJyZW50VGltZTE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZENvbG9yKCkge1xuICAgICAgICBjb25zdCBvYmplY3QgPSBnZXRUaW1lVG9TdW5yaXNlQW5kU3Vuc2V0KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdCk7XG4gICAgICAgIGNvbnN0IHRpbWVUb1N1bnJpc2UgPSBvYmplY3QudGltZVRvU3VucmlzZTtcbiAgICAgICAgY29uc3QgdGltZVRvU3Vuc2V0ID0gb2JqZWN0LnRpbWVUb1N1bnNldDtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGltZVRvU3VucmlzZSwgdGltZVRvU3Vuc2V0KTtcblxuICAgICAgICBpZih0aW1lVG9TdW5yaXNlID4gLTEgJiYgdGltZVRvU3Vuc2V0ID4gLTEpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdCZWZvcmUgU3VucmlzZSBhbmQgYWZ0ZXIgbWlkbmlnaHQnKTtcbiAgICAgICAgICAgIGlmKHRpbWVUb1N1bnJpc2UgPCAzMCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0cmFuc2l0aW9uIHBlcmlvZCBmcm9tIG5pZ2h0IHRvIHN1bnJpc2UnKTtcbiAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgZG9pbmcgMjkgLSBzdW5yaXNlIHRpbWUgYmVjYXVzZSBhdCBpbmRleCAwIGl0IGlzIG5pZ2h0IGhleCB2YWx1ZSBzbyB3ZSB3YW50IHRoZSBoZXggdmFsdWUgb2Ygc3VucmlzZSB3aGVuIHRpbWUgdG8gc3VucmlzZSBpcyAwIHNvIHdlIGFyZSBkb2luZyB0aGlzLlxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uRm9ybU5pZ2h0VG9TdW5yaXNlWzI5IC0gdGltZVRvU3VucmlzZV07IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmlnaHRDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKHRpbWVUb1N1bnJpc2UgPCAwICYmIHRpbWVUb1N1bnNldCA+IC0xKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQmV0d2VlbiBTdW5yaXNlIGFuZCBTdW5zZXQnKTtcbiAgICAgICAgICAgIGlmKHRpbWVUb1N1bnJpc2UgPCAwICYmIHRpbWVUb1N1bnJpc2UgPj0gLTMwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RyYW5zaXRpb24gcGVyaW9kIGZyb20gc3VucmlzZSB0byBub29uJyk7XG4gICAgICAgICAgICAgICAgLy8gd2UgYXJlIG11bHRpcGx5aW5nIHdpdGggLTEgaGVyZSBzaW5jZSB0aW1lIHRvIHN1bnJpc2UgaXMgbmVnYXRpdmUgYW5kIHN1YnJhdGluZyAtMSBzaW5jZSBpbmRleCBzdGFydHMgZnJvbSAwIHRvIDI5XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25Gcm9tU3VucmlzZVRvTm9vblsodGltZVRvU3VucmlzZSkgKiAoLTEpIC0gMV1cbiAgICAgICAgICAgIH0gZWxzZSBpZih0aW1lVG9TdW5zZXQgPCAzMCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0cmFuc2l0aW9uIHBlcmlvZCBmcm9tIG5vb24gdG8gc3Vuc2V0Jyk7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHJlYXNvbiBmb3IgMjkgLSB0aW1lIGlzIHNhbWUgYXMgdGhlIHRyYW5zaXRpb24gZnJvbSBuaWdodCB0byBzdW5yaXNlIGFzIHRoZSAwIGluZGV4IGlzIGFjdHVhbGx5IG5vb24gaGV4IHZhbHVlIGFuZCAyOSBpcyBzdW5zZXQuIFNvIHRvIGdldCBjb3JyZWN0IHZhbHVlIFxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uRnJvbU5vb25Ub1N1bnNldFsyOSAtIHRpbWVUb1N1bnNldF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXlDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKHRpbWVUb1N1bnJpc2UgPCAwICYmIHRpbWVUb1N1bnNldCA8IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdBZnRlciBzdW5zZXQgYmVmb3JlIG1pZG5pZ2h0Jyk7XG4gICAgICAgICAgICBpZih0aW1lVG9TdW5zZXQgPCAwICYmIHRpbWVUb1N1bnNldCA+PSAtMzApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndHJhbnNpdGlvbiBwZXJpb2QgZnJvbSBzdW5zZXQgdG8gbmlnaHQnKTtcbiAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgbXVsdGlwbHlpbmcgd2l0aCAtMSBoZXJlIHNpbmNlIHRpbWUgdG8gc3Vuc2V0IGlzIG5lZ2F0aXZlIGFuZCBzdWJyYXRpbmcgLTEgc2luY2UgaW5kZXggc3RhcnRzIGZyb20gMCB0byAyOVxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2l0aW9uRnJvbVN1bnNldFRvTmlnaHRbKHRpbWVUb1N1bnNldCkgKiAoLTEpIC0xXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5pZ2h0Q29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0VGltZVRvU3VucmlzZUFuZFN1bnNldCgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnREYXlBbmRUaW1lID0gZ2V0Q3VycmVudERheUFuZFRpbWUoKTtcbiAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gY3VycmVudERheUFuZFRpbWUuY3VycmVudFRpbWUuaHJzICsgJzonICsgY3VycmVudERheUFuZFRpbWUuY3VycmVudFRpbWUubWluO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50RGF5QW5kVGltZSwgY3VycmVudFRpbWUpO1xuICAgICAgICBsZXQgYXN0cm9EYXRhID0gd2VhdGhlclNldF9HZXQoJ2dldEFzdHJvJywge2RheUluZGV4OiBjdXJyZW50RGF5QW5kVGltZS5hY3RpdmVEYXl9KTtcbiAgICAgICAgbGV0IGFzdHJvRGF0YTI0aHJGb3JtYXQgPSBPYmplY3QuYXNzaWduKHt9LCBhc3Ryb0RhdGEpO1xuICAgICAgICBmb3IobGV0IGF0dHJpYnV0ZU5hbWUgaW4gYXN0cm9EYXRhMjRockZvcm1hdCkge1xuICAgICAgICAgICAgYXN0cm9EYXRhMjRockZvcm1hdFthdHRyaWJ1dGVOYW1lXSA9IGNvbnZlcnRUaW1lVG8yNEhyQ2xvY2soYXN0cm9EYXRhMjRockZvcm1hdFthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXN0cm9EYXRhMjRockZvcm1hdCk7XG4gICAgICAgIGxldCB0aW1lVG9TdW5yaXNlID0gdGltZVN1YnRyYWN0KGN1cnJlbnRUaW1lLCBhc3Ryb0RhdGEyNGhyRm9ybWF0WydzdW5yaXNlJ10pO1xuICAgICAgICBsZXQgdGltZVRvU3Vuc2V0ID0gdGltZVN1YnRyYWN0KGN1cnJlbnRUaW1lLCBhc3Ryb0RhdGEyNGhyRm9ybWF0WydzdW5zZXQnXSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWVUb1N1bnJpc2UsIHRpbWVUb1N1bnNldCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aW1lVG9TdW5yaXNlLFxuICAgICAgICAgICAgdGltZVRvU3Vuc2V0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzbGlkZXJWYWx1ZUNoYW5nZWQsXG4gICAgfVxuXG59KSgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUJhY2tncm91bmQoKSB7XG4gICAgdXBkYXRlQmFja2dyb3VuZENvbG9yLnNsaWRlclZhbHVlQ2hhbmdlZCgpO1xufVxuXG4vLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0teW91ci12YXJpYWJsZScsICcjWU9VUkNPTE9SJyk7XG5cbi8qIFxuaW1wb3J0IHB5cGVyY2xpcCBhcyBjbGlwXG5jb2xvciA9IGNsaXAucGFzdGUoKVxuY29sb3IgPSBjb2xvci5zcGxpdCgnXFxyXFxuJylcbiovXG4iLCJpbXBvcnQgd2VhdGhlclNldF9HZXQgZnJvbSBcIi4vcHJvY2Vzc19zdG9yZV92YWx1ZXMuanNcIjtcbmltcG9ydCB1cGRhdGVDb250cm9sIGZyb20gXCIuL3VwZGF0ZUluZm8uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm8obG9jYXRpb25OYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTA1Mzc4NWVhNjg3YzQ0NzI5OWU3MDkyNjIyMjgxMiZxPSR7bG9jYXRpb25OYW1lfSZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub2AsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2Uub2spO1xuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXMgPT0gJzIwMCcpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB3ZWF0aGVyU2V0X0dldCgnc2V0JywgZGF0YSk7XG4gICAgICAgICAgICB1cGRhdGVDb250cm9sKHtmdW5jdGlvbkNvZGU6IDF9KTtcbiAgICAgICAgfSBlbHNlIGlmKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2JhZCByZXF1ZXN0Jyk7XG4gICAgICAgICAgICBsZXQgZXJyb3IgPSAnU29ycnkuIEJhZCByZXF1ZXN0LiBObyBsb2NhdGlvbiBmb3VuZCB3aXRoIHN1Y2ggbmFtZS4nO1xuICAgICAgICAgICAgdXBkYXRlQ29udHJvbCh7ZnVuY3Rpb25Db2RlOiA0LCBlcnJvcn0pO1xuICAgICAgICB9XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIEhhcHBlbmVkJyk7ICBcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG5cbn0gXG5cbiIsImltcG9ydCB0ZXN0R2V0V2VhdGhlciBmcm9tIFwiLi9nZXRXZWF0aGVySW5mby5qc1wiO1xuaW1wb3J0IHVwZGF0ZUNvbnRyb2wgZnJvbSBcIi4vdXBkYXRlSW5mby5qc1wiO1xuXG5pbXBvcnQgaW1nVXJsIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ1wiO1xuaW1wb3J0IGZlZWxzTGlrZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9mZWVsc0xpa2Uuc3ZnXCI7XG5pbXBvcnQgaHVtaWRpdHkgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaHVtaWRpdHkuc3ZnXCI7XG5pbXBvcnQgY2hhbmNlT2ZSYWluIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2NoYW5jZU9mUmFpbi5zdmdcIjtcbmltcG9ydCB3aW5kU3BlZWQgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvd2luZFNwZWVkLnN2Z1wiO1xuaW1wb3J0IHByZXNzdXJlIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3ByZXNzdXJlLnN2Z1wiO1xuaW1wb3J0IHJhaW5Ecm9wIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3JhaW5kcm9wLnN2Z1wiO1xuaW1wb3J0IHdpbmQgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvd2luZC5zdmdcIjsgLy8gZm9yIHRoZSBmb3JlY2FzdCBjYXJkc1xuXG5jb25zdCBET00gPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gbWFrZURpdihpZCA9IG51bGwsIGNsYXNzTmFtZSA9IG51bGwsIHRleHRDb250ZW50LCBkYXRhQXR0cmlidXRlLCBkYXRhQXR0cmlidXRlVmFsdWUgPSAnJywgdGl0bGUgPW51bGwpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZihpZCkge1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmKGRhdGFBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoZGF0YUF0dHJpYnV0ZSwgZGF0YUF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aXRsZSkge1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aXRsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlSW1hZ2UoaWQ9bnVsbCwgdXJsPWltZ1VybCkge1xuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGlmKGlkKSB7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICByZXR1cm4gaW1nO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVNYWluSW5mb0JvZHkoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGxldCBtYWluSW5mb0JvZHkgPSBtYWtlRGl2KCdtYWluSW5mb0JvZHknKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtYWluSW5mb0JvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVMZWZ0UmlnaHRJbmZvQm9keSgpIHtcbiAgICAgICAgY29uc3QgbWFpbkluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5JbmZvQm9keScpO1xuICAgICAgICBsZXQgbGVmdEluZm9Cb2R5ID0gbWFrZURpdignbGVmdEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCByaWdodEluZm9Cb2R5ID0gbWFrZURpdigncmlnaHRJbmZvQm9keScpOyAgXG4gICAgICAgIG1haW5JbmZvQm9keS5hcHBlbmRDaGlsZChsZWZ0SW5mb0JvZHkpO1xuICAgICAgICBtYWluSW5mb0JvZHkuYXBwZW5kQ2hpbGQocmlnaHRJbmZvQm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uQm9keSgpIHtcbiAgICAgICAgY29uc3QgbGVmdEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRJbmZvQm9keScpO1xuICAgICAgICBsZXQgbG9jYXRpb25Cb2R5ID0gbWFrZURpdignbG9jYXRpb24nLCBudWxsLCAnTG9jYXRpb24nLCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycsICdMb2NhdGlvbiBOYW1lJyk7XG4gICAgICAgIC8vIGxvY2F0aW9uQm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gbG9jYXRpb25Cb2R5LnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICAgICAgbGVmdEluZm9Cb2R5LmFwcGVuZENoaWxkKGxvY2F0aW9uQm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZURheURhdGVCb2R5KCkge1xuICAgICAgICBjb25zdCBsZWZ0SW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCBkYXlEYXRlQm9keSA9IG1ha2VEaXYoJ2RheURhdGUnLCBudWxsLCAnRGF5LCBEYXRlJywgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnLCAnRGF5IGFuZCBEYXRlJyk7XG4gICAgICAgIC8vIGRheURhdGVCb2R5LnNldEF0dHJpYnV0ZSgnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICAvLyBkYXlEYXRlQm9keS50ZXh0Q29udGVudCA9ICdEYXksIERhdGUnO1xuICAgICAgICBsZWZ0SW5mb0JvZHkuYXBwZW5kQ2hpbGQoZGF5RGF0ZUJvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVUaW1lQm9keSgpIHtcbiAgICAgICAgY29uc3QgbGVmdEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRJbmZvQm9keScpO1xuICAgICAgICBsZXQgdGltZUJvZHkgPSBtYWtlRGl2KCd0aW1lJywgbnVsbCwgJ1RpbWUnLCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycsICdUaW1lIGluIDI0IGhyIGZvcm1hdCcpO1xuICAgICAgICAvLyB0aW1lQm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gdGltZUJvZHkudGV4dENvbnRlbnQgPSAnVGltZSc7XG4gICAgICAgIGxlZnRJbmZvQm9keS5hcHBlbmRDaGlsZCh0aW1lQm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRlbXBJbmZvQm9keSgpIHtcbiAgICAgICAgY29uc3QgbGVmdEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRJbmZvQm9keScpO1xuICAgICAgICBsZXQgdGVtcEluZm9Cb2R5ID0gbWFrZURpdigndGVtcEluZm9Cb2R5Jyk7XG4gICAgICAgIGxlZnRJbmZvQm9keS5hcHBlbmRDaGlsZCh0ZW1wSW5mb0JvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVXZWF0aGVySWNvbigpIHtcbiAgICAgICAgY29uc3QgdGVtcEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBJbmZvQm9keScpO1xuICAgICAgICBsZXQgd2VhdGhlckljb24gPSBtYWtlSW1hZ2UoJ3dlYXRoZXJJY29uJyk7XG4gICAgICAgIHdlYXRoZXJJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICB3ZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ1dlYXRoZXIgSWNvbicpO1xuICAgICAgICB0ZW1wSW5mb0JvZHkuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVUZW1wVmFsdWVCb2R5KCkge1xuICAgICAgICBjb25zdCB0ZW1wSW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCB0ZW1wVmFsdWVCb2R5ID0gbWFrZURpdigndGVtcGVyYXR1cmUnLCBudWxsLCAnIycsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJywgJ1RlbXBlcmF0dXJlIGluIMKwQycpO1xuICAgICAgICAvLyB0ZW1wVmFsdWVCb2R5LnNldEF0dHJpYnV0ZSgnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICAvLyB0ZW1wVmFsdWVCb2R5LnRleHRDb250ZW50ID0gJyMnO1xuICAgICAgICB0ZW1wSW5mb0JvZHkuYXBwZW5kQ2hpbGQodGVtcFZhbHVlQm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRlbXBVbml0Qm9keSgpIHtcbiAgICAgICAgY29uc3QgdGVtcEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBJbmZvQm9keScpO1xuICAgICAgICBsZXQgdGVtcFVuaXRCb2R5ID0gbWFrZURpdigndGVtcFVuaXRCb2R5Jyk7XG4gICAgICAgIHRlbXBJbmZvQm9keS5hcHBlbmRDaGlsZCh0ZW1wVW5pdEJvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVUZW1wVW5pdHMoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBVbml0Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wVW5pdEJvZHknKTtcbiAgICAgICAgbGV0IGNlbGNpdXNCb2R5ID0gbWFrZURpdignY2VsY2l1cycsICdhY3RpdmVVbml0JywgJ8KwQycsIG51bGwsIG51bGwsICdDZWxjaXVzJyk7XG4gICAgICAgIGxldCBmYXJlbmhlaXRCb2R5ID0gbWFrZURpdignZmFyZW5oZWl0JywgbnVsbCwgJ8KwRicsIG51bGwsIG51bGwsICdGYXJlbmhlaXQnKTtcbiAgICAgICAgY2VsY2l1c0JvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0ZW1wVW5pdHNDbGlja2VkKTtcbiAgICAgICAgLy8gY2VsY2l1c0JvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhY3RpdmVVbml0Jyk7XG4gICAgICAgIGZhcmVuaGVpdEJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0ZW1wVW5pdHNDbGlja2VkKTtcbiAgICAgICAgLy8gY2VsY2l1c0JvZHkudGV4dENvbnRlbnQgPSAnwrBDJztcbiAgICAgICAgLy8gZmFyZW5oZWl0Qm9keS50ZXh0Q29udGVudCA9ICfCsEYnO1xuICAgICAgICB0ZW1wVW5pdEJvZHkuYXBwZW5kQ2hpbGQoY2VsY2l1c0JvZHkpO1xuICAgICAgICB0ZW1wVW5pdEJvZHkuYXBwZW5kQ2hpbGQoZmFyZW5oZWl0Qm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHRlbXBVbml0c0NsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHVuaXRDbGlja2VkID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0Jyk7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKTtcbiAgICAgICAgdGVtcC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYFRlbXBlcmF0dXJlIGluIMKwJHt1bml0Q2xpY2tlZC5nZXRBdHRyaWJ1dGUoJ2lkJykuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9YCk7XG4gICAgICAgIGlmKCF1bml0Q2xpY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZVVuaXQnKSkge1xuICAgICAgICAgICAgYWN0aXZlVW5pdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVVbml0Jyk7XG4gICAgICAgICAgICB1bml0Q2xpY2tlZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVVbml0Jyk7XG4gICAgICAgICAgICB1cGRhdGVDb250cm9sKHtmdW5jdGlvbkNvZGU6IDJ9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVXZWF0aGVyVHlwZUluZm9Cb2R5KCkge1xuICAgICAgICBjb25zdCBsZWZ0SW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCB3ZWF0aGVyVHlwZUluZm9Cb2R5ID0gbWFrZURpdignd2VhdGhlclR5cGUnLCBudWxsLCAnV2VhdGhlciBUeXBlJywgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnLCAnV2VhdGhlciBDb25kaXRpb24nKTtcbiAgICAgICAgLy8gd2VhdGhlclR5cGVJbmZvQm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gd2VhdGhlclR5cGVJbmZvQm9keS50ZXh0Q29udGVudCA9ICdXZWF0aGVyIFR5cGUnO1xuICAgICAgICBsZWZ0SW5mb0JvZHkuYXBwZW5kQ2hpbGQod2VhdGhlclR5cGVJbmZvQm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNlYXJjaEJveCgpIHtcbiAgICAgICAgY29uc3QgbGVmdEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRJbmZvQm9keScpO1xuICAgICAgICBsZXQgc2VhcmNoQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb25TZWFyY2gnKTtcbiAgICAgICAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdzZWFyY2gnKTtcbiAgICAgICAgc2VhcmNoQm94LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnU2VhcmNoIExvY2F0aW9uLi4uJyk7XG4gICAgICAgIHNlYXJjaEJveC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZihldmVudC5jb2RlID09PSAnRW50ZXInIHx8IGV2ZW50LmNvZGUgPT09ICdOdW1wYWRFbnRlcicpIHtcbiAgICAgICAgICAgICAgICB0ZXN0R2V0V2VhdGhlcihzZWFyY2hCb3gudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGVmdEluZm9Cb2R5LmFwcGVuZENoaWxkKHNlYXJjaEJveCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRXJyb3JSZXBvcnRlckJvZHkoKSB7XG4gICAgICAgIGNvbnN0IGxlZnRJbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0SW5mb0JvZHknKTtcbiAgICAgICAgbGV0IGVycm9yUmVwb3J0ZXJCb2R5ID0gbWFrZURpdignZXJyb3InLCBudWxsLCAnJywgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gZXJyb3JSZXBvcnRlckJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIGVycm9yUmVwb3J0ZXJCb2R5LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGxlZnRJbmZvQm9keS5hcHBlbmRDaGlsZChlcnJvclJlcG9ydGVyQm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJpZ2h0SW5mb1N1YkJvZHkoaWQsIGluZm9UeXBlVGV4dCwgaW5mb1ZhbHVlVGV4dCwgdXJsKSB7XG4gICAgICAgIGNvbnN0IHJpZ2h0SW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHRJbmZvQm9keScpO1xuICAgICAgICBsZXQgc3ViQm9keU1haW4gPSBtYWtlRGl2KG51bGwsICdyaWdodEluZm9TdWJCb2R5Jyk7XG4gICAgICAgIGxldCBpbWcgPSBtYWtlSW1hZ2UobnVsbCwgdXJsKTtcbiAgICAgICAgbGV0IHN1YkJvZHlJbmZvID0gbWFrZURpdihudWxsLCAnc3ViQm9keUluZm8nKTtcbiAgICAgICAgbGV0IGluZm9UeXBlID0gbWFrZURpdihudWxsLCAnc3ViQm9keUluZm9UeXBlJywgaW5mb1R5cGVUZXh0KTtcbiAgICAgICAgLy8gaW5mb1R5cGUudGV4dENvbnRlbnQgPSBpbmZvVHlwZVRleHQ7XG4gICAgICAgIGxldCBpbmZvVmFsdWUgPSBtYWtlRGl2KGlkLCAnc3ViQm9keUluZm9WYWx1ZScsIGluZm9WYWx1ZVRleHQsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJywgaW5mb1R5cGVUZXh0KTtcbiAgICAgICAgLy8gaW5mb1ZhbHVlLnNldEF0dHJpYnV0ZSgnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICAvLyBpbmZvVmFsdWUudGV4dENvbnRlbnQgPSBpbmZvVmFsdWVUZXh0O1xuICAgIFxuICAgICAgICBzdWJCb2R5SW5mby5hcHBlbmRDaGlsZChpbmZvVHlwZSk7XG4gICAgICAgIHN1YkJvZHlJbmZvLmFwcGVuZENoaWxkKGluZm9WYWx1ZSk7XG4gICAgICAgIHN1YkJvZHlNYWluLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIHN1YkJvZHlNYWluLmFwcGVuZENoaWxkKHN1YkJvZHlJbmZvKTtcbiAgICAgICAgcmlnaHRJbmZvQm9keS5hcHBlbmRDaGlsZChzdWJCb2R5TWFpbik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlUmlnaHRJbmZvQm9keSgpIHtcbiAgICAgICAgY3JlYXRlUmlnaHRJbmZvU3ViQm9keSgnZmVlbHNMaWtlJywgJ0ZlZWxzIExpa2UnLCAndmFsdWUgwrBDJywgZmVlbHNMaWtlKTtcbiAgICAgICAgY3JlYXRlUmlnaHRJbmZvU3ViQm9keSgnaHVtaWRpdHknLCAnSHVtaWRpdHknLCAndmFsdWUgJScsIGh1bWlkaXR5KTtcbiAgICAgICAgY3JlYXRlUmlnaHRJbmZvU3ViQm9keSgnY2hhbmNlT2ZSYWluJywgJ0NoYW5jZSBPZiBSYWluJywgJ3ZhbHVlICUnLCBjaGFuY2VPZlJhaW4pO1xuICAgICAgICBjcmVhdGVSaWdodEluZm9TdWJCb2R5KCd3aW5kU3BlZWQnLCAnV2luZCBTcGVlZCcsICd2YWx1ZSBrbS9oJywgd2luZFNwZWVkKTtcbiAgICAgICAgY3JlYXRlUmlnaHRJbmZvU3ViQm9keSgncHJlc3N1cmUnLCAnUHJlc3N1cmUnLCAndmFsdWUgbWInLCBwcmVzc3VyZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU2lsZGVyQm9keSgpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgbGV0IHNsaWRlckNvbnRyb2xCb2R5ID0gbWFrZURpdignc2xpZGVyQ29udHJvbEJvZHknKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzbGlkZXJDb250cm9sQm9keSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU2xpZGVyVGlja3MoKSB7XG4gICAgICAgIGxldCBkYXRhbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XG4gICAgICAgIGRhdGFsaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG91ckxhYmVscycpO1xuICAgICAgICBkYXRhbGlzdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8OTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAvLyBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke2l9YCk7IC8vIG5vdCB1c2luZyB0aGUgdmFsdWUgYXR0cmlidXRlIGFzIHdlIGp1c3Qgd2FudCB0byBkaXNwbGF5IHRoZSBsYWJlbCBhbmQgdGhlIHZhbHVlIGlzIGRpcmVjdGx5IHRha2VuIGZyb24gdGhlIHNsaWRlciBcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgYCR7aX1gKTsgLy8gbGFiZWwgaXMgaGVyZSBmb3IgbWUgdGhlIHVwZGF0ZWRpc3BsYXkgaW5mbyB3aWxsIHVwZGF0ZSB0aGUgbGFiZWxcbiAgICAgICAgICAgIGRhdGFsaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGFsaXN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNsaWRlcigpIHtcbiAgICAgICAgY29uc3Qgc2xpZGVyQ29udHJvbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyQ29udHJvbEJvZHknKTtcbiAgICAgICAgbGV0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZvcmVjYXN0U2xpZGVyJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWluJywgJzAnKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnbWF4JywgJzE0MzknKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnMCcpO1xuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdzdGVwJywgJ2FueScpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzbGlkZXJWYWx1ZUNoYW5nZWQpO1xuICAgICAgICBzbGlkZXJDb250cm9sQm9keS5hcHBlbmRDaGlsZChzbGlkZXIpO1xuICAgICAgICBsZXQgdGlja3MgPSBjcmVhdGVTbGlkZXJUaWNrcygyNCk7IC8vIG5vIG5lZWQgdG8gYWRkIHRoZSB0aWNrcyB0byB0aGUgbGlzdCBhdHRyaWJ1dGUgb2YgdGhlIHNsaWRlciBzaW5jZSB0aGVuIGl0IG5lZWQgdG8gYmUgY2hhbmdlZCBlYWNoIHRpbWUgaG91cmx5IG9yIGRhaWx5IHNlbGVjdGVkLlxuICAgICAgICAvLyBzbGlkZXIuc2V0QXR0cmlidXRlKCdsaXN0JywgdGlja3MuZ2V0QXR0cmlidXRlKCdpJykpXG4gICAgICAgIHNsaWRlckNvbnRyb2xCb2R5LmFwcGVuZENoaWxkKHRpY2tzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzbGlkZXJWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHVwZGF0ZUNvbnRyb2woe2Z1bmN0aW9uQ29kZTogM30pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcmVjYXN0RGF5Qm9keSgpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgbGV0IGZvcmVjYXN0RGF5Qm9keSA9IG1ha2VEaXYoJ2ZvcmVjYXN0RGF5Qm9keScpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5Qm9keSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlU3R5bGVPZlRoZUZvcmVjYXN0RGF5Q2FyZENsaWNrZWQodGFyZ2V0SW5kZXhOdW1iZXIpIHtcbiAgICAgICAgbGV0IGZvcmVjYXN0RGF5Q2FyZENsaWNrZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YXJnZXRJbmRleE51bWJlcn1kYXlGb3JlY2FzdENhcmRgKTtcbiAgICAgICAgbGV0IGN1cnJlbnRBY3RpdmVGb3JlY2FzdERheUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlRm9yZWNhc3REYXlDYXJkJyk7XG4gICAgICAgIGlmKGN1cnJlbnRBY3RpdmVGb3JlY2FzdERheUNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVGb3JlY2FzdERheUNhcmQnKSkge1xuICAgICAgICAgICAgY3VycmVudEFjdGl2ZUZvcmVjYXN0RGF5Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVGb3JlY2FzdERheUNhcmQnKTtcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5Q2FyZENsaWNrZWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlRm9yZWNhc3REYXlDYXJkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JlY2FzdERheUNhcmRDbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGxldCB0YXJnZXRJbmRleE51bWJlciA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykuc3BsaXQoJycpWzBdO1xuICAgICAgICBjaGFuZ2VTdHlsZU9mVGhlRm9yZWNhc3REYXlDYXJkQ2xpY2tlZCh0YXJnZXRJbmRleE51bWJlcik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykuc3BsaXQoJycpWzBdKTtcbiAgICAgICAgLy8gY2FsbCB1cGRhdGVJbmZvIHNvIHRoYXQgdGhlIGRpc3BsYXkgSW5mbyBjYW4gYmUgdXBkYXRlZCBvbiBjbGlja2VkIG9mIGZvcmVjYXN0RGF5IGNhcmRcbiAgICAgICAgdXBkYXRlQ29udHJvbCh7ZnVuY3Rpb25Db2RlOiA1LCBkYXlJbmRleDogTnVtYmVyKHRhcmdldEluZGV4TnVtYmVyKX0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcmVDYXN0RGF5Q2FyZChpZCkge1xuICAgICAgICBjb25zdCBmb3JlY2FzdERheUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3REYXlCb2R5Jyk7XG4gICAgICAgIGxldCBmb3JlY2FzdERheUNhcmQgPSBtYWtlRGl2KGAke2lkfWRheUZvcmVjYXN0Q2FyZGAsJ2ZvcmVjYXN0RGF5Q2FyZCcpO1xuICAgICAgICBpZihpZCA9PT0gMCkge1xuICAgICAgICAgICAgZm9yZWNhc3REYXlDYXJkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpO1xuICAgICAgICB9XG4gICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcmVjYXN0RGF5Q2FyZENsaWNrZWQpO1xuXG4gICAgICAgIGxldCBmb3JlY2FzdERheU5hbWUgPSBtYWtlRGl2KGAke2lkfWRheUZvcmVjYXN0RGF5RGF5TmFtZWAsICdmb3JlY2FzdERheU5hbWUnLCBgRGF5ICR7aWR9YCwgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnLCAnRGF5Jyk7XG4gICAgICAgIGxldCBmb3JlY2FzdERheVdlYXRoZXJJY29uID0gbWFrZUltYWdlKGAke2lkfWRheUZvcmVjYXN0RGF5V2VhdGhlckljb25gKTsgLy8gdGhpcyBpcyBtYWtlIGEgaW1hZ2Ugc28gZG9udCBwYXNzIHRoZSBkaXYgZnVuY3Rpb24gcGFyYW1ldGVyc1xuICAgICAgICBsZXQgZm9yZWNhc3REYXlXZWF0aGVyVHlwZSA9IG1ha2VEaXYoYCR7aWR9ZGF5Rm9yZWNhc3REYXlXZWF0aGVyVHlwZWAsICdmb3JlY2FzdERheVdlYXRoZXJUeXBlJywgYCR7aWR9IFdlYXRoZXIgVHlwZWAsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJywgJ1dlYXRoZXIgQ29uZGl0aW9uJyk7XG4gICAgICAgIGxldCBmb3JlY2FzdERheU1heFRlbXAgPSBtYWtlRGl2KGAke2lkfWRheUZvcmVjYXN0RGF5TWF4VGVtcGAsICdmb3JlY2FzdERheU1heFRlbXAnLCBgJHtpZH0gTWF4IFRlbXAgI2AsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJywgJ01heGltdW0gVGVtcGVyYXR1cmUnKTtcbiAgICAgICAgbGV0IGZvcmVjYXN0RGF5TWluVGVtcCA9IG1ha2VEaXYoYCR7aWR9ZGF5Rm9yZWNhc3REYXlNaW5UZW1wYCwgJ2ZvcmVjYXN0RGF5TWluVGVtcCcsIGAke2lkfSBNaW4gVGVtcCAjYCwgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnLCAnTWluaW11bSBUZW1wZXJhdHVyZScpO1xuICAgICAgICBsZXQgZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4gPSBtYWtlRGl2KGAke2lkfWRheUZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluYCwgJ2ZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluJywgYCR7aWR9IHZhbHVlICVgLCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycsICdDaGFuY2Ugb2YgUmFpbicpO1xuICAgICAgICBsZXQgcmFpbkltZyA9IG1ha2VJbWFnZShgJHtpZH1yYWluSW1nYCwgcmFpbkRyb3ApO1xuICAgICAgICBmb3JlY2FzdERheUNoYW5jZU9mUmFpbi5hcHBlbmRDaGlsZChyYWluSW1nKTtcbiAgICAgICAgbGV0IGZvcmVjYXN0RGF5V2luZFNwZWVkID0gbWFrZURpdihgJHtpZH1kYXlGb3JlY2FzdERheVdpbmRTcGVlZGAsICdmb3JlY2FzdERheVdpbmRTcGVlZCcsIGAke2lkfSB2YWx1ZSBrcGhgLCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycsICdXaW5kIFNwZWVkJyk7XG4gICAgICAgIGxldCB3aW5kSW1nID0gbWFrZUltYWdlKGAke2lkfXdpbmRJbWdgLCB3aW5kKTtcbiAgICAgICAgZm9yZWNhc3REYXlXaW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZEltZyk7XG5cbiAgICAgICAgZm9yZWNhc3REYXlDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5TmFtZSk7XG4gICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5hcHBlbmRDaGlsZChmb3JlY2FzdERheVdlYXRoZXJJY29uKTtcbiAgICAgICAgZm9yZWNhc3REYXlDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5V2VhdGhlclR5cGUpO1xuICAgICAgICBmb3JlY2FzdERheUNhcmQuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlNYXhUZW1wKTtcbiAgICAgICAgZm9yZWNhc3REYXlDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5TWluVGVtcCk7XG4gICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5hcHBlbmRDaGlsZChmb3JlY2FzdERheUNoYW5jZU9mUmFpbik7XG4gICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5hcHBlbmRDaGlsZChmb3JlY2FzdERheVdpbmRTcGVlZCk7XG4gICAgICAgIGZvcmVjYXN0RGF5Qm9keS5hcHBlbmRDaGlsZChmb3JlY2FzdERheUNhcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFsbEZvcmVjYXN0RGF5Q2FyZCgpIHtcbiAgICAgICAgLy8gbnVtYmVyT2ZEYXlGb3JlY2FzdERhdGFBdmFpbGFibGUgZGVwZW5kcyBvbiB0aGUgbnVtYmVyIG9mIGRheSBkYXRhIHRoYXQgYXBpIGlzIGdpdmluZyByaWdodCBub3cgaSBoYXZlIG9ubHkgMiBhaGVhZCBkYXkgZm9yZSBjYXN0IGRhdGEgc28gMlxuICAgICAgICBsZXQgbnVtYmVyT2ZEYXlGb3JlY2FzdERhdGFBdmFpbGFibGUgPSAzO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxudW1iZXJPZkRheUZvcmVjYXN0RGF0YUF2YWlsYWJsZTsgaSsrKSB7XG4gICAgICAgICAgICBjcmVhdGVGb3JlQ2FzdERheUNhcmQoaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAxOiBjcmVhdGVNYWluSW5mb0JvZHkoKSxcbiAgICAgICAgMjogY3JlYXRlTGVmdFJpZ2h0SW5mb0JvZHkoKSxcbiAgICAgICAgMzogY3JlYXRlTG9jYXRpb25Cb2R5KCksXG4gICAgICAgIDQ6IGNyZWF0ZURheURhdGVCb2R5KCksXG4gICAgICAgIDU6IGNyZWF0ZVRpbWVCb2R5KCksXG4gICAgICAgIDY6IGNyZWF0ZVRlbXBJbmZvQm9keSgpLFxuICAgICAgICA3OiBjcmVhdGVXZWF0aGVySWNvbigpLFxuICAgICAgICA4OiBjcmVhdGVUZW1wVmFsdWVCb2R5KCksXG4gICAgICAgIDk6IGNyZWF0ZVRlbXBVbml0Qm9keSgpLFxuICAgICAgICAxMDogY3JlYXRlVGVtcFVuaXRzKCksXG4gICAgICAgIDExOiBjcmVhdGVXZWF0aGVyVHlwZUluZm9Cb2R5KCksXG4gICAgICAgIDEyOiBjcmVhdGVTZWFyY2hCb3goKSxcbiAgICAgICAgMTM6IGNyZWF0ZUVycm9yUmVwb3J0ZXJCb2R5KCksXG4gICAgICAgIDE0OiBwb3B1bGF0ZVJpZ2h0SW5mb0JvZHkoKSxcbiAgICAgICAgMTU6IGNyZWF0ZVNpbGRlckJvZHkoKSxcbiAgICAgICAgMTY6IGNyZWF0ZVNsaWRlcigpLFxuICAgICAgICAxNzogY3JlYXRlRm9yZWNhc3REYXlCb2R5KCksXG4gICAgICAgIDE4OiBjcmVhdGVBbGxGb3JlY2FzdERheUNhcmQoKSxcbiAgICB9O1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlRG9tKCkge1xuICAgIGZvcihsZXQgZG9tIGluIERPTSkge1xuICAgICAgICBkb207XG4gICAgfVxufVxuIiwiXG5cbmNvbnN0IHdlYXRoZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyQXR0cmlidXRlVmFsdWVzLCBjdXJyZW50RGF5SG91cmx5Rm9yZWNhc3RXZWF0aGVyQXR0cmlidXRlVmFsdWVzLCBmb3JlY2FzdERheUF0dHJpYnV0ZVZhbHVlcztcblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnQoYXR0cmlidXRlTmFtZSkge1xuICAgICAgICByZXR1cm4gY3VycmVudFdlYXRoZXJBdHRyaWJ1dGVWYWx1ZXNbYXR0cmlidXRlTmFtZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudChkYXRhKSB7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyQXR0cmlidXRlVmFsdWVzID0ge307XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyQXR0cmlidXRlVmFsdWVzID0ge1xuICAgICAgICAgICAgbG9jYXRpb246IGRhdGEubG9jYXRpb24ubmFtZSxcbiAgICAgICAgICAgIGRheURhdGU6IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KCcgJylbMF0sXG4gICAgICAgICAgICB0aW1lOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdCgnICcpWzFdLFxuICAgICAgICAgICAgd2VhdGhlckljb246IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlOiB7XG4gICAgICAgICAgICAgICAgJ2MnOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgICAgICAgICAgICAgICdmJzogZGF0YS5jdXJyZW50LnRlbXBfZixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3ZWF0aGVyVHlwZTogZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgZmVlbHNMaWtlOiB7XG4gICAgICAgICAgICAgICAgYzogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxuICAgICAgICAgICAgICAgIGY6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBodW1pZGl0eTogZGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxuICAgICAgICAgICAgY2hhbmNlT2ZSYWluOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WycwJ10uaG91cltOdW1iZXIoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoJyAnKVsxXS5zcGxpdCgnOicpWzBdKV0uY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgICB3aW5kU3BlZWQ6IHtcbiAgICAgICAgICAgICAgICBrcGg6IGRhdGEuY3VycmVudC53aW5kX2twaCxcbiAgICAgICAgICAgICAgICBtcGg6IGRhdGEuY3VycmVudC53aW5kX21waCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmVzc3VyZToge1xuICAgICAgICAgICAgICAgIG1iOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfaW4sXG4gICAgICAgICAgICAgICAgaW46IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhvdXJseVdlYXRoZXJEYXRhT2JqZWN0RmFjdG9yeShkYXRhKSB7XG4gICAgICAgIGxldCBvYmplY3QgPSB7XG4gICAgICAgICAgICBkYXlEYXRlOiBkYXRhLnRpbWUuc3BsaXQoJyAnKVswXSxcbiAgICAgICAgICAgIHRpbWU6IGRhdGEudGltZS5zcGxpdCgnICcpWzFdLFxuICAgICAgICAgICAgd2VhdGhlckljb246IGRhdGEuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZToge1xuICAgICAgICAgICAgICAgICdjJzogZGF0YS50ZW1wX2MsXG4gICAgICAgICAgICAgICAgJ2YnOiBkYXRhLnRlbXBfZixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3ZWF0aGVyVHlwZTogZGF0YS5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgIGZlZWxzTGlrZToge1xuICAgICAgICAgICAgICAgIGM6IGRhdGEuZmVlbHNsaWtlX2MsXG4gICAgICAgICAgICAgICAgZjogZGF0YS5mZWVsc2xpa2VfZixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBodW1pZGl0eTogZGF0YS5odW1pZGl0eSxcbiAgICAgICAgICAgIGNoYW5jZU9mUmFpbjogZGF0YS5jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICAgIHdpbmRTcGVlZDoge1xuICAgICAgICAgICAgICAgIGtwaDogZGF0YS53aW5kX2twaCxcbiAgICAgICAgICAgICAgICBtcGg6IGRhdGEud2luZF9tcGgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlc3N1cmU6IHtcbiAgICAgICAgICAgICAgICBtYjogZGF0YS5wcmVzc3VyZV9pbixcbiAgICAgICAgICAgICAgICBpbjogZGF0YS5wcmVzc3VyZV9tYixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEhvdXJseUZvcmVjYXN0KGRhdGEpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRIb3VyID0gY3VycmVudFdlYXRoZXJBdHRyaWJ1dGVWYWx1ZXNbJ3RpbWUnXS5zcGxpdCgnOicpWzBdO1xuICAgICAgICBsZXQgdG9kYXlIb3VyRGF0YSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91ci5zbGljZShOdW1iZXIoY3VycmVudEhvdXIpKTtcbiAgICAgICAgbGV0IHRvbW9ycm93SG91ckRhdGEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmhvdXIuc2xpY2UoMCxOdW1iZXIoY3VycmVudEhvdXIpKTtcbiAgICAgICAgbGV0IGZvcmVjYXN0MjRIb3VyRGF0YSA9IHRvZGF5SG91ckRhdGEuY29uY2F0KHRvbW9ycm93SG91ckRhdGEpO1xuICAgICAgICB0b2RheUhvdXJEYXRhID0gW107XG4gICAgICAgIHRvbW9ycm93SG91ckRhdGEgPSBbXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3QyNEhvdXJEYXRhKTtcbiAgICAgICAgY3VycmVudERheUhvdXJseUZvcmVjYXN0V2VhdGhlckF0dHJpYnV0ZVZhbHVlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IGhvdXJEYXRhIGluIGZvcmVjYXN0MjRIb3VyRGF0YSkge1xuICAgICAgICAgICAgbGV0IG9iamVjdCA9IGhvdXJseVdlYXRoZXJEYXRhT2JqZWN0RmFjdG9yeShmb3JlY2FzdDI0SG91ckRhdGFbaG91ckRhdGFdKTtcbiAgICAgICAgICAgIGN1cnJlbnREYXlIb3VybHlGb3JlY2FzdFdlYXRoZXJBdHRyaWJ1dGVWYWx1ZXMucHVzaChvYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhvdXJseUZvcmVjYXN0V2VhdGhlckF0dHJpYnV0ZVZhbHVlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SG91cmx5Rm9yZWNhc3QocG9zLCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50RGF5SG91cmx5Rm9yZWNhc3RXZWF0aGVyQXR0cmlidXRlVmFsdWVzW3Bvc11bYXR0cmlidXRlTmFtZV07XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGF2ZXJhZ2VGb3JlY2FzdERhdGFPYmplY3RGYWN0b3J5KGRhdGEsIGluZGV4KSB7XG4gICAgICAgIGxldCBvYmplY3QgPSB7XG4gICAgICAgICAgICBhc3Rybzoge1xuICAgICAgICAgICAgICAgIG1vb25yaXNlOiBkYXRhLmFzdHJvLm1vb25yaXNlLFxuICAgICAgICAgICAgICAgIG1vb25zZXQ6IGRhdGEuYXN0cm8ubW9vbnNldCxcbiAgICAgICAgICAgICAgICBzdW5yaXNlOiBkYXRhLmFzdHJvLnN1bnJpc2UsXG4gICAgICAgICAgICAgICAgc3Vuc2V0OiBkYXRhLmFzdHJvLnN1bnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdmVyYWdlOiB7XG4gICAgICAgICAgICAgICAgRGF5TmFtZTogZGF0YS5kYXRlLFxuICAgICAgICAgICAgICAgIFdlYXRoZXJJY29uOiBkYXRhLmRheS5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICAgICAgICBXZWF0aGVyVHlwZTogZGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICAgICAgTWF4VGVtcDoge1xuICAgICAgICAgICAgICAgICAgICBjOiBkYXRhLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICAgICAgICAgIGY6IGRhdGEuZGF5Lm1heHRlbXBfZlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgTWluVGVtcDoge1xuICAgICAgICAgICAgICAgICAgICBjOiBkYXRhLmRheS5taW50ZW1wX2MsXG4gICAgICAgICAgICAgICAgICAgIGY6IGRhdGEuZGF5Lm1pbnRlbXBfZlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgQ2hhbmNlT2ZSYWluOiBkYXRhLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICAgICAgICBXaW5kU3BlZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAga3BoOiBkYXRhLmRheS5tYXh3aW5kX2twaCxcbiAgICAgICAgICAgICAgICAgICAgbXBoOiBkYXRhLmRheS5tYXh3aW5kX21waFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBob3VybHk6IFtdLFxuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4ID09PSAnMCcpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvYmplY3QgcmV0dXJuZWQnKTtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBob3VyRGF0YSBpbiBkYXRhLmhvdXIpIHtcbiAgICAgICAgICAgIG9iamVjdC5ob3VybHkucHVzaChob3VybHlXZWF0aGVyRGF0YU9iamVjdEZhY3RvcnkoZGF0YS5ob3VyW2hvdXJEYXRhXSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG9iamVjdC5ob3VybHlbMV0pO1xuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldERheUZvcmVjYXN0KGRhdGEpIHtcbiAgICAgICAgbGV0IGF2ZXJhZ2VGb3JlY2FzdERhdGEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgICAgICBmb3JlY2FzdERheUF0dHJpYnV0ZVZhbHVlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IGRhdGEgaW4gYXZlcmFnZUZvcmVjYXN0RGF0YSkge1xuICAgICAgICAgICAgZm9yZWNhc3REYXlBdHRyaWJ1dGVWYWx1ZXMucHVzaChhdmVyYWdlRm9yZWNhc3REYXRhT2JqZWN0RmFjdG9yeShhdmVyYWdlRm9yZWNhc3REYXRhW2RhdGFdLCBkYXRhKSk7ICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF5QXR0cmlidXRlVmFsdWVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBdmVyYWdlRm9yZUNhc3QoZGF5SW5kZXgsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGZvcmVjYXN0RGF5QXR0cmlidXRlVmFsdWVzW051bWJlcihkYXlJbmRleCldLmF2ZXJhZ2VbYXR0cmlidXRlTmFtZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SG91cmx5RGFpbHlGb3JlY2FzdERhdGEoZGF5SW5kZXgsIGhvdXJJbmRleCwgYXR0cmlidXRlTmFtZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXlBdHRyaWJ1dGVWYWx1ZXNbZGF5SW5kZXhdLmhvdXJseVtob3VySW5kZXhdW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICAgICAgcmV0dXJuIChmb3JlY2FzdERheUF0dHJpYnV0ZVZhbHVlc1tkYXlJbmRleF0uaG91cmx5W2hvdXJJbmRleF1bYXR0cmlidXRlTmFtZV0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFzdHJvRGF0YShkYXlJbmRleCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXlJbmRleClcbiAgICAgICAgLy8gY29uc29sZS5sb2coZm9yZWNhc3REYXlBdHRyaWJ1dGVWYWx1ZXMpO1xuICAgICAgICByZXR1cm4gZm9yZWNhc3REYXlBdHRyaWJ1dGVWYWx1ZXNbZGF5SW5kZXhdWydhc3RybyddO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEN1cnJlbnQsXG4gICAgICAgIHNldEN1cnJlbnQsXG4gICAgICAgIHNldEhvdXJseUZvcmVjYXN0LCAvLyBmb3IgY3VycmVudCBkYXlcbiAgICAgICAgZ2V0SG91cmx5Rm9yZWNhc3QsXG4gICAgICAgIHNldERheUZvcmVjYXN0LCAvLyBmb3IgZGF5IHRoYXQgYXJlIGFoZWFkIG9mIGN1cnJlbnQgZGF5c1xuICAgICAgICBnZXRBdmVyYWdlRm9yZUNhc3QsXG4gICAgICAgIGdldEhvdXJseURhaWx5Rm9yZWNhc3REYXRhLFxuICAgICAgICBnZXRBc3Ryb0RhdGEsXG4gICAgfVxuXG59KSgpO1xuXG4gICAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVyU2V0X0dldChmdW5jLCBvcHRpb24pIHtcbiAgICBcbiAgICBzd2l0Y2goZnVuYykge1xuICAgICAgICBjYXNlICdnZXRDdXJyZW50JzpcbiAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyLmdldEN1cnJlbnQob3B0aW9uKTtcbiAgICAgICAgY2FzZSAnc2V0JzpcbiAgICAgICAgICAgIHdlYXRoZXIuc2V0Q3VycmVudChvcHRpb24pO1xuICAgICAgICAgICAgd2VhdGhlci5zZXRIb3VybHlGb3JlY2FzdChvcHRpb24pO1xuICAgICAgICAgICAgd2VhdGhlci5zZXREYXlGb3JlY2FzdChvcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dldEhvdXJseSc6XG4gICAgICAgICAgICByZXR1cm4od2VhdGhlci5nZXRIb3VybHlGb3JlY2FzdChvcHRpb24uaG91ckluZGV4LCBvcHRpb24uYXR0cmlidXRlTmFtZSkpO1xuICAgICAgICBjYXNlICdnZXRBdmVyYWdlJzpcbiAgICAgICAgICAgIHJldHVybih3ZWF0aGVyLmdldEF2ZXJhZ2VGb3JlQ2FzdChvcHRpb24uZGF5SW5kZXgsIG9wdGlvbi5hdHRyaWJ1dGVOYW1lKSk7XG4gICAgICAgIGNhc2UgJ2dldERheUhvdXJseSc6XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyLmdldEhvdXJseURhaWx5Rm9yZWNhc3REYXRhKG9wdGlvbi5kYXlJbmRleCwgb3B0aW9uLmhvdXJJbmRleCwgb3B0aW9uLmF0dHJpYnV0ZU5hbWUpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbi5hdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyLmdldEhvdXJseURhaWx5Rm9yZWNhc3REYXRhKG9wdGlvbi5kYXlJbmRleCwgb3B0aW9uLmhvdXJJbmRleCwgb3B0aW9uLmF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICBjYXNlICdnZXRBc3Rybyc6XG4gICAgICAgICAgICByZXR1cm4gd2VhdGhlci5nZXRBc3Ryb0RhdGEoTnVtYmVyKG9wdGlvbi5kYXlJbmRleCkpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSIsImltcG9ydCB3ZWF0aGVyU2V0X0dldCBmcm9tIFwiLi9wcm9jZXNzX3N0b3JlX3ZhbHVlc1wiO1xuaW1wb3J0IHVwZGF0ZUJhY2tncm91bmQgZnJvbSBcIi4vYmFja2dyb3VuZC5qc1wiO1xuXG5jb25zdCB1cGRhdGUgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVBbGxEaXNwbGF5VmFsdWVzKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhQ2F0ZWdvcnkgKyAnICcgKyBocnMpO1xuXG4gICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdGhlc2UgZnVuY3Rpb25zIHRvIGJlIGNhbGxlZCB3aGVuIHdlIGFyZSBjaGFuZ2luZyB0aGUgc2xpZGVyIHZhbHVlXG4gICAgICAgIC8vIGJ1dCB3ZSB3YW50IHRoZXNlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwYWdlIGlzIGxvYWRlZCBmb3IgZmlyc3QgdGltZSBvciBuZXcgbG9jYXRpb24gaXMgZW50ZXJlZFxuICAgICAgICAvLyB3aGVuIHRoZSBzbGlkZXIgaXMgaW4gY3VycmVudCBob3VyIHJhbmdlIHdlIHdhbnQgdGhlIHZhbHVlcyB0byBiZSB0YWtlbiBmcm9tIHRoZSBjdXJyZW50IGRhdGEgbm90IGZvcmVjYXN0IGRhdGFcbiAgICAgICAgLy8gd2hlbiBzbGlkZXIgdmFsdWUgaXMgY2hhbmdlZCBpbiBjdXJyZW50IGhvdXIgcmFuZ2Ugd2Ugc2VuZCBudWxsIGluIGJvdGggdGhlIGRhdGEgY2F0IGFuZCBocnMgdmFyaWFibGVcbiAgICAgICAgLy8gb24gdGhlIGZpcnN0IGxvYWQgb3Igb24gbG9hY3Rpb24gZW50ZXJlZCB0aGUgZGF0YSBjYXQgYW5kIGhycyBpcyB1bmRlZmluZWRcbiAgICAgICAgLy8gc28gdGhlc2UgZnVuY3Rpb25zIGFyZSBjYWxsZWQgb24gZmlyc3QgbG9hZCBidXQgbm90IHdoZW4gc2xpZGVyIHZhbHVlIGlzIGNoYW5nZWQgaW4gdGhlIGN1cnJlbnQgaG91ciByYW5nZVxuICAgICAgICAvLyBhcyB3ZSBhcmUgc2VuZGluZyBudWxsIGluIHRoZSBmdW5jdGlvbiBwYXJhbWV0ZXJzXG5cbiAgICAgICAgaWYoZGF0YUNhdGVnb3J5ID09PSB1bmRlZmluZWQpIHsgXG4gICAgICAgICAgICB1cGRhdGVMb2NhdGlvbigpO1xuICAgICAgICAgICAgdXBkYXRlRm9yZWNhc3RTbGlkZXJWYWx1ZSgpO1xuICAgICAgICAgICAgdXBkYXRlRm9yZUNhc3RTbGlkZXJMYWJlbHMoKTtcbiAgICAgICAgICAgIHVwZGF0ZUZvcmVjYXN0RGF5Qm9keSgpO1xuICAgICAgICAgICAgdXBkYXRlQWN0aXZlRm9yZWNhc3REYXlDYXJkKClcbiAgICAgICAgICAgIHVwZGF0ZUVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVEYXlEYXRlKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleCk7XG4gICAgICAgIHVwZGF0ZVRpbWUoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlV2VhdGhlckljb24oZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlVGVtcGVyYXR1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlV2VhdGhlclR5cGUoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlRmVlbExpa2VUZW1wZXJhdHVyZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVIdW1pZGl0eShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVDaGFuY2VPZlJhaW4oZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlV2luZFNwZWVkKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleCk7XG4gICAgICAgIHVwZGF0ZVByZXNzdXJlKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleCk7XG4gICAgICAgIHVwZGF0ZUJhY2tncm91bmQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbigpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCAnbG9jYXRpb24nKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERheURhdGUoYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgICAgbGV0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuICAgICAgICBsZXQgd2Vla2RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGhydXNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gICAgICAgIGxldCBkYXRlU3VmZml4ID0gWyd0aCcsICdzdCcsICduZCcsICdyZCddO1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICBpZihkYXkgJSAxMCA8IDQpIHtcbiAgICAgICAgICAgIGRheSA9IGRheSArIGRhdGVTdWZmaXhbZGF5ICUgMTBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF5ID0gZGF5ICsgJ3RoJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2Vla2RheXNbZGF0ZS5nZXREYXkoKV0gKyBcIiwgXCIgKyBkYXkgKyAnLCAnICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyAnICcgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZURheURhdGUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlEYXRlJyk7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSB3ZWF0aGVyU2V0X0dldChkYXRhQ2F0ZWdvcnksIHtob3VySW5kZXg6IGhycywgYXR0cmlidXRlTmFtZTogaWQsIGRheUluZGV4OiBkYXl9KSB8fCB3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsIGlkKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGZvcm1hdERheURhdGUoYXR0cmlidXRlVmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KGRhdGFDYXRlZ29yeSwge2hvdXJJbmRleDogaHJzLCBhdHRyaWJ1dGVOYW1lOiBpZCwgZGF5SW5kZXg6IGRheX0pIHx8IHdlYXRoZXJTZXRfR2V0KCdnZXRDdXJyZW50JywgaWQpO1xuICAgICAgICAvLyB3ZSB3YW50IHRoZSB0aW1lIHRvIHVwZGF0ZSBvbiBjaGFuZ2Ugb2YgdGhlIHNsaWRlciBidXQgdGhlIHRpbWUgb24gbG9hZGluZyBvZiBuZXcgbG9hY3Rpb24gc2hvdWxkIGJlIHRha2VuIGZyb20gY3VycmVudFxuICAgICAgICAvLyB3aGVuIHRoZSBzbGlkZXIgaXMgY2hhbmdlZCB3ZSBzZW5kIHRoZSBkYXRhIGNhdGVnb3J5IHZhbHVlIHRoZW4gdGhlIHZhbHVlIG9mIHRpbWUgaXMgdXBkYXRlZCBhY2NvcmRpbmcgdG8gdGhlIGZvcmVjYXN0IHNsaWRlciB2YWx1ZSBvZiB0aW1lXG4gICAgICAgIC8vIHdoZW4gd2UgY2hhbmdlIHRoZSBzbGlkZXIgaW4gdGhlIGN1cnJlbnQgaG91ciByYW5nZSB3ZSBzZW5kIG51bGwgaW4gZGF0YSBjYXQgdmFsdWUgdGhlbiBhbHNvIHRoZSB2YWx1ZSBvZiB0aW1lIG5lZWQgdG8gYmUgdXBkYXRlZCBhY2NvcmRpbmcgdG8gZm9yZSBjYXN0IHNsaWRlciB2YWx1ZVxuICAgICAgICBpZihkYXRhQ2F0ZWdvcnkgfHwgZGF0YUNhdGVnb3J5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgbWluID0gcHJvY2Vzc1NsaWRlclZhbHVlKCdtaW4nKTtcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWUuc3BsaXQoJzonKVswXSArICc6JyArIG1pbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gTnVtYmVyKGF0dHJpYnV0ZVZhbHVlLnNwbGl0KCc6JylbMF0pIDwgMTAgPyAwICsgYXR0cmlidXRlVmFsdWUgOiBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlV2VhdGhlckljb24oZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVySWNvbicpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gYXR0cmlidXRlVmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRlbXBlcmF0dXJlKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXkpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KGRhdGFDYXRlZ29yeSwge2hvdXJJbmRleDogaHJzLCBhdHRyaWJ1dGVOYW1lOiBpZCwgZGF5SW5kZXg6IGRheX0pIHx8IHdlYXRoZXJTZXRfR2V0KCdnZXRDdXJyZW50JywgaWQpO1xuICAgICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlW2FjdGl2ZVVuaXRdO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyVHlwZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJUeXBlJyk7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSB3ZWF0aGVyU2V0X0dldChkYXRhQ2F0ZWdvcnksIHtob3VySW5kZXg6IGhycywgYXR0cmlidXRlTmFtZTogaWQsIGRheUluZGV4OiBkYXl9KSB8fCB3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsIGlkKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZlZWxMaWtlVGVtcGVyYXR1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc0xpa2UnKTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KGRhdGFDYXRlZ29yeSwge2hvdXJJbmRleDogaHJzLCBhdHRyaWJ1dGVOYW1lOiBpZCwgZGF5SW5kZXg6IGRheX0pIHx8IHdlYXRoZXJTZXRfR2V0KCdnZXRDdXJyZW50JywgaWQpO1xuICAgICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlW2FjdGl2ZVVuaXRdICsgJyDCsCcgKyBhY3RpdmVVbml0LnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSHVtaWRpdHkoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZSArIFwiICVcIjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2hhbmNlT2ZSYWluKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXkpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmNlT2ZSYWluJyk7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSB3ZWF0aGVyU2V0X0dldChkYXRhQ2F0ZWdvcnksIHtob3VySW5kZXg6IGhycywgYXR0cmlidXRlTmFtZTogaWQsIGRheUluZGV4OiBkYXl9KSB8fCB3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsIGlkKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlICsgXCIgJVwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVdpbmRTcGVlZChkYXRhQ2F0ZWdvcnksIGhycywgZGF5KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRTcGVlZCcpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVsna3BoJ10gKyBcIiBrcGhcIjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJlc3N1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzc3VyZScpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVsnbWInXSArIFwiIG1iXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3RTbGlkZXJWYWx1ZShzbGlkZXJWYWx1ZSkge1xuICAgICAgICAvLyBzbGlkZXIgdmFsdWUgaXMgdW5kZWZpbmVkIHVzdWFsbHkgYnV0IHdoZW4gdGhlIGZvcmVjYXN0IGRheSBjYXJkIGlzIGNsaWNrZWQgdGhpcyBpcyAwIHNpbmNlIGRheSBzdGFydHMgYXQgMDowMCBocnNcbiAgICAgICAgY29uc3QgZm9yZWNhc3RTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3RTbGlkZXInKTtcbiAgICAgICAgbGV0IGN1cnJlbnRNaW4gPSBzbGlkZXJWYWx1ZSB8fCBOdW1iZXIod2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCAndGltZScpLnNwbGl0KCc6JylbMV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50TWluKTtcbiAgICAgICAgZm9yZWNhc3RTbGlkZXIudmFsdWUgPSBgJHtOdW1iZXIoY3VycmVudE1pbil9YDtcbiAgICAgICAgLy8gZm9yZWNhc3RTbGlkZXIudmFsdWUgPSAnMCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9yZUNhc3RTbGlkZXJMYWJlbHMoZmlyc3RTbGlkZXJMYWJsZSkge1xuICAgICAgICBsZXQgY3VycmVudEhvdXIgPSBmaXJzdFNsaWRlckxhYmxlIHx8IE51bWJlcih3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsICd0aW1lJykuc3BsaXQoJzonKVswXSk7XG4gICAgICAgIGxldCBob3VyTGFiZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhvdXJMYWJlbHMpO1xuICAgICAgICBmb3IobGV0IGxhYmVsIGluIGhvdXJMYWJlbHMpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxhYmVsKTtcbiAgICAgICAgICAgIGlmKGxhYmVsID09PSAnMCcgfHwgbGFiZWwgPT09ICc4Jykge1xuICAgICAgICAgICAgICAgIGhvdXJMYWJlbHNbbGFiZWxdLmxhYmVsID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRIb3VyID0gTnVtYmVyKGN1cnJlbnRIb3VyKSArIDM7XG4gICAgICAgICAgICAgICAgY3VycmVudEhvdXIgPSBjdXJyZW50SG91ciA+IDIzID8gY3VycmVudEhvdXIlMjMtMSA6IGN1cnJlbnRIb3VyO1xuICAgICAgICAgICAgICAgIGhvdXJMYWJlbHNbbGFiZWxdLmxhYmVsID0gY3VycmVudEhvdXIgPCAxMCA/IGAwJHtjdXJyZW50SG91cn06MDBgIDogYCR7Y3VycmVudEhvdXJ9OjAwYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGVtcGVyYXR1cmVVbml0c0NoYW5nZWQoKSB7XG4gICAgICAgIGxldCBkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXg7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZvcmVjYXN0RGF5Q2FyZERheUluZGV4ID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVGb3JlY2FzdERheUNhcmQnKS5nZXRBdHRyaWJ1dGUoJ2lkJykuY2hhckF0KDApKTtcbiAgICAgICAgaWYoYWN0aXZlRm9yZWNhc3REYXlDYXJkRGF5SW5kZXggPT09IDApIHsgIC8vIGhlcmUgd2UgYXJlIGNoZWNraW5nIGlmIHRoZSBjdXJyZW50IGRheSBpcyBzZWxlY3RlZCBzbyB3ZSBnZXQgdGhlIGhvdXJseSBkYXRhIGJ1dCBpZiBub3QgdGhlbiBkYXlIb3VybHkgZGF0YVxuICAgICAgICAgICAgaWYoISAocHJvY2Vzc1NsaWRlclZhbHVlKCdocnMnKSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9ICdnZXRIb3VybHknO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBocnMgPSBudWxsO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgZGF0YUNhdGVnb3J5ID0gJ2dldERheUhvdXJseSc7XG4gICAgICAgICAgICBkYXlJbmRleCA9IGFjdGl2ZUZvcmVjYXN0RGF5Q2FyZERheUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGVtcGVyYXR1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlRmVlbExpa2VUZW1wZXJhdHVyZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVGb3JlY2FzdERheVRlbXBlcmF0dXJlVW5pdCgpOyAvLyB0aGlzIG9ubHkgdXBkYXRlcyB0aGUgY2FyZCB0ZW1wZXJhdHVyZSB1bml0cyBzbyBubyBhdHRyaWJ1dGUgbmVjZXNzYXJ5IGFzIGl0IGlzIGRvbmUgaW4gdGhhdCBmdW5jdGlvbiBcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3RIb3VySW5mbygpIHtcbiAgICAgICAgbGV0IGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleDtcbiAgICAgICAgY29uc3QgYWN0aXZlRm9yZWNhc3REYXlDYXJkRGF5SW5kZXggPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpLmdldEF0dHJpYnV0ZSgnaWQnKS5jaGFyQXQoMCkpO1xuICAgICAgICBpZihhY3RpdmVGb3JlY2FzdERheUNhcmREYXlJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgaWYoISAocHJvY2Vzc1NsaWRlclZhbHVlKCdocnMnKSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9ICdnZXRIb3VybHknO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBocnMgPSBudWxsO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgZGF0YUNhdGVnb3J5ID0gJ2dldERheUhvdXJseSc7XG4gICAgICAgICAgICBkYXlJbmRleCA9IGFjdGl2ZUZvcmVjYXN0RGF5Q2FyZERheUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHJzID0gcHJvY2Vzc1NsaWRlclZhbHVlKCdocnMnKTtcbiAgICAgICAgLy8gZGF0YUNhdGVnb3J5ID0gJ2dldEhvdXJseSc7XG4gICAgICAgIHVwZGF0ZUFsbERpc3BsYXlWYWx1ZXMoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzU2xpZGVyVmFsdWUoaHJzX21pbikge1xuICAgICAgICBsZXQgc2xpZGVyVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3RTbGlkZXInKS52YWx1ZS5zcGxpdCgnLicpWzBdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzbGlkZXJWYWx1ZSk7XG4gICAgICAgIGxldCBocnMgPSBNYXRoLmZsb29yKHNsaWRlclZhbHVlIC8gNjApO1xuICAgICAgICBsZXQgbWluID0gc2xpZGVyVmFsdWUgJSA2MDtcbiAgICAgICAgbWluID0gbWluIDwgMTAgPyAnMCcrbWluIDogbWluO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhocnMrIFwiOlwiKyBtaW4pO1xuICAgICAgICBpZihocnNfbWluID09PSAnaHJzJyB8fCAhaHJzX21pbikge1xuICAgICAgICAgICAgcmV0dXJuIGhycztcbiAgICAgICAgfSBlbHNlIGlmKGhyc19taW4gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJyk7XG4gICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gZXJyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0RGF5VGVtcGVyYXR1cmVVbml0KCkge1xuICAgICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgbGV0IG1heFRlbXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JlY2FzdERheU1heFRlbXAnKSk7XG4gICAgICAgIGxldCBtaW5UZW1wcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9yZWNhc3REYXlNaW5UZW1wJykpO1xuXG4gICAgICAgIGZvcihsZXQgbWF4VGVtcCBpbiBtYXhUZW1wcykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBtYXhUZW1wc1ttYXhUZW1wXTtcbiAgICAgICAgICAgIGxldCBkYXlJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpLnNwbGl0KCdkYXlGb3JlY2FzdERheScpWzBdO1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdCgnZGF5Rm9yZWNhc3REYXknKVsxXTtcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KCdnZXRBdmVyYWdlJywge2RheUluZGV4LCBhdHRyaWJ1dGVOYW1lfSk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWVbYWN0aXZlVW5pdF0gKyAnIMKwJyArIGFjdGl2ZVVuaXQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgbWluVGVtcCBpbiBtaW5UZW1wcykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBtaW5UZW1wc1ttaW5UZW1wXTtcbiAgICAgICAgICAgIGxldCBkYXlJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpLnNwbGl0KCdkYXlGb3JlY2FzdERheScpWzBdO1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdCgnZGF5Rm9yZWNhc3REYXknKVsxXTtcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KCdnZXRBdmVyYWdlJywge2RheUluZGV4LCBhdHRyaWJ1dGVOYW1lfSk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWVbYWN0aXZlVW5pdF0gKyAnIMKwJyArIGFjdGl2ZVVuaXQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0RGF5Q2FyZChkYXlDYXJkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRheUNhcmQpO1xuICAgICAgICBsZXQgc3BsaXRWYWx1ZSA9ICdkYXlGb3JlY2FzdERheSc7XG4gICAgICAgIGxldCBkYXlDYXJkSWQgPSBkYXlDYXJkLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGRheUluZGV4ID0gZGF5Q2FyZElkLmNoYXJBdCgwKTtcbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiBkYXlDYXJkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlTmFtZSA9IGNoaWxkLmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdChzcGxpdFZhbHVlKVsxXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoJ2dldEF2ZXJhZ2UnLCB7ZGF5SW5kZXgsIGF0dHJpYnV0ZU5hbWV9KTtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IGdvb2QgcHJhY3RpY2Ugc29ycnlcbiAgICAgICAgICAgIHN3aXRjaChhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnRGF5TmFtZSc6XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXkgPSBmb3JtYXREYXlEYXRlKGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudGV4dENvbnRlbnQgPSBkYXkuc3BsaXQoJywgJylbMF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1dlYXRoZXJJY29uJzogXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNyYyA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdXZWF0aGVyVHlwZSc6XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGNhc2UgJ01heFRlbXAnOlxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVthY3RpdmVVbml0XSArICcgwrAnICsgYWN0aXZlVW5pdC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdNaW5UZW1wJzpcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGFjdGl2ZVVuaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hpbGQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVthY3RpdmVVbmldICsgJyDCsCcgKyBhY3RpdmVVbmkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9yZWNhc3REYXlUZW1wZXJhdHVyZVVuaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQ2hhbmNlT2ZSYWluJzpcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5jZU9mUmFpbkNoaWxkID0gY2hpbGQubGFzdENoaWxkO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlICsgJyAlJztcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQoY2hhbmNlT2ZSYWluQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdXaW5kU3BlZWQnOlxuICAgICAgICAgICAgICAgICAgICBsZXQgd2luZFNwZWVkQ2hpbGQgPSBjaGlsZC5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWVbJ2twaCddICsgJyBrcGgnO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZCh3aW5kU3BlZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gIHVwZGF0ZUZvcmVjYXN0RGF5Qm9keSgpe1xuICAgICAgICBjb25zdCBmb3JlY2FzdERheUNhcmRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JlY2FzdERheUNhcmQnKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF5Q2FyZHMpO1xuICAgICAgICBmb3IobGV0IGNhcmQgaW4gZm9yZWNhc3REYXlDYXJkcykge1xuICAgICAgICAgICAgdXBkYXRlRm9yZWNhc3REYXlDYXJkKGZvcmVjYXN0RGF5Q2FyZHNbY2FyZF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheVZhbHVlQWNjb3JkaW5nVG9Gb3JlY2FzdERheUNhcmRDbGlja2VkKGRheUluZGV4KSB7XG4gICAgICAgIGlmKGRheUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB1cGRhdGVBbGxEaXNwbGF5VmFsdWVzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB1cGRhdGluZyB0aGUgc2xpZGVyIHZhbHVlIGFuZCB0aGUgbGFiZWwgdmFsdWVzIGhlcmUgc2luY2UgaSB3YXMgbm90IGFibGUgdG8gZmluZCBhIHNvbHV0aW9uIHRvIHVwZGF0ZSB0aGVtIGluIHVwZGF0ZWFsbGRpc3BsYXlcbiAgICAgICAgICAgIC8vIHZhbHVlIGZ1bmN0aW9uIHdpdGhvdXQgdXNpbmcgaWYgYW5kIGVsc2Ugd2hpY2ggbWlnaHQgbWFrZSBpdCBqYW5rIGFuZCBkaWZmaWN1bHQgdG8gdW5kZXIgc3RhbmQgd2l0aCBhbGwgdGhlIHVuZGVmaW5lZFxuICAgICAgICAgICAgLy8gYW5kIG51bGwgdmFsdWVzIGkgYW0gc2VuZGluZyBpdCB0byBtYWtlIGl0IHdvcmsgd2hpY2ggbWFrZXMgaXQgYWxyZWFkeSB2ZXJ5IGphbmsgc28gc29ycnlcbiAgICAgICAgICAgIHVwZGF0ZUZvcmVjYXN0U2xpZGVyVmFsdWUoJzAnKTtcbiAgICAgICAgICAgIHVwZGF0ZUZvcmVDYXN0U2xpZGVyTGFiZWxzKCcwJyk7XG4gICAgICAgICAgICB1cGRhdGVBbGxEaXNwbGF5VmFsdWVzKCdnZXREYXlIb3VybHknLCAwLCBOdW1iZXIoZGF5SW5kZXgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVGb3JlY2FzdERheUNhcmQoKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZvcmVjYXN0RGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpO1xuICAgICAgICBjb25zdCBjdXJyZW50RGF5Q2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcwZGF5Rm9yZWNhc3RDYXJkJyk7XG4gICAgICAgIGlmKCEgY3VycmVudERheUNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVGb3JlY2FzdERheUNhcmQnKSkge1xuICAgICAgICAgICAgYWN0aXZlRm9yZWNhc3REYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlRm9yZWNhc3REYXlDYXJkJyk7XG4gICAgICAgICAgICBjdXJyZW50RGF5Q2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVGb3JlY2FzdERheUNhcmQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlQWxsRGlzcGxheVZhbHVlcyxcbiAgICAgICAgdXBkYXRlVGVtcGVyYXR1cmVVbml0c0NoYW5nZWQsXG4gICAgICAgIHVwZGF0ZUZvcmVjYXN0SG91ckluZm8sXG4gICAgICAgIHVwZGF0ZUVycm9yLFxuICAgICAgICB1cGRhdGVEaXNwbGF5VmFsdWVBY2NvcmRpbmdUb0ZvcmVjYXN0RGF5Q2FyZENsaWNrZWQsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ29udHJvbChvcHRpb24pIHtcbiAgICBpZihvcHRpb24uZnVuY3Rpb25Db2RlID09PSAxKSB7XG4gICAgICAgIHVwZGF0ZS51cGRhdGVBbGxEaXNwbGF5VmFsdWVzKCk7XG4gICAgfSBlbHNlIGlmKG9wdGlvbi5mdW5jdGlvbkNvZGUgPT09IDIpIHtcbiAgICAgICAgdXBkYXRlLnVwZGF0ZVRlbXBlcmF0dXJlVW5pdHNDaGFuZ2VkKCk7XG4gICAgfSBlbHNlIGlmKG9wdGlvbi5mdW5jdGlvbkNvZGUgPT09IDMpIHtcbiAgICAgICAgdXBkYXRlLnVwZGF0ZUZvcmVjYXN0SG91ckluZm8oKTtcbiAgICB9IGVsc2UgaWYob3B0aW9uLmZ1bmN0aW9uQ29kZSA9PT0gNCkge1xuICAgICAgICB1cGRhdGUudXBkYXRlRXJyb3Iob3B0aW9uLmVycm9yKTtcbiAgICB9IGVsc2UgaWYob3B0aW9uLmZ1bmN0aW9uQ29kZSA9PT0gNSkge1xuICAgICAgICB1cGRhdGUudXBkYXRlRGlzcGxheVZhbHVlQWNjb3JkaW5nVG9Gb3JlY2FzdERheUNhcmRDbGlja2VkKG9wdGlvbi5kYXlJbmRleCk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==