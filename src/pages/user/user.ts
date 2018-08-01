import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { State, UserState } from "./user.reducer";
import { User } from "../../store/models/user.model";
import { CustomError } from "../../store/models/custom-error.model";
import * as userActions from "./user.actions";
import { NotificationService } from "../../shared/services/notification.service";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  id: string = null;
  loading: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  user: User = null;

  constructor(public navParams: NavParams,
    public store: Store<State>,
    public notificationService: NotificationService,
    public navCtrl: NavController) {

      this.id = this.navParams.get('id');
  }

  ionViewWillEnter(){

    this.store
      .select(state => state.userState)
      .takeUntil(this.destroy$)
      .subscribe((userState: UserState) => {
        this.displayData(userState);
      });

      this.notificationService.dispatchError$
        .takeUntil(this.destroy$)
        .subscribe((error: CustomError) => {
        //error.title
        //error.text
      });

      if(this.id){
        this.user = null;
        this.loading = true; 
        this.fetchUser(this.id);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }


  fetchUser(userId: string) {
    
    this.store.dispatch({
      type: userActions.LOAD_USER,
      payload: <userActions.userQuery>{
        id: userId
      }
    });
  }


  displayData(userState: UserState){
    //console.log(newsState);
    if (userState && !userState.loading) {

      this.loading = false;
      console.log(userState.user);
      this.user = userState.user;
    }
  }

  ionViewWillLeave(){
    this.user = null;
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
