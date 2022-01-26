import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
type AlertTheme = 'primary' | 'warning' | 'danger';

export interface AlertOption{
  content:string;
  theme?:AlertTheme;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {
  options:Required<AlertOption> = {
    content: '',
    theme:'primary'
  }
  @Output() readonly closed = new EventEmitter<void>();
  constructor() { }

  get wrapCls():string{
    return 'alert alert-' + this.options.theme + ' fixed-top';
  }

  ngOnInit(): void {
  }

  setOptions(options:AlertOption):void{
    this.options = {...this.options,...options};
  }

}
