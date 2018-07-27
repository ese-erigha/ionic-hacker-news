import { PagerModule } from './../../components/pager/pager.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPage } from './new';


@NgModule({
  declarations: [
    NewPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPage),
    PagerModule
  ],
})
export class NewPageModule {}
