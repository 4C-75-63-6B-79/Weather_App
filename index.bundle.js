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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --background-color: black;\n    --white-color: white;\n}\n\nbody {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: var(--white-color);\n\n    background-color: var(--background-color);\n    display: flex;\n    flex-direction: column;\n}\n\n#mainInfoBody {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#rightInfoBody,\n#leftInfoBody {\n    display: flex;\n    flex-direction: column;\n    /* max-width: 40%; */\n}\n\n#location {\n    font-size: 2.2rem;\n    line-height: 1;\n    margin-bottom: 1rem;\n}\n\n#dayDate,\n#time {\n    font-size: .9rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n#time {\n    margin-top: 0.15rem;\n}\n\n#tempInfoBody {\n    margin-top: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 0.75rem;\n}\n\n#weatherIcon {\n    width: 4rem;\n}\n\n#temperature {\n    font-size: 3.2rem;\n    line-height: 1;\n}\n\n#tempUnitBody {\n    display: flex;\n    flex-direction: column;\n}\n\n#celcius,\n#farenheit {\n    line-height: 1;\n    font-size: 1.4rem;\n    padding: 0.3rem;\n}\n\n#celcius {\n    border-bottom: 2px solid var(--white-color);\n}\n\n#farenheit {\n    border-top: 2px solid var(--white-color);\n}\n\n.activeUnit {\n    font-weight: 700;\n    font-size: 1.55rem;\n}\n\n#weatherType {\n    margin-top: 0.4rem;\n    font-size: 2.5rem;\n    line-height: 1;\n    font-weight: 600;\n}\n\n#locationSearch {\n    margin-top: 1rem;\n    color: var(--white-color);\n    background-color: var(--background-color);\n    border: none;\n    outline: none;\n    padding-left: 0.4rem;\n    padding-bottom: 0.2rem;\n    font-size: 0.85rem;\n    font-weight: 500;\n    border-bottom: 2px solid var(--white-color);\n}\n\n#error {\n    margin-top: 0.25rem;\n    line-height: 1;\n    font-size: 0.8rem;\n    font-weight: 600;\n}\n\n.rightInfoSubBody {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin-bottom: 0.8rem;\n    gap: 0.5rem;\n}\n\n.rightInfoSubBody img {\n    width: 32px;\n}\n\n.subBodyInfo {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.subBodyInfoType {\n    line-height: 1;\n    margin-bottom: 0.3rem;\n    font-size: 0.75rem;\n    font-weight: 800;\n}\n\n.subBodyInfoValue {\n    line-height: 1;\n    font-size: 1.2rem;\n    font-weight: 650;\n}\n\n#sliderControlBody {\n    padding: 1rem;\n    display: flex;\n    margin-top: 1.5rem;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#forecastSlider {\n    width: 100%;\n    height: 5px;\n    margin-bottom: 0.75rem;\n    outline: none;\n    appearance: none;\n    background-color: var(--white-color);\n    /* border: 2px solid black; */\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-webkit-slider-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: var(--background-color);\n    cursor: pointer;\n    border: 2px solid var(--white-color);\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-moz-range-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: var(--background-color);\n    cursor: pointer;\n    border: 2px solid var(--white-color);\n    border-radius: 0.25rem;\n}\n\n#hourLabels {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; \n    width: 100%;\n}\n\n/*These the labels where time is mentioned under slider*/\noption {   \n    padding: .2rem 0.2rem 0.2rem 0.75rem;\n    font-size: 1.1rem;\n    font-weight: 650;\n}\n\n#forecastDayBody {\n    padding: 1rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.forecastDayCard {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.forecastDayCard .forecastDayName {\n    font-size: 1.4rem;\n    font-weight: 650;\n    line-height: 1;\n    margin-bottom: 0.6rem;\n    flex-grow: 1 1 auto;\n}\n\n.forecastDayCard img {\n    width: 65px;\n}\n\n.forecastDayCard .forecastDayWeatherType {\n    font-size: 1.25rem;\n    font-weight: 625;\n    line-height: 1;\n    margin-top: 0.25rem;\n    margin-bottom: 0.4rem;\n}\n\n.forecastDayCard .forecastDayMaxTemp,\n.forecastDayCard .forecastDayMinTemp,\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed {\n    font-size: 1.1rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed  {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    gap: 4px;\n}\n\n.forecastDayCard .forecastDayChanceOfRain img,\n.forecastDayCard .forecastDayWindSpeed img{\n    width: 20px;\n}\n\n.activeForecastDayCard {\n    /* border: 2px solid black; */\n    border-radius: 0.5rem;\n    background: linear-gradient(#4f4f4f, #000);\n}\n\n\n@media(max-width: 420px) {\n    #mainInfoBody {\n        flex-direction: column;\n        align-items: flex-start;\n        justify-items: flex-start;\n        gap: 10px;\n    }\n\n    #rightInfoBody{\n        flex-direction: row;\n        gap: 10px;\n        flex-wrap: wrap;\n    }\n\n    .rightInfoSubBody {\n        flex-direction: column;\n        justify-content: space-between;\n        \n    }\n\n    option {\n        padding: .15rem;\n        font-size: 1.0rem;\n        font-weight: 500;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,sHAAsH;IACtH,yBAAyB;;IAEzB,yCAAyC;IACzC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,mBAAmB;AACvB;;AAEA;;IAEI,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;IAEI,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,yCAAyC;IACzC,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,2CAA2C;AAC/C;;AAEA;IACI,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,gBAAgB;IAChB,oCAAoC;IACpC,6BAA6B;IAC7B,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,eAAe;IACf,oCAAoC;IACpC,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,yCAAyC;IACzC,eAAe;IACf,oCAAoC;IACpC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,WAAW;AACf;;AAEA,wDAAwD;AACxD;IACI,oCAAoC;IACpC,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;;;;IAII,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;;IAEI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;;IAEI,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,qBAAqB;IACrB,0CAA0C;AAC9C;;;AAGA;IACI;QACI,sBAAsB;QACtB,uBAAuB;QACvB,yBAAyB;QACzB,SAAS;IACb;;IAEA;QACI,mBAAmB;QACnB,SAAS;QACT,eAAe;IACnB;;IAEA;QACI,sBAAsB;QACtB,8BAA8B;;IAElC;;IAEA;QACI,eAAe;QACf,iBAAiB;QACjB,gBAAgB;IACpB;AACJ","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --background-color: black;\n    --white-color: white;\n}\n\nbody {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: var(--white-color);\n\n    background-color: var(--background-color);\n    display: flex;\n    flex-direction: column;\n}\n\n#mainInfoBody {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#rightInfoBody,\n#leftInfoBody {\n    display: flex;\n    flex-direction: column;\n    /* max-width: 40%; */\n}\n\n#location {\n    font-size: 2.2rem;\n    line-height: 1;\n    margin-bottom: 1rem;\n}\n\n#dayDate,\n#time {\n    font-size: .9rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n#time {\n    margin-top: 0.15rem;\n}\n\n#tempInfoBody {\n    margin-top: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 0.75rem;\n}\n\n#weatherIcon {\n    width: 4rem;\n}\n\n#temperature {\n    font-size: 3.2rem;\n    line-height: 1;\n}\n\n#tempUnitBody {\n    display: flex;\n    flex-direction: column;\n}\n\n#celcius,\n#farenheit {\n    line-height: 1;\n    font-size: 1.4rem;\n    padding: 0.3rem;\n}\n\n#celcius {\n    border-bottom: 2px solid var(--white-color);\n}\n\n#farenheit {\n    border-top: 2px solid var(--white-color);\n}\n\n.activeUnit {\n    font-weight: 700;\n    font-size: 1.55rem;\n}\n\n#weatherType {\n    margin-top: 0.4rem;\n    font-size: 2.5rem;\n    line-height: 1;\n    font-weight: 600;\n}\n\n#locationSearch {\n    margin-top: 1rem;\n    color: var(--white-color);\n    background-color: var(--background-color);\n    border: none;\n    outline: none;\n    padding-left: 0.4rem;\n    padding-bottom: 0.2rem;\n    font-size: 0.85rem;\n    font-weight: 500;\n    border-bottom: 2px solid var(--white-color);\n}\n\n#error {\n    margin-top: 0.25rem;\n    line-height: 1;\n    font-size: 0.8rem;\n    font-weight: 600;\n}\n\n.rightInfoSubBody {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin-bottom: 0.8rem;\n    gap: 0.5rem;\n}\n\n.rightInfoSubBody img {\n    width: 32px;\n}\n\n.subBodyInfo {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.subBodyInfoType {\n    line-height: 1;\n    margin-bottom: 0.3rem;\n    font-size: 0.75rem;\n    font-weight: 800;\n}\n\n.subBodyInfoValue {\n    line-height: 1;\n    font-size: 1.2rem;\n    font-weight: 650;\n}\n\n#sliderControlBody {\n    padding: 1rem;\n    display: flex;\n    margin-top: 1.5rem;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#forecastSlider {\n    width: 100%;\n    height: 5px;\n    margin-bottom: 0.75rem;\n    outline: none;\n    appearance: none;\n    background-color: var(--white-color);\n    /* border: 2px solid black; */\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-webkit-slider-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: var(--background-color);\n    cursor: pointer;\n    border: 2px solid var(--white-color);\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-moz-range-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: var(--background-color);\n    cursor: pointer;\n    border: 2px solid var(--white-color);\n    border-radius: 0.25rem;\n}\n\n#hourLabels {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; \n    width: 100%;\n}\n\n/*These the labels where time is mentioned under slider*/\noption {   \n    padding: .2rem 0.2rem 0.2rem 0.75rem;\n    font-size: 1.1rem;\n    font-weight: 650;\n}\n\n#forecastDayBody {\n    padding: 1rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.forecastDayCard {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.forecastDayCard .forecastDayName {\n    font-size: 1.4rem;\n    font-weight: 650;\n    line-height: 1;\n    margin-bottom: 0.6rem;\n    flex-grow: 1 1 auto;\n}\n\n.forecastDayCard img {\n    width: 65px;\n}\n\n.forecastDayCard .forecastDayWeatherType {\n    font-size: 1.25rem;\n    font-weight: 625;\n    line-height: 1;\n    margin-top: 0.25rem;\n    margin-bottom: 0.4rem;\n}\n\n.forecastDayCard .forecastDayMaxTemp,\n.forecastDayCard .forecastDayMinTemp,\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed {\n    font-size: 1.1rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed  {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    gap: 4px;\n}\n\n.forecastDayCard .forecastDayChanceOfRain img,\n.forecastDayCard .forecastDayWindSpeed img{\n    width: 20px;\n}\n\n.activeForecastDayCard {\n    /* border: 2px solid black; */\n    border-radius: 0.5rem;\n    background: linear-gradient(#4f4f4f, #000);\n}\n\n\n@media(max-width: 420px) {\n    #mainInfoBody {\n        flex-direction: column;\n        align-items: flex-start;\n        justify-items: flex-start;\n        gap: 10px;\n    }\n\n    #rightInfoBody{\n        flex-direction: row;\n        gap: 10px;\n        flex-wrap: wrap;\n    }\n\n    .rightInfoSubBody {\n        flex-direction: column;\n        justify-content: space-between;\n        \n    }\n\n    option {\n        padding: .15rem;\n        font-size: 1.0rem;\n        font-weight: 500;\n    }\n}\n"],"sourceRoot":""}]);
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

    return {
        getCurrent,
        setCurrent,
        setHourlyForecast, // for current day
        getHourlyForecast,
        setDayForecast, // for day that are ahead of current days
        getAverageForeCast,
        getHourlyDailyForecastData,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFB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QUFFVTtBQUNDO0FBQ0Y7QUFDUTtBQUNOO0FBQ0Y7QUFDQTtBQUNSLENBQUM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLDJEQUFNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHVEQUF1RDtBQUM3RztBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFhLEVBQUUsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhEQUFjO0FBQzlCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpRUFBYyxnQkFBZ0Isd0JBQXdCO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaUVBQWMsZ0JBQWdCLHdCQUF3QjtBQUN2RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpRUFBYyxnQkFBZ0Isd0JBQXdCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWM7QUFDZjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvZ2V0V2VhdGhlckluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy9tYWtlSHRtbEVsZW1lbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvcHJvY2Vzc19zdG9yZV92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy91cGRhdGVJbmZvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgLS13aGl0ZS1jb2xvcjogd2hpdGU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI21haW5JbmZvQm9keSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3JpZ2h0SW5mb0JvZHksXFxuI2xlZnRJbmZvQm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIG1heC13aWR0aDogNDAlOyAqL1xcbn1cXG5cXG4jbG9jYXRpb24ge1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNkYXlEYXRlLFxcbiN0aW1lIHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbiN0aW1lIHtcXG4gICAgbWFyZ2luLXRvcDogMC4xNXJlbTtcXG59XFxuXFxuI3RlbXBJbmZvQm9keSB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4jd2VhdGhlckljb24ge1xcbiAgICB3aWR0aDogNHJlbTtcXG59XFxuXFxuI3RlbXBlcmF0dXJlIHtcXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4jdGVtcFVuaXRCb2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NlbGNpdXMsXFxuI2ZhcmVuaGVpdCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbn1cXG5cXG4jY2VsY2l1cyB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbiNmYXJlbmhlaXQge1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbn1cXG5cXG4uYWN0aXZlVW5pdCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41NXJlbTtcXG59XFxuXFxuI3dlYXRoZXJUeXBlIHtcXG4gICAgbWFyZ2luLXRvcDogMC40cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNsb2NhdGlvblNlYXJjaCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmctbGVmdDogMC40cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbiNlcnJvciB7XFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnJpZ2h0SW5mb1N1YkJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnJpZ2h0SW5mb1N1YkJvZHkgaW1nIHtcXG4gICAgd2lkdGg6IDMycHg7XFxufVxcblxcbi5zdWJCb2R5SW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zdWJCb2R5SW5mb1R5cGUge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5zdWJCb2R5SW5mb1ZhbHVlIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjUwO1xcbn1cXG5cXG4jc2xpZGVyQ29udHJvbEJvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jZm9yZWNhc3RTbGlkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbiNmb3JlY2FzdFNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbiNmb3JlY2FzdFNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuI2hvdXJMYWJlbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLypUaGVzZSB0aGUgbGFiZWxzIHdoZXJlIHRpbWUgaXMgbWVudGlvbmVkIHVuZGVyIHNsaWRlciovXFxub3B0aW9uIHsgICBcXG4gICAgcGFkZGluZzogLjJyZW0gMC4ycmVtIDAuMnJlbSAwLjc1cmVtO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcXG59XFxuXFxuI2ZvcmVjYXN0RGF5Qm9keSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheU5hbWUge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcXG4gICAgZmxleC1ncm93OiAxIDEgYXV0bztcXG59XFxuXFxuLmZvcmVjYXN0RGF5Q2FyZCBpbWcge1xcbiAgICB3aWR0aDogNjVweDtcXG59XFxuXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlXZWF0aGVyVHlwZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYyNTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlNYXhUZW1wLFxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5TWluVGVtcCxcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheUNoYW5jZU9mUmFpbixcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheVdpbmRTcGVlZCB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4sXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlXaW5kU3BlZWQgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG59XFxuXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4gaW1nLFxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5V2luZFNwZWVkIGltZ3tcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5hY3RpdmVGb3JlY2FzdERheUNhcmQge1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzRmNGY0ZiwgIzAwMCk7XFxufVxcblxcblxcbkBtZWRpYShtYXgtd2lkdGg6IDQyMHB4KSB7XFxuICAgICNtYWluSW5mb0JvZHkge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAjcmlnaHRJbmZvQm9keXtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIH1cXG5cXG4gICAgLnJpZ2h0SW5mb1N1YkJvZHkge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIG9wdGlvbiB7XFxuICAgICAgICBwYWRkaW5nOiAuMTVyZW07XFxuICAgICAgICBmb250LXNpemU6IDEuMHJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0hBQXNIO0lBQ3RILHlCQUF5Qjs7SUFFekIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6Qix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUEsd0RBQXdEO0FBQ3hEO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBOzs7O0lBSUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDBDQUEwQztBQUM5Qzs7O0FBR0E7SUFDSTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0Qiw4QkFBOEI7O0lBRWxDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICAtLXdoaXRlLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jbWFpbkluZm9Cb2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcmlnaHRJbmZvQm9keSxcXG4jbGVmdEluZm9Cb2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogbWF4LXdpZHRoOiA0MCU7ICovXFxufVxcblxcbiNsb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI2RheURhdGUsXFxuI3RpbWUge1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuI3RpbWUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjE1cmVtO1xcbn1cXG5cXG4jdGVtcEluZm9Cb2R5IHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDAuNzVyZW07XFxufVxcblxcbiN3ZWF0aGVySWNvbiB7XFxuICAgIHdpZHRoOiA0cmVtO1xcbn1cXG5cXG4jdGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IDMuMnJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbiN0ZW1wVW5pdEJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY2VsY2l1cyxcXG4jZmFyZW5oZWl0IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxufVxcblxcbiNjZWxjaXVzIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuI2ZhcmVuaGVpdCB7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XFxufVxcblxcbi5hY3RpdmVVbml0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjU1cmVtO1xcbn1cXG5cXG4jd2VhdGhlclR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiAwLjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI2xvY2F0aW9uU2VhcmNoIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG59XFxuXFxuI2Vycm9yIHtcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucmlnaHRJbmZvU3ViQm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucmlnaHRJbmZvU3ViQm9keSBpbWcge1xcbiAgICB3aWR0aDogMzJweDtcXG59XFxuXFxuLnN1YkJvZHlJbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnN1YkJvZHlJbmZvVHlwZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnN1YkJvZHlJbmZvVmFsdWUge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XFxufVxcblxcbiNzbGlkZXJDb250cm9sQm9keSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNmb3JlY2FzdFNsaWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuI2ZvcmVjYXN0U2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuI2ZvcmVjYXN0U2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG5cXG4jaG91ckxhYmVscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKlRoZXNlIHRoZSBsYWJlbHMgd2hlcmUgdGltZSBpcyBtZW50aW9uZWQgdW5kZXIgc2xpZGVyKi9cXG5vcHRpb24geyAgIFxcbiAgICBwYWRkaW5nOiAuMnJlbSAwLjJyZW0gMC4ycmVtIDAuNzVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBmb250LXdlaWdodDogNjUwO1xcbn1cXG5cXG4jZm9yZWNhc3REYXlCb2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmZvcmVjYXN0RGF5Q2FyZCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5TmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXdlaWdodDogNjUwO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xcbiAgICBmbGV4LWdyb3c6IDEgMSBhdXRvO1xcbn1cXG5cXG4uZm9yZWNhc3REYXlDYXJkIGltZyB7XFxuICAgIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheVdlYXRoZXJUeXBlIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjI1O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheU1heFRlbXAsXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlNaW5UZW1wLFxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluLFxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5V2luZFNwZWVkIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheUNoYW5jZU9mUmFpbixcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheVdpbmRTcGVlZCAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheUNoYW5jZU9mUmFpbiBpbWcsXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlXaW5kU3BlZWQgaW1ne1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmFjdGl2ZUZvcmVjYXN0RGF5Q2FyZCB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNGY0ZjRmLCAjMDAwKTtcXG59XFxuXFxuXFxuQG1lZGlhKG1heC13aWR0aDogNDIwcHgpIHtcXG4gICAgI21haW5JbmZvQm9keSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICNyaWdodEluZm9Cb2R5e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcblxcbiAgICAucmlnaHRJbmZvU3ViQm9keSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgb3B0aW9uIHtcXG4gICAgICAgIHBhZGRpbmc6IC4xNXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IG1ha2VEb20gIGZyb20gJy4vbW9kdWxlcy9tYWtlSHRtbEVsZW1lbnRzLmpzJztcbmltcG9ydCBnZXRXZWF0aGVySW5mbyBmcm9tICcuL21vZHVsZXMvZ2V0V2VhdGhlckluZm8uanMnO1xuXG5jb25zb2xlLmxvZygnd2VhdGhlciBhcHAnKTtcblxubWFrZURvbSgpO1xuZ2V0V2VhdGhlckluZm8oJ0dyZWVud2ljaCcpO1xuXG5cblxuIiwiaW1wb3J0IHdlYXRoZXJTZXRfR2V0IGZyb20gXCIuL3Byb2Nlc3Nfc3RvcmVfdmFsdWVzLmpzXCI7XG5pbXBvcnQgdXBkYXRlQ29udHJvbCBmcm9tIFwiLi91cGRhdGVJbmZvLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJJbmZvKGxvY2F0aW9uTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0wNTM3ODVlYTY4N2M0NDcyOTllNzA5MjYyMjI4MTImcT0ke2xvY2F0aW9uTmFtZX0mZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9gLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLm9rKTtcbiAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09ICcyMDAnKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgd2VhdGhlclNldF9HZXQoJ3NldCcsIGRhdGEpO1xuICAgICAgICAgICAgdXBkYXRlQ29udHJvbCh7ZnVuY3Rpb25Db2RlOiAxfSk7XG4gICAgICAgIH0gZWxzZSBpZighcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiYWQgcmVxdWVzdCcpO1xuICAgICAgICAgICAgbGV0IGVycm9yID0gJ1NvcnJ5LiBCYWQgcmVxdWVzdC4gTm8gbG9jYXRpb24gZm91bmQgd2l0aCBzdWNoIG5hbWUuJztcbiAgICAgICAgICAgIHVwZGF0ZUNvbnRyb2woe2Z1bmN0aW9uQ29kZTogNCwgZXJyb3J9KTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBIYXBwZW5lZCcpOyAgXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuXG59IFxuXG4iLCJpbXBvcnQgdGVzdEdldFdlYXRoZXIgZnJvbSBcIi4vZ2V0V2VhdGhlckluZm8uanNcIjtcbmltcG9ydCB1cGRhdGVDb250cm9sIGZyb20gXCIuL3VwZGF0ZUluZm8uanNcIjtcblxuaW1wb3J0IGltZ1VybCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmdcIjtcbmltcG9ydCBmZWVsc0xpa2UgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvZmVlbHNMaWtlLnN2Z1wiO1xuaW1wb3J0IGh1bWlkaXR5IGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2h1bWlkaXR5LnN2Z1wiO1xuaW1wb3J0IGNoYW5jZU9mUmFpbiBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9jaGFuY2VPZlJhaW4uc3ZnXCI7XG5pbXBvcnQgd2luZFNwZWVkIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3dpbmRTcGVlZC5zdmdcIjtcbmltcG9ydCBwcmVzc3VyZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9wcmVzc3VyZS5zdmdcIjtcbmltcG9ydCByYWluRHJvcCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9yYWluZHJvcC5zdmdcIjtcbmltcG9ydCB3aW5kIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL3dpbmQuc3ZnXCI7IC8vIGZvciB0aGUgZm9yZWNhc3QgY2FyZHNcblxuY29uc3QgRE9NID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIG1ha2VEaXYoaWQgPSBudWxsLCBjbGFzc05hbWUgPSBudWxsLCB0ZXh0Q29udGVudCwgZGF0YUF0dHJpYnV0ZSwgZGF0YUF0dHJpYnV0ZVZhbHVlID0gJycsIHRpdGxlID1udWxsKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYoaWQpIHtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRleHRDb250ZW50KSB7XG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBpZihkYXRhQXR0cmlidXRlKSB7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUsIGRhdGFBdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGl0bGUpIHtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGl0bGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUltYWdlKGlkPW51bGwsIHVybD1pbWdVcmwpIHtcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpZihpZCkge1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaW1nLnNyYyA9IHVybDtcbiAgICAgICAgcmV0dXJuIGltZztcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFpbkluZm9Cb2R5KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBsZXQgbWFpbkluZm9Cb2R5ID0gbWFrZURpdignbWFpbkluZm9Cb2R5Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkluZm9Cb2R5KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlTGVmdFJpZ2h0SW5mb0JvZHkoKSB7XG4gICAgICAgIGNvbnN0IG1haW5JbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluSW5mb0JvZHknKTtcbiAgICAgICAgbGV0IGxlZnRJbmZvQm9keSA9IG1ha2VEaXYoJ2xlZnRJbmZvQm9keScpO1xuICAgICAgICBsZXQgcmlnaHRJbmZvQm9keSA9IG1ha2VEaXYoJ3JpZ2h0SW5mb0JvZHknKTsgIFxuICAgICAgICBtYWluSW5mb0JvZHkuYXBwZW5kQ2hpbGQobGVmdEluZm9Cb2R5KTtcbiAgICAgICAgbWFpbkluZm9Cb2R5LmFwcGVuZENoaWxkKHJpZ2h0SW5mb0JvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkJvZHkoKSB7XG4gICAgICAgIGNvbnN0IGxlZnRJbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0SW5mb0JvZHknKTtcbiAgICAgICAgbGV0IGxvY2F0aW9uQm9keSA9IG1ha2VEaXYoJ2xvY2F0aW9uJywgbnVsbCwgJ0xvY2F0aW9uJywgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnLCAnTG9jYXRpb24gTmFtZScpO1xuICAgICAgICAvLyBsb2NhdGlvbkJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIGxvY2F0aW9uQm9keS50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XG4gICAgICAgIGxlZnRJbmZvQm9keS5hcHBlbmRDaGlsZChsb2NhdGlvbkJvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVEYXlEYXRlQm9keSgpIHtcbiAgICAgICAgY29uc3QgbGVmdEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRJbmZvQm9keScpO1xuICAgICAgICBsZXQgZGF5RGF0ZUJvZHkgPSBtYWtlRGl2KCdkYXlEYXRlJywgbnVsbCwgJ0RheSwgRGF0ZScsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJywgJ0RheSBhbmQgRGF0ZScpO1xuICAgICAgICAvLyBkYXlEYXRlQm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gZGF5RGF0ZUJvZHkudGV4dENvbnRlbnQgPSAnRGF5LCBEYXRlJztcbiAgICAgICAgbGVmdEluZm9Cb2R5LmFwcGVuZENoaWxkKGRheURhdGVCb2R5KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlVGltZUJvZHkoKSB7XG4gICAgICAgIGNvbnN0IGxlZnRJbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0SW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHRpbWVCb2R5ID0gbWFrZURpdigndGltZScsIG51bGwsICdUaW1lJywgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnLCAnVGltZSBpbiAyNCBociBmb3JtYXQnKTtcbiAgICAgICAgLy8gdGltZUJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIHRpbWVCb2R5LnRleHRDb250ZW50ID0gJ1RpbWUnO1xuICAgICAgICBsZWZ0SW5mb0JvZHkuYXBwZW5kQ2hpbGQodGltZUJvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVUZW1wSW5mb0JvZHkoKSB7XG4gICAgICAgIGNvbnN0IGxlZnRJbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0SW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHRlbXBJbmZvQm9keSA9IG1ha2VEaXYoJ3RlbXBJbmZvQm9keScpO1xuICAgICAgICBsZWZ0SW5mb0JvZHkuYXBwZW5kQ2hpbGQodGVtcEluZm9Cb2R5KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlV2VhdGhlckljb24oKSB7XG4gICAgICAgIGNvbnN0IHRlbXBJbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wSW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHdlYXRoZXJJY29uID0gbWFrZUltYWdlKCd3ZWF0aGVySWNvbicpO1xuICAgICAgICB3ZWF0aGVySWNvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgd2VhdGhlckljb24uc2V0QXR0cmlidXRlKCd0aXRsZScsICdXZWF0aGVyIEljb24nKTtcbiAgICAgICAgdGVtcEluZm9Cb2R5LmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlVGVtcFZhbHVlQm9keSgpIHtcbiAgICAgICAgY29uc3QgdGVtcEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBJbmZvQm9keScpO1xuICAgICAgICBsZXQgdGVtcFZhbHVlQm9keSA9IG1ha2VEaXYoJ3RlbXBlcmF0dXJlJywgbnVsbCwgJyMnLCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycsICdUZW1wZXJhdHVyZSBpbiDCsEMnKTtcbiAgICAgICAgLy8gdGVtcFZhbHVlQm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gdGVtcFZhbHVlQm9keS50ZXh0Q29udGVudCA9ICcjJztcbiAgICAgICAgdGVtcEluZm9Cb2R5LmFwcGVuZENoaWxkKHRlbXBWYWx1ZUJvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVUZW1wVW5pdEJvZHkoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBJbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wSW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHRlbXBVbml0Qm9keSA9IG1ha2VEaXYoJ3RlbXBVbml0Qm9keScpO1xuICAgICAgICB0ZW1wSW5mb0JvZHkuYXBwZW5kQ2hpbGQodGVtcFVuaXRCb2R5KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlVGVtcFVuaXRzKCkge1xuICAgICAgICBjb25zdCB0ZW1wVW5pdEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcFVuaXRCb2R5Jyk7XG4gICAgICAgIGxldCBjZWxjaXVzQm9keSA9IG1ha2VEaXYoJ2NlbGNpdXMnLCAnYWN0aXZlVW5pdCcsICfCsEMnLCBudWxsLCBudWxsLCAnQ2VsY2l1cycpO1xuICAgICAgICBsZXQgZmFyZW5oZWl0Qm9keSA9IG1ha2VEaXYoJ2ZhcmVuaGVpdCcsIG51bGwsICfCsEYnLCBudWxsLCBudWxsLCAnRmFyZW5oZWl0Jyk7XG4gICAgICAgIGNlbGNpdXNCb2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVtcFVuaXRzQ2xpY2tlZCk7XG4gICAgICAgIC8vIGNlbGNpdXNCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlVW5pdCcpO1xuICAgICAgICBmYXJlbmhlaXRCb2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVtcFVuaXRzQ2xpY2tlZCk7XG4gICAgICAgIC8vIGNlbGNpdXNCb2R5LnRleHRDb250ZW50ID0gJ8KwQyc7XG4gICAgICAgIC8vIGZhcmVuaGVpdEJvZHkudGV4dENvbnRlbnQgPSAnwrBGJztcbiAgICAgICAgdGVtcFVuaXRCb2R5LmFwcGVuZENoaWxkKGNlbGNpdXNCb2R5KTtcbiAgICAgICAgdGVtcFVuaXRCb2R5LmFwcGVuZENoaWxkKGZhcmVuaGVpdEJvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB0ZW1wVW5pdHNDbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGxldCB1bml0Q2xpY2tlZCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IGFjdGl2ZVVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlVW5pdCcpO1xuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBlcmF0dXJlJyk7XG4gICAgICAgIHRlbXAuc2V0QXR0cmlidXRlKCd0aXRsZScsIGBUZW1wZXJhdHVyZSBpbiDCsCR7dW5pdENsaWNrZWQuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfWApO1xuICAgICAgICBpZighdW5pdENsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVVbml0JykpIHtcbiAgICAgICAgICAgIGFjdGl2ZVVuaXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlVW5pdCcpO1xuICAgICAgICAgICAgdW5pdENsaWNrZWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlVW5pdCcpO1xuICAgICAgICAgICAgdXBkYXRlQ29udHJvbCh7ZnVuY3Rpb25Db2RlOiAyfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlV2VhdGhlclR5cGVJbmZvQm9keSgpIHtcbiAgICAgICAgY29uc3QgbGVmdEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRJbmZvQm9keScpO1xuICAgICAgICBsZXQgd2VhdGhlclR5cGVJbmZvQm9keSA9IG1ha2VEaXYoJ3dlYXRoZXJUeXBlJywgbnVsbCwgJ1dlYXRoZXIgVHlwZScsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJywgJ1dlYXRoZXIgQ29uZGl0aW9uJyk7XG4gICAgICAgIC8vIHdlYXRoZXJUeXBlSW5mb0JvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIHdlYXRoZXJUeXBlSW5mb0JvZHkudGV4dENvbnRlbnQgPSAnV2VhdGhlciBUeXBlJztcbiAgICAgICAgbGVmdEluZm9Cb2R5LmFwcGVuZENoaWxkKHdlYXRoZXJUeXBlSW5mb0JvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVTZWFyY2hCb3goKSB7XG4gICAgICAgIGNvbnN0IGxlZnRJbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0SW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHNlYXJjaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHNlYXJjaEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uU2VhcmNoJyk7XG4gICAgICAgIHNlYXJjaEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc2VhcmNoJyk7XG4gICAgICAgIHNlYXJjaEJveC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCBMb2NhdGlvbi4uLicpO1xuICAgICAgICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQuY29kZSA9PT0gJ0VudGVyJyB8fCBldmVudC5jb2RlID09PSAnTnVtcGFkRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgdGVzdEdldFdlYXRoZXIoc2VhcmNoQm94LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxlZnRJbmZvQm9keS5hcHBlbmRDaGlsZChzZWFyY2hCb3gpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVycm9yUmVwb3J0ZXJCb2R5KCkge1xuICAgICAgICBjb25zdCBsZWZ0SW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCBlcnJvclJlcG9ydGVyQm9keSA9IG1ha2VEaXYoJ2Vycm9yJywgbnVsbCwgJycsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIGVycm9yUmVwb3J0ZXJCb2R5LnNldEF0dHJpYnV0ZSgnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICAvLyBlcnJvclJlcG9ydGVyQm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBsZWZ0SW5mb0JvZHkuYXBwZW5kQ2hpbGQoZXJyb3JSZXBvcnRlckJvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVSaWdodEluZm9TdWJCb2R5KGlkLCBpbmZvVHlwZVRleHQsIGluZm9WYWx1ZVRleHQsIHVybCkge1xuICAgICAgICBjb25zdCByaWdodEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0SW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHN1YkJvZHlNYWluID0gbWFrZURpdihudWxsLCAncmlnaHRJbmZvU3ViQm9keScpO1xuICAgICAgICBsZXQgaW1nID0gbWFrZUltYWdlKG51bGwsIHVybCk7XG4gICAgICAgIGxldCBzdWJCb2R5SW5mbyA9IG1ha2VEaXYobnVsbCwgJ3N1YkJvZHlJbmZvJyk7XG4gICAgICAgIGxldCBpbmZvVHlwZSA9IG1ha2VEaXYobnVsbCwgJ3N1YkJvZHlJbmZvVHlwZScsIGluZm9UeXBlVGV4dCk7XG4gICAgICAgIC8vIGluZm9UeXBlLnRleHRDb250ZW50ID0gaW5mb1R5cGVUZXh0O1xuICAgICAgICBsZXQgaW5mb1ZhbHVlID0gbWFrZURpdihpZCwgJ3N1YkJvZHlJbmZvVmFsdWUnLCBpbmZvVmFsdWVUZXh0LCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycsIGluZm9UeXBlVGV4dCk7XG4gICAgICAgIC8vIGluZm9WYWx1ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gaW5mb1ZhbHVlLnRleHRDb250ZW50ID0gaW5mb1ZhbHVlVGV4dDtcbiAgICBcbiAgICAgICAgc3ViQm9keUluZm8uYXBwZW5kQ2hpbGQoaW5mb1R5cGUpO1xuICAgICAgICBzdWJCb2R5SW5mby5hcHBlbmRDaGlsZChpbmZvVmFsdWUpO1xuICAgICAgICBzdWJCb2R5TWFpbi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBzdWJCb2R5TWFpbi5hcHBlbmRDaGlsZChzdWJCb2R5SW5mbyk7XG4gICAgICAgIHJpZ2h0SW5mb0JvZHkuYXBwZW5kQ2hpbGQoc3ViQm9keU1haW4pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVJpZ2h0SW5mb0JvZHkoKSB7XG4gICAgICAgIGNyZWF0ZVJpZ2h0SW5mb1N1YkJvZHkoJ2ZlZWxzTGlrZScsICdGZWVscyBMaWtlJywgJ3ZhbHVlIMKwQycsIGZlZWxzTGlrZSk7XG4gICAgICAgIGNyZWF0ZVJpZ2h0SW5mb1N1YkJvZHkoJ2h1bWlkaXR5JywgJ0h1bWlkaXR5JywgJ3ZhbHVlICUnLCBodW1pZGl0eSk7XG4gICAgICAgIGNyZWF0ZVJpZ2h0SW5mb1N1YkJvZHkoJ2NoYW5jZU9mUmFpbicsICdDaGFuY2UgT2YgUmFpbicsICd2YWx1ZSAlJywgY2hhbmNlT2ZSYWluKTtcbiAgICAgICAgY3JlYXRlUmlnaHRJbmZvU3ViQm9keSgnd2luZFNwZWVkJywgJ1dpbmQgU3BlZWQnLCAndmFsdWUga20vaCcsIHdpbmRTcGVlZCk7XG4gICAgICAgIGNyZWF0ZVJpZ2h0SW5mb1N1YkJvZHkoJ3ByZXNzdXJlJywgJ1ByZXNzdXJlJywgJ3ZhbHVlIG1iJywgcHJlc3N1cmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNpbGRlckJvZHkoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGxldCBzbGlkZXJDb250cm9sQm9keSA9IG1ha2VEaXYoJ3NsaWRlckNvbnRyb2xCb2R5Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2xpZGVyQ29udHJvbEJvZHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNsaWRlclRpY2tzKCkge1xuICAgICAgICBsZXQgZGF0YWxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICAgICAgICBkYXRhbGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJMYWJlbHMnKTtcbiAgICAgICAgZGF0YWxpc3Quc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPDk7IGkrKykge1xuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgLy8gb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtpfWApOyAvLyBub3QgdXNpbmcgdGhlIHZhbHVlIGF0dHJpYnV0ZSBhcyB3ZSBqdXN0IHdhbnQgdG8gZGlzcGxheSB0aGUgbGFiZWwgYW5kIHRoZSB2YWx1ZSBpcyBkaXJlY3RseSB0YWtlbiBmcm9uIHRoZSBzbGlkZXIgXG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdsYWJlbCcsIGAke2l9YCk7IC8vIGxhYmVsIGlzIGhlcmUgZm9yIG1lIHRoZSB1cGRhdGVkaXNwbGF5IGluZm8gd2lsbCB1cGRhdGUgdGhlIGxhYmVsXG4gICAgICAgICAgICBkYXRhbGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhbGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTbGlkZXIoKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlckNvbnRyb2xCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlckNvbnRyb2xCb2R5Jyk7XG4gICAgICAgIGxldCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JlY2FzdFNsaWRlcicpO1xuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ21heCcsICcxNDM5Jyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzAnKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnc3RlcCcsICdhbnknKTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2xpZGVyVmFsdWVDaGFuZ2VkKTtcbiAgICAgICAgc2xpZGVyQ29udHJvbEJvZHkuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcbiAgICAgICAgbGV0IHRpY2tzID0gY3JlYXRlU2xpZGVyVGlja3MoMjQpOyAvLyBubyBuZWVkIHRvIGFkZCB0aGUgdGlja3MgdG8gdGhlIGxpc3QgYXR0cmlidXRlIG9mIHRoZSBzbGlkZXIgc2luY2UgdGhlbiBpdCBuZWVkIHRvIGJlIGNoYW5nZWQgZWFjaCB0aW1lIGhvdXJseSBvciBkYWlseSBzZWxlY3RlZC5cbiAgICAgICAgLy8gc2xpZGVyLnNldEF0dHJpYnV0ZSgnbGlzdCcsIHRpY2tzLmdldEF0dHJpYnV0ZSgnaScpKVxuICAgICAgICBzbGlkZXJDb250cm9sQm9keS5hcHBlbmRDaGlsZCh0aWNrcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2xpZGVyVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB1cGRhdGVDb250cm9sKHtmdW5jdGlvbkNvZGU6IDN9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JlY2FzdERheUJvZHkoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGxldCBmb3JlY2FzdERheUJvZHkgPSBtYWtlRGl2KCdmb3JlY2FzdERheUJvZHknKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb3JlY2FzdERheUJvZHkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVN0eWxlT2ZUaGVGb3JlY2FzdERheUNhcmRDbGlja2VkKHRhcmdldEluZGV4TnVtYmVyKSB7XG4gICAgICAgIGxldCBmb3JlY2FzdERheUNhcmRDbGlja2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFyZ2V0SW5kZXhOdW1iZXJ9ZGF5Rm9yZWNhc3RDYXJkYCk7XG4gICAgICAgIGxldCBjdXJyZW50QWN0aXZlRm9yZWNhc3REYXlDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpO1xuICAgICAgICBpZihjdXJyZW50QWN0aXZlRm9yZWNhc3REYXlDYXJkLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlRm9yZWNhc3REYXlDYXJkJykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVGb3JlY2FzdERheUNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlRm9yZWNhc3REYXlDYXJkJyk7XG4gICAgICAgICAgICBmb3JlY2FzdERheUNhcmRDbGlja2VkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9yZWNhc3REYXlDYXJkQ2xpY2tlZChldmVudCkge1xuICAgICAgICBsZXQgdGFyZ2V0SW5kZXhOdW1iZXIgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpLnNwbGl0KCcnKVswXTtcbiAgICAgICAgY2hhbmdlU3R5bGVPZlRoZUZvcmVjYXN0RGF5Q2FyZENsaWNrZWQodGFyZ2V0SW5kZXhOdW1iZXIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpLnNwbGl0KCcnKVswXSk7XG4gICAgICAgIC8vIGNhbGwgdXBkYXRlSW5mbyBzbyB0aGF0IHRoZSBkaXNwbGF5IEluZm8gY2FuIGJlIHVwZGF0ZWQgb24gY2xpY2tlZCBvZiBmb3JlY2FzdERheSBjYXJkXG4gICAgICAgIHVwZGF0ZUNvbnRyb2woe2Z1bmN0aW9uQ29kZTogNSwgZGF5SW5kZXg6IE51bWJlcih0YXJnZXRJbmRleE51bWJlcil9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JlQ2FzdERheUNhcmQoaWQpIHtcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVjYXN0RGF5Qm9keScpO1xuICAgICAgICBsZXQgZm9yZWNhc3REYXlDYXJkID0gbWFrZURpdihgJHtpZH1kYXlGb3JlY2FzdENhcmRgLCdmb3JlY2FzdERheUNhcmQnKTtcbiAgICAgICAgaWYoaWQgPT09IDApIHtcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVGb3JlY2FzdERheUNhcmQnKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JlY2FzdERheUNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JlY2FzdERheUNhcmRDbGlja2VkKTtcblxuICAgICAgICBsZXQgZm9yZWNhc3REYXlOYW1lID0gbWFrZURpdihgJHtpZH1kYXlGb3JlY2FzdERheURheU5hbWVgLCAnZm9yZWNhc3REYXlOYW1lJywgYERheSAke2lkfWAsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJywgJ0RheScpO1xuICAgICAgICBsZXQgZm9yZWNhc3REYXlXZWF0aGVySWNvbiA9IG1ha2VJbWFnZShgJHtpZH1kYXlGb3JlY2FzdERheVdlYXRoZXJJY29uYCk7IC8vIHRoaXMgaXMgbWFrZSBhIGltYWdlIHNvIGRvbnQgcGFzcyB0aGUgZGl2IGZ1bmN0aW9uIHBhcmFtZXRlcnNcbiAgICAgICAgbGV0IGZvcmVjYXN0RGF5V2VhdGhlclR5cGUgPSBtYWtlRGl2KGAke2lkfWRheUZvcmVjYXN0RGF5V2VhdGhlclR5cGVgLCAnZm9yZWNhc3REYXlXZWF0aGVyVHlwZScsIGAke2lkfSBXZWF0aGVyIFR5cGVgLCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycsICdXZWF0aGVyIENvbmRpdGlvbicpO1xuICAgICAgICBsZXQgZm9yZWNhc3REYXlNYXhUZW1wID0gbWFrZURpdihgJHtpZH1kYXlGb3JlY2FzdERheU1heFRlbXBgLCAnZm9yZWNhc3REYXlNYXhUZW1wJywgYCR7aWR9IE1heCBUZW1wICNgLCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycsICdNYXhpbXVtIFRlbXBlcmF0dXJlJyk7XG4gICAgICAgIGxldCBmb3JlY2FzdERheU1pblRlbXAgPSBtYWtlRGl2KGAke2lkfWRheUZvcmVjYXN0RGF5TWluVGVtcGAsICdmb3JlY2FzdERheU1pblRlbXAnLCBgJHtpZH0gTWluIFRlbXAgI2AsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJywgJ01pbmltdW0gVGVtcGVyYXR1cmUnKTtcbiAgICAgICAgbGV0IGZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluID0gbWFrZURpdihgJHtpZH1kYXlGb3JlY2FzdERheUNoYW5jZU9mUmFpbmAsICdmb3JlY2FzdERheUNoYW5jZU9mUmFpbicsIGAke2lkfSB2YWx1ZSAlYCwgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnLCAnQ2hhbmNlIG9mIFJhaW4nKTtcbiAgICAgICAgbGV0IHJhaW5JbWcgPSBtYWtlSW1hZ2UoYCR7aWR9cmFpbkltZ2AsIHJhaW5Ecm9wKTtcbiAgICAgICAgZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4uYXBwZW5kQ2hpbGQocmFpbkltZyk7XG4gICAgICAgIGxldCBmb3JlY2FzdERheVdpbmRTcGVlZCA9IG1ha2VEaXYoYCR7aWR9ZGF5Rm9yZWNhc3REYXlXaW5kU3BlZWRgLCAnZm9yZWNhc3REYXlXaW5kU3BlZWQnLCBgJHtpZH0gdmFsdWUga3BoYCwgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnLCAnV2luZCBTcGVlZCcpO1xuICAgICAgICBsZXQgd2luZEltZyA9IG1ha2VJbWFnZShgJHtpZH13aW5kSW1nYCwgd2luZCk7XG4gICAgICAgIGZvcmVjYXN0RGF5V2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRJbWcpO1xuXG4gICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5hcHBlbmRDaGlsZChmb3JlY2FzdERheU5hbWUpO1xuICAgICAgICBmb3JlY2FzdERheUNhcmQuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlXZWF0aGVySWNvbik7XG4gICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5hcHBlbmRDaGlsZChmb3JlY2FzdERheVdlYXRoZXJUeXBlKTtcbiAgICAgICAgZm9yZWNhc3REYXlDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5TWF4VGVtcCk7XG4gICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5hcHBlbmRDaGlsZChmb3JlY2FzdERheU1pblRlbXApO1xuICAgICAgICBmb3JlY2FzdERheUNhcmQuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4pO1xuICAgICAgICBmb3JlY2FzdERheUNhcmQuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlXaW5kU3BlZWQpO1xuICAgICAgICBmb3JlY2FzdERheUJvZHkuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlDYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBbGxGb3JlY2FzdERheUNhcmQoKSB7XG4gICAgICAgIC8vIG51bWJlck9mRGF5Rm9yZWNhc3REYXRhQXZhaWxhYmxlIGRlcGVuZHMgb24gdGhlIG51bWJlciBvZiBkYXkgZGF0YSB0aGF0IGFwaSBpcyBnaXZpbmcgcmlnaHQgbm93IGkgaGF2ZSBvbmx5IDIgYWhlYWQgZGF5IGZvcmUgY2FzdCBkYXRhIHNvIDJcbiAgICAgICAgbGV0IG51bWJlck9mRGF5Rm9yZWNhc3REYXRhQXZhaWxhYmxlID0gMztcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bnVtYmVyT2ZEYXlGb3JlY2FzdERhdGFBdmFpbGFibGU7IGkrKykge1xuICAgICAgICAgICAgY3JlYXRlRm9yZUNhc3REYXlDYXJkKGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgMTogY3JlYXRlTWFpbkluZm9Cb2R5KCksXG4gICAgICAgIDI6IGNyZWF0ZUxlZnRSaWdodEluZm9Cb2R5KCksXG4gICAgICAgIDM6IGNyZWF0ZUxvY2F0aW9uQm9keSgpLFxuICAgICAgICA0OiBjcmVhdGVEYXlEYXRlQm9keSgpLFxuICAgICAgICA1OiBjcmVhdGVUaW1lQm9keSgpLFxuICAgICAgICA2OiBjcmVhdGVUZW1wSW5mb0JvZHkoKSxcbiAgICAgICAgNzogY3JlYXRlV2VhdGhlckljb24oKSxcbiAgICAgICAgODogY3JlYXRlVGVtcFZhbHVlQm9keSgpLFxuICAgICAgICA5OiBjcmVhdGVUZW1wVW5pdEJvZHkoKSxcbiAgICAgICAgMTA6IGNyZWF0ZVRlbXBVbml0cygpLFxuICAgICAgICAxMTogY3JlYXRlV2VhdGhlclR5cGVJbmZvQm9keSgpLFxuICAgICAgICAxMjogY3JlYXRlU2VhcmNoQm94KCksXG4gICAgICAgIDEzOiBjcmVhdGVFcnJvclJlcG9ydGVyQm9keSgpLFxuICAgICAgICAxNDogcG9wdWxhdGVSaWdodEluZm9Cb2R5KCksXG4gICAgICAgIDE1OiBjcmVhdGVTaWxkZXJCb2R5KCksXG4gICAgICAgIDE2OiBjcmVhdGVTbGlkZXIoKSxcbiAgICAgICAgMTc6IGNyZWF0ZUZvcmVjYXN0RGF5Qm9keSgpLFxuICAgICAgICAxODogY3JlYXRlQWxsRm9yZWNhc3REYXlDYXJkKCksXG4gICAgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZURvbSgpIHtcbiAgICBmb3IobGV0IGRvbSBpbiBET00pIHtcbiAgICAgICAgZG9tO1xuICAgIH1cbn1cbiIsIlxuXG5jb25zdCB3ZWF0aGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdXJyZW50V2VhdGhlckF0dHJpYnV0ZVZhbHVlcywgY3VycmVudERheUhvdXJseUZvcmVjYXN0V2VhdGhlckF0dHJpYnV0ZVZhbHVlcywgZm9yZWNhc3REYXlBdHRyaWJ1dGVWYWx1ZXM7XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50KGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyQXR0cmlidXRlVmFsdWVzW2F0dHJpYnV0ZU5hbWVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnQoZGF0YSkge1xuICAgICAgICBjdXJyZW50V2VhdGhlckF0dHJpYnV0ZVZhbHVlcyA9IHt9O1xuICAgICAgICBjdXJyZW50V2VhdGhlckF0dHJpYnV0ZVZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICBkYXlEYXRlOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdCgnICcpWzBdLFxuICAgICAgICAgICAgdGltZTogZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoJyAnKVsxXSxcbiAgICAgICAgICAgIHdlYXRoZXJJY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZToge1xuICAgICAgICAgICAgICAgICdjJzogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgICAgICAgICAnZic6IGRhdGEuY3VycmVudC50ZW1wX2YsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2VhdGhlclR5cGU6IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgIGZlZWxzTGlrZToge1xuICAgICAgICAgICAgICAgIGM6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgICAgICAgICBmOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgICAgIGNoYW5jZU9mUmFpbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsnMCddLmhvdXJbTnVtYmVyKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KCcgJylbMV0uc3BsaXQoJzonKVswXSldLmNoYW5jZV9vZl9yYWluLFxuICAgICAgICAgICAgd2luZFNwZWVkOiB7XG4gICAgICAgICAgICAgICAga3BoOiBkYXRhLmN1cnJlbnQud2luZF9rcGgsXG4gICAgICAgICAgICAgICAgbXBoOiBkYXRhLmN1cnJlbnQud2luZF9tcGgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlc3N1cmU6IHtcbiAgICAgICAgICAgICAgICBtYjogZGF0YS5jdXJyZW50LnByZXNzdXJlX2luLFxuICAgICAgICAgICAgICAgIGluOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBob3VybHlXZWF0aGVyRGF0YU9iamVjdEZhY3RvcnkoZGF0YSkge1xuICAgICAgICBsZXQgb2JqZWN0ID0ge1xuICAgICAgICAgICAgZGF5RGF0ZTogZGF0YS50aW1lLnNwbGl0KCcgJylbMF0sXG4gICAgICAgICAgICB0aW1lOiBkYXRhLnRpbWUuc3BsaXQoJyAnKVsxXSxcbiAgICAgICAgICAgIHdlYXRoZXJJY29uOiBkYXRhLmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IHtcbiAgICAgICAgICAgICAgICAnYyc6IGRhdGEudGVtcF9jLFxuICAgICAgICAgICAgICAgICdmJzogZGF0YS50ZW1wX2YsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2VhdGhlclR5cGU6IGRhdGEuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBmZWVsc0xpa2U6IHtcbiAgICAgICAgICAgICAgICBjOiBkYXRhLmZlZWxzbGlrZV9jLFxuICAgICAgICAgICAgICAgIGY6IGRhdGEuZmVlbHNsaWtlX2YsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaHVtaWRpdHk6IGRhdGEuaHVtaWRpdHksXG4gICAgICAgICAgICBjaGFuY2VPZlJhaW46IGRhdGEuY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgICB3aW5kU3BlZWQ6IHtcbiAgICAgICAgICAgICAgICBrcGg6IGRhdGEud2luZF9rcGgsXG4gICAgICAgICAgICAgICAgbXBoOiBkYXRhLndpbmRfbXBoLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXNzdXJlOiB7XG4gICAgICAgICAgICAgICAgbWI6IGRhdGEucHJlc3N1cmVfaW4sXG4gICAgICAgICAgICAgICAgaW46IGRhdGEucHJlc3N1cmVfbWIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRIb3VybHlGb3JlY2FzdChkYXRhKSB7XG4gICAgICAgIGxldCBjdXJyZW50SG91ciA9IGN1cnJlbnRXZWF0aGVyQXR0cmlidXRlVmFsdWVzWyd0aW1lJ10uc3BsaXQoJzonKVswXTtcbiAgICAgICAgbGV0IHRvZGF5SG91ckRhdGEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXIuc2xpY2UoTnVtYmVyKGN1cnJlbnRIb3VyKSk7XG4gICAgICAgIGxldCB0b21vcnJvd0hvdXJEYXRhID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyLnNsaWNlKDAsTnVtYmVyKGN1cnJlbnRIb3VyKSk7XG4gICAgICAgIGxldCBmb3JlY2FzdDI0SG91ckRhdGEgPSB0b2RheUhvdXJEYXRhLmNvbmNhdCh0b21vcnJvd0hvdXJEYXRhKTtcbiAgICAgICAgdG9kYXlIb3VyRGF0YSA9IFtdO1xuICAgICAgICB0b21vcnJvd0hvdXJEYXRhID0gW107XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0MjRIb3VyRGF0YSk7XG4gICAgICAgIGN1cnJlbnREYXlIb3VybHlGb3JlY2FzdFdlYXRoZXJBdHRyaWJ1dGVWYWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBob3VyRGF0YSBpbiBmb3JlY2FzdDI0SG91ckRhdGEpIHtcbiAgICAgICAgICAgIGxldCBvYmplY3QgPSBob3VybHlXZWF0aGVyRGF0YU9iamVjdEZhY3RvcnkoZm9yZWNhc3QyNEhvdXJEYXRhW2hvdXJEYXRhXSk7XG4gICAgICAgICAgICBjdXJyZW50RGF5SG91cmx5Rm9yZWNhc3RXZWF0aGVyQXR0cmlidXRlVmFsdWVzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhob3VybHlGb3JlY2FzdFdlYXRoZXJBdHRyaWJ1dGVWYWx1ZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhvdXJseUZvcmVjYXN0KHBvcywgYXR0cmlidXRlTmFtZSkge1xuICAgICAgICByZXR1cm4gY3VycmVudERheUhvdXJseUZvcmVjYXN0V2VhdGhlckF0dHJpYnV0ZVZhbHVlc1twb3NdW2F0dHJpYnV0ZU5hbWVdO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhdmVyYWdlRm9yZWNhc3REYXRhT2JqZWN0RmFjdG9yeShkYXRhLCBpbmRleCkge1xuICAgICAgICBsZXQgb2JqZWN0ID0ge1xuICAgICAgICAgICAgYXN0cm86IHtcbiAgICAgICAgICAgICAgICBtb29ucmlzZTogZGF0YS5hc3Ryby5tb29ucmlzZSxcbiAgICAgICAgICAgICAgICBtb29uc2V0OiBkYXRhLmFzdHJvLm1vb25zZXQsXG4gICAgICAgICAgICAgICAgc3VucmlzZTogZGF0YS5hc3Ryby5zdW5yaXNlLFxuICAgICAgICAgICAgICAgIHN1bnNldDogZGF0YS5hc3Ryby5zdW5zZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXZlcmFnZToge1xuICAgICAgICAgICAgICAgIERheU5hbWU6IGRhdGEuZGF0ZSxcbiAgICAgICAgICAgICAgICBXZWF0aGVySWNvbjogZGF0YS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICAgICAgV2VhdGhlclR5cGU6IGRhdGEuZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIE1heFRlbXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYzogZGF0YS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICBmOiBkYXRhLmRheS5tYXh0ZW1wX2ZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIE1pblRlbXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYzogZGF0YS5kYXkubWludGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICBmOiBkYXRhLmRheS5taW50ZW1wX2ZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIENoYW5jZU9mUmFpbjogZGF0YS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgICAgICAgV2luZFNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgIGtwaDogZGF0YS5kYXkubWF4d2luZF9rcGgsXG4gICAgICAgICAgICAgICAgICAgIG1waDogZGF0YS5kYXkubWF4d2luZF9tcGhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG91cmx5OiBbXSxcbiAgICAgICAgfVxuICAgICAgICBpZihpbmRleCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb2JqZWN0IHJldHVybmVkJyk7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaG91ckRhdGEgaW4gZGF0YS5ob3VyKSB7XG4gICAgICAgICAgICBvYmplY3QuaG91cmx5LnB1c2goaG91cmx5V2VhdGhlckRhdGFPYmplY3RGYWN0b3J5KGRhdGEuaG91cltob3VyRGF0YV0pKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QuaG91cmx5WzFdKTtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREYXlGb3JlY2FzdChkYXRhKSB7XG4gICAgICAgIGxldCBhdmVyYWdlRm9yZWNhc3REYXRhID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICAgICAgZm9yZWNhc3REYXlBdHRyaWJ1dGVWYWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBkYXRhIGluIGF2ZXJhZ2VGb3JlY2FzdERhdGEpIHtcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5QXR0cmlidXRlVmFsdWVzLnB1c2goYXZlcmFnZUZvcmVjYXN0RGF0YU9iamVjdEZhY3RvcnkoYXZlcmFnZUZvcmVjYXN0RGF0YVtkYXRhXSwgZGF0YSkpOyAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERheUF0dHJpYnV0ZVZhbHVlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QXZlcmFnZUZvcmVDYXN0KGRheUluZGV4LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIHJldHVybiBmb3JlY2FzdERheUF0dHJpYnV0ZVZhbHVlc1tOdW1iZXIoZGF5SW5kZXgpXS5hdmVyYWdlW2F0dHJpYnV0ZU5hbWVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhvdXJseURhaWx5Rm9yZWNhc3REYXRhKGRheUluZGV4LCBob3VySW5kZXgsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF5QXR0cmlidXRlVmFsdWVzW2RheUluZGV4XS5ob3VybHlbaG91ckluZGV4XVthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgIHJldHVybiAoZm9yZWNhc3REYXlBdHRyaWJ1dGVWYWx1ZXNbZGF5SW5kZXhdLmhvdXJseVtob3VySW5kZXhdW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDdXJyZW50LFxuICAgICAgICBzZXRDdXJyZW50LFxuICAgICAgICBzZXRIb3VybHlGb3JlY2FzdCwgLy8gZm9yIGN1cnJlbnQgZGF5XG4gICAgICAgIGdldEhvdXJseUZvcmVjYXN0LFxuICAgICAgICBzZXREYXlGb3JlY2FzdCwgLy8gZm9yIGRheSB0aGF0IGFyZSBhaGVhZCBvZiBjdXJyZW50IGRheXNcbiAgICAgICAgZ2V0QXZlcmFnZUZvcmVDYXN0LFxuICAgICAgICBnZXRIb3VybHlEYWlseUZvcmVjYXN0RGF0YSxcbiAgICB9XG5cbn0pKCk7XG5cbiAgICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYXRoZXJTZXRfR2V0KGZ1bmMsIG9wdGlvbikge1xuICAgIFxuICAgIHN3aXRjaChmdW5jKSB7XG4gICAgICAgIGNhc2UgJ2dldEN1cnJlbnQnOlxuICAgICAgICAgICAgcmV0dXJuIHdlYXRoZXIuZ2V0Q3VycmVudChvcHRpb24pO1xuICAgICAgICBjYXNlICdzZXQnOlxuICAgICAgICAgICAgd2VhdGhlci5zZXRDdXJyZW50KG9wdGlvbik7XG4gICAgICAgICAgICB3ZWF0aGVyLnNldEhvdXJseUZvcmVjYXN0KG9wdGlvbik7XG4gICAgICAgICAgICB3ZWF0aGVyLnNldERheUZvcmVjYXN0KG9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ2V0SG91cmx5JzpcbiAgICAgICAgICAgIHJldHVybih3ZWF0aGVyLmdldEhvdXJseUZvcmVjYXN0KG9wdGlvbi5ob3VySW5kZXgsIG9wdGlvbi5hdHRyaWJ1dGVOYW1lKSk7XG4gICAgICAgIGNhc2UgJ2dldEF2ZXJhZ2UnOlxuICAgICAgICAgICAgcmV0dXJuKHdlYXRoZXIuZ2V0QXZlcmFnZUZvcmVDYXN0KG9wdGlvbi5kYXlJbmRleCwgb3B0aW9uLmF0dHJpYnV0ZU5hbWUpKTtcbiAgICAgICAgY2FzZSAnZ2V0RGF5SG91cmx5JzpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXIuZ2V0SG91cmx5RGFpbHlGb3JlY2FzdERhdGEob3B0aW9uLmRheUluZGV4LCBvcHRpb24uaG91ckluZGV4LCBvcHRpb24uYXR0cmlidXRlTmFtZSkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uLmF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHdlYXRoZXIuZ2V0SG91cmx5RGFpbHlGb3JlY2FzdERhdGEob3B0aW9uLmRheUluZGV4LCBvcHRpb24uaG91ckluZGV4LCBvcHRpb24uYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59IiwiaW1wb3J0IHdlYXRoZXJTZXRfR2V0IGZyb20gXCIuL3Byb2Nlc3Nfc3RvcmVfdmFsdWVzXCI7XG5cbmNvbnN0IHVwZGF0ZSA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUFsbERpc3BsYXlWYWx1ZXMoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFDYXRlZ29yeSArICcgJyArIGhycyk7XG5cbiAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGVzZSBmdW5jdGlvbnMgdG8gYmUgY2FsbGVkIHdoZW4gd2UgYXJlIGNoYW5naW5nIHRoZSBzbGlkZXIgdmFsdWVcbiAgICAgICAgLy8gYnV0IHdlIHdhbnQgdGhlc2UgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkIGZvciBmaXJzdCB0aW1lIG9yIG5ldyBsb2NhdGlvbiBpcyBlbnRlcmVkXG4gICAgICAgIC8vIHdoZW4gdGhlIHNsaWRlciBpcyBpbiBjdXJyZW50IGhvdXIgcmFuZ2Ugd2Ugd2FudCB0aGUgdmFsdWVzIHRvIGJlIHRha2VuIGZyb20gdGhlIGN1cnJlbnQgZGF0YSBub3QgZm9yZWNhc3QgZGF0YVxuICAgICAgICAvLyB3aGVuIHNsaWRlciB2YWx1ZSBpcyBjaGFuZ2VkIGluIGN1cnJlbnQgaG91ciByYW5nZSB3ZSBzZW5kIG51bGwgaW4gYm90aCB0aGUgZGF0YSBjYXQgYW5kIGhycyB2YXJpYWJsZVxuICAgICAgICAvLyBvbiB0aGUgZmlyc3QgbG9hZCBvciBvbiBsb2FjdGlvbiBlbnRlcmVkIHRoZSBkYXRhIGNhdCBhbmQgaHJzIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyBzbyB0aGVzZSBmdW5jdGlvbnMgYXJlIGNhbGxlZCBvbiBmaXJzdCBsb2FkIGJ1dCBub3Qgd2hlbiBzbGlkZXIgdmFsdWUgaXMgY2hhbmdlZCBpbiB0aGUgY3VycmVudCBob3VyIHJhbmdlXG4gICAgICAgIC8vIGFzIHdlIGFyZSBzZW5kaW5nIG51bGwgaW4gdGhlIGZ1bmN0aW9uIHBhcmFtZXRlcnNcblxuICAgICAgICBpZihkYXRhQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCkgeyBcbiAgICAgICAgICAgIHVwZGF0ZUxvY2F0aW9uKCk7XG4gICAgICAgICAgICB1cGRhdGVGb3JlY2FzdFNsaWRlclZhbHVlKCk7XG4gICAgICAgICAgICB1cGRhdGVGb3JlQ2FzdFNsaWRlckxhYmVscygpO1xuICAgICAgICAgICAgdXBkYXRlRm9yZWNhc3REYXlCb2R5KCk7XG4gICAgICAgICAgICB1cGRhdGVBY3RpdmVGb3JlY2FzdERheUNhcmQoKVxuICAgICAgICAgICAgdXBkYXRlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZURheURhdGUoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlVGltZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVXZWF0aGVySWNvbihkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVUZW1wZXJhdHVyZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVXZWF0aGVyVHlwZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVGZWVsTGlrZVRlbXBlcmF0dXJlKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleCk7XG4gICAgICAgIHVwZGF0ZUh1bWlkaXR5KGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleCk7XG4gICAgICAgIHVwZGF0ZUNoYW5jZU9mUmFpbihkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVXaW5kU3BlZWQoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlUHJlc3N1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbigpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCAnbG9jYXRpb24nKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERheURhdGUoYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgICAgbGV0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuICAgICAgICBsZXQgd2Vla2RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGhydXNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gICAgICAgIGxldCBkYXRlU3VmZml4ID0gWyd0aCcsICdzdCcsICduZCcsICdyZCddO1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICBpZihkYXkgJSAxMCA8IDQpIHtcbiAgICAgICAgICAgIGRheSA9IGRheSArIGRhdGVTdWZmaXhbZGF5ICUgMTBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF5ID0gZGF5ICsgJ3RoJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2Vla2RheXNbZGF0ZS5nZXREYXkoKV0gKyBcIiwgXCIgKyBkYXkgKyAnLCAnICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyAnICcgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZURheURhdGUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlEYXRlJyk7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSB3ZWF0aGVyU2V0X0dldChkYXRhQ2F0ZWdvcnksIHtob3VySW5kZXg6IGhycywgYXR0cmlidXRlTmFtZTogaWQsIGRheUluZGV4OiBkYXl9KSB8fCB3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsIGlkKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGZvcm1hdERheURhdGUoYXR0cmlidXRlVmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KGRhdGFDYXRlZ29yeSwge2hvdXJJbmRleDogaHJzLCBhdHRyaWJ1dGVOYW1lOiBpZCwgZGF5SW5kZXg6IGRheX0pIHx8IHdlYXRoZXJTZXRfR2V0KCdnZXRDdXJyZW50JywgaWQpO1xuICAgICAgICAvLyB3ZSB3YW50IHRoZSB0aW1lIHRvIHVwZGF0ZSBvbiBjaGFuZ2Ugb2YgdGhlIHNsaWRlciBidXQgdGhlIHRpbWUgb24gbG9hZGluZyBvZiBuZXcgbG9hY3Rpb24gc2hvdWxkIGJlIHRha2VuIGZyb20gY3VycmVudFxuICAgICAgICAvLyB3aGVuIHRoZSBzbGlkZXIgaXMgY2hhbmdlZCB3ZSBzZW5kIHRoZSBkYXRhIGNhdGVnb3J5IHZhbHVlIHRoZW4gdGhlIHZhbHVlIG9mIHRpbWUgaXMgdXBkYXRlZCBhY2NvcmRpbmcgdG8gdGhlIGZvcmVjYXN0IHNsaWRlciB2YWx1ZSBvZiB0aW1lXG4gICAgICAgIC8vIHdoZW4gd2UgY2hhbmdlIHRoZSBzbGlkZXIgaW4gdGhlIGN1cnJlbnQgaG91ciByYW5nZSB3ZSBzZW5kIG51bGwgaW4gZGF0YSBjYXQgdmFsdWUgdGhlbiBhbHNvIHRoZSB2YWx1ZSBvZiB0aW1lIG5lZWQgdG8gYmUgdXBkYXRlZCBhY2NvcmRpbmcgdG8gZm9yZSBjYXN0IHNsaWRlciB2YWx1ZVxuICAgICAgICBpZihkYXRhQ2F0ZWdvcnkgfHwgZGF0YUNhdGVnb3J5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgbWluID0gcHJvY2Vzc1NsaWRlclZhbHVlKCdtaW4nKTtcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWUuc3BsaXQoJzonKVswXSArICc6JyArIG1pbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gTnVtYmVyKGF0dHJpYnV0ZVZhbHVlLnNwbGl0KCc6JylbMF0pIDwgMTAgPyAwICsgYXR0cmlidXRlVmFsdWUgOiBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlV2VhdGhlckljb24oZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVySWNvbicpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gYXR0cmlidXRlVmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRlbXBlcmF0dXJlKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXkpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KGRhdGFDYXRlZ29yeSwge2hvdXJJbmRleDogaHJzLCBhdHRyaWJ1dGVOYW1lOiBpZCwgZGF5SW5kZXg6IGRheX0pIHx8IHdlYXRoZXJTZXRfR2V0KCdnZXRDdXJyZW50JywgaWQpO1xuICAgICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlW2FjdGl2ZVVuaXRdO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyVHlwZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJUeXBlJyk7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSB3ZWF0aGVyU2V0X0dldChkYXRhQ2F0ZWdvcnksIHtob3VySW5kZXg6IGhycywgYXR0cmlidXRlTmFtZTogaWQsIGRheUluZGV4OiBkYXl9KSB8fCB3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsIGlkKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZlZWxMaWtlVGVtcGVyYXR1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc0xpa2UnKTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KGRhdGFDYXRlZ29yeSwge2hvdXJJbmRleDogaHJzLCBhdHRyaWJ1dGVOYW1lOiBpZCwgZGF5SW5kZXg6IGRheX0pIHx8IHdlYXRoZXJTZXRfR2V0KCdnZXRDdXJyZW50JywgaWQpO1xuICAgICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlW2FjdGl2ZVVuaXRdICsgJyDCsCcgKyBhY3RpdmVVbml0LnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSHVtaWRpdHkoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZSArIFwiICVcIjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2hhbmNlT2ZSYWluKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXkpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmNlT2ZSYWluJyk7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSB3ZWF0aGVyU2V0X0dldChkYXRhQ2F0ZWdvcnksIHtob3VySW5kZXg6IGhycywgYXR0cmlidXRlTmFtZTogaWQsIGRheUluZGV4OiBkYXl9KSB8fCB3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsIGlkKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlICsgXCIgJVwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVdpbmRTcGVlZChkYXRhQ2F0ZWdvcnksIGhycywgZGF5KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRTcGVlZCcpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVsna3BoJ10gKyBcIiBrcGhcIjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJlc3N1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzc3VyZScpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVsnbWInXSArIFwiIG1iXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3RTbGlkZXJWYWx1ZShzbGlkZXJWYWx1ZSkge1xuICAgICAgICAvLyBzbGlkZXIgdmFsdWUgaXMgdW5kZWZpbmVkIHVzdWFsbHkgYnV0IHdoZW4gdGhlIGZvcmVjYXN0IGRheSBjYXJkIGlzIGNsaWNrZWQgdGhpcyBpcyAwIHNpbmNlIGRheSBzdGFydHMgYXQgMDowMCBocnNcbiAgICAgICAgY29uc3QgZm9yZWNhc3RTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3RTbGlkZXInKTtcbiAgICAgICAgbGV0IGN1cnJlbnRNaW4gPSBzbGlkZXJWYWx1ZSB8fCBOdW1iZXIod2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCAndGltZScpLnNwbGl0KCc6JylbMV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50TWluKTtcbiAgICAgICAgZm9yZWNhc3RTbGlkZXIudmFsdWUgPSBgJHtOdW1iZXIoY3VycmVudE1pbil9YDtcbiAgICAgICAgLy8gZm9yZWNhc3RTbGlkZXIudmFsdWUgPSAnMCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9yZUNhc3RTbGlkZXJMYWJlbHMoZmlyc3RTbGlkZXJMYWJsZSkge1xuICAgICAgICBsZXQgY3VycmVudEhvdXIgPSBmaXJzdFNsaWRlckxhYmxlIHx8IE51bWJlcih3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsICd0aW1lJykuc3BsaXQoJzonKVswXSk7XG4gICAgICAgIGxldCBob3VyTGFiZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhvdXJMYWJlbHMpO1xuICAgICAgICBmb3IobGV0IGxhYmVsIGluIGhvdXJMYWJlbHMpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxhYmVsKTtcbiAgICAgICAgICAgIGlmKGxhYmVsID09PSAnMCcgfHwgbGFiZWwgPT09ICc4Jykge1xuICAgICAgICAgICAgICAgIGhvdXJMYWJlbHNbbGFiZWxdLmxhYmVsID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRIb3VyID0gTnVtYmVyKGN1cnJlbnRIb3VyKSArIDM7XG4gICAgICAgICAgICAgICAgY3VycmVudEhvdXIgPSBjdXJyZW50SG91ciA+IDIzID8gY3VycmVudEhvdXIlMjMtMSA6IGN1cnJlbnRIb3VyO1xuICAgICAgICAgICAgICAgIGhvdXJMYWJlbHNbbGFiZWxdLmxhYmVsID0gY3VycmVudEhvdXIgPCAxMCA/IGAwJHtjdXJyZW50SG91cn06MDBgIDogYCR7Y3VycmVudEhvdXJ9OjAwYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGVtcGVyYXR1cmVVbml0c0NoYW5nZWQoKSB7XG4gICAgICAgIGxldCBkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXg7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZvcmVjYXN0RGF5Q2FyZERheUluZGV4ID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVGb3JlY2FzdERheUNhcmQnKS5nZXRBdHRyaWJ1dGUoJ2lkJykuY2hhckF0KDApKTtcbiAgICAgICAgaWYoYWN0aXZlRm9yZWNhc3REYXlDYXJkRGF5SW5kZXggPT09IDApIHsgIC8vIGhlcmUgd2UgYXJlIGNoZWNraW5nIGlmIHRoZSBjdXJyZW50IGRheSBpcyBzZWxlY3RlZCBzbyB3ZSBnZXQgdGhlIGhvdXJseSBkYXRhIGJ1dCBpZiBub3QgdGhlbiBkYXlIb3VybHkgZGF0YVxuICAgICAgICAgICAgaWYoISAocHJvY2Vzc1NsaWRlclZhbHVlKCdocnMnKSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9ICdnZXRIb3VybHknO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBocnMgPSBudWxsO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgZGF0YUNhdGVnb3J5ID0gJ2dldERheUhvdXJseSc7XG4gICAgICAgICAgICBkYXlJbmRleCA9IGFjdGl2ZUZvcmVjYXN0RGF5Q2FyZERheUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGVtcGVyYXR1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlRmVlbExpa2VUZW1wZXJhdHVyZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVGb3JlY2FzdERheVRlbXBlcmF0dXJlVW5pdCgpOyAvLyB0aGlzIG9ubHkgdXBkYXRlcyB0aGUgY2FyZCB0ZW1wZXJhdHVyZSB1bml0cyBzbyBubyBhdHRyaWJ1dGUgbmVjZXNzYXJ5IGFzIGl0IGlzIGRvbmUgaW4gdGhhdCBmdW5jdGlvbiBcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3RIb3VySW5mbygpIHtcbiAgICAgICAgbGV0IGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleDtcbiAgICAgICAgY29uc3QgYWN0aXZlRm9yZWNhc3REYXlDYXJkRGF5SW5kZXggPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpLmdldEF0dHJpYnV0ZSgnaWQnKS5jaGFyQXQoMCkpO1xuICAgICAgICBpZihhY3RpdmVGb3JlY2FzdERheUNhcmREYXlJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgaWYoISAocHJvY2Vzc1NsaWRlclZhbHVlKCdocnMnKSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9ICdnZXRIb3VybHknO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBocnMgPSBudWxsO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgZGF0YUNhdGVnb3J5ID0gJ2dldERheUhvdXJseSc7XG4gICAgICAgICAgICBkYXlJbmRleCA9IGFjdGl2ZUZvcmVjYXN0RGF5Q2FyZERheUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHJzID0gcHJvY2Vzc1NsaWRlclZhbHVlKCdocnMnKTtcbiAgICAgICAgLy8gZGF0YUNhdGVnb3J5ID0gJ2dldEhvdXJseSc7XG4gICAgICAgIHVwZGF0ZUFsbERpc3BsYXlWYWx1ZXMoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzU2xpZGVyVmFsdWUoaHJzX21pbikge1xuICAgICAgICBsZXQgc2xpZGVyVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3RTbGlkZXInKS52YWx1ZS5zcGxpdCgnLicpWzBdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzbGlkZXJWYWx1ZSk7XG4gICAgICAgIGxldCBocnMgPSBNYXRoLmZsb29yKHNsaWRlclZhbHVlIC8gNjApO1xuICAgICAgICBsZXQgbWluID0gc2xpZGVyVmFsdWUgJSA2MDtcbiAgICAgICAgbWluID0gbWluIDwgMTAgPyAnMCcrbWluIDogbWluO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhocnMrIFwiOlwiKyBtaW4pO1xuICAgICAgICBpZihocnNfbWluID09PSAnaHJzJyB8fCAhaHJzX21pbikge1xuICAgICAgICAgICAgcmV0dXJuIGhycztcbiAgICAgICAgfSBlbHNlIGlmKGhyc19taW4gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJyk7XG4gICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gZXJyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0RGF5VGVtcGVyYXR1cmVVbml0KCkge1xuICAgICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgbGV0IG1heFRlbXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JlY2FzdERheU1heFRlbXAnKSk7XG4gICAgICAgIGxldCBtaW5UZW1wcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9yZWNhc3REYXlNaW5UZW1wJykpO1xuXG4gICAgICAgIGZvcihsZXQgbWF4VGVtcCBpbiBtYXhUZW1wcykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBtYXhUZW1wc1ttYXhUZW1wXTtcbiAgICAgICAgICAgIGxldCBkYXlJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpLnNwbGl0KCdkYXlGb3JlY2FzdERheScpWzBdO1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdCgnZGF5Rm9yZWNhc3REYXknKVsxXTtcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KCdnZXRBdmVyYWdlJywge2RheUluZGV4LCBhdHRyaWJ1dGVOYW1lfSk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWVbYWN0aXZlVW5pdF0gKyAnIMKwJyArIGFjdGl2ZVVuaXQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgbWluVGVtcCBpbiBtaW5UZW1wcykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBtaW5UZW1wc1ttaW5UZW1wXTtcbiAgICAgICAgICAgIGxldCBkYXlJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpLnNwbGl0KCdkYXlGb3JlY2FzdERheScpWzBdO1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdCgnZGF5Rm9yZWNhc3REYXknKVsxXTtcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KCdnZXRBdmVyYWdlJywge2RheUluZGV4LCBhdHRyaWJ1dGVOYW1lfSk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWVbYWN0aXZlVW5pdF0gKyAnIMKwJyArIGFjdGl2ZVVuaXQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0RGF5Q2FyZChkYXlDYXJkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRheUNhcmQpO1xuICAgICAgICBsZXQgc3BsaXRWYWx1ZSA9ICdkYXlGb3JlY2FzdERheSc7XG4gICAgICAgIGxldCBkYXlDYXJkSWQgPSBkYXlDYXJkLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGRheUluZGV4ID0gZGF5Q2FyZElkLmNoYXJBdCgwKTtcbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiBkYXlDYXJkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlTmFtZSA9IGNoaWxkLmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdChzcGxpdFZhbHVlKVsxXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoJ2dldEF2ZXJhZ2UnLCB7ZGF5SW5kZXgsIGF0dHJpYnV0ZU5hbWV9KTtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IGdvb2QgcHJhY3RpY2Ugc29ycnlcbiAgICAgICAgICAgIHN3aXRjaChhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnRGF5TmFtZSc6XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXkgPSBmb3JtYXREYXlEYXRlKGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudGV4dENvbnRlbnQgPSBkYXkuc3BsaXQoJywgJylbMF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1dlYXRoZXJJY29uJzogXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNyYyA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdXZWF0aGVyVHlwZSc6XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGNhc2UgJ01heFRlbXAnOlxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVthY3RpdmVVbml0XSArICcgwrAnICsgYWN0aXZlVW5pdC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdNaW5UZW1wJzpcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGFjdGl2ZVVuaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hpbGQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVthY3RpdmVVbmldICsgJyDCsCcgKyBhY3RpdmVVbmkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9yZWNhc3REYXlUZW1wZXJhdHVyZVVuaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQ2hhbmNlT2ZSYWluJzpcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5jZU9mUmFpbkNoaWxkID0gY2hpbGQubGFzdENoaWxkO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlICsgJyAlJztcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQoY2hhbmNlT2ZSYWluQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdXaW5kU3BlZWQnOlxuICAgICAgICAgICAgICAgICAgICBsZXQgd2luZFNwZWVkQ2hpbGQgPSBjaGlsZC5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWVbJ2twaCddICsgJyBrcGgnO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZCh3aW5kU3BlZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gIHVwZGF0ZUZvcmVjYXN0RGF5Qm9keSgpe1xuICAgICAgICBjb25zdCBmb3JlY2FzdERheUNhcmRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JlY2FzdERheUNhcmQnKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF5Q2FyZHMpO1xuICAgICAgICBmb3IobGV0IGNhcmQgaW4gZm9yZWNhc3REYXlDYXJkcykge1xuICAgICAgICAgICAgdXBkYXRlRm9yZWNhc3REYXlDYXJkKGZvcmVjYXN0RGF5Q2FyZHNbY2FyZF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheVZhbHVlQWNjb3JkaW5nVG9Gb3JlY2FzdERheUNhcmRDbGlja2VkKGRheUluZGV4KSB7XG4gICAgICAgIGlmKGRheUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB1cGRhdGVBbGxEaXNwbGF5VmFsdWVzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB1cGRhdGluZyB0aGUgc2xpZGVyIHZhbHVlIGFuZCB0aGUgbGFiZWwgdmFsdWVzIGhlcmUgc2luY2UgaSB3YXMgbm90IGFibGUgdG8gZmluZCBhIHNvbHV0aW9uIHRvIHVwZGF0ZSB0aGVtIGluIHVwZGF0ZWFsbGRpc3BsYXlcbiAgICAgICAgICAgIC8vIHZhbHVlIGZ1bmN0aW9uIHdpdGhvdXQgdXNpbmcgaWYgYW5kIGVsc2Ugd2hpY2ggbWlnaHQgbWFrZSBpdCBqYW5rIGFuZCBkaWZmaWN1bHQgdG8gdW5kZXIgc3RhbmQgd2l0aCBhbGwgdGhlIHVuZGVmaW5lZFxuICAgICAgICAgICAgLy8gYW5kIG51bGwgdmFsdWVzIGkgYW0gc2VuZGluZyBpdCB0byBtYWtlIGl0IHdvcmsgd2hpY2ggbWFrZXMgaXQgYWxyZWFkeSB2ZXJ5IGphbmsgc28gc29ycnlcbiAgICAgICAgICAgIHVwZGF0ZUZvcmVjYXN0U2xpZGVyVmFsdWUoJzAnKTtcbiAgICAgICAgICAgIHVwZGF0ZUZvcmVDYXN0U2xpZGVyTGFiZWxzKCcwJyk7XG4gICAgICAgICAgICB1cGRhdGVBbGxEaXNwbGF5VmFsdWVzKCdnZXREYXlIb3VybHknLCAwLCBOdW1iZXIoZGF5SW5kZXgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVGb3JlY2FzdERheUNhcmQoKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZvcmVjYXN0RGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpO1xuICAgICAgICBjb25zdCBjdXJyZW50RGF5Q2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcwZGF5Rm9yZWNhc3RDYXJkJyk7XG4gICAgICAgIGlmKCEgY3VycmVudERheUNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVGb3JlY2FzdERheUNhcmQnKSkge1xuICAgICAgICAgICAgYWN0aXZlRm9yZWNhc3REYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlRm9yZWNhc3REYXlDYXJkJyk7XG4gICAgICAgICAgICBjdXJyZW50RGF5Q2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVGb3JlY2FzdERheUNhcmQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlQWxsRGlzcGxheVZhbHVlcyxcbiAgICAgICAgdXBkYXRlVGVtcGVyYXR1cmVVbml0c0NoYW5nZWQsXG4gICAgICAgIHVwZGF0ZUZvcmVjYXN0SG91ckluZm8sXG4gICAgICAgIHVwZGF0ZUVycm9yLFxuICAgICAgICB1cGRhdGVEaXNwbGF5VmFsdWVBY2NvcmRpbmdUb0ZvcmVjYXN0RGF5Q2FyZENsaWNrZWQsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ29udHJvbChvcHRpb24pIHtcbiAgICBpZihvcHRpb24uZnVuY3Rpb25Db2RlID09PSAxKSB7XG4gICAgICAgIHVwZGF0ZS51cGRhdGVBbGxEaXNwbGF5VmFsdWVzKCk7XG4gICAgfSBlbHNlIGlmKG9wdGlvbi5mdW5jdGlvbkNvZGUgPT09IDIpIHtcbiAgICAgICAgdXBkYXRlLnVwZGF0ZVRlbXBlcmF0dXJlVW5pdHNDaGFuZ2VkKCk7XG4gICAgfSBlbHNlIGlmKG9wdGlvbi5mdW5jdGlvbkNvZGUgPT09IDMpIHtcbiAgICAgICAgdXBkYXRlLnVwZGF0ZUZvcmVjYXN0SG91ckluZm8oKTtcbiAgICB9IGVsc2UgaWYob3B0aW9uLmZ1bmN0aW9uQ29kZSA9PT0gNCkge1xuICAgICAgICB1cGRhdGUudXBkYXRlRXJyb3Iob3B0aW9uLmVycm9yKTtcbiAgICB9IGVsc2UgaWYob3B0aW9uLmZ1bmN0aW9uQ29kZSA9PT0gNSkge1xuICAgICAgICB1cGRhdGUudXBkYXRlRGlzcGxheVZhbHVlQWNjb3JkaW5nVG9Gb3JlY2FzdERheUNhcmRDbGlja2VkKG9wdGlvbi5kYXlJbmRleCk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==