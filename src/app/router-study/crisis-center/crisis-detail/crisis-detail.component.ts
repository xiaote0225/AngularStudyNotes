import { switchMap } from 'rxjs/operators';
import { CrisisService } from './../crisis.service';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Crisis } from '../crisis';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisDetailComponent implements OnInit {

  crisis$:Observable<Crisis | undefined>;

  constructor(private router:Router,private route:ActivatedRoute,private crisisServe:CrisisService) { }

  ngOnInit(): void {
    this.crisis$ = this.route.paramMap.pipe(switchMap(params => {
      return this.crisisServe.getCrisis(params.get('id')!);
    }));
  }


}
