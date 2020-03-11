/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/data */ \"./src/data.js\");\n/* harmony import */ var _src_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/render */ \"./src/render.js\");\n\n\n\nconst linkShow = (link) => {\n  for (let i = 0; i < _src_data__WEBPACK_IMPORTED_MODULE_0__[\"LINKS\"].length; i++) { document.querySelector(`.${_src_data__WEBPACK_IMPORTED_MODULE_0__[\"LINKS\"][i]}-div`).style.display = \"none\" }\n  document.querySelector(`.${link}-div`).style.display = \"block\";\n}\n\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n  let style = document.querySelector(\".mobile-drop-down\").style;\n  \n    document.querySelector(\".main-header-nav\").addEventListener(\"click\", () => {\n      if (style.height === \"125px\") { style.height = \"0px\"; style.borderBottom = \"none\"; } \n      else { style.height = \"125px\"; style.borderBottom = \"1px solid #c4dfff\"; }\n    });\n\n    window.addEventListener('resize', () => {\n      if (window.innerWidth > 1000) { style.height = \"0px\"; style.borderBottom = \"none\"; }\n    });\n\n    for (let i = 0; i < _src_data__WEBPACK_IMPORTED_MODULE_0__[\"LINKS\"].length; i++) {\n      let links = document.querySelectorAll(`.${_src_data__WEBPACK_IMPORTED_MODULE_0__[\"LINKS\"][i]}-link`);\n      for (let j = 0; j < links.length; j++) {\n        document.querySelectorAll(`.${_src_data__WEBPACK_IMPORTED_MODULE_0__[\"LINKS\"][i]}-link`)[j].addEventListener(\"click\", () => { linkShow(`${_src_data__WEBPACK_IMPORTED_MODULE_0__[\"LINKS\"][i]}`) })\n      }\n    }\n\n    Object(_src_render__WEBPACK_IMPORTED_MODULE_1__[\"RENDER_GRAPHS\"])();\n})\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./src/BarGraph.js":
/*!*************************!*\
  !*** ./src/BarGraph.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BarGraph; });\nclass BarGraph {\n  constructor(input) {\n    this.title = input.title;\n    this.data = input.data;\n    this.tag = input.tag;\n\n    this.width = input.width || 600;\n    this.height = input.height || 450;\n    this.innerWidth = (input.width - 50) || 550;\n    this.innerHeight = (input.height - 50) || 400;\n\n    this.margin = input.margin || { top: 20, right: 20, bottom: 20, left: 30 };\n    this.color = input.color || \"#ddd\";\n    this.angle = input.angle || false;\n  }\n\n  render() {\n      let x = d3.scaleBand()\n        .domain(this.data.map(d => d.name))\n        .range([this.margin.left, this.innerWidth - this.margin.right])\n        .padding(0.1);\n  \n      let y = d3.scaleLinear()\n        .domain([0, d3.max(this.data, d => d.value)])\n        .range([this.innerHeight - this.margin.bottom, this.margin.top]);\n      \n      let xAxis;\n\n      if (this.angle === true) {\n        xAxis = g => g\n          .attr(\"transform\", `translate(0,${this.innerHeight - this.margin.bottom})`)\n          .call(d3.axisBottom(x))\n          .selectAll(\"text\")\n          .attr(\"transform\", \"translate(10,0)rotate(30)\")\n          .style(\"letter-spacing\", \"-0.5px\")\n          .style(\"text-anchor\", \"start\")\n          .style(\"font-size\", \"10px\");\n      } else {\n        xAxis = g => g\n          .attr(\"transform\", `translate(0,${this.innerHeight - this.margin.bottom})`)\n          .call(d3.axisBottom(x));\n      }\n        \n      let yAxis = g => g\n        .attr(\"transform\", `translate(${this.margin.left},0)`)\n        .call(d3.axisLeft(y)\n        .tickFormat(d3.format(\".0%\")));\n  \n      let svg = d3.select(this.tag);\n      let g = svg.append(\"g\");\n      \n      g.selectAll(\"rect\")\n        .data(this.data)\n        .join(\"rect\").attr(\"x\", d => x(d.name))\n        .attr(\"height\", d => y(0) - y(d.value))\n        .attr(\"width\", x.bandwidth())\n        .attr(\"y\", d => y(d.value))\n        .attr(\"fill\", this.color);\n  \n      svg.attr(\"height\", this.height)\n        .attr(\"width\", this.width);\n      \n      svg.append(\"g\").call(xAxis);\n      svg.append(\"g\").call(yAxis);\n  \n      svg.append(\"text\")\n        .attr(\"x\", (this.width / 2) - 20)\n        .attr(\"text-anchor\", \"middle\")\n        .attr(\"y\", -10)\n        .text(this.title);\n  }\n}\n\n//# sourceURL=webpack:///./src/BarGraph.js?");

/***/ }),

