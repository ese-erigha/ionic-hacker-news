import {NgModule, ModuleWithProviders} from "@angular/core";
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HelperService} from "./services/helper.service";
import {ApiService} from './services/api.service';
import {NotificationService} from './services/notification.service';


@NgModule({
    imports: [CommonModule, FormsModule,ReactiveFormsModule],
  exports: [
               
            ],
  declarations: [
                  
                ]
})
export class SharedModule {

    static forRoot():ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [HelperService,ApiService,NotificationService]
        };
    }
}