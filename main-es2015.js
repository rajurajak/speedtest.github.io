(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n<!-- <app-header></app-header> -->\r\n<!-- <app-sidepanel></app-sidepanel> -->\r\n<main class=\"bx--content\">\r\n\t<router-outlet></router-outlet>\r\n\t<!-- <div class=\"bubbles\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t\t<img src=\"../../assets/images/bubble.png\" alt=\"\">\r\n\t</div> -->\r\n</main>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\" style=\"color:#000\">\n\n\n    <div class=\"d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow\"\n      style=\"color:#000;background:indigo\">\n      <div class=\"col-2\" *ngIf=\"speedtestData\" style=\"font-size: 16px;  font-weight: bolder;\">\n        <small>HOST </small>\n        <h6 style=\"font-size: 20px;\" class=\"mb-0 text-white lh-100\">thdblockchain.com</h6>\n      </div>\n      <div class=\"col-8 text-center\">\n        <h6 style=\"font-size: 30px;\" class=\"mb-0 text-white lh-100\">Record Network Activity </h6>\n      </div>\n      <div class=\"col-2 text-right\">\n        <h6 class=\"mb-0 text-white lh-100\">Httpversion - {{httpversion}}</h6>\n      </div>\n    </div>\n    <div class=\"d-flex  \">\n      <div style=\"color:#000; font-weight: bolder;\" class=\"col-6\">Page Start Date Time - {{pageDT}}</div>\n      <div class=\"col-6 text-right\" style=\"color:red;font-weight: bolder;\"> * seconds</div>\n    </div>\n    <table class=\"table table-bordered \">\n      <thead>\n        <tr>\n          <th scope=\"col\">Method</th>\n          <th scope=\"col\">API</th>\n          <th scope=\"col\">Status</th>\n          <th scope=\"col\">Time</th>\n          <!-- <th scope=\"col\">Started Date Time</th> -->\n          <th scope=\"col\">Blocked</th>\n          <th scope=\"col\">DNS</th>\n          <th scope=\"col\">SSL</th>\n          <th scope=\"col\">Connect</th>\n          <th scope=\"col\">Send</th>\n          <th scope=\"col\">Wait</th>\n          <th scope=\"col\">Receive</th>\n          <th scope=\"col\">Queueing</th>\n          <th scope=\"col\">Details</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of speedtestData\">\n          <th *ngIf=\"data._resourceType === 'xhr'\" scope=\"row\">\n            <span class=\"tile\">{{data.request.method}} </span>\n          </th>\n          <td style=\" font-weight:bold;\" *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            {{data.request.url}} </td>\n  \n          <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">{{data.response.status}}</td>\n          <td style=\"background :khaki ;font-weight:bold;\" *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            {{data.time/1000 | number:\n            '1.0-2'}}</td>\n          <!-- <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\" >{{data.startedDateTime}}</td> -->\n          <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            {{data.timings.blocked/1000 | number: '1.0-2'}}\n          </td>\n          <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            {{data.timings.dns/1000 | number: '1.0-4'}}\n          </td>\n          <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            {{data.timings.ssl/1000 | number: '1.0-2'}}\n          </td>\n          <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            {{data.timings.connect/1000 | number: '1.0-2'}}\n          </td>\n          <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            {{data.timings.send/1000 | number: '1.0-2'}}\n          </td>\n          <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            {{data.timings.wait/1000 | number: '1.0-2'}}\n          </td>\n          <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            {{data.timings.receive/1000 | number: '1.0-2'}}\n          </td>\n          <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            {{data.timings._blocked_queueing/1000 | number: '1.0-4'}}\n          </td>\n          <td *ngIf=\"data._resourceType === 'xhr'\" scope=\"col\">\n            <a (click)=\"showJSONDATA(data);\" class=\"tile tile1\">Info</a>\n  \n          </td>\n  \n        </tr>\n      </tbody>\n    </table>\n    <!-- Spinner and modals-->\n    <div class=\"spinner inviteSent\" *ngIf=\"show\">\n      <div class=\"spinnerIcon\">\n        <div class=\"modal-header \">\n          <h5 class=\"modal-title\">Server IP Address -{{modaldata.serverIPAddress}} </h5>\n          <h5 class=\"modal-title\">\n            Start Date Time - {{modaldata.startedDateTime}}\n          </h5>\n          <h5 class=\"modal-title\"> Total Time - {{modaldata.\n            time/1000}}(s)</h5>\n          <button (click)=\"show = false;\" type=\"button\" class=\"btn btn-success\">CLOSE</button>\n        </div>\n        <div class=\"modal-body\" style=\"text-align:left;\">\n          <h4 class=\"text-left\">Network Logs - <span class=\"urltext\">{{modaldata.request.url}}</span></h4>\n          <h4 style=\"background: burlywood;  padding: 10px; \" class=\"text-left\">Timings(ms)</h4>\n          <pre class=\"first\">{{modaldata.timings | json}}</pre>\n          <h4 style=\"background: burlywood;  padding: 10px; \" class=\"text-left\">Request</h4>\n          <pre class=\"second\">{{modaldata.request | json}}</pre>\n          <h4 style=\"background: burlywood;  padding: 10px; \" class=\"text-left\">Response</h4>\n          <pre class=\"third\">{{modaldata.response | json}}</pre>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\r\n    <div class=\"container\">\r\n        <div class=\"heading\">\r\n            <img src=\"../../assets/images/sandata-logo.png\" alt=\"SAN Data Systems Inc Logo\" title=\"SAN Data Systmes Inc\"> \r\n            <div class=\"topmenus\">\r\n              <div class=\"menus\">Services</div>\r\n              <div class=\"menus\">Industries</div>\r\n              <div class=\"menus\">Solutions</div>\r\n              <div class=\"menus\">About Us</div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidepanel/sidepanel.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidepanel/sidepanel.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-bar\">\n\n</div>\n");

