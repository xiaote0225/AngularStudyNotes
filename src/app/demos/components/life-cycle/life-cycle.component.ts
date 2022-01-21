import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit {
  @Input() title = "default";

  constructor() {
    console.log('constructor this.title',this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges changes',changes);
    console.log('ngOnChanges this.title',this.title);
  }

  ngOnInit(): void {
    console.log('ngOnInit this.title',this.title);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck this.title',this.title);
  }


  ngAfterContentInit(): void {
    console.log('ngAfterContentInit this.title',this.title);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked this.title',this.title);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit this.title',this.title);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked this.title',this.title);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy this.title',this.title);
  }

}
