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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    display: flex;\n    flex-direction: column;\n}\n\n#mainInfoBody {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#rightInfoBody,\n#leftInfoBody {\n    display: flex;\n    flex-direction: column;\n    /* max-width: 40%; */\n}\n\n#location {\n    font-size: 2.2rem;\n    line-height: 1;\n    margin-bottom: 1rem;\n}\n\n#dayDate,\n#time {\n    font-size: .9rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n#time {\n    margin-top: 0.15rem;\n}\n\n#tempInfoBody {\n    margin-top: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 0.75rem;\n}\n\n#weatherIcon {\n    width: 4rem;\n}\n\n#temperature {\n    font-size: 3.2rem;\n    line-height: 1;\n}\n\n#tempUnitBody {\n    display: flex;\n    flex-direction: column;\n}\n\n#celcius,\n#farenheit {\n    line-height: 1;\n    font-size: 1.4rem;\n    padding: 0.3rem;\n}\n\n#celcius {\n    border-bottom: 2px solid black;\n}\n\n#farenheit {\n    border-top: 2px solid black;\n}\n\n.activeUnit {\n    font-weight: 700;\n}\n\n#weatherType {\n    margin-top: 0.4rem;\n    font-size: 2.5rem;\n    line-height: 1;\n    font-weight: 600;\n}\n\n#locationSearch {\n    margin-top: 1rem;\n    border: none;\n    outline: none;\n    padding-left: 0.4rem;\n    padding-bottom: 0.2rem;\n    font-size: 0.85rem;\n    font-weight: 500;\n    border-bottom: 2px solid black;\n}\n\n#error {\n    margin-top: 0.25rem;\n    line-height: 1;\n    font-size: 0.8rem;\n    font-weight: 600;\n}\n\n.rightInfoSubBody {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin-bottom: 0.8rem;\n    gap: 0.5rem;\n}\n\n.rightInfoSubBody img {\n    width: 32px;\n}\n\n.subBodyInfo {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.subBodyInfoType {\n    line-height: 1;\n    margin-bottom: 0.3rem;\n    font-size: 0.75rem;\n    font-weight: 800;\n}\n\n.subBodyInfoValue {\n    line-height: 1;\n    font-size: 1.2rem;\n    font-weight: 650;\n}\n\n#sliderControlBody {\n    padding: 1rem;\n    display: flex;\n    margin-top: 1.5rem;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#forecastSlider {\n    width: 100%;\n    height: 5px;\n    margin-bottom: 0.75rem;\n    outline: none;\n    appearance: none;\n    background-color: black;\n    /* border: 2px solid black; */\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-webkit-slider-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: white;\n    cursor: pointer;\n    border: 2px solid black;\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-moz-range-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: white;\n    cursor: pointer;\n    border: 2px solid black;\n    border-radius: 0.25rem;\n}\n\n#hourLabels {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; \n    width: 100%;\n}\n\n/*These the labels where time is mentioned under slider*/\noption {   \n    padding: .2rem 0.2rem 0.2rem 0.75rem;\n    font-size: 1.1rem;\n    font-weight: 650;\n}\n\n#forecastDayBody {\n    padding: 1rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.forecastDayCard {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.forecastDayCard .forecastDayName {\n    font-size: 1.4rem;\n    font-weight: 650;\n    line-height: 1;\n    margin-bottom: 0.6rem;\n    flex-grow: 1 1 auto;\n}\n\n.forecastDayCard img {\n    width: 65px;\n}\n\n.forecastDayCard .forecastDayWeatherType {\n    font-size: 1.25rem;\n    font-weight: 625;\n    line-height: 1;\n    margin-top: 0.25rem;\n    margin-bottom: 0.4rem;\n}\n\n.forecastDayCard .forecastDayMaxTemp,\n.forecastDayCard .forecastDayMinTemp,\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed {\n    font-size: 1.1rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed  {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    gap: 4px;\n}\n\n.forecastDayCard .forecastDayChanceOfRain img,\n.forecastDayCard .forecastDayWindSpeed img{\n    width: 20px;\n}\n\n.activeForecastDayCard {\n    /* border: 2px solid black; */\n    border-radius: 0.5rem;\n    background: linear-gradient(#fff, #bfbfbf);\n}\n\n\n@media(max-width: 420px) {\n    #mainInfoBody {\n        flex-direction: column;\n        align-items: flex-start;\n        justify-items: flex-start;\n        gap: 10px;\n    }\n\n    #rightInfoBody{\n        flex-direction: row;\n        gap: 10px;\n        flex-wrap: wrap;\n    }\n\n    .rightInfoSubBody {\n        flex-direction: column;\n        justify-content: space-between;\n        \n    }\n\n    option {\n        padding: .15rem;\n        font-size: 1.0rem;\n        font-weight: 500;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    display: flex;\n    flex-direction: column;\n}\n\n#mainInfoBody {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#rightInfoBody,\n#leftInfoBody {\n    display: flex;\n    flex-direction: column;\n    /* max-width: 40%; */\n}\n\n#location {\n    font-size: 2.2rem;\n    line-height: 1;\n    margin-bottom: 1rem;\n}\n\n#dayDate,\n#time {\n    font-size: .9rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n#time {\n    margin-top: 0.15rem;\n}\n\n#tempInfoBody {\n    margin-top: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 0.75rem;\n}\n\n#weatherIcon {\n    width: 4rem;\n}\n\n#temperature {\n    font-size: 3.2rem;\n    line-height: 1;\n}\n\n#tempUnitBody {\n    display: flex;\n    flex-direction: column;\n}\n\n#celcius,\n#farenheit {\n    line-height: 1;\n    font-size: 1.4rem;\n    padding: 0.3rem;\n}\n\n#celcius {\n    border-bottom: 2px solid black;\n}\n\n#farenheit {\n    border-top: 2px solid black;\n}\n\n.activeUnit {\n    font-weight: 700;\n}\n\n#weatherType {\n    margin-top: 0.4rem;\n    font-size: 2.5rem;\n    line-height: 1;\n    font-weight: 600;\n}\n\n#locationSearch {\n    margin-top: 1rem;\n    border: none;\n    outline: none;\n    padding-left: 0.4rem;\n    padding-bottom: 0.2rem;\n    font-size: 0.85rem;\n    font-weight: 500;\n    border-bottom: 2px solid black;\n}\n\n#error {\n    margin-top: 0.25rem;\n    line-height: 1;\n    font-size: 0.8rem;\n    font-weight: 600;\n}\n\n.rightInfoSubBody {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin-bottom: 0.8rem;\n    gap: 0.5rem;\n}\n\n.rightInfoSubBody img {\n    width: 32px;\n}\n\n.subBodyInfo {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.subBodyInfoType {\n    line-height: 1;\n    margin-bottom: 0.3rem;\n    font-size: 0.75rem;\n    font-weight: 800;\n}\n\n.subBodyInfoValue {\n    line-height: 1;\n    font-size: 1.2rem;\n    font-weight: 650;\n}\n\n#sliderControlBody {\n    padding: 1rem;\n    display: flex;\n    margin-top: 1.5rem;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#forecastSlider {\n    width: 100%;\n    height: 5px;\n    margin-bottom: 0.75rem;\n    outline: none;\n    appearance: none;\n    background-color: black;\n    /* border: 2px solid black; */\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-webkit-slider-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: white;\n    cursor: pointer;\n    border: 2px solid black;\n    border-radius: 0.25rem;\n}\n\n#forecastSlider::-moz-range-thumb {\n    appearance: none;\n    width: 10px;\n    height: 30px;\n    background-color: white;\n    cursor: pointer;\n    border: 2px solid black;\n    border-radius: 0.25rem;\n}\n\n#hourLabels {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; \n    width: 100%;\n}\n\n/*These the labels where time is mentioned under slider*/\noption {   \n    padding: .2rem 0.2rem 0.2rem 0.75rem;\n    font-size: 1.1rem;\n    font-weight: 650;\n}\n\n#forecastDayBody {\n    padding: 1rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.forecastDayCard {\n    padding: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n\n.forecastDayCard .forecastDayName {\n    font-size: 1.4rem;\n    font-weight: 650;\n    line-height: 1;\n    margin-bottom: 0.6rem;\n    flex-grow: 1 1 auto;\n}\n\n.forecastDayCard img {\n    width: 65px;\n}\n\n.forecastDayCard .forecastDayWeatherType {\n    font-size: 1.25rem;\n    font-weight: 625;\n    line-height: 1;\n    margin-top: 0.25rem;\n    margin-bottom: 0.4rem;\n}\n\n.forecastDayCard .forecastDayMaxTemp,\n.forecastDayCard .forecastDayMinTemp,\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed {\n    font-size: 1.1rem;\n    font-weight: 600;\n    line-height: 1;\n}\n\n.forecastDayCard .forecastDayChanceOfRain,\n.forecastDayCard .forecastDayWindSpeed  {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    gap: 4px;\n}\n\n.forecastDayCard .forecastDayChanceOfRain img,\n.forecastDayCard .forecastDayWindSpeed img{\n    width: 20px;\n}\n\n.activeForecastDayCard {\n    /* border: 2px solid black; */\n    border-radius: 0.5rem;\n    background: linear-gradient(#fff, #bfbfbf);\n}\n\n\n@media(max-width: 420px) {\n    #mainInfoBody {\n        flex-direction: column;\n        align-items: flex-start;\n        justify-items: flex-start;\n        gap: 10px;\n    }\n\n    #rightInfoBody{\n        flex-direction: row;\n        gap: 10px;\n        flex-wrap: wrap;\n    }\n\n    .rightInfoSubBody {\n        flex-direction: column;\n        justify-content: space-between;\n        \n    }\n\n    option {\n        padding: .15rem;\n        font-size: 1.0rem;\n        font-weight: 500;\n    }\n}\n"],"sourceRoot":""}]);
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
        let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=053785ea687c447299e70926222812&q=${locationName}&days=3&aqi=no&alerts=no`, {mode: 'cors'});
        // console.log(response.status);
        // console.log(response.ok);
        if(response.status == '200') {
            // console.log(response);
            let data = await response.json();
            console.log(data);
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
        let locationBody = makeDiv('location', null, 'Location', 'data-updateable', 'yes');
        // locationBody.setAttribute('data-updateable', 'yes');
        // locationBody.textContent = 'Location';
        leftInfoBody.appendChild(locationBody);
    }
    
    function createDayDateBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let dayDateBody = makeDiv('dayDate', null, 'Day, Date', 'data-updateable', 'yes');
        // dayDateBody.setAttribute('data-updateable', 'yes');
        // dayDateBody.textContent = 'Day, Date';
        leftInfoBody.appendChild(dayDateBody);
    }
    
    function createTimeBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let timeBody = makeDiv('time', null, 'Time', 'data-updateable', 'yes');
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
        tempInfoBody.appendChild(weatherIcon);
    }
    
    function createTempValueBody() {
        const tempInfoBody = document.getElementById('tempInfoBody');
        let tempValueBody = makeDiv('temperature', null, '#', 'data-updateable', 'yes');
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
        let celciusBody = makeDiv('celcius', 'activeUnit', '°C');
        let farenheitBody = makeDiv('farenheit', null, '°F');
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
        if(!unitClicked.classList.contains('activeUnit')) {
            activeUnit.classList.remove('activeUnit');
            unitClicked.classList.add('activeUnit');
            (0,_updateInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"])({functionCode: 2});
        }
    }
    
    function createWeatherTypeInfoBody() {
        const leftInfoBody = document.getElementById('leftInfoBody');
        let weatherTypeInfoBody = makeDiv('weatherType', null, 'Weather Type', 'data-updateable', 'yes');
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
        let infoValue = makeDiv(id, 'subBodyInfoValue', infoValueText, 'data-updateable', 'yes');
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

        let forecastDayName = makeDiv(`${id}dayForecastDayDayName`, 'forecastDayName', `Day ${id}`, 'data-updateable', 'yes');
        let forecastDayWeatherIcon = makeImage(`${id}dayForecastDayWeatherIcon`); // this is make a image so dont pass the div function parameters
        let forecastDayWeatherType = makeDiv(`${id}dayForecastDayWeatherType`, 'forecastDayWeatherType', `${id} Weather Type`, 'data-updateable', 'yes');
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

module.exports = __webpack_require__.p + "438324ee31e23d0343e2.svg";

/***/ }),

/***/ "./src/assets/images/feelsLike.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/feelsLike.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b57259e2fe57871a8662.svg";

/***/ }),

/***/ "./src/assets/images/humidity.svg":
/*!****************************************!*\
  !*** ./src/assets/images/humidity.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83d6e68823f0b7aa9e38.svg";

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

module.exports = __webpack_require__.p + "63eabe03d37191435e14.svg";

/***/ }),

/***/ "./src/assets/images/raindrop.svg":
/*!****************************************!*\
  !*** ./src/assets/images/raindrop.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89c3383088abd57f6378.svg";

/***/ }),

/***/ "./src/assets/images/wind.svg":
/*!************************************!*\
  !*** ./src/assets/images/wind.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "56e2e22dc16205fc1858.svg";

/***/ }),

/***/ "./src/assets/images/windSpeed.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/windSpeed.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "514a7a2ed1356e07bdad.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFB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QU07QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWEsRUFBRSxnQkFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQWM7QUFDOUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UseURBQVM7QUFDL0Usa0VBQWtFLHdEQUFRO0FBQzFFLDRFQUE0RSw0REFBWTtBQUN4Rix3RUFBd0UseURBQVM7QUFDakYsbUVBQW1FLHdEQUFRO0FBQzNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsS0FBSztBQUMxQjtBQUNBLCtDQUErQyxFQUFFLElBQUk7QUFDckQsNENBQTRDLEVBQUUsSUFBSTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsMERBQWEsRUFBRSxnQkFBZ0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFhLEVBQUUscURBQXFEO0FBQzVFOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsR0FBRztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsR0FBRyxrREFBa0QsR0FBRztBQUNqRyxrREFBa0QsR0FBRyw2QkFBNkI7QUFDbEYsZ0RBQWdELEdBQUcseURBQXlELElBQUk7QUFDaEgsNENBQTRDLEdBQUcsaURBQWlELElBQUk7QUFDcEcsNENBQTRDLEdBQUcsaURBQWlELElBQUk7QUFDcEcsaURBQWlELEdBQUcsMkRBQTJELElBQUk7QUFDbkgsbUNBQW1DLEdBQUcsVUFBVSx3REFBUTtBQUN4RDtBQUNBLDhDQUE4QyxHQUFHLHFEQUFxRCxJQUFJO0FBQzFHLG1DQUFtQyxHQUFHLFVBQVUsb0RBQUk7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvQ0FBb0M7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFYztBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZUQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlFQUFjLGdCQUFnQix3QkFBd0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYztBQUNmO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy9nZXRXZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL21ha2VIdG1sRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy9wcm9jZXNzX3N0b3JlX3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL3VwZGF0ZUluZm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluSW5mb0JvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyaWdodEluZm9Cb2R5LFxcbiNsZWZ0SW5mb0JvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBtYXgtd2lkdGg6IDQwJTsgKi9cXG59XFxuXFxuI2xvY2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jZGF5RGF0ZSxcXG4jdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4jdGltZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuMTVyZW07XFxufVxcblxcbiN0ZW1wSW5mb0JvZHkge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMC43NXJlbTtcXG59XFxuXFxuI3dlYXRoZXJJY29uIHtcXG4gICAgd2lkdGg6IDRyZW07XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuI3RlbXBVbml0Qm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjZWxjaXVzLFxcbiNmYXJlbmhlaXQge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG59XFxuXFxuI2NlbGNpdXMge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNmYXJlbmhlaXQge1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5hY3RpdmVVbml0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI3dlYXRoZXJUeXBlIHtcXG4gICAgbWFyZ2luLXRvcDogMC40cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNsb2NhdGlvblNlYXJjaCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZXJyb3Ige1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5yaWdodEluZm9TdWJCb2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5yaWdodEluZm9TdWJCb2R5IGltZyB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4uc3ViQm9keUluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc3ViQm9keUluZm9UeXBlIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uc3ViQm9keUluZm9WYWx1ZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcXG59XFxuXFxuI3NsaWRlckNvbnRyb2xCb2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI2ZvcmVjYXN0U2xpZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbiNmb3JlY2FzdFNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuI2ZvcmVjYXN0U2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbiNob3VyTGFiZWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qVGhlc2UgdGhlIGxhYmVscyB3aGVyZSB0aW1lIGlzIG1lbnRpb25lZCB1bmRlciBzbGlkZXIqL1xcbm9wdGlvbiB7ICAgXFxuICAgIHBhZGRpbmc6IC4ycmVtIDAuMnJlbSAwLjJyZW0gMC43NXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XFxufVxcblxcbiNmb3JlY2FzdERheUJvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZm9yZWNhc3REYXlDYXJkIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlOYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxuICAgIGZsZXgtZ3JvdzogMSAxIGF1dG87XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgaW1nIHtcXG4gICAgd2lkdGg6IDY1cHg7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5V2VhdGhlclR5cGUge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MjU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5TWF4VGVtcCxcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheU1pblRlbXAsXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4sXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlXaW5kU3BlZWQge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluLFxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5V2luZFNwZWVkICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluIGltZyxcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheVdpbmRTcGVlZCBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uYWN0aXZlRm9yZWNhc3REYXlDYXJkIHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYsICNiZmJmYmYpO1xcbn1cXG5cXG5cXG5AbWVkaWEobWF4LXdpZHRoOiA0MjBweCkge1xcbiAgICAjbWFpbkluZm9Cb2R5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgI3JpZ2h0SW5mb0JvZHl7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxuXFxuICAgIC5yaWdodEluZm9TdWJCb2R5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBvcHRpb24ge1xcbiAgICAgICAgcGFkZGluZzogLjE1cmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjByZW07XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0hBQXNIO0lBQ3RILGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUEsd0RBQXdEO0FBQ3hEO0lBQ0ksb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBOzs7O0lBSUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLDBDQUEwQztBQUM5Qzs7O0FBR0E7SUFDSTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLFNBQVM7SUFDYjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0Qiw4QkFBOEI7O0lBRWxDOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNtYWluSW5mb0JvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyaWdodEluZm9Cb2R5LFxcbiNsZWZ0SW5mb0JvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBtYXgtd2lkdGg6IDQwJTsgKi9cXG59XFxuXFxuI2xvY2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4jZGF5RGF0ZSxcXG4jdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4jdGltZSB7XFxuICAgIG1hcmdpbi10b3A6IDAuMTVyZW07XFxufVxcblxcbiN0ZW1wSW5mb0JvZHkge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMC43NXJlbTtcXG59XFxuXFxuI3dlYXRoZXJJY29uIHtcXG4gICAgd2lkdGg6IDRyZW07XFxufVxcblxcbiN0ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuI3RlbXBVbml0Qm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjZWxjaXVzLFxcbiNmYXJlbmhlaXQge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG59XFxuXFxuI2NlbGNpdXMge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNmYXJlbmhlaXQge1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5hY3RpdmVVbml0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI3dlYXRoZXJUeXBlIHtcXG4gICAgbWFyZ2luLXRvcDogMC40cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNsb2NhdGlvblNlYXJjaCB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZXJyb3Ige1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5yaWdodEluZm9TdWJCb2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5yaWdodEluZm9TdWJCb2R5IGltZyB7XFxuICAgIHdpZHRoOiAzMnB4O1xcbn1cXG5cXG4uc3ViQm9keUluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uc3ViQm9keUluZm9UeXBlIHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uc3ViQm9keUluZm9WYWx1ZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDY1MDtcXG59XFxuXFxuI3NsaWRlckNvbnRyb2xCb2R5IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI2ZvcmVjYXN0U2xpZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbiNmb3JlY2FzdFNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuXFxuI2ZvcmVjYXN0U2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcblxcbiNob3VyTGFiZWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qVGhlc2UgdGhlIGxhYmVscyB3aGVyZSB0aW1lIGlzIG1lbnRpb25lZCB1bmRlciBzbGlkZXIqL1xcbm9wdGlvbiB7ICAgXFxuICAgIHBhZGRpbmc6IC4ycmVtIDAuMnJlbSAwLjJyZW0gMC43NXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XFxufVxcblxcbiNmb3JlY2FzdERheUJvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZm9yZWNhc3REYXlDYXJkIHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlOYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxuICAgIGZsZXgtZ3JvdzogMSAxIGF1dG87XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgaW1nIHtcXG4gICAgd2lkdGg6IDY1cHg7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5V2VhdGhlclR5cGUge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MjU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5TWF4VGVtcCxcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheU1pblRlbXAsXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4sXFxuLmZvcmVjYXN0RGF5Q2FyZCAuZm9yZWNhc3REYXlXaW5kU3BlZWQge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluLFxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5V2luZFNwZWVkICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5mb3JlY2FzdERheUNhcmQgLmZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluIGltZyxcXG4uZm9yZWNhc3REYXlDYXJkIC5mb3JlY2FzdERheVdpbmRTcGVlZCBpbWd7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uYWN0aXZlRm9yZWNhc3REYXlDYXJkIHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmYsICNiZmJmYmYpO1xcbn1cXG5cXG5cXG5AbWVkaWEobWF4LXdpZHRoOiA0MjBweCkge1xcbiAgICAjbWFpbkluZm9Cb2R5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgI3JpZ2h0SW5mb0JvZHl7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB9XFxuXFxuICAgIC5yaWdodEluZm9TdWJCb2R5IHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBvcHRpb24ge1xcbiAgICAgICAgcGFkZGluZzogLjE1cmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjByZW07XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgbWFrZURvbSAgZnJvbSAnLi9tb2R1bGVzL21ha2VIdG1sRWxlbWVudHMuanMnO1xuaW1wb3J0IGdldFdlYXRoZXJJbmZvIGZyb20gJy4vbW9kdWxlcy9nZXRXZWF0aGVySW5mby5qcyc7XG5cbmNvbnNvbGUubG9nKCd3ZWF0aGVyIGFwcCcpO1xuXG5tYWtlRG9tKCk7XG5nZXRXZWF0aGVySW5mbygnR3JlZW53aWNoJyk7XG5cblxuXG4iLCJpbXBvcnQgd2VhdGhlclNldF9HZXQgZnJvbSBcIi4vcHJvY2Vzc19zdG9yZV92YWx1ZXMuanNcIjtcbmltcG9ydCB1cGRhdGVDb250cm9sIGZyb20gXCIuL3VwZGF0ZUluZm8uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm8obG9jYXRpb25OYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MDUzNzg1ZWE2ODdjNDQ3Mjk5ZTcwOTI2MjIyODEyJnE9JHtsb2NhdGlvbk5hbWV9JmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vYCwge21vZGU6ICdjb3JzJ30pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5vayk7XG4gICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PSAnMjAwJykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHdlYXRoZXJTZXRfR2V0KCdzZXQnLCBkYXRhKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvbnRyb2woe2Z1bmN0aW9uQ29kZTogMX0pO1xuICAgICAgICB9IGVsc2UgaWYoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYmFkIHJlcXVlc3QnKTtcbiAgICAgICAgICAgIGxldCBlcnJvciA9ICdTb3JyeS4gQmFkIHJlcXVlc3QuIE5vIGxvY2F0aW9uIGZvdW5kIHdpdGggc3VjaCBuYW1lLic7XG4gICAgICAgICAgICB1cGRhdGVDb250cm9sKHtmdW5jdGlvbkNvZGU6IDQsIGVycm9yfSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgSGFwcGVuZWQnKTsgIFxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cblxufSBcblxuIiwiaW1wb3J0IHRlc3RHZXRXZWF0aGVyIGZyb20gXCIuL2dldFdlYXRoZXJJbmZvLmpzXCI7XG5pbXBvcnQgdXBkYXRlQ29udHJvbCBmcm9tIFwiLi91cGRhdGVJbmZvLmpzXCI7XG5cbmltcG9ydCBpbWdVcmwgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nXCI7XG5pbXBvcnQgZmVlbHNMaWtlIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ZlZWxzTGlrZS5zdmdcIjtcbmltcG9ydCBodW1pZGl0eSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9odW1pZGl0eS5zdmdcIjtcbmltcG9ydCBjaGFuY2VPZlJhaW4gZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvY2hhbmNlT2ZSYWluLnN2Z1wiO1xuaW1wb3J0IHdpbmRTcGVlZCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy93aW5kU3BlZWQuc3ZnXCI7XG5pbXBvcnQgcHJlc3N1cmUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvcHJlc3N1cmUuc3ZnXCI7XG5pbXBvcnQgcmFpbkRyb3AgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvcmFpbmRyb3Auc3ZnXCI7XG5pbXBvcnQgd2luZCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy93aW5kLnN2Z1wiOyAvLyBmb3IgdGhlIGZvcmVjYXN0IGNhcmRzXG5cbmNvbnN0IERPTSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBtYWtlRGl2KGlkID0gbnVsbCwgY2xhc3NOYW1lID0gbnVsbCwgdGV4dENvbnRlbnQsIGRhdGFBdHRyaWJ1dGUsIGRhdGFBdHRyaWJ1dGVWYWx1ZSA9ICcnLCB0aXRsZSA9bnVsbCkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlmKGlkKSB7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZGF0YUF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShkYXRhQXR0cmlidXRlLCBkYXRhQXR0cmlidXRlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRpdGxlKSB7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRpdGxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VJbWFnZShpZD1udWxsLCB1cmw9aW1nVXJsKSB7XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaWYoaWQpIHtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgICAgICB9XG4gICAgICAgIGltZy5zcmMgPSB1cmw7XG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1haW5JbmZvQm9keSgpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgbGV0IG1haW5JbmZvQm9keSA9IG1ha2VEaXYoJ21haW5JbmZvQm9keScpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1haW5JbmZvQm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxlZnRSaWdodEluZm9Cb2R5KCkge1xuICAgICAgICBjb25zdCBtYWluSW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCBsZWZ0SW5mb0JvZHkgPSBtYWtlRGl2KCdsZWZ0SW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHJpZ2h0SW5mb0JvZHkgPSBtYWtlRGl2KCdyaWdodEluZm9Cb2R5Jyk7ICBcbiAgICAgICAgbWFpbkluZm9Cb2R5LmFwcGVuZENoaWxkKGxlZnRJbmZvQm9keSk7XG4gICAgICAgIG1haW5JbmZvQm9keS5hcHBlbmRDaGlsZChyaWdodEluZm9Cb2R5KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb25Cb2R5KCkge1xuICAgICAgICBjb25zdCBsZWZ0SW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCBsb2NhdGlvbkJvZHkgPSBtYWtlRGl2KCdsb2NhdGlvbicsIG51bGwsICdMb2NhdGlvbicsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIGxvY2F0aW9uQm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gbG9jYXRpb25Cb2R5LnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICAgICAgbGVmdEluZm9Cb2R5LmFwcGVuZENoaWxkKGxvY2F0aW9uQm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZURheURhdGVCb2R5KCkge1xuICAgICAgICBjb25zdCBsZWZ0SW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCBkYXlEYXRlQm9keSA9IG1ha2VEaXYoJ2RheURhdGUnLCBudWxsLCAnRGF5LCBEYXRlJywgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gZGF5RGF0ZUJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIGRheURhdGVCb2R5LnRleHRDb250ZW50ID0gJ0RheSwgRGF0ZSc7XG4gICAgICAgIGxlZnRJbmZvQm9keS5hcHBlbmRDaGlsZChkYXlEYXRlQm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRpbWVCb2R5KCkge1xuICAgICAgICBjb25zdCBsZWZ0SW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCB0aW1lQm9keSA9IG1ha2VEaXYoJ3RpbWUnLCBudWxsLCAnVGltZScsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIHRpbWVCb2R5LnNldEF0dHJpYnV0ZSgnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICAvLyB0aW1lQm9keS50ZXh0Q29udGVudCA9ICdUaW1lJztcbiAgICAgICAgbGVmdEluZm9Cb2R5LmFwcGVuZENoaWxkKHRpbWVCb2R5KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlVGVtcEluZm9Cb2R5KCkge1xuICAgICAgICBjb25zdCBsZWZ0SW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCB0ZW1wSW5mb0JvZHkgPSBtYWtlRGl2KCd0ZW1wSW5mb0JvZHknKTtcbiAgICAgICAgbGVmdEluZm9Cb2R5LmFwcGVuZENoaWxkKHRlbXBJbmZvQm9keSk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJJY29uKCkge1xuICAgICAgICBjb25zdCB0ZW1wSW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCB3ZWF0aGVySWNvbiA9IG1ha2VJbWFnZSgnd2VhdGhlckljb24nKTtcbiAgICAgICAgd2VhdGhlckljb24uc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIHRlbXBJbmZvQm9keS5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRlbXBWYWx1ZUJvZHkoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBJbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wSW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHRlbXBWYWx1ZUJvZHkgPSBtYWtlRGl2KCd0ZW1wZXJhdHVyZScsIG51bGwsICcjJywgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gdGVtcFZhbHVlQm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnKTtcbiAgICAgICAgLy8gdGVtcFZhbHVlQm9keS50ZXh0Q29udGVudCA9ICcjJztcbiAgICAgICAgdGVtcEluZm9Cb2R5LmFwcGVuZENoaWxkKHRlbXBWYWx1ZUJvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVUZW1wVW5pdEJvZHkoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBJbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wSW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHRlbXBVbml0Qm9keSA9IG1ha2VEaXYoJ3RlbXBVbml0Qm9keScpO1xuICAgICAgICB0ZW1wSW5mb0JvZHkuYXBwZW5kQ2hpbGQodGVtcFVuaXRCb2R5KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlVGVtcFVuaXRzKCkge1xuICAgICAgICBjb25zdCB0ZW1wVW5pdEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcFVuaXRCb2R5Jyk7XG4gICAgICAgIGxldCBjZWxjaXVzQm9keSA9IG1ha2VEaXYoJ2NlbGNpdXMnLCAnYWN0aXZlVW5pdCcsICfCsEMnKTtcbiAgICAgICAgbGV0IGZhcmVuaGVpdEJvZHkgPSBtYWtlRGl2KCdmYXJlbmhlaXQnLCBudWxsLCAnwrBGJyk7XG4gICAgICAgIGNlbGNpdXNCb2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVtcFVuaXRzQ2xpY2tlZCk7XG4gICAgICAgIC8vIGNlbGNpdXNCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWN0aXZlVW5pdCcpO1xuICAgICAgICBmYXJlbmhlaXRCb2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVtcFVuaXRzQ2xpY2tlZCk7XG4gICAgICAgIC8vIGNlbGNpdXNCb2R5LnRleHRDb250ZW50ID0gJ8KwQyc7XG4gICAgICAgIC8vIGZhcmVuaGVpdEJvZHkudGV4dENvbnRlbnQgPSAnwrBGJztcbiAgICAgICAgdGVtcFVuaXRCb2R5LmFwcGVuZENoaWxkKGNlbGNpdXNCb2R5KTtcbiAgICAgICAgdGVtcFVuaXRCb2R5LmFwcGVuZENoaWxkKGZhcmVuaGVpdEJvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB0ZW1wVW5pdHNDbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGxldCB1bml0Q2xpY2tlZCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IGFjdGl2ZVVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlVW5pdCcpO1xuICAgICAgICBpZighdW5pdENsaWNrZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVVbml0JykpIHtcbiAgICAgICAgICAgIGFjdGl2ZVVuaXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlVW5pdCcpO1xuICAgICAgICAgICAgdW5pdENsaWNrZWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlVW5pdCcpO1xuICAgICAgICAgICAgdXBkYXRlQ29udHJvbCh7ZnVuY3Rpb25Db2RlOiAyfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlV2VhdGhlclR5cGVJbmZvQm9keSgpIHtcbiAgICAgICAgY29uc3QgbGVmdEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnRJbmZvQm9keScpO1xuICAgICAgICBsZXQgd2VhdGhlclR5cGVJbmZvQm9keSA9IG1ha2VEaXYoJ3dlYXRoZXJUeXBlJywgbnVsbCwgJ1dlYXRoZXIgVHlwZScsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIHdlYXRoZXJUeXBlSW5mb0JvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIHdlYXRoZXJUeXBlSW5mb0JvZHkudGV4dENvbnRlbnQgPSAnV2VhdGhlciBUeXBlJztcbiAgICAgICAgbGVmdEluZm9Cb2R5LmFwcGVuZENoaWxkKHdlYXRoZXJUeXBlSW5mb0JvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVTZWFyY2hCb3goKSB7XG4gICAgICAgIGNvbnN0IGxlZnRJbmZvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0SW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHNlYXJjaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHNlYXJjaEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uU2VhcmNoJyk7XG4gICAgICAgIHNlYXJjaEJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc2VhcmNoJyk7XG4gICAgICAgIHNlYXJjaEJveC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1NlYXJjaCBMb2NhdGlvbi4uLicpO1xuICAgICAgICBzZWFyY2hCb3guYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQuY29kZSA9PT0gJ0VudGVyJyB8fCBldmVudC5jb2RlID09PSAnTnVtcGFkRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgdGVzdEdldFdlYXRoZXIoc2VhcmNoQm94LnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxlZnRJbmZvQm9keS5hcHBlbmRDaGlsZChzZWFyY2hCb3gpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVycm9yUmVwb3J0ZXJCb2R5KCkge1xuICAgICAgICBjb25zdCBsZWZ0SW5mb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdEluZm9Cb2R5Jyk7XG4gICAgICAgIGxldCBlcnJvclJlcG9ydGVyQm9keSA9IG1ha2VEaXYoJ2Vycm9yJywgbnVsbCwgJycsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIGVycm9yUmVwb3J0ZXJCb2R5LnNldEF0dHJpYnV0ZSgnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICAvLyBlcnJvclJlcG9ydGVyQm9keS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBsZWZ0SW5mb0JvZHkuYXBwZW5kQ2hpbGQoZXJyb3JSZXBvcnRlckJvZHkpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjcmVhdGVSaWdodEluZm9TdWJCb2R5KGlkLCBpbmZvVHlwZVRleHQsIGluZm9WYWx1ZVRleHQsIHVybCkge1xuICAgICAgICBjb25zdCByaWdodEluZm9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0SW5mb0JvZHknKTtcbiAgICAgICAgbGV0IHN1YkJvZHlNYWluID0gbWFrZURpdihudWxsLCAncmlnaHRJbmZvU3ViQm9keScpO1xuICAgICAgICBsZXQgaW1nID0gbWFrZUltYWdlKG51bGwsIHVybCk7XG4gICAgICAgIGxldCBzdWJCb2R5SW5mbyA9IG1ha2VEaXYobnVsbCwgJ3N1YkJvZHlJbmZvJyk7XG4gICAgICAgIGxldCBpbmZvVHlwZSA9IG1ha2VEaXYobnVsbCwgJ3N1YkJvZHlJbmZvVHlwZScsIGluZm9UeXBlVGV4dCk7XG4gICAgICAgIC8vIGluZm9UeXBlLnRleHRDb250ZW50ID0gaW5mb1R5cGVUZXh0O1xuICAgICAgICBsZXQgaW5mb1ZhbHVlID0gbWFrZURpdihpZCwgJ3N1YkJvZHlJbmZvVmFsdWUnLCBpbmZvVmFsdWVUZXh0LCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICAvLyBpbmZvVmFsdWUuc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJyk7XG4gICAgICAgIC8vIGluZm9WYWx1ZS50ZXh0Q29udGVudCA9IGluZm9WYWx1ZVRleHQ7XG4gICAgXG4gICAgICAgIHN1YkJvZHlJbmZvLmFwcGVuZENoaWxkKGluZm9UeXBlKTtcbiAgICAgICAgc3ViQm9keUluZm8uYXBwZW5kQ2hpbGQoaW5mb1ZhbHVlKTtcbiAgICAgICAgc3ViQm9keU1haW4uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgc3ViQm9keU1haW4uYXBwZW5kQ2hpbGQoc3ViQm9keUluZm8pO1xuICAgICAgICByaWdodEluZm9Cb2R5LmFwcGVuZENoaWxkKHN1YkJvZHlNYWluKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVSaWdodEluZm9Cb2R5KCkge1xuICAgICAgICBjcmVhdGVSaWdodEluZm9TdWJCb2R5KCdmZWVsc0xpa2UnLCAnRmVlbHMgTGlrZScsICd2YWx1ZSDCsEMnLCBmZWVsc0xpa2UpO1xuICAgICAgICBjcmVhdGVSaWdodEluZm9TdWJCb2R5KCdodW1pZGl0eScsICdIdW1pZGl0eScsICd2YWx1ZSAlJywgaHVtaWRpdHkpO1xuICAgICAgICBjcmVhdGVSaWdodEluZm9TdWJCb2R5KCdjaGFuY2VPZlJhaW4nLCAnQ2hhbmNlIE9mIFJhaW4nLCAndmFsdWUgJScsIGNoYW5jZU9mUmFpbik7XG4gICAgICAgIGNyZWF0ZVJpZ2h0SW5mb1N1YkJvZHkoJ3dpbmRTcGVlZCcsICdXaW5kIFNwZWVkJywgJ3ZhbHVlIGttL2gnLCB3aW5kU3BlZWQpO1xuICAgICAgICBjcmVhdGVSaWdodEluZm9TdWJCb2R5KCdwcmVzc3VyZScsICdQcmVzc3VyZScsICd2YWx1ZSBtYicsIHByZXNzdXJlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTaWxkZXJCb2R5KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBsZXQgc2xpZGVyQ29udHJvbEJvZHkgPSBtYWtlRGl2KCdzbGlkZXJDb250cm9sQm9keScpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNsaWRlckNvbnRyb2xCb2R5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTbGlkZXJUaWNrcygpIHtcbiAgICAgICAgbGV0IGRhdGFsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGF0YWxpc3QnKTtcbiAgICAgICAgZGF0YWxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdob3VyTGFiZWxzJyk7XG4gICAgICAgIGRhdGFsaXN0LnNldEF0dHJpYnV0ZSgnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTw5OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIC8vIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7aX1gKTsgLy8gbm90IHVzaW5nIHRoZSB2YWx1ZSBhdHRyaWJ1dGUgYXMgd2UganVzdCB3YW50IHRvIGRpc3BsYXkgdGhlIGxhYmVsIGFuZCB0aGUgdmFsdWUgaXMgZGlyZWN0bHkgdGFrZW4gZnJvbiB0aGUgc2xpZGVyIFxuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBgJHtpfWApOyAvLyBsYWJlbCBpcyBoZXJlIGZvciBtZSB0aGUgdXBkYXRlZGlzcGxheSBpbmZvIHdpbGwgdXBkYXRlIHRoZSBsYWJlbFxuICAgICAgICAgICAgZGF0YWxpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YWxpc3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU2xpZGVyKCkge1xuICAgICAgICBjb25zdCBzbGlkZXJDb250cm9sQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXJDb250cm9sQm9keScpO1xuICAgICAgICBsZXQgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9yZWNhc3RTbGlkZXInKTtcbiAgICAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYW5nZScpO1xuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTQzOScpO1xuICAgICAgICBzbGlkZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICcwJyk7XG4gICAgICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ3N0ZXAnLCAnYW55Jyk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNsaWRlclZhbHVlQ2hhbmdlZCk7XG4gICAgICAgIHNsaWRlckNvbnRyb2xCb2R5LmFwcGVuZENoaWxkKHNsaWRlcik7XG4gICAgICAgIGxldCB0aWNrcyA9IGNyZWF0ZVNsaWRlclRpY2tzKDI0KTsgLy8gbm8gbmVlZCB0byBhZGQgdGhlIHRpY2tzIHRvIHRoZSBsaXN0IGF0dHJpYnV0ZSBvZiB0aGUgc2xpZGVyIHNpbmNlIHRoZW4gaXQgbmVlZCB0byBiZSBjaGFuZ2VkIGVhY2ggdGltZSBob3VybHkgb3IgZGFpbHkgc2VsZWN0ZWQuXG4gICAgICAgIC8vIHNsaWRlci5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCB0aWNrcy5nZXRBdHRyaWJ1dGUoJ2knKSlcbiAgICAgICAgc2xpZGVyQ29udHJvbEJvZHkuYXBwZW5kQ2hpbGQodGlja3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNsaWRlclZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdXBkYXRlQ29udHJvbCh7ZnVuY3Rpb25Db2RlOiAzfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9yZWNhc3REYXlCb2R5KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBsZXQgZm9yZWNhc3REYXlCb2R5ID0gbWFrZURpdignZm9yZWNhc3REYXlCb2R5Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlCb2R5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VTdHlsZU9mVGhlRm9yZWNhc3REYXlDYXJkQ2xpY2tlZCh0YXJnZXRJbmRleE51bWJlcikge1xuICAgICAgICBsZXQgZm9yZWNhc3REYXlDYXJkQ2xpY2tlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RhcmdldEluZGV4TnVtYmVyfWRheUZvcmVjYXN0Q2FyZGApO1xuICAgICAgICBsZXQgY3VycmVudEFjdGl2ZUZvcmVjYXN0RGF5Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVGb3JlY2FzdERheUNhcmQnKTtcbiAgICAgICAgaWYoY3VycmVudEFjdGl2ZUZvcmVjYXN0RGF5Q2FyZC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpKSB7XG4gICAgICAgICAgICBjdXJyZW50QWN0aXZlRm9yZWNhc3REYXlDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpO1xuICAgICAgICAgICAgZm9yZWNhc3REYXlDYXJkQ2xpY2tlZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVGb3JlY2FzdERheUNhcmQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcmVjYXN0RGF5Q2FyZENsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldEluZGV4TnVtYmVyID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdCgnJylbMF07XG4gICAgICAgIGNoYW5nZVN0eWxlT2ZUaGVGb3JlY2FzdERheUNhcmRDbGlja2VkKHRhcmdldEluZGV4TnVtYmVyKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdCgnJylbMF0pO1xuICAgICAgICAvLyBjYWxsIHVwZGF0ZUluZm8gc28gdGhhdCB0aGUgZGlzcGxheSBJbmZvIGNhbiBiZSB1cGRhdGVkIG9uIGNsaWNrZWQgb2YgZm9yZWNhc3REYXkgY2FyZFxuICAgICAgICB1cGRhdGVDb250cm9sKHtmdW5jdGlvbkNvZGU6IDUsIGRheUluZGV4OiBOdW1iZXIodGFyZ2V0SW5kZXhOdW1iZXIpfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9yZUNhc3REYXlDYXJkKGlkKSB7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JlY2FzdERheUJvZHknKTtcbiAgICAgICAgbGV0IGZvcmVjYXN0RGF5Q2FyZCA9IG1ha2VEaXYoYCR7aWR9ZGF5Rm9yZWNhc3RDYXJkYCwnZm9yZWNhc3REYXlDYXJkJyk7XG4gICAgICAgIGlmKGlkID09PSAwKSB7XG4gICAgICAgICAgICBmb3JlY2FzdERheUNhcmQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlRm9yZWNhc3REYXlDYXJkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yZWNhc3REYXlDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZm9yZWNhc3REYXlDYXJkQ2xpY2tlZCk7XG5cbiAgICAgICAgbGV0IGZvcmVjYXN0RGF5TmFtZSA9IG1ha2VEaXYoYCR7aWR9ZGF5Rm9yZWNhc3REYXlEYXlOYW1lYCwgJ2ZvcmVjYXN0RGF5TmFtZScsIGBEYXkgJHtpZH1gLCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICBsZXQgZm9yZWNhc3REYXlXZWF0aGVySWNvbiA9IG1ha2VJbWFnZShgJHtpZH1kYXlGb3JlY2FzdERheVdlYXRoZXJJY29uYCk7IC8vIHRoaXMgaXMgbWFrZSBhIGltYWdlIHNvIGRvbnQgcGFzcyB0aGUgZGl2IGZ1bmN0aW9uIHBhcmFtZXRlcnNcbiAgICAgICAgbGV0IGZvcmVjYXN0RGF5V2VhdGhlclR5cGUgPSBtYWtlRGl2KGAke2lkfWRheUZvcmVjYXN0RGF5V2VhdGhlclR5cGVgLCAnZm9yZWNhc3REYXlXZWF0aGVyVHlwZScsIGAke2lkfSBXZWF0aGVyIFR5cGVgLCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycpO1xuICAgICAgICBsZXQgZm9yZWNhc3REYXlNYXhUZW1wID0gbWFrZURpdihgJHtpZH1kYXlGb3JlY2FzdERheU1heFRlbXBgLCAnZm9yZWNhc3REYXlNYXhUZW1wJywgYCR7aWR9IE1heCBUZW1wICNgLCAnZGF0YS11cGRhdGVhYmxlJywgJ3llcycsICdNYXhpbXVtIFRlbXBlcmF0dXJlJyk7XG4gICAgICAgIGxldCBmb3JlY2FzdERheU1pblRlbXAgPSBtYWtlRGl2KGAke2lkfWRheUZvcmVjYXN0RGF5TWluVGVtcGAsICdmb3JlY2FzdERheU1pblRlbXAnLCBgJHtpZH0gTWluIFRlbXAgI2AsICdkYXRhLXVwZGF0ZWFibGUnLCAneWVzJywgJ01pbmltdW0gVGVtcGVyYXR1cmUnKTtcbiAgICAgICAgbGV0IGZvcmVjYXN0RGF5Q2hhbmNlT2ZSYWluID0gbWFrZURpdihgJHtpZH1kYXlGb3JlY2FzdERheUNoYW5jZU9mUmFpbmAsICdmb3JlY2FzdERheUNoYW5jZU9mUmFpbicsIGAke2lkfSB2YWx1ZSAlYCwgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnLCAnQ2hhbmNlIG9mIFJhaW4nKTtcbiAgICAgICAgbGV0IHJhaW5JbWcgPSBtYWtlSW1hZ2UoYCR7aWR9cmFpbkltZ2AsIHJhaW5Ecm9wKTtcbiAgICAgICAgZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4uYXBwZW5kQ2hpbGQocmFpbkltZyk7XG4gICAgICAgIGxldCBmb3JlY2FzdERheVdpbmRTcGVlZCA9IG1ha2VEaXYoYCR7aWR9ZGF5Rm9yZWNhc3REYXlXaW5kU3BlZWRgLCAnZm9yZWNhc3REYXlXaW5kU3BlZWQnLCBgJHtpZH0gdmFsdWUga3BoYCwgJ2RhdGEtdXBkYXRlYWJsZScsICd5ZXMnLCAnV2luZCBTcGVlZCcpO1xuICAgICAgICBsZXQgd2luZEltZyA9IG1ha2VJbWFnZShgJHtpZH13aW5kSW1nYCwgd2luZCk7XG4gICAgICAgIGZvcmVjYXN0RGF5V2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRJbWcpO1xuXG4gICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5hcHBlbmRDaGlsZChmb3JlY2FzdERheU5hbWUpO1xuICAgICAgICBmb3JlY2FzdERheUNhcmQuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlXZWF0aGVySWNvbik7XG4gICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5hcHBlbmRDaGlsZChmb3JlY2FzdERheVdlYXRoZXJUeXBlKTtcbiAgICAgICAgZm9yZWNhc3REYXlDYXJkLmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5TWF4VGVtcCk7XG4gICAgICAgIGZvcmVjYXN0RGF5Q2FyZC5hcHBlbmRDaGlsZChmb3JlY2FzdERheU1pblRlbXApO1xuICAgICAgICBmb3JlY2FzdERheUNhcmQuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlDaGFuY2VPZlJhaW4pO1xuICAgICAgICBmb3JlY2FzdERheUNhcmQuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlXaW5kU3BlZWQpO1xuICAgICAgICBmb3JlY2FzdERheUJvZHkuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlDYXJkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBbGxGb3JlY2FzdERheUNhcmQoKSB7XG4gICAgICAgIC8vIG51bWJlck9mRGF5Rm9yZWNhc3REYXRhQXZhaWxhYmxlIGRlcGVuZHMgb24gdGhlIG51bWJlciBvZiBkYXkgZGF0YSB0aGF0IGFwaSBpcyBnaXZpbmcgcmlnaHQgbm93IGkgaGF2ZSBvbmx5IDIgYWhlYWQgZGF5IGZvcmUgY2FzdCBkYXRhIHNvIDJcbiAgICAgICAgbGV0IG51bWJlck9mRGF5Rm9yZWNhc3REYXRhQXZhaWxhYmxlID0gMztcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bnVtYmVyT2ZEYXlGb3JlY2FzdERhdGFBdmFpbGFibGU7IGkrKykge1xuICAgICAgICAgICAgY3JlYXRlRm9yZUNhc3REYXlDYXJkKGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgMTogY3JlYXRlTWFpbkluZm9Cb2R5KCksXG4gICAgICAgIDI6IGNyZWF0ZUxlZnRSaWdodEluZm9Cb2R5KCksXG4gICAgICAgIDM6IGNyZWF0ZUxvY2F0aW9uQm9keSgpLFxuICAgICAgICA0OiBjcmVhdGVEYXlEYXRlQm9keSgpLFxuICAgICAgICA1OiBjcmVhdGVUaW1lQm9keSgpLFxuICAgICAgICA2OiBjcmVhdGVUZW1wSW5mb0JvZHkoKSxcbiAgICAgICAgNzogY3JlYXRlV2VhdGhlckljb24oKSxcbiAgICAgICAgODogY3JlYXRlVGVtcFZhbHVlQm9keSgpLFxuICAgICAgICA5OiBjcmVhdGVUZW1wVW5pdEJvZHkoKSxcbiAgICAgICAgMTA6IGNyZWF0ZVRlbXBVbml0cygpLFxuICAgICAgICAxMTogY3JlYXRlV2VhdGhlclR5cGVJbmZvQm9keSgpLFxuICAgICAgICAxMjogY3JlYXRlU2VhcmNoQm94KCksXG4gICAgICAgIDEzOiBjcmVhdGVFcnJvclJlcG9ydGVyQm9keSgpLFxuICAgICAgICAxNDogcG9wdWxhdGVSaWdodEluZm9Cb2R5KCksXG4gICAgICAgIDE1OiBjcmVhdGVTaWxkZXJCb2R5KCksXG4gICAgICAgIDE2OiBjcmVhdGVTbGlkZXIoKSxcbiAgICAgICAgMTc6IGNyZWF0ZUZvcmVjYXN0RGF5Qm9keSgpLFxuICAgICAgICAxODogY3JlYXRlQWxsRm9yZWNhc3REYXlDYXJkKCksXG4gICAgfTtcblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZURvbSgpIHtcbiAgICBmb3IobGV0IGRvbSBpbiBET00pIHtcbiAgICAgICAgZG9tO1xuICAgIH1cbn1cbiIsIlxuXG5jb25zdCB3ZWF0aGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdXJyZW50V2VhdGhlckF0dHJpYnV0ZVZhbHVlcywgY3VycmVudERheUhvdXJseUZvcmVjYXN0V2VhdGhlckF0dHJpYnV0ZVZhbHVlcywgZm9yZWNhc3REYXlBdHRyaWJ1dGVWYWx1ZXM7XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50KGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyQXR0cmlidXRlVmFsdWVzW2F0dHJpYnV0ZU5hbWVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnQoZGF0YSkge1xuICAgICAgICBjdXJyZW50V2VhdGhlckF0dHJpYnV0ZVZhbHVlcyA9IHt9O1xuICAgICAgICBjdXJyZW50V2VhdGhlckF0dHJpYnV0ZVZhbHVlcyA9IHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICBkYXlEYXRlOiBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdCgnICcpWzBdLFxuICAgICAgICAgICAgdGltZTogZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoJyAnKVsxXSxcbiAgICAgICAgICAgIHdlYXRoZXJJY29uOiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICB0ZW1wZXJhdHVyZToge1xuICAgICAgICAgICAgICAgICdjJzogZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgICAgICAgICAnZic6IGRhdGEuY3VycmVudC50ZW1wX2YsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2VhdGhlclR5cGU6IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgIGZlZWxzTGlrZToge1xuICAgICAgICAgICAgICAgIGM6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcbiAgICAgICAgICAgICAgICBmOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaHVtaWRpdHk6IGRhdGEuY3VycmVudC5odW1pZGl0eSxcbiAgICAgICAgICAgIGNoYW5jZU9mUmFpbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsnMCddLmhvdXJbTnVtYmVyKGRhdGEubG9jYXRpb24ubG9jYWx0aW1lLnNwbGl0KCcgJylbMV0uc3BsaXQoJzonKVswXSldLmNoYW5jZV9vZl9yYWluLFxuICAgICAgICAgICAgd2luZFNwZWVkOiB7XG4gICAgICAgICAgICAgICAga3BoOiBkYXRhLmN1cnJlbnQud2luZF9rcGgsXG4gICAgICAgICAgICAgICAgbXBoOiBkYXRhLmN1cnJlbnQud2luZF9tcGgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlc3N1cmU6IHtcbiAgICAgICAgICAgICAgICBtYjogZGF0YS5jdXJyZW50LnByZXNzdXJlX2luLFxuICAgICAgICAgICAgICAgIGluOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBob3VybHlXZWF0aGVyRGF0YU9iamVjdEZhY3RvcnkoZGF0YSkge1xuICAgICAgICBsZXQgb2JqZWN0ID0ge1xuICAgICAgICAgICAgZGF5RGF0ZTogZGF0YS50aW1lLnNwbGl0KCcgJylbMF0sXG4gICAgICAgICAgICB0aW1lOiBkYXRhLnRpbWUuc3BsaXQoJyAnKVsxXSxcbiAgICAgICAgICAgIHdlYXRoZXJJY29uOiBkYXRhLmNvbmRpdGlvbi5pY29uLFxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IHtcbiAgICAgICAgICAgICAgICAnYyc6IGRhdGEudGVtcF9jLFxuICAgICAgICAgICAgICAgICdmJzogZGF0YS50ZW1wX2YsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2VhdGhlclR5cGU6IGRhdGEuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICBmZWVsc0xpa2U6IHtcbiAgICAgICAgICAgICAgICBjOiBkYXRhLmZlZWxzbGlrZV9jLFxuICAgICAgICAgICAgICAgIGY6IGRhdGEuZmVlbHNsaWtlX2YsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaHVtaWRpdHk6IGRhdGEuaHVtaWRpdHksXG4gICAgICAgICAgICBjaGFuY2VPZlJhaW46IGRhdGEuY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgICB3aW5kU3BlZWQ6IHtcbiAgICAgICAgICAgICAgICBrcGg6IGRhdGEud2luZF9rcGgsXG4gICAgICAgICAgICAgICAgbXBoOiBkYXRhLndpbmRfbXBoLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByZXNzdXJlOiB7XG4gICAgICAgICAgICAgICAgbWI6IGRhdGEucHJlc3N1cmVfaW4sXG4gICAgICAgICAgICAgICAgaW46IGRhdGEucHJlc3N1cmVfbWIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRIb3VybHlGb3JlY2FzdChkYXRhKSB7XG4gICAgICAgIGxldCBjdXJyZW50SG91ciA9IGN1cnJlbnRXZWF0aGVyQXR0cmlidXRlVmFsdWVzWyd0aW1lJ10uc3BsaXQoJzonKVswXTtcbiAgICAgICAgbGV0IHRvZGF5SG91ckRhdGEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXIuc2xpY2UoTnVtYmVyKGN1cnJlbnRIb3VyKSk7XG4gICAgICAgIGxldCB0b21vcnJvd0hvdXJEYXRhID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5ob3VyLnNsaWNlKDAsTnVtYmVyKGN1cnJlbnRIb3VyKSk7XG4gICAgICAgIGxldCBmb3JlY2FzdDI0SG91ckRhdGEgPSB0b2RheUhvdXJEYXRhLmNvbmNhdCh0b21vcnJvd0hvdXJEYXRhKTtcbiAgICAgICAgdG9kYXlIb3VyRGF0YSA9IFtdO1xuICAgICAgICB0b21vcnJvd0hvdXJEYXRhID0gW107XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0MjRIb3VyRGF0YSk7XG4gICAgICAgIGN1cnJlbnREYXlIb3VybHlGb3JlY2FzdFdlYXRoZXJBdHRyaWJ1dGVWYWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBob3VyRGF0YSBpbiBmb3JlY2FzdDI0SG91ckRhdGEpIHtcbiAgICAgICAgICAgIGxldCBvYmplY3QgPSBob3VybHlXZWF0aGVyRGF0YU9iamVjdEZhY3RvcnkoZm9yZWNhc3QyNEhvdXJEYXRhW2hvdXJEYXRhXSk7XG4gICAgICAgICAgICBjdXJyZW50RGF5SG91cmx5Rm9yZWNhc3RXZWF0aGVyQXR0cmlidXRlVmFsdWVzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhob3VybHlGb3JlY2FzdFdlYXRoZXJBdHRyaWJ1dGVWYWx1ZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhvdXJseUZvcmVjYXN0KHBvcywgYXR0cmlidXRlTmFtZSkge1xuICAgICAgICByZXR1cm4gY3VycmVudERheUhvdXJseUZvcmVjYXN0V2VhdGhlckF0dHJpYnV0ZVZhbHVlc1twb3NdW2F0dHJpYnV0ZU5hbWVdO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhdmVyYWdlRm9yZWNhc3REYXRhT2JqZWN0RmFjdG9yeShkYXRhLCBpbmRleCkge1xuICAgICAgICBsZXQgb2JqZWN0ID0ge1xuICAgICAgICAgICAgYXN0cm86IHtcbiAgICAgICAgICAgICAgICBtb29ucmlzZTogZGF0YS5hc3Ryby5tb29ucmlzZSxcbiAgICAgICAgICAgICAgICBtb29uc2V0OiBkYXRhLmFzdHJvLm1vb25zZXQsXG4gICAgICAgICAgICAgICAgc3VucmlzZTogZGF0YS5hc3Ryby5zdW5yaXNlLFxuICAgICAgICAgICAgICAgIHN1bnNldDogZGF0YS5hc3Ryby5zdW5zZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXZlcmFnZToge1xuICAgICAgICAgICAgICAgIERheU5hbWU6IGRhdGEuZGF0ZSxcbiAgICAgICAgICAgICAgICBXZWF0aGVySWNvbjogZGF0YS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICAgICAgV2VhdGhlclR5cGU6IGRhdGEuZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICAgICAgICAgIE1heFRlbXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYzogZGF0YS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICBmOiBkYXRhLmRheS5tYXh0ZW1wX2ZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIE1pblRlbXA6IHtcbiAgICAgICAgICAgICAgICAgICAgYzogZGF0YS5kYXkubWludGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICBmOiBkYXRhLmRheS5taW50ZW1wX2ZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIENoYW5jZU9mUmFpbjogZGF0YS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgICAgICAgV2luZFNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgIGtwaDogZGF0YS5kYXkubWF4d2luZF9rcGgsXG4gICAgICAgICAgICAgICAgICAgIG1waDogZGF0YS5kYXkubWF4d2luZF9tcGhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaG91cmx5OiBbXSxcbiAgICAgICAgfVxuICAgICAgICBpZihpbmRleCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnb2JqZWN0IHJldHVybmVkJyk7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaG91ckRhdGEgaW4gZGF0YS5ob3VyKSB7XG4gICAgICAgICAgICBvYmplY3QuaG91cmx5LnB1c2goaG91cmx5V2VhdGhlckRhdGFPYmplY3RGYWN0b3J5KGRhdGEuaG91cltob3VyRGF0YV0pKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3QuaG91cmx5WzFdKTtcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREYXlGb3JlY2FzdChkYXRhKSB7XG4gICAgICAgIGxldCBhdmVyYWdlRm9yZWNhc3REYXRhID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICAgICAgZm9yZWNhc3REYXlBdHRyaWJ1dGVWYWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBkYXRhIGluIGF2ZXJhZ2VGb3JlY2FzdERhdGEpIHtcbiAgICAgICAgICAgIGZvcmVjYXN0RGF5QXR0cmlidXRlVmFsdWVzLnB1c2goYXZlcmFnZUZvcmVjYXN0RGF0YU9iamVjdEZhY3RvcnkoYXZlcmFnZUZvcmVjYXN0RGF0YVtkYXRhXSwgZGF0YSkpOyAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JlY2FzdERheUF0dHJpYnV0ZVZhbHVlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QXZlcmFnZUZvcmVDYXN0KGRheUluZGV4LCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIHJldHVybiBmb3JlY2FzdERheUF0dHJpYnV0ZVZhbHVlc1tOdW1iZXIoZGF5SW5kZXgpXS5hdmVyYWdlW2F0dHJpYnV0ZU5hbWVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhvdXJseURhaWx5Rm9yZWNhc3REYXRhKGRheUluZGV4LCBob3VySW5kZXgsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF5QXR0cmlidXRlVmFsdWVzW2RheUluZGV4XS5ob3VybHlbaG91ckluZGV4XVthdHRyaWJ1dGVOYW1lXSk7XG4gICAgICAgIHJldHVybiAoZm9yZWNhc3REYXlBdHRyaWJ1dGVWYWx1ZXNbZGF5SW5kZXhdLmhvdXJseVtob3VySW5kZXhdW2F0dHJpYnV0ZU5hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDdXJyZW50LFxuICAgICAgICBzZXRDdXJyZW50LFxuICAgICAgICBzZXRIb3VybHlGb3JlY2FzdCwgLy8gZm9yIGN1cnJlbnQgZGF5XG4gICAgICAgIGdldEhvdXJseUZvcmVjYXN0LFxuICAgICAgICBzZXREYXlGb3JlY2FzdCwgLy8gZm9yIGRheSB0aGF0IGFyZSBhaGVhZCBvZiBjdXJyZW50IGRheXNcbiAgICAgICAgZ2V0QXZlcmFnZUZvcmVDYXN0LFxuICAgICAgICBnZXRIb3VybHlEYWlseUZvcmVjYXN0RGF0YSxcbiAgICB9XG5cbn0pKCk7XG5cbiAgICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYXRoZXJTZXRfR2V0KGZ1bmMsIG9wdGlvbikge1xuICAgIFxuICAgIHN3aXRjaChmdW5jKSB7XG4gICAgICAgIGNhc2UgJ2dldEN1cnJlbnQnOlxuICAgICAgICAgICAgcmV0dXJuIHdlYXRoZXIuZ2V0Q3VycmVudChvcHRpb24pO1xuICAgICAgICBjYXNlICdzZXQnOlxuICAgICAgICAgICAgd2VhdGhlci5zZXRDdXJyZW50KG9wdGlvbik7XG4gICAgICAgICAgICB3ZWF0aGVyLnNldEhvdXJseUZvcmVjYXN0KG9wdGlvbik7XG4gICAgICAgICAgICB3ZWF0aGVyLnNldERheUZvcmVjYXN0KG9wdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ2V0SG91cmx5JzpcbiAgICAgICAgICAgIHJldHVybih3ZWF0aGVyLmdldEhvdXJseUZvcmVjYXN0KG9wdGlvbi5ob3VySW5kZXgsIG9wdGlvbi5hdHRyaWJ1dGVOYW1lKSk7XG4gICAgICAgIGNhc2UgJ2dldEF2ZXJhZ2UnOlxuICAgICAgICAgICAgcmV0dXJuKHdlYXRoZXIuZ2V0QXZlcmFnZUZvcmVDYXN0KG9wdGlvbi5kYXlJbmRleCwgb3B0aW9uLmF0dHJpYnV0ZU5hbWUpKTtcbiAgICAgICAgY2FzZSAnZ2V0RGF5SG91cmx5JzpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXIuZ2V0SG91cmx5RGFpbHlGb3JlY2FzdERhdGEob3B0aW9uLmRheUluZGV4LCBvcHRpb24uaG91ckluZGV4LCBvcHRpb24uYXR0cmlidXRlTmFtZSkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3B0aW9uLmF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHdlYXRoZXIuZ2V0SG91cmx5RGFpbHlGb3JlY2FzdERhdGEob3B0aW9uLmRheUluZGV4LCBvcHRpb24uaG91ckluZGV4LCBvcHRpb24uYXR0cmlidXRlTmFtZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59IiwiaW1wb3J0IHdlYXRoZXJTZXRfR2V0IGZyb20gXCIuL3Byb2Nlc3Nfc3RvcmVfdmFsdWVzXCI7XG5cbmNvbnN0IHVwZGF0ZSA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUFsbERpc3BsYXlWYWx1ZXMoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFDYXRlZ29yeSArICcgJyArIGhycyk7XG5cbiAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGVzZSBmdW5jdGlvbnMgdG8gYmUgY2FsbGVkIHdoZW4gd2UgYXJlIGNoYW5naW5nIHRoZSBzbGlkZXIgdmFsdWVcbiAgICAgICAgLy8gYnV0IHdlIHdhbnQgdGhlc2UgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkIGZvciBmaXJzdCB0aW1lIG9yIG5ldyBsb2NhdGlvbiBpcyBlbnRlcmVkXG4gICAgICAgIC8vIHdoZW4gdGhlIHNsaWRlciBpcyBpbiBjdXJyZW50IGhvdXIgcmFuZ2Ugd2Ugd2FudCB0aGUgdmFsdWVzIHRvIGJlIHRha2VuIGZyb20gdGhlIGN1cnJlbnQgZGF0YSBub3QgZm9yZWNhc3QgZGF0YVxuICAgICAgICAvLyB3aGVuIHNsaWRlciB2YWx1ZSBpcyBjaGFuZ2VkIGluIGN1cnJlbnQgaG91ciByYW5nZSB3ZSBzZW5kIG51bGwgaW4gYm90aCB0aGUgZGF0YSBjYXQgYW5kIGhycyB2YXJpYWJsZVxuICAgICAgICAvLyBvbiB0aGUgZmlyc3QgbG9hZCBvciBvbiBsb2FjdGlvbiBlbnRlcmVkIHRoZSBkYXRhIGNhdCBhbmQgaHJzIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyBzbyB0aGVzZSBmdW5jdGlvbnMgYXJlIGNhbGxlZCBvbiBmaXJzdCBsb2FkIGJ1dCBub3Qgd2hlbiBzbGlkZXIgdmFsdWUgaXMgY2hhbmdlZCBpbiB0aGUgY3VycmVudCBob3VyIHJhbmdlXG4gICAgICAgIC8vIGFzIHdlIGFyZSBzZW5kaW5nIG51bGwgaW4gdGhlIGZ1bmN0aW9uIHBhcmFtZXRlcnNcblxuICAgICAgICBpZihkYXRhQ2F0ZWdvcnkgPT09IHVuZGVmaW5lZCkgeyBcbiAgICAgICAgICAgIHVwZGF0ZUxvY2F0aW9uKCk7XG4gICAgICAgICAgICB1cGRhdGVGb3JlY2FzdFNsaWRlclZhbHVlKCk7XG4gICAgICAgICAgICB1cGRhdGVGb3JlQ2FzdFNsaWRlckxhYmVscygpO1xuICAgICAgICAgICAgdXBkYXRlRm9yZWNhc3REYXlCb2R5KCk7XG4gICAgICAgICAgICB1cGRhdGVBY3RpdmVGb3JlY2FzdERheUNhcmQoKVxuICAgICAgICAgICAgdXBkYXRlRXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZURheURhdGUoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlVGltZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVXZWF0aGVySWNvbihkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVUZW1wZXJhdHVyZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVXZWF0aGVyVHlwZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVGZWVsTGlrZVRlbXBlcmF0dXJlKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleCk7XG4gICAgICAgIHVwZGF0ZUh1bWlkaXR5KGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleCk7XG4gICAgICAgIHVwZGF0ZUNoYW5jZU9mUmFpbihkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVXaW5kU3BlZWQoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlUHJlc3N1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbigpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCAnbG9jYXRpb24nKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdERheURhdGUoYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgICAgbGV0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuICAgICAgICBsZXQgd2Vla2RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGhydXNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gICAgICAgIGxldCBkYXRlU3VmZml4ID0gWyd0aCcsICdzdCcsICduZCcsICdyZCddO1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICBpZihkYXkgJSAxMCA8IDQpIHtcbiAgICAgICAgICAgIGRheSA9IGRheSArIGRhdGVTdWZmaXhbZGF5ICUgMTBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF5ID0gZGF5ICsgJ3RoJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2Vla2RheXNbZGF0ZS5nZXREYXkoKV0gKyBcIiwgXCIgKyBkYXkgKyAnLCAnICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyAnICcgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZURheURhdGUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXlEYXRlJyk7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSB3ZWF0aGVyU2V0X0dldChkYXRhQ2F0ZWdvcnksIHtob3VySW5kZXg6IGhycywgYXR0cmlidXRlTmFtZTogaWQsIGRheUluZGV4OiBkYXl9KSB8fCB3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsIGlkKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGZvcm1hdERheURhdGUoYXR0cmlidXRlVmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KGRhdGFDYXRlZ29yeSwge2hvdXJJbmRleDogaHJzLCBhdHRyaWJ1dGVOYW1lOiBpZCwgZGF5SW5kZXg6IGRheX0pIHx8IHdlYXRoZXJTZXRfR2V0KCdnZXRDdXJyZW50JywgaWQpO1xuICAgICAgICAvLyB3ZSB3YW50IHRoZSB0aW1lIHRvIHVwZGF0ZSBvbiBjaGFuZ2Ugb2YgdGhlIHNsaWRlciBidXQgdGhlIHRpbWUgb24gbG9hZGluZyBvZiBuZXcgbG9hY3Rpb24gc2hvdWxkIGJlIHRha2VuIGZyb20gY3VycmVudFxuICAgICAgICAvLyB3aGVuIHRoZSBzbGlkZXIgaXMgY2hhbmdlZCB3ZSBzZW5kIHRoZSBkYXRhIGNhdGVnb3J5IHZhbHVlIHRoZW4gdGhlIHZhbHVlIG9mIHRpbWUgaXMgdXBkYXRlZCBhY2NvcmRpbmcgdG8gdGhlIGZvcmVjYXN0IHNsaWRlciB2YWx1ZSBvZiB0aW1lXG4gICAgICAgIC8vIHdoZW4gd2UgY2hhbmdlIHRoZSBzbGlkZXIgaW4gdGhlIGN1cnJlbnQgaG91ciByYW5nZSB3ZSBzZW5kIG51bGwgaW4gZGF0YSBjYXQgdmFsdWUgdGhlbiBhbHNvIHRoZSB2YWx1ZSBvZiB0aW1lIG5lZWQgdG8gYmUgdXBkYXRlZCBhY2NvcmRpbmcgdG8gZm9yZSBjYXN0IHNsaWRlciB2YWx1ZVxuICAgICAgICBpZihkYXRhQ2F0ZWdvcnkgfHwgZGF0YUNhdGVnb3J5ID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgbWluID0gcHJvY2Vzc1NsaWRlclZhbHVlKCdtaW4nKTtcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gYXR0cmlidXRlVmFsdWUuc3BsaXQoJzonKVswXSArICc6JyArIG1pbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gTnVtYmVyKGF0dHJpYnV0ZVZhbHVlLnNwbGl0KCc6JylbMF0pIDwgMTAgPyAwICsgYXR0cmlidXRlVmFsdWUgOiBhdHRyaWJ1dGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlV2VhdGhlckljb24oZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVySWNvbicpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gYXR0cmlidXRlVmFsdWU7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRlbXBlcmF0dXJlKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXkpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KGRhdGFDYXRlZ29yeSwge2hvdXJJbmRleDogaHJzLCBhdHRyaWJ1dGVOYW1lOiBpZCwgZGF5SW5kZXg6IGRheX0pIHx8IHdlYXRoZXJTZXRfR2V0KCdnZXRDdXJyZW50JywgaWQpO1xuICAgICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlW2FjdGl2ZVVuaXRdO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyVHlwZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJUeXBlJyk7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSB3ZWF0aGVyU2V0X0dldChkYXRhQ2F0ZWdvcnksIHtob3VySW5kZXg6IGhycywgYXR0cmlidXRlTmFtZTogaWQsIGRheUluZGV4OiBkYXl9KSB8fCB3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsIGlkKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZlZWxMaWtlVGVtcGVyYXR1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc0xpa2UnKTtcbiAgICAgICAgbGV0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KGRhdGFDYXRlZ29yeSwge2hvdXJJbmRleDogaHJzLCBhdHRyaWJ1dGVOYW1lOiBpZCwgZGF5SW5kZXg6IGRheX0pIHx8IHdlYXRoZXJTZXRfR2V0KCdnZXRDdXJyZW50JywgaWQpO1xuICAgICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlW2FjdGl2ZVVuaXRdICsgJyDCsCcgKyBhY3RpdmVVbml0LnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSHVtaWRpdHkoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZSArIFwiICVcIjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2hhbmNlT2ZSYWluKGRhdGFDYXRlZ29yeSwgaHJzLCBkYXkpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmNlT2ZSYWluJyk7XG4gICAgICAgIGxldCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSB3ZWF0aGVyU2V0X0dldChkYXRhQ2F0ZWdvcnksIHtob3VySW5kZXg6IGhycywgYXR0cmlidXRlTmFtZTogaWQsIGRheUluZGV4OiBkYXl9KSB8fCB3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsIGlkKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlICsgXCIgJVwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVdpbmRTcGVlZChkYXRhQ2F0ZWdvcnksIGhycywgZGF5KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRTcGVlZCcpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVsna3BoJ10gKyBcIiBrcGhcIjtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJlc3N1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheSkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzc3VyZScpO1xuICAgICAgICBsZXQgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoZGF0YUNhdGVnb3J5LCB7aG91ckluZGV4OiBocnMsIGF0dHJpYnV0ZU5hbWU6IGlkLCBkYXlJbmRleDogZGF5fSkgfHwgd2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCBpZCk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVsnbWInXSArIFwiIG1iXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3RTbGlkZXJWYWx1ZShzbGlkZXJWYWx1ZSkge1xuICAgICAgICAvLyBzbGlkZXIgdmFsdWUgaXMgdW5kZWZpbmVkIHVzdWFsbHkgYnV0IHdoZW4gdGhlIGZvcmVjYXN0IGRheSBjYXJkIGlzIGNsaWNrZWQgdGhpcyBpcyAwIHNpbmNlIGRheSBzdGFydHMgYXQgMDowMCBocnNcbiAgICAgICAgY29uc3QgZm9yZWNhc3RTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3RTbGlkZXInKTtcbiAgICAgICAgbGV0IGN1cnJlbnRNaW4gPSBzbGlkZXJWYWx1ZSB8fCBOdW1iZXIod2VhdGhlclNldF9HZXQoJ2dldEN1cnJlbnQnLCAndGltZScpLnNwbGl0KCc6JylbMV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50TWluKTtcbiAgICAgICAgZm9yZWNhc3RTbGlkZXIudmFsdWUgPSBgJHtOdW1iZXIoY3VycmVudE1pbil9YDtcbiAgICAgICAgLy8gZm9yZWNhc3RTbGlkZXIudmFsdWUgPSAnMCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9yZUNhc3RTbGlkZXJMYWJlbHMoZmlyc3RTbGlkZXJMYWJsZSkge1xuICAgICAgICBsZXQgY3VycmVudEhvdXIgPSBmaXJzdFNsaWRlckxhYmxlIHx8IE51bWJlcih3ZWF0aGVyU2V0X0dldCgnZ2V0Q3VycmVudCcsICd0aW1lJykuc3BsaXQoJzonKVswXSk7XG4gICAgICAgIGxldCBob3VyTGFiZWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGhvdXJMYWJlbHMpO1xuICAgICAgICBmb3IobGV0IGxhYmVsIGluIGhvdXJMYWJlbHMpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxhYmVsKTtcbiAgICAgICAgICAgIGlmKGxhYmVsID09PSAnMCcgfHwgbGFiZWwgPT09ICc4Jykge1xuICAgICAgICAgICAgICAgIGhvdXJMYWJlbHNbbGFiZWxdLmxhYmVsID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRIb3VyID0gTnVtYmVyKGN1cnJlbnRIb3VyKSArIDM7XG4gICAgICAgICAgICAgICAgY3VycmVudEhvdXIgPSBjdXJyZW50SG91ciA+IDIzID8gY3VycmVudEhvdXIlMjMtMSA6IGN1cnJlbnRIb3VyO1xuICAgICAgICAgICAgICAgIGhvdXJMYWJlbHNbbGFiZWxdLmxhYmVsID0gY3VycmVudEhvdXIgPCAxMCA/IGAwJHtjdXJyZW50SG91cn06MDBgIDogYCR7Y3VycmVudEhvdXJ9OjAwYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGVtcGVyYXR1cmVVbml0c0NoYW5nZWQoKSB7XG4gICAgICAgIGxldCBkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXg7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZvcmVjYXN0RGF5Q2FyZERheUluZGV4ID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVGb3JlY2FzdERheUNhcmQnKS5nZXRBdHRyaWJ1dGUoJ2lkJykuY2hhckF0KDApKTtcbiAgICAgICAgaWYoYWN0aXZlRm9yZWNhc3REYXlDYXJkRGF5SW5kZXggPT09IDApIHsgIC8vIGhlcmUgd2UgYXJlIGNoZWNraW5nIGlmIHRoZSBjdXJyZW50IGRheSBpcyBzZWxlY3RlZCBzbyB3ZSBnZXQgdGhlIGhvdXJseSBkYXRhIGJ1dCBpZiBub3QgdGhlbiBkYXlIb3VybHkgZGF0YVxuICAgICAgICAgICAgaWYoISAocHJvY2Vzc1NsaWRlclZhbHVlKCdocnMnKSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9ICdnZXRIb3VybHknO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBocnMgPSBudWxsO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgZGF0YUNhdGVnb3J5ID0gJ2dldERheUhvdXJseSc7XG4gICAgICAgICAgICBkYXlJbmRleCA9IGFjdGl2ZUZvcmVjYXN0RGF5Q2FyZERheUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlVGVtcGVyYXR1cmUoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICAgICAgdXBkYXRlRmVlbExpa2VUZW1wZXJhdHVyZShkYXRhQ2F0ZWdvcnksIGhycywgZGF5SW5kZXgpO1xuICAgICAgICB1cGRhdGVGb3JlY2FzdERheVRlbXBlcmF0dXJlVW5pdCgpOyAvLyB0aGlzIG9ubHkgdXBkYXRlcyB0aGUgY2FyZCB0ZW1wZXJhdHVyZSB1bml0cyBzbyBubyBhdHRyaWJ1dGUgbmVjZXNzYXJ5IGFzIGl0IGlzIGRvbmUgaW4gdGhhdCBmdW5jdGlvbiBcbiAgICB9IFxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3RIb3VySW5mbygpIHtcbiAgICAgICAgbGV0IGRhdGFDYXRlZ29yeSwgaHJzLCBkYXlJbmRleDtcbiAgICAgICAgY29uc3QgYWN0aXZlRm9yZWNhc3REYXlDYXJkRGF5SW5kZXggPSBOdW1iZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpLmdldEF0dHJpYnV0ZSgnaWQnKS5jaGFyQXQoMCkpO1xuICAgICAgICBpZihhY3RpdmVGb3JlY2FzdERheUNhcmREYXlJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgaWYoISAocHJvY2Vzc1NsaWRlclZhbHVlKCdocnMnKSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9ICdnZXRIb3VybHknO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBocnMgPSBudWxsO1xuICAgICAgICAgICAgICAgIGRhdGFDYXRlZ29yeSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBocnMgPSBwcm9jZXNzU2xpZGVyVmFsdWUoJ2hycycpO1xuICAgICAgICAgICAgZGF0YUNhdGVnb3J5ID0gJ2dldERheUhvdXJseSc7XG4gICAgICAgICAgICBkYXlJbmRleCA9IGFjdGl2ZUZvcmVjYXN0RGF5Q2FyZERheUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHJzID0gcHJvY2Vzc1NsaWRlclZhbHVlKCdocnMnKTtcbiAgICAgICAgLy8gZGF0YUNhdGVnb3J5ID0gJ2dldEhvdXJseSc7XG4gICAgICAgIHVwZGF0ZUFsbERpc3BsYXlWYWx1ZXMoZGF0YUNhdGVnb3J5LCBocnMsIGRheUluZGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzU2xpZGVyVmFsdWUoaHJzX21pbikge1xuICAgICAgICBsZXQgc2xpZGVyVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZWNhc3RTbGlkZXInKS52YWx1ZS5zcGxpdCgnLicpWzBdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzbGlkZXJWYWx1ZSk7XG4gICAgICAgIGxldCBocnMgPSBNYXRoLmZsb29yKHNsaWRlclZhbHVlIC8gNjApO1xuICAgICAgICBsZXQgbWluID0gc2xpZGVyVmFsdWUgJSA2MDtcbiAgICAgICAgbWluID0gbWluIDwgMTAgPyAnMCcrbWluIDogbWluO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhocnMrIFwiOlwiKyBtaW4pO1xuICAgICAgICBpZihocnNfbWluID09PSAnaHJzJyB8fCAhaHJzX21pbikge1xuICAgICAgICAgICAgcmV0dXJuIGhycztcbiAgICAgICAgfSBlbHNlIGlmKGhyc19taW4gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJyk7XG4gICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gZXJyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0RGF5VGVtcGVyYXR1cmVVbml0KCkge1xuICAgICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgbGV0IG1heFRlbXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JlY2FzdERheU1heFRlbXAnKSk7XG4gICAgICAgIGxldCBtaW5UZW1wcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9yZWNhc3REYXlNaW5UZW1wJykpO1xuXG4gICAgICAgIGZvcihsZXQgbWF4VGVtcCBpbiBtYXhUZW1wcykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBtYXhUZW1wc1ttYXhUZW1wXTtcbiAgICAgICAgICAgIGxldCBkYXlJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpLnNwbGl0KCdkYXlGb3JlY2FzdERheScpWzBdO1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdCgnZGF5Rm9yZWNhc3REYXknKVsxXTtcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KCdnZXRBdmVyYWdlJywge2RheUluZGV4LCBhdHRyaWJ1dGVOYW1lfSk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWVbYWN0aXZlVW5pdF0gKyAnIMKwJyArIGFjdGl2ZVVuaXQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgbWluVGVtcCBpbiBtaW5UZW1wcykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBtaW5UZW1wc1ttaW5UZW1wXTtcbiAgICAgICAgICAgIGxldCBkYXlJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpLnNwbGl0KCdkYXlGb3JlY2FzdERheScpWzBdO1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZU5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdCgnZGF5Rm9yZWNhc3REYXknKVsxXTtcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHdlYXRoZXJTZXRfR2V0KCdnZXRBdmVyYWdlJywge2RheUluZGV4LCBhdHRyaWJ1dGVOYW1lfSk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWVbYWN0aXZlVW5pdF0gKyAnIMKwJyArIGFjdGl2ZVVuaXQudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0RGF5Q2FyZChkYXlDYXJkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRheUNhcmQpO1xuICAgICAgICBsZXQgc3BsaXRWYWx1ZSA9ICdkYXlGb3JlY2FzdERheSc7XG4gICAgICAgIGxldCBkYXlDYXJkSWQgPSBkYXlDYXJkLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgbGV0IGRheUluZGV4ID0gZGF5Q2FyZElkLmNoYXJBdCgwKTtcbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiBkYXlDYXJkLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlTmFtZSA9IGNoaWxkLmdldEF0dHJpYnV0ZSgnaWQnKS5zcGxpdChzcGxpdFZhbHVlKVsxXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZVZhbHVlID0gd2VhdGhlclNldF9HZXQoJ2dldEF2ZXJhZ2UnLCB7ZGF5SW5kZXgsIGF0dHJpYnV0ZU5hbWV9KTtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbm90IGdvb2QgcHJhY3RpY2Ugc29ycnlcbiAgICAgICAgICAgIHN3aXRjaChhdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnRGF5TmFtZSc6XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXkgPSBmb3JtYXREYXlEYXRlKGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQudGV4dENvbnRlbnQgPSBkYXkuc3BsaXQoJywgJylbMF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1dlYXRoZXJJY29uJzogXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNyYyA9IGF0dHJpYnV0ZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdXZWF0aGVyVHlwZSc6XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGNhc2UgJ01heFRlbXAnOlxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgYWN0aXZlVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2hpbGQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVthY3RpdmVVbml0XSArICcgwrAnICsgYWN0aXZlVW5pdC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdNaW5UZW1wJzpcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGFjdGl2ZVVuaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVVbml0JykuZ2V0QXR0cmlidXRlKCdpZCcpLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hpbGQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVWYWx1ZVthY3RpdmVVbmldICsgJyDCsCcgKyBhY3RpdmVVbmkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9yZWNhc3REYXlUZW1wZXJhdHVyZVVuaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQ2hhbmNlT2ZSYWluJzpcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5jZU9mUmFpbkNoaWxkID0gY2hpbGQubGFzdENoaWxkO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZVZhbHVlICsgJyAlJztcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYXBwZW5kQ2hpbGQoY2hhbmNlT2ZSYWluQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdXaW5kU3BlZWQnOlxuICAgICAgICAgICAgICAgICAgICBsZXQgd2luZFNwZWVkQ2hpbGQgPSBjaGlsZC5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gYXR0cmlidXRlVmFsdWVbJ2twaCddICsgJyBrcGgnO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZCh3aW5kU3BlZWRDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gIHVwZGF0ZUZvcmVjYXN0RGF5Qm9keSgpe1xuICAgICAgICBjb25zdCBmb3JlY2FzdERheUNhcmRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JlY2FzdERheUNhcmQnKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF5Q2FyZHMpO1xuICAgICAgICBmb3IobGV0IGNhcmQgaW4gZm9yZWNhc3REYXlDYXJkcykge1xuICAgICAgICAgICAgdXBkYXRlRm9yZWNhc3REYXlDYXJkKGZvcmVjYXN0RGF5Q2FyZHNbY2FyZF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGlzcGxheVZhbHVlQWNjb3JkaW5nVG9Gb3JlY2FzdERheUNhcmRDbGlja2VkKGRheUluZGV4KSB7XG4gICAgICAgIGlmKGRheUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB1cGRhdGVBbGxEaXNwbGF5VmFsdWVzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB1cGRhdGluZyB0aGUgc2xpZGVyIHZhbHVlIGFuZCB0aGUgbGFiZWwgdmFsdWVzIGhlcmUgc2luY2UgaSB3YXMgbm90IGFibGUgdG8gZmluZCBhIHNvbHV0aW9uIHRvIHVwZGF0ZSB0aGVtIGluIHVwZGF0ZWFsbGRpc3BsYXlcbiAgICAgICAgICAgIC8vIHZhbHVlIGZ1bmN0aW9uIHdpdGhvdXQgdXNpbmcgaWYgYW5kIGVsc2Ugd2hpY2ggbWlnaHQgbWFrZSBpdCBqYW5rIGFuZCBkaWZmaWN1bHQgdG8gdW5kZXIgc3RhbmQgd2l0aCBhbGwgdGhlIHVuZGVmaW5lZFxuICAgICAgICAgICAgLy8gYW5kIG51bGwgdmFsdWVzIGkgYW0gc2VuZGluZyBpdCB0byBtYWtlIGl0IHdvcmsgd2hpY2ggbWFrZXMgaXQgYWxyZWFkeSB2ZXJ5IGphbmsgc28gc29ycnlcbiAgICAgICAgICAgIHVwZGF0ZUZvcmVjYXN0U2xpZGVyVmFsdWUoJzAnKTtcbiAgICAgICAgICAgIHVwZGF0ZUZvcmVDYXN0U2xpZGVyTGFiZWxzKCcwJyk7XG4gICAgICAgICAgICB1cGRhdGVBbGxEaXNwbGF5VmFsdWVzKCdnZXREYXlIb3VybHknLCAwLCBOdW1iZXIoZGF5SW5kZXgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVGb3JlY2FzdERheUNhcmQoKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUZvcmVjYXN0RGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZUZvcmVjYXN0RGF5Q2FyZCcpO1xuICAgICAgICBjb25zdCBjdXJyZW50RGF5Q2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcwZGF5Rm9yZWNhc3RDYXJkJyk7XG4gICAgICAgIGlmKCEgY3VycmVudERheUNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmVGb3JlY2FzdERheUNhcmQnKSkge1xuICAgICAgICAgICAgYWN0aXZlRm9yZWNhc3REYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlRm9yZWNhc3REYXlDYXJkJyk7XG4gICAgICAgICAgICBjdXJyZW50RGF5Q2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVGb3JlY2FzdERheUNhcmQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBkYXRlQWxsRGlzcGxheVZhbHVlcyxcbiAgICAgICAgdXBkYXRlVGVtcGVyYXR1cmVVbml0c0NoYW5nZWQsXG4gICAgICAgIHVwZGF0ZUZvcmVjYXN0SG91ckluZm8sXG4gICAgICAgIHVwZGF0ZUVycm9yLFxuICAgICAgICB1cGRhdGVEaXNwbGF5VmFsdWVBY2NvcmRpbmdUb0ZvcmVjYXN0RGF5Q2FyZENsaWNrZWQsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ29udHJvbChvcHRpb24pIHtcbiAgICBpZihvcHRpb24uZnVuY3Rpb25Db2RlID09PSAxKSB7XG4gICAgICAgIHVwZGF0ZS51cGRhdGVBbGxEaXNwbGF5VmFsdWVzKCk7XG4gICAgfSBlbHNlIGlmKG9wdGlvbi5mdW5jdGlvbkNvZGUgPT09IDIpIHtcbiAgICAgICAgdXBkYXRlLnVwZGF0ZVRlbXBlcmF0dXJlVW5pdHNDaGFuZ2VkKCk7XG4gICAgfSBlbHNlIGlmKG9wdGlvbi5mdW5jdGlvbkNvZGUgPT09IDMpIHtcbiAgICAgICAgdXBkYXRlLnVwZGF0ZUZvcmVjYXN0SG91ckluZm8oKTtcbiAgICB9IGVsc2UgaWYob3B0aW9uLmZ1bmN0aW9uQ29kZSA9PT0gNCkge1xuICAgICAgICB1cGRhdGUudXBkYXRlRXJyb3Iob3B0aW9uLmVycm9yKTtcbiAgICB9IGVsc2UgaWYob3B0aW9uLmZ1bmN0aW9uQ29kZSA9PT0gNSkge1xuICAgICAgICB1cGRhdGUudXBkYXRlRGlzcGxheVZhbHVlQWNjb3JkaW5nVG9Gb3JlY2FzdERheUNhcmRDbGlja2VkKG9wdGlvbi5kYXlJbmRleCk7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==