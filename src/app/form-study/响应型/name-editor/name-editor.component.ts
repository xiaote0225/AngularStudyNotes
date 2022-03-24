import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('aaaa');
  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue('Nancy');
  }

}
