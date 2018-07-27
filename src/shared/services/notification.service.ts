import { Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {CustomError} from '../../store/models/custom-error.model';

@Injectable()
export class NotificationService {


    //Notify client of errors from global error handler
    dispatchErrorStatus = new Subject<CustomError>();
    dispatchError$ = this.dispatchErrorStatus.asObservable();


    dispatchError(error: CustomError){
        this.dispatchErrorStatus.next(error);
    }

}