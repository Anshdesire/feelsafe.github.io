(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    background-image:url('background.bin');\n    background-position: center center;\n   background-repeat:  no-repeat;\n   height: 650px;\n\tbackground-attachment: fixed;\n\t\t\tbackground-size:  cover;\n}\nh2{\n    color: azure;\n    margin-top: 20px;\n    font-size: 45px;\n    font-family: monospace;\n}\nlabel{\n    color: azure;\n    font-size: 20px;\n    font-family: cursive;\n}\n.form_div{\n    width: 100%;\n    background-color:rgba(5, 5, 5, 0.205);\n\n}\n.table_div{\n    float:right;\n    margin-top: 50px\n}\n.btn-primary {\n    color: #fff;\n    background-color: green;\n    border-color: green;\n}\ninput::-webkit-input-placeholder {\n    color: rgb(151, 151, 151);\n    font-size: 1.2em;\n    font-style: italic;\n  }\ninput::-ms-input-placeholder {\n    color: rgb(151, 151, 151);\n    font-size: 1.2em;\n    font-style: italic;\n  }\ninput::placeholder {\n    color: rgb(151, 151, 151);\n    font-size: 1.2em;\n    font-style: italic;\n  }\n.form_inner_div{\n    width :40%;\n    float: left;\n\npadding:50;\n}\n.form_input_feild{\n     background-color:rgba(82, 74, 74, 0.425);\n}\n.button_submit{\n    float:right;\n    margin-top:20px;\n    margin-right: 40px;\n    margin-bottom: 20px;\n}\ntable, th , td  {\n    border: 1px solid grey;\n    border-collapse: collapse;\n    padding: 5px;\n  }\ntable tr:nth-child(odd) {\n    background-color: #f1f1f1;\n  }\ntable tr:nth-child(even) {\n    background-color: #ffffff;\n  }\n.dropPadding{\n    margin-left: 16;\n}\n.input_field {\n    background-color:rgba(82, 74, 74, 0.425);\n    color:rgb(211, 68, 68);\n    border: none;\n    outline:none;\n    height:30px;\n    transition:height 1s;\n    -webkit-transition:height 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQ0FBbUQ7SUFDbkQsa0NBQWtDO0dBQ25DLDZCQUE2QjtHQUM3QixhQUFhO0NBQ2YsNEJBQTRCO0dBQzFCLHVCQUF1QjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLHFDQUFxQzs7QUFFekM7QUFDQTtJQUNJLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFKRjtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0FBSkY7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUVGO0lBQ0ksVUFBVTtJQUNWLFdBQVc7O0FBRWYsVUFBVTtBQUNWO0FBQ0E7S0FDSyx3Q0FBd0M7QUFDN0M7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUY7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLG9CQUFvQjtJQUNwQiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZCcpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICBiYWNrZ3JvdW5kLXJlcGVhdDogIG5vLXJlcGVhdDtcbiAgIGhlaWdodDogNjUwcHg7XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6ICBjb3Zlcjtcbn1cbmgye1xuICAgIGNvbG9yOiBhenVyZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxubGFiZWx7XG4gICAgY29sb3I6IGF6dXJlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cbi5mb3JtX2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNSwgNSwgNSwgMC4yMDUpO1xuXG59XG4udGFibGVfZGl2e1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDUwcHhcbn1cbi5idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbn1cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYigxNTEsIDE1MSwgMTUxKTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuXG4uZm9ybV9pbm5lcl9kaXZ7XG4gICAgd2lkdGggOjQwJTtcbiAgICBmbG9hdDogbGVmdDtcblxucGFkZGluZzo1MDtcbn1cbi5mb3JtX2lucHV0X2ZlaWxke1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoODIsIDc0LCA3NCwgMC40MjUpO1xufVxuXG4uYnV0dG9uX3N1Ym1pdHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnRhYmxlLCB0aCAsIHRkICB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICB0YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgfVxuICB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuLmRyb3BQYWRkaW5ne1xuICAgIG1hcmdpbi1sZWZ0OiAxNjtcbn1cblxuLmlucHV0X2ZpZWxkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoODIsIDc0LCA3NCwgMC40MjUpO1xuICAgIGNvbG9yOnJnYigyMTEsIDY4LCA2OCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICB0cmFuc2l0aW9uOmhlaWdodCAxcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246aGVpZ2h0IDFzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n<body>\n  <!--The content below is only a placeholder and can be replaced.-->\n\n  <div class=\"container form_div\">\n    <div  class=\" form_inner_div\" style=\"margin-bottom: 30px;\">\n        <h2>Feel Safe</h2>\n        <form (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"email\">Number of employees:</label>\n            <input required  type=\"person\" [(ngModel)]=\"model.person\"  class=\"form-control input_field form-control-plaintext\" id=\"email\" placeholder=\"Enter number of employees\" name=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"pwd\">Area in sq ft:</label>\n            <input required type=\"Area\" [(ngModel)]=\"model.area\"   class=\"form-control form_input_feild input_field form-control-plaintext\" id=\"pwd\" placeholder=\"Enter area in sq ft\" name=\"pswd\">\n          </div>\n          <!-- <div class=\"form-group\">\n            <label for=\"pwd\">Available plants:</label>\n            <input type=\"password\" class=\"form-control input_field form-control-plaintext\" id=\"pwd\" placeholder=\"Enter plants available\" name=\"pswd\">\n          </div> -->\n          <br />\n          <button type=\"submit\" class=\"btn btn-primary button_submit\">Submit</button>\n          <div class=\"form-group\">\n              <label for=\"pwd\">{{text}}</label>\n            </div>\n        </form>\n    </div>\n\n    <div *ngIf=\"submitPressed\" class=\"table_div\">\n        <table>\n            <tr>\n                <th>Plant name</th>\n                <th>Number of plants required</th>\n            </tr>\n            <tr *ngFor=\"let user of names\">\n              <td>{{user.plant}}</td>\n              <td>{{user.count}}</td>\n            </tr>\n          </table>\n    </div>\n\n  </div>\n\n</body>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'feelSafe';
        this.model = {};
        this.names = [];
        this.submitPressed = false;
        this.text = null;
        this.plants = [{
                plant: "Areca Palm",
                absorptionRate: 0.003,
            }, {
                plant: "Lady Palm",
                absorptionRate: 0.009
            }, {
                plant: "Bamboo palm",
                absorptionRate: 0.022
            }, {
                plant: "Rubber Plant",
                absorptionRate: 0.024
            }, {
                plant: 'Dracaena “Janet Craig”',
                absorptionRate: 0.003
            }];
    }
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.model.area && this.model.person) {
            if (isNaN(this.model.area) || isNaN(this.model.person)) {
                this.text = "Please enter valid Input";
            }
            else {
                this.text = null;
                this.submitPressed = true;
                this.names = this.plants.map(function (a) {
                    var vRoom = (_this.model.area * 2.4 * 1000);
                    var overAllEmission = _this.model.person * 0.066; // co2 mole /kg
                    var vGas = overAllEmission * 8.314 * 309;
                    var diff = vRoom - vGas;
                    // const no = Math.ceil(diff / (0.003*24*1000));
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a, { count: Math.ceil(vGas / (a.absorptionRate * 24 * 1000)) });
                });
            }
        }
        else {
            this.text = "Please enter the values";
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/hackathon2k19/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map