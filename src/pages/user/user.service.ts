import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/services/api.service';

@Injectable()
export class UserService {

  constructor(private apiService: ApiService) {

  }

  getUser(id: string){
    return this.apiService.getUser(id);
  }

}