import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tpl-outlet',
  templateUrl: './tpl-outlet.component.html',
  styleUrls: ['./tpl-outlet.component.scss']
})
export class TplOutletComponent implements OnInit {
  @Input()render:TemplateRef<any>;
  context = {$implicit:'ceshi implicit',value:'我是一个测试值666666'};

  constructor() { }

  ngOnInit(): void {
  }

}
