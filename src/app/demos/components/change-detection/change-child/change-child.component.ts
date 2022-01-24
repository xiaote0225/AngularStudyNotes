import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-child',
  templateUrl: './change-child.component.html',
  styleUrls: ['./change-child.component.scss']
})
export class ChangeChildComponent implements OnInit {
  childName = 'VN';
  position: '上' | '下' = '下';
  @Input() arms = '多兰剑';
  @Output() childInit = new EventEmitter<void>();

  constructor(private cdr:ChangeDetectorRef) {
    this.cdr.detach();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes',changes);
    this.cdr.reattach();
    setTimeout(() => {
      // this.cdr.detach();
    }, 0);
  }

  ngOnInit(): void {
    // this.childInit.emit();
    setTimeout(() => {
      this.childName = 'EZ';
    }, 3000);
  }

}
