import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { TransferItem } from './types';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferPanelComponent implements OnInit {

  @Input() list:TransferItem[] = [];
  @Input() search = false;
  showList: TransferItem[] = [];
  selecteds: TransferItem[] = [];
  @Output() changed = new EventEmitter<TransferItem[]>();
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const { list } = changes;
    if(list){
      this.showList = list.currentValue.slice();
      this.selecteds = this.list.filter(item => item.checked);
    }
  }
  ngOnInit(): void {
    // this.setList();
  }
  onInput(event:Event):void{
    const {value} = (event.target as HTMLInputElement);
    this.showList = this.list.filter(item => item.value.includes(value));
  }
  // setList() {
  //   this.showList = [];
  //   const prefix = 'item' + Date.now().toString().slice(-3);
  //   for (let i = 0; i < 20; i++) {
  //     this.showList.push({
  //       key: prefix + '_' + i,
  //       value: `${prefix}${i + 1}`,
  //       checked: i % 6 === 0
  //     });
  //   }
  // }
  trackByItem(index:number,obj:TransferItem):string{
    return obj.key;
  }
  itemClick(target:TransferItem):void{
    const index = this.targetIndex(target.key);
    if(index > -1){
      this.selecteds.splice(index,1);
    }else{
      this.selecteds.push(target);
    }
    this.changed.emit(this.selecteds);
  }
  targetIndex(key:string):number{
    return this.selecteds.findIndex(item => item.key === key);
  }
}
