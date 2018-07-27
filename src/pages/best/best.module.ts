import { PagerModule } from './../../components/pager/pager.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BestPage } from './best';

@NgModule({
  declarations: [
    BestPage,
  ],
  imports: [
    IonicPageModule.forChild(BestPage),
    PagerModule
  ],
})
export class BestPageModule {}
