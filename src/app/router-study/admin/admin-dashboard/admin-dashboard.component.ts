import { SelectivePreloadingStrategyService } from './../../../services/selective-preloading-strategy.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent implements OnInit {

  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[] = [];
  constructor(private route: ActivatedRoute,preloadStrategy:SelectivePreloadingStrategyService) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit(): void {
    this.sessionId = this.route.queryParamMap.pipe(map(params => params.get('sesion_id') || 'None'));
    this.token = this.route.fragment.pipe(map(frament => frament || 'None'));
  }

}
