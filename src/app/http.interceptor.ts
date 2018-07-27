import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import "rxjs/add/operator/retry";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { NotificationService } from "../shared/services/notification.service";
import { CustomError } from "../store/models/custom-error.model";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private injector: Injector){

  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // If the call fails, retry until 5 times before throwing an error
    return next.handle(request)
               .retry(3) 
               .do((response)=>{

                      //console.log(response['body'] || "");
              })
              .catch(err => this.handleError(err))
              
  }


  handleError(error: Error | HttpErrorResponse): Observable<any> {
    const notificationService = this.injector.get(NotificationService);
    if (error instanceof HttpErrorResponse) {

      
      // Server or connection error happened
      if (!navigator.onLine) {
        // Handle offline error
        notificationService.dispatchError(this.getErrorMessage(900));

      } else {
        // Handle Http Error (error.status === 403, 404...)
        if(error.status !== 401){
          notificationService.dispatchError(this.getErrorMessage(error.status));
        }
        //if error is 401 , redirect to authentication page 
      }

      return Observable.throw({}); //throw blank error

    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
      //Throw the error using an observable
     return Observable.throw(error);
    }
    
  }

  getErrorMessage(statusCode: number): CustomError {

    let responseStates = {
      0: "Please check your internet connection",
      404: "Endpoint does not exist",
      400: "Bad request from server",
      401: "Token has expired",
      403: "You do not have the permission to access this resource",
      408: "The request timed out",
      500: "A server error occurred while fetching data",
      700: "An unknown error has occurred",
      900: "Please check your internet connection"
    };

    let message: CustomError =  {

      statusCode: statusCode,
      title: 'Oops',
      text: responseStates[statusCode] || responseStates[700],
      type: 'error'
      
    };

    return message;
  }
}