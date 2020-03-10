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
/*! no static exports found */
/***/ (function(module, exports) {

eval("const LINKS = [\n  \"introduction\",\n  \"demographics\",\n  \"conclusions\"\n];\n\nconst COLOR = \"lightgray\";\n\nconst linkShow = (link) => {\n  for (i = 0; i < LINKS.length; i++) {\n    document.querySelector(`.${LINKS[i]}-div`).style.display = \"none\";\n  }\n  document.querySelector(`.${link}-div`).style.display = \"block\";\n}\n\ndocument.addEventListener('DOMContentLoaded', (event) => {\n  let style = document.querySelector(\".mobile-drop-down\").style;\n\n  document.querySelector(\".main-header-nav\").addEventListener(\"click\", () => {\n    if (style.height === \"125px\") {\n      style.height = \"0px\";\n      style.borderBottom = \"none\";\n    } else {\n      style.height = \"125px\";\n      style.borderBottom = \"1px solid #c4dfff\";\n    }\n  });\n\n  window.addEventListener('resize', () => {\n    if (window.innerWidth > 1000) {\n      style.height = \"0px\";\n      style.borderBottom = \"none\";\n    }\n  });\n\n  for (let i = 0; i < LINKS.length; i++) {\n    let links = document.querySelectorAll(`.${LINKS[i]}-link`);\n    for (let j = 0; j < links.length; j++) {\n      document.querySelectorAll(`.${LINKS[i]}-link`)[j].addEventListener(\"click\", () => {\n        linkShow(`${LINKS[i]}`)\n      })\n    }\n  }\n\n\n\n\n\n  // D3 code starts here for first bar graph.\n\n  let data = [\n    { name: \"Other\", value: \"0.005\" },\n    { name: \"Non-Binary\", value: \"0.08\" },\n    { name: \"Male\", value: \"0.32\" },\n    { name: \"Female\", value: \"0.58\" },\n  ];\n\n  let height = 400;\n  let width = 550;\n  let margin = ({ top: 20, right: 20, bottom: 20, left: 30 });\n  let x = d3.scaleBand().domain(data.map(d => d.name)).range([margin.left, width - margin.right]).padding(0.1);\n  let y = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).range([height - margin.bottom, margin.top]);\n  let xAxis = g => g.attr(\"transform\", `translate(0,${height - margin.bottom})`).call(d3.axisBottom(x));\n  let yAxis = g => g.attr(\"transform\", `translate(${margin.left},0)`).call(d3.axisLeft(y).tickFormat(d3.format(\".0%\")));\n  let svg = d3.select('.graph-gender');\n  let g = svg.append(\"g\").attr(\"fill\", COLOR);\n\n  g.selectAll(\"rect\").data(data).join(\"rect\").attr(\"x\", d => x(d.name)).attr(\"y\", d => y(d.value)).attr(\"height\", d => y(0) - y(d.value)).attr(\"width\", x.bandwidth());\n  svg.append(\"g\").call(xAxis);\n  svg.append(\"g\").call(yAxis);\n  \n  \n  \n\n\n  // D3 race graph code is below.\n\n  data = [\n    { name: \"Decline to Answer\", value: \"0.04\" },\n    { name: \"White / Caucasian\", value: \"0.73\" },\n    { name: \"Biracial / Multi Racial\", value: \"0.07\" },\n    { name: \"Asian / Asian American\", value: \"0.04\" },\n    { name: \"Black / African American\", value: \"0.04\" },\n    { name: \"Jewish / White\", value: \"0.03\" },\n    { name: \"Latino / Latina / Latinx\", value: \"0.03\" },\n    { name: \"Iranian\", value: \"0.01\" },\n    { name: \"Native American\", value: \"0.01\" },\n  ];\n\n  height = 400;\n  width = 1200;\n  margin = ({ top: 20, right: 20, bottom: 20, left: 30 });\n  x = d3.scaleBand().domain(data.map(d => d.name)).range([margin.left, width - margin.right]).padding(0.1);\n  y = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).range([height - margin.bottom, margin.top]);\n  svg = d3.select('.graph-race');\n  g = svg.append(\"g\").attr(\"fill\", COLOR);\n  g.selectAll(\"rect\").data(data).join(\"rect\").attr(\"x\", d => x(d.name)).attr(\"y\", d => y(d.value)).attr(\"height\", d => y(0) - y(d.value)).attr(\"width\", x.bandwidth());\n  svg.append(\"g\").call(xAxis);\n  svg.append(\"g\").call(yAxis);\n  \n\n  \n  // D3 orientation graph code is below.\n\n  data = [\n    { name: \"Decline to Say\", value: \"0.079\" },\n    { name: \"Not LGBTQ+\", value: \"0.356\" },\n    { name: \"LGBTQ+\", value: \"0.564\" },\n  ];\n\n  height = 400;\n  width = 550;\n  margin = ({ top: 20, right: 20, bottom: 20, left: 30 });\n  x = d3.scaleBand().domain(data.map(d => d.name)).range([margin.left, width - margin.right]).padding(0.1);\n  y = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).range([height - margin.bottom, margin.top]);\n  svg = d3.select('.graph-orientation');\n  g = svg.append(\"g\").attr(\"fill\", COLOR);\n  g.selectAll(\"rect\").data(data).join(\"rect\").attr(\"x\", d => x(d.name)).attr(\"y\", d => y(d.value)).attr(\"height\", d => y(0) - y(d.value)).attr(\"width\", x.bandwidth());\n  svg.append(\"g\").call(xAxis);\n  svg.append(\"g\").call(yAxis);\n\n  \n\n  // D3 age graph code is below.\n\n  data = [\n    { name: \"<18\", value: \"0.06\" },\n    { name: \"18-29\", value: \"0.32\" },\n    { name: \"30-39\", value: \"0.26\" },\n    { name: \"40-49\", value: \"0.07\" },\n    { name: \"50-59\", value: \"0.09\" },\n    { name: \"60-69\", value: \"0.14\" },\n    { name: \"70+\", value: \"0.06\" },\n  ];\n\n  x = d3.scaleBand().domain(data.map(d => d.name)).range([margin.left, width - margin.right]).padding(0.1);\n  y = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).range([height - margin.bottom, margin.top]);\n  svg = d3.select('.graph-age');\n  g = svg.append(\"g\").attr(\"fill\", COLOR);\n  g.selectAll(\"rect\").data(data).join(\"rect\").attr(\"x\", d => x(d.name)).attr(\"y\", d => y(d.value)).attr(\"height\", d => y(0) - y(d.value)).attr(\"width\", x.bandwidth());\n  svg.append(\"g\").call(xAxis);\n  svg.append(\"g\").call(yAxis);\n  \n\n  \n  // D3 how did you find this graph code is below.\n\n  data = [\n    { name: \"artist / peer\", value: \"0.198\" },\n    { name: \"instagram\", value: \"0.733\" },\n    { name: \"other\", value: \"0.069\" },\n  ];\n\n  x = d3.scaleBand().domain(data.map(d => d.name)).range([margin.left, width - margin.right]).padding(0.1);\n  y = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).range([height - margin.bottom, margin.top]);\n  svg = d3.select('.graph-found-survey');\n  g = svg.append(\"g\").attr(\"fill\", COLOR);\n  g.selectAll(\"rect\").data(data).join(\"rect\").attr(\"x\", d => x(d.name)).attr(\"y\", d => y(d.value)).attr(\"height\", d => y(0) - y(d.value)).attr(\"width\", x.bandwidth());\n  svg.append(\"g\").call(xAxis);\n  svg.append(\"g\").call(yAxis);\n\n})\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

/******/ });