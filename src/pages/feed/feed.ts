import { Component } from '@angular/core';
import {LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { State, NewsState } from "../../pages/news/news.reducer";
import { Feed } from "../../store/models/feed.model";
import { CustomError } from "../../store/models/custom-error.model";
import * as newsActions from "../../pages/news/news.actions";
import { NotificationService } from "../../shared/services/notification.service";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  id: number = null;
  loading: boolean = false;
  spinner: any = null;
  destroy$: Subject<boolean> = new Subject<boolean>();
  feed: any = null;

  constructor(
    public navParams: NavParams,
    public store: Store<State>,
    public notificationService: NotificationService,
    public loadingController: LoadingController,
    public navCtrl: NavController) {
    this.id = this.navParams.get('id');
  }

  ionViewWillEnter(){

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


      if(this.id){
        this.feed = null; 
        this.triggerFetch(this.id);
      }
    
  }


  displayData(newsState: NewsState){
    console.log(newsState);
    if (newsState && !newsState.loading) {

      if(this.loading){
        this.loading = false;
      }
      this.feed = newsState.story;
    }
  }

  triggerFetch(itemId: number) {
    this.loading = true;
    this.store.dispatch({
      type: newsActions.LOAD_ITEM,
      payload: <newsActions.itemQuery>{
        id: itemId
      }
    });
  }


  viewUser(userId:string){

  }

  ionViewWillLeave(){
   this.feed = null;
  }

}
