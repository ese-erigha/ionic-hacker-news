import { Component, Input, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LoadingController, NavController,App } from 'ionic-angular';
import { State, NewsState } from "../../pages/news/news.reducer";
import { Feed } from "../../store/models/feed.model";
import { CustomError } from "../../store/models/custom-error.model";
import * as newsActions from "../../pages/news/news.actions";
import { NotificationService } from "../../shared/services/notification.service";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";


@Component({
  selector: "news-list",
  templateUrl: "news-list.html"
})
export class NewsListComponent implements OnInit,AfterViewInit, OnDestroy {
  @Input("feedType") feedType: string = null;
  feeds: Array<Feed> = [];
  pageNumber: number = 0;
  totalPages: number = 100; //dummy value
  infiniteScroll: any = null;
  initial: boolean = false;
  isRefreshing: boolean = false;
  refresher: any = null;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public store: Store<State>,
    public notificationService: NotificationService,
    public loadingController: LoadingController,
    public iab: InAppBrowser,
    public navCtrl: NavController,
    public appCtrl: App
  ) {}

  ngOnInit() {

    
  }


  ngAfterViewInit(){
    this.store
    .select(state => state.newsState)
    .takeUntil(this.destroy$)
    .subscribe((newsState: NewsState) => {
      this.displayData(newsState);
    });

  this.notificationService.dispatchError$
    .takeUntil(this.destroy$)
    .subscribe((error: CustomError) => {
      //error.title
      //error.text
    });


  if (this.feedType) {
    this.initial = true;
    this.feeds = [];
    this.pageNumber = 1;
    this.totalPages = 100;
    this.infiniteScroll = null;
    this.triggerFetch(this.feedType, this.pageNumber);
  }
  }

  displayData(newsState: NewsState) {
    
    if (newsState && !newsState.loading) {

      if(this.initial){
        this.initial = false;
        //this.spinner.dismiss();
      }

      if(this.isRefreshing){
        this.isRefreshing = false;
        this.refresher.complete();
        this.feeds = newsState.feeds;
      }else{
        this.feeds = [...this.feeds, ...newsState.feeds];
      }
      

      let feed = newsState[this.feedType];
      this.pageNumber = feed.pageNumber;
      this.totalPages = feed.totalPages;


      if (this.infiniteScroll) {
        this.infiniteScroll.complete();
        if (this.pageNumber === this.totalPages) {
          this.infiniteScroll.enable(false);
        }
      }
    }
  }

  loadMore(infiniteScroll?) {
    ++this.pageNumber;
    this.triggerFetch(this.feedType, this.pageNumber, infiniteScroll);
  }

  triggerFetch(feedType: string, pageNumber: number, infiniteScroll = null) {
    
    this.infiniteScroll = infiniteScroll;

    this.store.dispatch({
      type: newsActions.LOAD_FEEDS,
      payload: <newsActions.feedQuery>{
        type: feedType,
        pageNumber: pageNumber
      }
    });
  }

  doRefresh(refresher){   
    this.pageNumber = 1;
    this.totalPages = 100;
    this.isRefreshing = true;
    this.refresher = refresher;
    this.triggerFetch(this.feedType,this.pageNumber);
  }

  viewUser(feed:Feed,event){

    this.handleDefaults(event);
    this.appCtrl.getRootNav().push('UserPage',{id: feed.by});
  }

  handleDefaults(event){
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }

  viewComments(feed:Feed,event){
    this.handleDefaults(event);
    this.appCtrl.getRootNav().push('FeedPage',{feed: feed});
  }

  viewFeed(feed:Feed,event){

    this.handleDefaults(event);
    if(feed.url){
      const browser = this.iab.create(feed.url,'_self',{location:'no'});

    }else{

      if(this.feedType === 'job'){
        return false;
      }
      this.appCtrl.getRootNav().push('FeedPage',{feed: feed});
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
