import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  blogDetail =  new BehaviorSubject(<any>null);
  //asenkton işlemler için kullanılır
  //başlangıç değeri null

  constructor() { }
}
