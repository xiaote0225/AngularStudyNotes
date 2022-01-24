import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-grandson',
  templateUrl: './change-grandson.component.html',
  styleUrls: ['./change-grandson.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeGrandsonComponent implements OnInit {
  @Input() position: '上' | '下';
  grandSonName = '河蟹';

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change position',changes);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.grandSonName = 'f6';
      this.cdr.markForCheck();
      // this.cdr.detectChanges();
    },3000);
  }

}
