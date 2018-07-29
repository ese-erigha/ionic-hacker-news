webpackJsonp([4],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feed__["a" /* FeedPage */]),
            ],
        })
    ], FeedPageModule);
    return FeedPageModule;
}());

//# sourceMappingURL=feed.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_FEEDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_FEEDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_FEEDS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_FEEDS_ERROR; });
/* unused harmony export LoadFeedsAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LoadFeedsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LoadFeedsPendingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LoadFeedsErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOAD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_ITEM_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOAD_ITEM_ERROR; });
/* unused harmony export LoadItemAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LoadItemSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LoadItemPendingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LoadItemErrorAction; });
var LOAD_FEEDS = '[Load] Feeds';
var LOAD_FEEDS_SUCCESS = '[Load] Feeds Success';
var LOAD_FEEDS_PENDING = '[Load] Feeds Pending';
var LOAD_FEEDS_ERROR = '[Load] Feeds Error';
var LoadFeedsAction = /** @class */ (function () {
    function LoadFeedsAction(payload) {
        this.payload = payload;
        this.type = LOAD_FEEDS;
    }
    return LoadFeedsAction;
}());

var LoadFeedsSuccessAction = /** @class */ (function () {
    function LoadFeedsSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_FEEDS_SUCCESS;
    }
    return LoadFeedsSuccessAction;
}());

var LoadFeedsPendingAction = /** @class */ (function () {
    function LoadFeedsPendingAction(payload) {
        this.payload = payload;
        this.type = LOAD_FEEDS_PENDING;
    }
    return LoadFeedsPendingAction;
}());

var LoadFeedsErrorAction = /** @class */ (function () {
    function LoadFeedsErrorAction(payload) {
        this.payload = payload;
        this.type = LOAD_FEEDS_ERROR;
    }
    return LoadFeedsErrorAction;
}());

var LOAD_ITEM = '[Load] Item';
var LOAD_ITEM_SUCCESS = '[Load] Item Success';
var LOAD_ITEM_PENDING = '[Load] Item Pending';
var LOAD_ITEM_ERROR = '[Load] Item Error';
var LoadItemAction = /** @class */ (function () {
    function LoadItemAction(payload) {
        this.payload = payload;
        this.type = LOAD_ITEM;
    }
    return LoadItemAction;
}());

var LoadItemSuccessAction = /** @class */ (function () {
    function LoadItemSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_ITEM_SUCCESS;
    }
    return LoadItemSuccessAction;
}());

var LoadItemPendingAction = /** @class */ (function () {
    function LoadItemPendingAction(payload) {
        this.payload = payload;
        this.type = LOAD_ITEM_PENDING;
    }
    return LoadItemPendingAction;
}());

var LoadItemErrorAction = /** @class */ (function () {
    function LoadItemErrorAction(payload) {
        this.payload = payload;
        this.type = LOAD_ITEM_ERROR;
    }
    return LoadItemErrorAction;
}());

//# sourceMappingURL=news.actions.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_news_news_actions__ = __webpack_require__(430);
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







var FeedPage = /** @class */ (function () {
    function FeedPage(navParams, store, notificationService, loadingController, navCtrl) {
        this.navParams = navParams;
        this.store = store;
        this.notificationService = notificationService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.id = null;
        this.initial = false;
        this.spinner = null;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.feed = null;
        this.id = this.navParams.get('id');
    }
    FeedPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.spinner = this.loadingController.create({ content: "Loading news", spinner: "crescent" });
        this.store
            .select(function (state) { return state.newsState; })
            .takeUntil(this.destroy$)
            .subscribe(function (newsState) {
            _this.displayData(newsState);
        });
        this.notificationService.dispatchError$
            .takeUntil(this.destroy$)
            .subscribe(function (error) {
            //error.title
            //error.text
        });
        if (this.id) {
            this.initial = true;
            this.triggerFetch(this.id);
        }
    };
    FeedPage.prototype.displayData = function (newsState) {
        console.log(newsState);
        if (!newsState.loading) {
            if (this.initial) {
                this.initial = false;
                this.spinner.dismiss();
            }
            this.feed = newsState.story;
        }
    };
    FeedPage.prototype.triggerFetch = function (itemId) {
        if (this.initial) {
            this.spinner.present();
        }
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__pages_news_news_actions__["e" /* LOAD_ITEM */],
            payload: {
                id: itemId
            }
        });
    };
    FeedPage.prototype.viewUser = function (userId) {
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\dev\ionic-hacker-news\src\pages\feed\feed.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>feed</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item class="feed">\n    <div item-content class="feed-header-wrapper">\n      <h3>{{feed?.title}}</h3>\n      <p>\n        {{ feed?.score }} points by\n\n        <a (click)="viewUser(feed.by)">{{ feed?.by }}</a>\n\n        | {{ feed?.kids?.length }} comments\n      </p>\n    </div>\n  </ion-item>\n\n  <ion-list>\n    <ion-item *ngFor="let comment of feed?.kids">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <div item-content class="comment">\n              <div class="tile">\n                <div class="tile-icon">\n                  <i class="icon icon-more-horiz"></i>\n                </div>\n                <div class="tile-content">\n                  <p class="tile-title text-gray">\n                    <a (click)="viewUser(comment.by)">{{ comment.by }}</a>\n                    {{ comment?.time | date: \'short\' }}</p>\n                  <div class="tile-subtitle" [innerHtml]="comment?.text"></div>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\dev\ionic-hacker-news\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ })

});
//# sourceMappingURL=4.js.map