/***/ "./src/PieChart.js":
/*!*************************!*\
  !*** ./src/PieChart.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PieChart; });\nclass PieChart {\n  constructor(input) {\n    this.title = input.title;\n    this.data = input.data;\n    this.tag = input.tag;\n\n    this.width = input.width || 600;\n    this.height = input.height || 450;\n    this.innerWidth = (input.width - 50) || 550;\n    this.innerHeight = (input.height - 50) || 400;\n\n    this.margin = input.margin || { top: 20, right: 20, bottom: 20, left: 30 };\n    this.color = input.color || \"#ddd\";\n    this.angle = input.angle || false;\n  }\n\n  render() {\n    var radius = 135;\n    var svg = d3.select(\".graph-gender\")\n      .attr('height', 450)\n      .attr('width', 400)\n      .append(\"g\")\n      .attr(\"transform\", \"translate(170,195)\")\n\n\n    var data = { yes: 55, no: 35, \"decline to say\": 8 }\n\n    var color = d3.scaleOrdinal()\n      .domain(data)\n      .range(d3.schemeSet2);\n\n    var pie = d3.pie()\n      .value(function (d) { return d.value; })\n    var data_ready = pie(d3.entries(data))\n\n    var arcGenerator = d3.arc()\n      .innerRadius(0)\n      .outerRadius(radius)\n\n    svg\n      .selectAll('mySlices')\n      .data(data_ready)\n      .enter()\n      .append('path')\n      .attr('d', arcGenerator)\n      .attr('fill', function (d) { return (color(d.data.key)) })\n      .style(\"opacity\", 0.6)\n\n    svg\n      .selectAll('mySlices')\n      .data(data_ready)\n      .enter()\n      .append('text')\n      .text(function (d) { return d.data.key })\n      .attr(\"transform\", function (d) { return \"translate(\" + arcGenerator.centroid(d) + \")\"; })\n      .style(\"font-size\", 12)\n\n    svg.append(\"text\")\n      .attr(\"x\", 5)\n      .attr(\"text-anchor\", \"middle\")\n      .attr(\"y\", -205)\n      .text(this.title);\n  }\n}\n\n//# sourceURL=webpack:///./src/PieChart.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: LINKS, FOUND_SURVEY, RACE, GENDER, AGE, ORIENTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LINKS\", function() { return LINKS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOUND_SURVEY\", function() { return FOUND_SURVEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RACE\", function() { return RACE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GENDER\", function() { return GENDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AGE\", function() { return AGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ORIENTATION\", function() { return ORIENTATION; });\nconst LINKS = [\n  \"introduction\",\n  \"demographics\",\n  \"conclusions\"\n];\n\nconst FOUND_SURVEY = [\n  { name: \"artist / peer\", value: \"0.198\" },\n  { name: \"instagram\", value: \"0.733\" },\n  { name: \"other\", value: \"0.069\" },\n];\n\nconst RACE = [\n  { name: \"Decline to Answer\", value: \"0.04\" },\n  { name: \"White / Caucasian\", value: \"0.73\" },\n  { name: \"Biracial / Multi Racial\", value: \"0.07\" },\n  { name: \"Asian / Asian American\", value: \"0.04\" },\n  { name: \"Black / African American\", value: \"0.04\" },\n  { name: \"Jewish / White\", value: \"0.03\" },\n  { name: \"Latino / Latina / Latinx\", value: \"0.03\" },\n  { name: \"Iranian\", value: \"0.01\" },\n  { name: \"Native American\", value: \"0.01\" },\n];\n\nconst GENDER = [\n  { name: \"Other\", value: \"0.005\" },\n  { name: \"Non-Binary\", value: \"0.08\" },\n  { name: \"Male\", value: \"0.32\" },\n  { name: \"Female\", value: \"0.58\" },\n];\n\nconst AGE = [\n  { name: \"<18\", value: \"0.06\" },\n  { name: \"18-29\", value: \"0.32\" },\n  { name: \"30-39\", value: \"0.26\" },\n  { name: \"40-49\", value: \"0.07\" },\n  { name: \"50-59\", value: \"0.09\" },\n  { name: \"60-69\", value: \"0.14\" },\n  { name: \"70+\", value: \"0.06\" },\n];\n\nconst ORIENTATION = [\n  { name: \"Yes\", value: \"0.564\" },\n  { name: \"No\", value: \"0.356\" },\n  { name: \"Decline to Say\", value: \"0.079\" },\n];\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: RENDER_GRAPHS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RENDER_GRAPHS\", function() { return RENDER_GRAPHS; });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _BarGraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BarGraph */ \"./src/BarGraph.js\");\n/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PieChart */ \"./src/PieChart.js\");\n\n\n\n\nconst RENDER_GRAPHS = () => {\n  new _PieChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    title: \"What is your gender?\",\n    tag: \".graph-gender\",\n    data: _data__WEBPACK_IMPORTED_MODULE_0__[\"GENDER\"],\n    // color: \"#E0BBE4\",\n    // width: 400,\n  }).render();\n  \n  new _BarGraph__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    title: \"What is your age?\",\n    tag: \".graph-age\",\n    data: _data__WEBPACK_IMPORTED_MODULE_0__[\"AGE\"],\n    color: \"#f2cbbb\",\n    width: 400,\n  }).render();\n  \n  new _BarGraph__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    title: \"What is your race / ethnicity?\",\n    tag: \".graph-race\",\n    data: _data__WEBPACK_IMPORTED_MODULE_0__[\"RACE\"],\n    color: \"#ddd\",\n    width: 400,\n    angle: true,\n  }).render();\n  \n  new _BarGraph__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    title: \"Do you identify as LGBTQ+?\",\n    tag: \".graph-orientation\",\n    data: _data__WEBPACK_IMPORTED_MODULE_0__[\"ORIENTATION\"],\n    color: \"#dee2d9\",\n    width: 400,\n  }).render();\n  \n  new _BarGraph__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    title: \"How did you hear about the survey?\",\n    tag: \".graph-found-survey\",\n    data: _data__WEBPACK_IMPORTED_MODULE_0__[\"FOUND_SURVEY\"],\n    color: \"#8da290\",\n    width: 400,\n  }).render();\n}\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ })

/******/ });