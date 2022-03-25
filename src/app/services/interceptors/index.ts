import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonInterceptorInterceptor } from "./common-interceptor.interceptor";
import { Interceptor2Interceptor } from "./interceptor2.interceptor";

export default [
  {provide:HTTP_INTERCEPTORS,useClass:CommonInterceptorInterceptor,multi:true},
  {provide:HTTP_INTERCEPTORS,useClass:Interceptor2Interceptor,multi:true}
]
