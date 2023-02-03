"use strict";
exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 5850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeSlashFromPagination = ()=>{
    let swiperPagination = document.querySelector(".swiper-pagination");
    if (swiperPagination) {
        swiperPagination.innerHTML = swiperPagination.innerHTML.replace(" / ", "");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeSlashFromPagination);


/***/ }),

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 6699:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"image":"/assets/img/team/1.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Hasib sharif","usertitle":"General Manager"},{"id":2,"image":"/assets/img/team/2.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Jonson Leo","usertitle":"Founder"},{"id":3,"image":"/assets/img/team/3.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Leio Man","usertitle":"Founder"},{"id":4,"image":"/assets/img/team/4.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Robert Front","usertitle":"CEO Founder"},{"id":5,"image":"/assets/img/team/5.jpg","facebook":"#","twitter":"#","behance":"#","linkedin":"#","username":"Matt Huk","usertitle":"3D Visualization"}]');

/***/ })

};
;