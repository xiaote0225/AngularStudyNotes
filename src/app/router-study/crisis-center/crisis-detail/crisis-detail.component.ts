import { switchMap } from 'rxjs/operators';
import { CrisisService } from './../crisis.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Crisis } from '../crisis';
import { ActivatedRoute, Router, CanDeactivate } from '@angular/router';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisDetailComponent implements OnInit {

  // crisis$:Observable<Crisis | undefined>;

  editName = '';
  crisis:Crisis;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private crisisServe:CrisisService,
    private cdr:ChangeDetectorRef,
    private dialogService:DialogService
  ) { }

  ngOnInit(): void {
    // this.crisis$ = this.route.paramMap.pipe(switchMap(params => {
    //   return this.crisisServe.getCrisis(params.get('id')!);
    // }));
    this.route.paramMap.pipe(switchMap(params => {
      return this.crisisServe.getCrisis(params.get('id')!);
    })).subscribe(crisis => {
      this.crisis = crisis!;
      this.editName = crisis?.name!;
      this.cdr.markForCheck();
    });
  }

  cancel(){
    this.gotoCrises();
  }

  save(){
    this.editName = this.crisis.name;
    this.gotoCrises();
  }

  gotoCrises(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  canDeactivate(){
    if(!this.crisis || this.crisis.name === this.editName){
      return true;
    }
    return this.dialogService.confirm('Discard changes?')
  }

}
