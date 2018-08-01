import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';
import {EffectsModule} from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {UserEffects} from './user.effect';
import {reducer} from './user.reducer';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
    StoreModule.forFeature('userState',reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [
    UserService
  ]
})
export class UserPageModule {}
