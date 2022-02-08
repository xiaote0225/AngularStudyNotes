import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisListComponent implements OnInit {

  crises$:Observable<Crisis[]>;
  selectedId:number;

  constructor(private crisisService:CrisisService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.crises$ = this.crisisService.getCrises();
  }

  onSelect(id:number){
    this.selectedId = id;
    this.router.navigate([id],{relativeTo:this.route});
  }

}
