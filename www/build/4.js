webpackJsonp([4],{

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
            ],
        })
    ], UserPageModule);
    return UserPageModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_actions__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserPage = /** @class */ (function () {
    function UserPage(navParams, store, notificationService, navCtrl) {
        this.navParams = navParams;
        this.store = store;
        this.notificationService = notificationService;
        this.navCtrl = navCtrl;
        this.id = null;
        this.loading = false;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.user = null;
        this.id = this.navParams.get('id');
    }
    UserPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store
            .select(function (state) { return state.userState; })
            .takeUntil(this.destroy$)
            .subscribe(function (userState) {
            _this.displayData(userState);
        });
        this.notificationService.dispatchError$
            .takeUntil(this.destroy$)
            .subscribe(function (error) {
            //error.title
            //error.text
        });
        if (this.id) {
            this.user = null;
            this.loading = true;
            this.fetchUser(this.id);
        }
    };
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.fetchUser = function (userId) {
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__user_actions__["a" /* LOAD_USER */],
            payload: {
                id: userId
            }
        });
    };
    UserPage.prototype.displayData = function (userState) {
        //console.log(newsState);
        if (userState && !userState.loading) {
            this.loading = false;
            console.log(userState.user);
            this.user = userState.user;
        }
    };
    UserPage.prototype.ionViewWillLeave = function () {
        this.user = null;
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/Ese/Documents/dev/ionic-hacker-news/src/pages/user/user.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-item>\n          <ion-avatar item-start>\n            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294773_1280.png">\n          </ion-avatar>\n          <h5>{{id}}</h5>\n        </ion-item>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="!loading" padding>\n   <ion-item>\n      <div class="user" item-content>\n          <h2>{{ user?.id }}</h2>\n          <ul>\n              <li *ngIf="user?.created"> Joined {{ user?.created | date: \'short\' }}</li>\n              <li *ngIf="user?.karma"> Karma -  {{ user?.karma || 0 }} <span></span></li>\n          </ul>\n      </div>\n   </ion-item>\n</ion-content>\n\n<ion-content class="content-wrapper" *ngIf="loading">\n    <ion-spinner name="dots"></ion-spinner>\n</ion-content>\n'/*ion-inline-end:"/Users/Ese/Documents/dev/ionic-hacker-news/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _d || Object])
    ], UserPage);
    return UserPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_USER; });
/* unused harmony export LOAD_USER_SUCCESS */
/* unused harmony export LOAD_USER_PENDING */
/* unused harmony export LOAD_USER_ERROR */
/* unused harmony export LoadUserAction */
/* unused harmony export LoadUserSuccessAction */
/* unused harmony export LoadUserPendingAction */
/* unused harmony export LoadUserErrorAction */
var LOAD_USER = '[Load] User';
var LOAD_USER_SUCCESS = '[Load] User Success';
var LOAD_USER_PENDING = '[Load] User Pending';
var LOAD_USER_ERROR = '[Load] User Error';
var LoadUserAction = /** @class */ (function () {
    function LoadUserAction(payload) {
        this.payload = payload;
        this.type = LOAD_USER;
    }
    return LoadUserAction;
}());

var LoadUserSuccessAction = /** @class */ (function () {
    function LoadUserSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_USER_SUCCESS;
    }
    return LoadUserSuccessAction;
}());

var LoadUserPendingAction = /** @class */ (function () {
    function LoadUserPendingAction(payload) {
        this.payload = payload;
        this.type = LOAD_USER_PENDING;
    }
    return LoadUserPendingAction;
}());

var LoadUserErrorAction = /** @class */ (function () {
    function LoadUserErrorAction(payload) {
        this.payload = payload;
        this.type = LOAD_USER_ERROR;
    }
    return LoadUserErrorAction;
}());

//# sourceMappingURL=user.actions.js.map

/***/ })

});
//# sourceMappingURL=4.js.map