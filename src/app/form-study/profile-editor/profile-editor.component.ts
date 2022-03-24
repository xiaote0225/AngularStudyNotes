import { HasMobileService } from './../has-mobile.service';
import { AbstractControl, ValidatorFn, ValidationErrors, FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

class Profile{
  constructor(
    public firstName:string,
    public lastName:string,
    public mobile:string,
    public password:string,
    public rePassword:string
  ){

  }
}

// function forbiddenNameValidator(req:RegExp):ValidatorFn{
//   return (control:AbstractControl): ValidationErrors | null => {
//     const forbidden = req.test(control.value);
//     return forbidden ? {forbiddenName:{value:'名字不能包含bobo'}} : null;
//   }
// }

// function equalValidator(group:FormGroup):ValidationErrors | null {
//   const password = group.get('password');
//   const rePassword = group.get('rePassword');
//   return password?.value === rePassword?.value ? null : {equal:'两次密码不一样'};
// }

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditorComponent implements OnInit {
  model = new Profile('a','v','','','');
  constructor(private hasMobileServe:HasMobileService) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    console.log('submit value',f.value);
  }

  onReset(f:NgForm){
    f.reset({firstName:'aaa',lastName:'bbb',password:'ccc'});
  }

}
