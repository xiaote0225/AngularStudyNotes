import { first, mergeMap } from 'rxjs/operators';
import { Crisis } from './crisis';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { CrisisService } from './crisis.service';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis>{

  constructor(private crisisServe:CrisisService,private router:Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis | never>{
    return this.crisisServe.getCrisis(route.paramMap.get('id')!).pipe(
      first(),
      mergeMap(crisis => {
        console.log('CrisisDetailResolverService',crisis);
        if(crisis){
          console.log('找到了crisis');
          return of(crisis);
        }else{
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
