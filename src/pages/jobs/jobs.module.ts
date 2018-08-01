import { NewsListModule } from './../../components/news-list/news-list.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsPage } from './jobs';

@NgModule({
  declarations: [
    JobsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsPage),
    NewsListModule,
    
  ],
})
export class JobsPageModule {}
