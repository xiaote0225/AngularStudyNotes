import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthKey } from '../configs/constant';
import { Base, LoginArg, LoginType } from '../configs/types';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private prefix = environment.baseUrl + '/hero/';
  constructor(private http: HttpClient) { }
  login(args: LoginArg): Observable<LoginType> {
    return this.http.post<Base<LoginType>>(this.prefix + 'login', args)
      .pipe(
        map((res: Base<LoginType>) => res.data!)
        // catchError(error => this.handleError(error))
      );
  }

  account(auth:string):Observable<LoginType>{
    return this.http.get<Base<LoginType>>(this.prefix + 'account',{
      headers: new HttpHeaders({[AuthKey]:auth})
    }).pipe(
      map((res:Base<LoginType>) => res.data!)
      // catchError(error => this.handleError(error))
    );
  }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   // console.error('error', error);
  //   if (typeof error.error?.code === 'number') { // 后台拒绝请求
  //     alert(error.error.message);
  //   } else {
  //     alert('请求失败');
  //   }
  //   return throwError(error);
  // }
}
