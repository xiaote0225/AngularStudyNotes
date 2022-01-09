import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
  }

  @Input('visible') show = false;
  @Input() title = '';
  @Input() confirmLable = '确定';
  @Input() cancelLabel = '取消';
  @Output('hide') closed = new EventEmitter<void>();
  @Output() backdropClick = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  onConfirm(){
    this.confirm.emit();
  }
  onClose(){
    this.closed.emit();
  }

}
