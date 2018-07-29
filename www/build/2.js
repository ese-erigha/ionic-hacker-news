webpackJsonp([2],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_news_list_news_list_module__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewPageModule = /** @class */ (function () {
    function NewPageModule() {
    }
    NewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__new__["a" /* NewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__new__["a" /* NewPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_news_list_news_list_module__["a" /* NewsListModule */]
            ],
        })
    ], NewPageModule);
    return NewPageModule;
}());

//# sourceMappingURL=new.module.js.map

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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_list__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsListModule = /** @class */ (function () {
    function NewsListModule() {
    }
    NewsListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_list__["a" /* NewsListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__news_list__["a" /* NewsListComponent */],
            ]
        })
    ], NewsListModule);
    return NewsListModule;
}());

//# sourceMappingURL=news-list.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_news_news_actions__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewsListComponent = /** @class */ (function () {
    function NewsListComponent(store, notificationService, loadingController, iab, navCtrl, appCtrl) {
        this.store = store;
        this.notificationService = notificationService;
        this.loadingController = loadingController;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.feedType = null;
        this.feeds = [];
        this.pageNumber = 1;
        this.infiniteScroll = null;
        this.initial = false;
        this.spinner = null;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
    }
    NewsListComponent.prototype.ngOnInit = function () {
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
        if (this.feedType) {
            this.initial = true;
            this.feeds = [];
            this.triggerFetch(this.feedType, 1);
        }
    };
    NewsListComponent.prototype.displayData = function (newsState) {
        console.log(newsState);
        if (!newsState.loading) {
            if (this.initial) {
                this.initial = false;
                this.spinner.dismiss();
            }
            this.feeds = this.feeds.concat(newsState.feeds);
            if (this.infiniteScroll) {
                this.infiniteScroll.complete();
                var feed = newsState[this.feedType];
                if (this.pageNumber === feed.totalPages) {
                    this.infiniteScroll.enable(false);
                }
            }
        }
    };
    NewsListComponent.prototype.loadMore = function (infiniteScroll) {
        ++this.pageNumber;
        this.triggerFetch(this.feedType, this.pageNumber, infiniteScroll);
    };
    NewsListComponent.prototype.triggerFetch = function (feedType, pageNumber, infiniteScroll) {
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        if (this.initial) {
            this.spinner.present();
        }
        this.infiniteScroll = infiniteScroll;
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_4__pages_news_news_actions__["a" /* LOAD_FEEDS */],
            payload: {
                type: feedType,
                pageNumber: pageNumber
            }
        });
    };
    NewsListComponent.prototype.viewUser = function (feed, event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        console.log(feed);
    };
    NewsListComponent.prototype.viewFeed = function (feed, event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (feed.url) {
            console.log(feed.url);
            var browser = this.iab.create(feed.url, '_self', { location: 'no' });
        }
        else {
            this.appCtrl.getRootNav().push('FeedPage', { id: feed.id });
        }
    };
    NewsListComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("feedType"),
        __metadata("design:type", String)
    ], NewsListComponent.prototype, "feedType", void 0);
    NewsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "news-list",template:/*ion-inline-start:"C:\dev\ionic-hacker-news\src\components\news-list\news-list.html"*/'<ion-content>\n    <ion-list>\n        <ion-item class="feed" *ngFor="let feed of feeds; let i = index;">\n            <div class="feed-index" item-content>{{ i + 1}}</div>\n            <div class="feed-metadata" item-content>\n                <h2 class="feed-header">\n                    <a class="feed-header-title" (click)="viewFeed(feed,$event)">{{ feed?.title }}</a>\n                </h2>\n                <div item-content>\n                    <span>Posted by</span>\n                    <a (click)="viewUser(feed,$event)">{{ feed?.by }}</a> |\n                    <span>{{feed?.kids?.length || 0}} comments</span>\n                </div>\n            </div>\n        </ion-item>\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content loadingSpinner="crescent">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\dev\ionic-hacker-news\src\components\news-list\news-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */]])
    ], NewsListComponent);
    return NewsListComponent;
}());

//# sourceMappingURL=news-list.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewPage = /** @class */ (function () {
    function NewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.feedType = "new";
    }
    NewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPage');
    };
    NewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new',template:/*ion-inline-start:"C:\dev\ionic-hacker-news\src\pages\new\new.html"*/'<ion-content padding>\n\n    <news-list [feedType]="feedType"></news-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\ionic-hacker-news\src\pages\new\new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NewPage);
    return NewPage;
}());

//# sourceMappingURL=new.js.map

/***/ })

});
//# sourceMappingURL=2.js.map