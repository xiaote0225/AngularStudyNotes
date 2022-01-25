import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Direction, TransferItem } from '../transfer-panel/types';
// import cloneDeep from 'lodash.clonedeep';
import { cloneDeep } from "lodash";
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TransferComponent implements OnInit,OnChanges {

  @Input() sourceData: TransferItem[];
  @Input() search = false;
  @Input() customTpl: TemplateRef<any>;
  leftDatas: TransferItem[] = [];
  rightDatas: TransferItem[] = [];
  leftShowList:TransferItem[] = [];
  rightShowList:TransferItem[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const { sourceData } = changes;
    if(sourceData && sourceData.currentValue){
      sourceData.currentValue.forEach((item:TransferItem) => {
        if(!item.direction || item.direction === 'left'){
          item.direction = 'left';
          this.leftDatas.push(item);
          this.leftShowList.push(item);
        }else{
          item.direction = 'right';
          this.rightDatas.push(item);
          this.rightShowList.push(item);
        }
      });
    }
  }

  ngOnInit(): void {
  }

  to(direction:Direction){
    if(direction === 'left'){
      this.trueMove('rightDatas','leftDatas');
    }else{
      this.trueMove('leftDatas','rightDatas');
    }
  }

  private trueMove(from:'leftDatas' | 'rightDatas',to:'leftDatas' | 'rightDatas'){
    const moveList: TransferItem[] = cloneDeep(this[from]).filter((item:TransferItem) => item.checked).map((item:TransferItem) => {
      item.checked = false;
      return item;
    });
    console.log('moveList',moveList);
    this[to] = this[to].concat(moveList);
    this[from] = this[from].filter(item => !item.checked);
    if(from === 'leftDatas'){
      this.rightShowList = this.rightShowList.concat(moveList);
      this.leftShowList = this.leftShowList.filter(item => !item.checked);
    }else{
      this.leftShowList = this.leftShowList.concat(moveList);
      this.rightShowList = this.rightShowList.filter(item => !item.checked);
    }
  }

  onFiltered(value:string,direction:Direction){
    if(direction === 'left'){
      this.leftShowList = this.leftDatas.filter(item => item.value.includes(value));
    }else {
      this.rightShowList = this.rightDatas.filter(item => item.value.includes(value));
    }
  }

  onSelect(index:number,direction:Direction){
    if(direction === 'left'){
      // this.leftDatas[index].checked = !this.leftDatas[index].checked;
      // this.leftDatas = this.leftDatas.slice();
      this.leftShowList[index].checked = !this.leftShowList[index].checked;
      this.leftShowList = this.leftShowList.slice();
    }else{
      // this.rightDatas[index].checked = !this.rightDatas[index].checked;
      // this.rightDatas = this.rightDatas.slice();
      this.rightShowList[index].checked = !this.rightShowList[index].checked;
      this.rightShowList = this.rightShowList.slice();
    }
    // this[direction+'Datas'][index].checked = !this[direction+'Datas'][index].checked;
    // this[direction+'Datas'] = this[direction+'Datas'].slice();
  }

  disableBtn(direction:Direction){
    const targetDatas = direction === 'left' ? this.rightDatas : this.leftDatas;
    return targetDatas.findIndex(item => item.checked) === -1;
  }



}