/***/ }),

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

/***/ "./src/app/_services/rdc.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/rdc.service.ts ***!
  \******************************************/
/*! exports provided: RdcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdcService", function() { return RdcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let RdcService = class RdcService {
    constructor(http) {
        this.http = http;
        // private _url = "/assets/data/rdc.json";
        this._urlspeedtest = "/assets/speedtest.json";
    }
    // getAllfiles(): Observable<any[]> {
    //   return this.http.get<any[]>('/assets/')
    //     .pipe(
    //       retry(3),
    //       catchError(this.handleError1)
    //     );
    // }
    // handleError1(error: HttpErrorResponse) {
    //   return throwError(error.message || "Server Error")
    // }
    //this.http.get('assets/').subscribe(data => console.log(data)); 
    getAllApiSpeed() {
        return this.http.get(this._urlspeedtest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.message || "Server Error");
    }
};
RdcService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RdcService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], RdcService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _sidepanel_sidepanel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidepanel/sidepanel.component */ "./src/app/sidepanel/sidepanel.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _sidepanel_sidepanel_component__WEBPACK_IMPORTED_MODULE_8__["SidepanelComponent"]
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-dark td, .table-dark th, .table-dark thead th {\n  border-color: #454d55;\n  color: #000; }\n\ntbody tr {\n  font-weight: 500;\n  font-size: 14px;\n  background: #fff; }\n\nthead tr {\n  background: lightgreen;\n  color: #000;\n  font-size: 16px;\n  font-weight: 500 !important; }\n\nthead tr th {\n  font-weight: 500 !important; }\n\n.tile {\n  font-size: 14px;\n  background: #49cc90;\n  font-weight: 700;\n  min-width: 80px;\n  padding: 6px 15px;\n  text-align: center;\n  border-radius: 3px;\n  font-family: sans-serif;\n  color: #fff;\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n\n.spinner {\n  position: absolute;\n  top: 10%;\n  left: 8%;\n  background: wheat;\n  width: 85%; }\n\n.modal-header {\n  border-bottom: none !important;\n  margin-bottom: 16px;\n  padding-bottom: 10px;\n  text-align: left;\n  background: darkgreen;\n  color: #fff; }\n\n.modal-body {\n  font-weight: 700;\n  height: 550px;\n  overflow-y: scroll; }\n\n.modalText {\n  font-size: 24px;\n  text-align: left;\n  font-weight: 900; }\n\n.tile1 {\n  color: #fff !important;\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  cursor: pointer; }\n\n.urltext {\n  color: darkgreen;\n  background: lightgreen;\n  padding: 3px;\n  border-radius: 9px;\n  font-size: 16px;\n  font-weight: bolder; }\n\npre {\n  font-size: 15px !important;\n  font-weight: bolder; }\n\n.first, .second, .third {\n  background: antiquewhite; }\n\n.table-bordered td, .table-bordered th {\n  border: 1px solid #999 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxTUEVFRFRFU1QxL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQjtFQUNyQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFlLEVBQUE7O0FBRWpCO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWixlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRzVCO0VBQ0MsMkJBQTJCLEVBQUE7O0FBRzVCO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBRWxCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFFekI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUVaO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFVLEVBQUE7O0FBRVo7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBYyxFQUFBOztBQUVoQjtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsMEJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLGlDQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1kYXJrIHRkLCAudGFibGUtZGFyayB0aCwgLnRhYmxlLWRhcmsgdGhlYWQgdGgge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNDU0ZDU1O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIHRib2R5IHRye1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICB9XHJcbiAgdGhlYWQgdHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gXHJcbiAgfVxyXG4gIHRoZWFkIHRyIHRoe1xyXG4gICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiBcclxuICB9XHJcbiAgLnRpbGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgYmFja2dyb3VuZDogIzQ5Y2M5MDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAvLyAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcclxuICB9XHJcbiAgLnNwaW5uZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDglO1xyXG4gICAgYmFja2dyb3VuZDogd2hlYXQ7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gIH1cclxuICAubW9kYWwtaGVhZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtncmVlbjtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgfVxyXG4gIC5tb2RhbC1ib2R5e1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGhlaWdodDo1NTBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbiAgLm1vZGFsVGV4dHtcclxuICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgfVxyXG4gIC50aWxlMXtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTdhMmI4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG4gIC51cmx0ZXh0e1xyXG4gICAgY29sb3I6IGRhcmtncmVlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIH1cclxuICBwcmV7XHJcbiAgICBmb250LXNpemU6MTVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgLmZpcnN0LCAuc2Vjb25kLCAudGhpcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiBhbnRpcXVld2hpdGU7XHJcbiAgfVxyXG4gIC50YWJsZS1ib3JkZXJlZCB0ZCwgLnRhYmxlLWJvcmRlcmVkIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTkgIWltcG9ydGFudDtcclxufVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_rdc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/rdc.service */ "./src/app/_services/rdc.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


// import {FsService} from 'ngx-fs';
// import { writeFileSync, readFileSync } from 'fs';
let DashboardComponent = class DashboardComponent {
    constructor(_rdcService) {
        this._rdcService = _rdcService;
        this.show = false;
    }
    ngOnInit() {
        //  const fs = require('fs');
        this._rdcService.getAllApiSpeed().subscribe(data => {
            if (data) {
                this.showSpeedTestData(data);
            }
            else {
                console.log("File not uploaded properly");
            }
        }, error => this.errorMsg = error);
        // this._rdcService.getAllfiles().subscribe(data => {
        //   if (data) {
        //   console.log(data);
        //   }
        //   else {
        //     console.log("File not uploaded properly");
        //   }
        // }
        //   , error => this.errorMsg = error);
        // var directory =  "/assets/speedtest.json"
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open('GET', directory, false); // false for synchronous request
        // xmlHttp.send(null);
        // var ret = xmlHttp.responseText;
        // var fileList = ret.split('\n');
        // console.log(fileList);
        // for ( var i = 0; i < fileList.length; i++) {
        //     var fileinfo = fileList[i].split(' ');
        //     if (fileinfo[0] == '201:') {
        //         document.write(fileinfo[1] + "<br>");
        //         document.write('<img src=\"' + directory + fileinfo[1] + '\"/>');
        //     }
        // }
        // const fs = this._fsService.fs as any;
        // fs.readdir("/dashboard", function (err, items) {
        //    if (err) {
        //       return;
        //    }
        //    for (let i = 0; i < items.length; i++) {
        //      console.log(items[i]);
        //    }
        // });
    }
    showSpeedTestData(speedtestData) {
        console.log(speedtestData.log.entries);
        speedtestData.log.entries.forEach(item => {
            item.request.url = item.request.url.split('?')[0];
        });
        this.speedtestData = speedtestData.log.entries;
        this.pageDT = speedtestData.log.pages[0].startedDateTime;
    }
    showJSONDATA(data) {
        console.log(data);
        this.show = true;
        this.modaldata = data;
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_rdc_service__WEBPACK_IMPORTED_MODULE_1__["RdcService"] }
];
DashboardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dashboard',
        template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_services_rdc_service__WEBPACK_IMPORTED_MODULE_1__["RdcService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".heading{\r\n    display: flex;\r\n    align-items: center;\r\n    width: 70%;\r\n    height: 60px;\r\n}\r\n.topmenus{\r\n    display: flex;\r\n    /* align-items: center; */\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    font-family: \"acumin-pro-wide\", sans-serif;\r\n    font-weight: 700;\r\n    \r\n    font-size: 22px;\r\n    line-height: 120%;\r\n    color:#000;\r\n}\r\n.topmenus .menus{\r\n   font-size: medium;\r\n   color:#000;\r\n}\r\n.container{\r\n    background-color: #ffffff;\r\n}\r\n/* .menu {\r\n    float: right;\r\n    position: relative;\r\n}\r\n.topmenu >li {\r\n    position: relative;\r\n    display: inline-block;\r\n    padding: 33px 0px;\r\n}\r\n.topmenu li a {\r\n    position: relative;\r\n    float: right;\r\n    font-family: 'Raleway', sans-serif;\r\n    text-decoration: none;\r\n    padding: 7px 0px;\r\n    text-align: center;\r\n    color: #005fb8;\r\n    font-size: 14px;\r\n    height: 15px;\r\n    width: 130px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    transition: color 0.3s ease-in;\r\n    -moz-transition: color 0.3s ease-in;\r\n    -o-transition: color 0.3s ease-in;\r\n    -webkit-transition: color 0.3s ease-in;\r\n    -ms-transition: color 0.3s ease-in;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxnQkFBZ0I7O0lBRWhCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBQ0E7R0FDRyxpQkFBaUI7R0FDakIsVUFBVTtBQUNiO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi50b3BtZW51c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBcImFjdW1pbi1wcm8td2lkZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XHJcbiAgICBjb2xvcjojMDAwO1xyXG59XHJcbi50b3BtZW51cyAubWVudXN7XHJcbiAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICBjb2xvcjojMDAwO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi8qIC5tZW51IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udG9wbWVudSA+bGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMzNweCAwcHg7XHJcbn1cclxuLnRvcG1lbnUgbGkgYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogN3B4IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDA1ZmI4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW47XHJcbiAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbjtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW47XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HeaderComponent = class HeaderComponent {
    constructor() {
        // adds padding to the top of the document, so the content is below the header
        this.headerClass = true;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.bx--header'),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "headerClass", void 0);
HeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-header',
        template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/sidepanel/sidepanel.component.scss":
/*!****************************************************!*\
  !*** ./src/app/sidepanel/sidepanel.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".side-bar {\n  width: 50px;\n  height: 100vh;\n  background: linear-gradient(#00545D, #000729);\n  position: absolute;\n  right: 0;\n  top: 90px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZXBhbmVsL0M6XFxTUEVFRFRFU1QxL3NyY1xcYXBwXFxzaWRlcGFuZWxcXHNpZGVwYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixhQUFhO0VBQ2IsNkNBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lkZXBhbmVsL3NpZGVwYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLWJhcntcclxuICAgIHdpZHRoOjUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDU0NUQsIzAwMDcyOSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDo5MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/sidepanel/sidepanel.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sidepanel/sidepanel.component.ts ***!
  \**************************************************/
/*! exports provided: SidepanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidepanelComponent", function() { return SidepanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SidepanelComponent = class SidepanelComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidepanelComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidepanel',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sidepanel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidepanel/sidepanel.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sidepanel.component.scss */ "./src/app/sidepanel/sidepanel.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], SidepanelComponent);



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// Uncomment the following lines to activate the service worker
// if (navigator.serviceWorker) {
// 	navigator.serviceWorker.register('sw.js').then(() => {
// 		console.log('Service worker installed')
// 	}, err => {
// 		console.error('Service worker error:', err);
// 	});
// }
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\SPEEDTEST1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map