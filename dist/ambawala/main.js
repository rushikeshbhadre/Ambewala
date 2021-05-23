(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Study\ambawala\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../carousel/carousel.component */ "EfPX");


class HomeComponent {
    constructor() {
        this.slides = [
            { src: "assets/slider01.png" },
            { src: "assets/slider1.jpeg" },
            { src: "assets/slider2.jpeg" },
            { src: "assets/slider3.jpeg" }
        ];
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 25, vars: 1, consts: [[2, "display", "flex", "flex", "1", "height", "100%", "flex-direction", "column"], [2, "display", "flex", "flex", "2", "flex-wrap", "wrap"], [2, "display", "flex", "flex", "1", "align-items", "center", "flex-wrap", "wrap"], [2, "display", "flex", "flex", "2", "align-items", "center"], [2, "display", "flex"], ["src", "assets/ambewalaLogo (1).png", 2, "max-width", "300px", "margin-left", "30px", "background-color", "#facd47"], [2, "display", "flex", "flex", "3", "justify-content", "space-around", "align-items", "center"], [1, "button", "button1"], [2, "display", "flex", "flex", "8"], [1, "container"], [3, "slides"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Buy Devgad Mangoes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Chemical Free Ripening ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Transport And Packaging ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-carousel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.slides);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]], styles: [".button[_ngcontent-%COMP%] {\r\n    background-color: #facd47; \r\n    border: none;\r\n    color: white;\r\n    padding: 16px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    transition-duration: 0.5s;\r\n    cursor: pointer;\r\n    border-radius: 2;\r\n  }\r\n\r\n  .button1[_ngcontent-%COMP%] {\r\n    background-color: white; \r\n    color: black; \r\n    \r\n  }\r\n\r\n  .button1[_ngcontent-%COMP%]:hover {\r\n    background-color: #fcd973;\r\n    color: white;\r\n  }\r\n\r\n  .container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 370px;\r\n    width: 100% !important;\r\n    max-width: 100%;\r\n    padding: 2em;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QixFQUFFLFVBQVU7SUFDckMsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0VBQ2QiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjZDQ3OyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXHJcbiAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgIzRDQUY1MDsgKi9cclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbjE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZDk3MztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMzcwcHg7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EfPX":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CarouselComponent_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", slide_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("@carouselAnimation", undefined);
} }
function CarouselComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_img_1_Template, 1, 2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 === ctx_r0.currentSlide);
} }
class CarouselComponent {
    constructor() {
        this.currentSlide = 0;
    }
    ngOnInit() {
    }
    onPreviousClick() {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
        console.log("previous clicked, new current slide is: ", this.currentSlide);
    }
    onNextClick() {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
        console.log("next clicked, new current slide is: ", this.currentSlide);
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], inputs: { slides: "slides" }, decls: 6, vars: 1, consts: [[1, "carousel"], [4, "ngFor", "ngForOf"], [1, "control", "prev", 3, "click"], [1, "arrow", "left"], [1, "control", "next", 3, "click"], [1, "arrow", "right"], ["class", "slide", 3, "src", 4, "ngIf"], [1, "slide", 3, "src"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_2_listener() { return ctx.onPreviousClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_4_listener() { return ctx.onNextClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0.5em;\n}\n\n.slide[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  border-radius: 0.5em;\n}\n\n.slide[_ngcontent-%COMP%]:hover {\n  transform: scale(1.025);\n}\n\n.control[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: 0;\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0.5em;\n  color: white;\n  font-weight: bold;\n  font-size: 3em;\n  -webkit-user-select: none;\n          user-select: none;\n  height: 100%;\n  opacity: 80%;\n  transition: opacity 150ms cubic-bezier(0.25, 0.46, 0.45, 0.84);\n  \n}\n\n.control[_ngcontent-%COMP%]:hover, .control[_ngcontent-%COMP%]:focus {\n  opacity: 1;\n}\n\n.control.next[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.control.prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n\n\n.arrow[_ngcontent-%COMP%] {\n  display: block;\n  border-left: 0.1em solid white;\n  border-bottom: 0.1em solid white;\n  width: 0.5em;\n  height: 0.5em;\n}\n\n.arrow.left[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.arrow.right[_ngcontent-%COMP%] {\n  transform: rotate(225deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEsZ0VBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7QUFBRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsOERBQUE7RUFNQSx5QkFBQTtBQVRGOztBQUtFO0VBQ0UsVUFBQTtBQUhKOztBQU9FO0VBQ0UsUUFBQTtBQUxKOztBQU9FO0VBQ0UsT0FBQTtBQUxKOztBQVNBLHFCQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU5GOztBQVFFO0VBQ0Usd0JBQUE7QUFOSjs7QUFRRTtFQUNFLHlCQUFBO0FBTkoiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNhcm91c2VsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAvLyB6b29tIGVmZmVjdCBvbiBob3ZlclxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC44NCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbn1cclxuXHJcbi5zbGlkZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTmV4dCBhbmQgUHJldiBidXR0b25zXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLmNvbnRyb2wge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiAwOyAvLyByZW1vdmUgYmx1ZSBvdXRsaW5lIGJvcmRlciwgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZSBzdGlsbCBmb2N1c3NhYmxlIGZvciBhY2Nlc3NpYmlsaXR5XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvcGFjaXR5OiA4MCU7XHJcbiAgLy8gb3BhY2l0eSBlZmZlY3Qgb24gaG92ZXJcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjg0KTtcclxuXHJcbiAgJjpob3ZlciwgJjpmb2N1cyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLyogUG9zaXRpb24gdGhlIGJ1dHRvbnMgKi9cclxuICAmLm5leHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gICYucHJldiB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLyogc3R5bGUgdGhlIGFycm93cyAqL1xyXG4uYXJyb3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1sZWZ0OiAwLjFlbSBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAwLjFlbSBzb2xpZCB3aGl0ZTtcclxuICB3aWR0aDogMC41ZW07XHJcbiAgaGVpZ2h0OiAwLjVlbTtcclxuXHJcbiAgJi5sZWZ0IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB9XHJcbiAgJi5yaWdodCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gIH1cclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('carouselAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'ambawala';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/carousel.component */ "EfPX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map