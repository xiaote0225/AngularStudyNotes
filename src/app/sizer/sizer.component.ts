import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnInit {
  @Input() size = 12;
  @Output() sizeChange = new EventEmitter<number>();

  add():void{
    this.sizeChange.emit(this.size + 1);
  }

  desc(): void{
    this.sizeChange.emit(this.size - 1);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
