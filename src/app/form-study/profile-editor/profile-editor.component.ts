import { FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }

  onSubmit(){
    console.log('onSubmit',this.profileForm.value);
    console.log('lastName',this.profileForm.get('lastName')?.value);
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address:{
        street: '123 Drew Street'
      }
    });
  }

  updateProfile2(){
    this.profileForm.setValue({
      firstName:'Nancy45646',
      lastName:'',
      address:{
        street:'123 Drew Street',
        city:'',
        state:'',
        zip:''
      }
    });
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
