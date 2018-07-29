import { NewsListModule } from '../../components/news-list/news-list.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPage } from './new';


@NgModule({
  declarations: [
    NewPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPage),
    NewsListModule
  ],
})
export class NewPageModule {}
