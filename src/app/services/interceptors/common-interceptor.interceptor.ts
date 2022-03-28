import { catchError } from 'rxjs/operators';
import { AuthKey } from './../../configs/constant';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, merge } from 'rxjs';
import { WindowService } from '../window.service';

interface CustomHttpConfig{
  headers?:HttpHeaders;
}

@Injectable()
export class CommonInterceptorInterceptor implements HttpInterceptor {

  constructor(private windowServe:WindowService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('拦截器');
    // const auth = localStorage.getItem(AuthKey);
    const auth = this.windowServe.getStorage(AuthKey);
    let httpConfig:CustomHttpConfig = {};
    if(auth){
      httpConfig = {headers: request.headers.set(AuthKey,auth)};
    }
    const copyReq = request.clone(httpConfig);
    return next.handle(copyReq).pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error:HttpErrorResponse):Observable<never>{
    if(typeof error.error?.code === 'number'){
      // alert(error.error.message);
      this.windowServe.alert(error.error.message);
    }else{
      // alert('请求失败');
      this.windowServe.alert('请求失败');
    }
    return throwError(error);
  }
}
