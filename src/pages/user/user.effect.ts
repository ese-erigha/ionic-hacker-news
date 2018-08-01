import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect} from "@ngrx/effects";
import * as userActions from "./user.actions";
import {UserService} from './user.service';
import {User} from '../../store/models/user.model';
import { Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/withLatestFrom";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,private userService: UserService) {}

 @Effect()
  loadUser$: Observable<Action> = this.actions$.ofType(userActions.LOAD_USER)
                                               .do((action) => new userActions.LoadUserPendingAction({user:{}}))
                                               .switchMap((action)=>{
                                                        
                                                        return this.userService.getUser(action['payload'].id)
                                                                                .map((user: User)=>{
                                                                                        
                                                                                        return {user: user};
                                                                                });        
                                              })
                                              .map((partialState: {})=> new userActions.LoadUserSuccessAction (partialState))
                                              .catch( err => Observable.of(new userActions.LoadUserErrorAction(err))) 
                                               
                                        

}