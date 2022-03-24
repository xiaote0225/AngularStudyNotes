import { HasMobileService } from '../../has-mobile.service';
import { FormArray, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors, FormGroup, Validators, AsyncValidator } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

function forbiddenNameValidator(req:RegExp):ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null => {
    const forbidden = req.test(control.value);
    return forbidden ? {forbiddenName:{value:'名字不能包含bob'}}: null;
  }
}

function equalValidator(group:FormGroup):ValidationErrors | null {
  const password = group.get('password');
  const rePassword = group.get('rePassword');
  return password?.value === rePassword?.value ? null : {equal: '两次密码不一样'};
}

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    firstName:['',Validators.required],
    lastName:['',[
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator(/bob/i)
    ]],
    mobile:['',{
      validators:[
        Validators.required,
        Validators.pattern(/^\d{11}$/)
      ],
      asyncValidators:this.hasMobileServe.validate,
      updateOn:'blur'
    }],
    newPass:this.fb.group({
      password:['',Validators.required],
      rePassword:['',Validators.required]
    },{validators:equalValidator})
  });

  get firstName(){
    return this.profileForm.get('firstName');
  }

  get lastName(){
    return this.profileForm.get('lastName');
  }

  get mobile(){
    return this.profileForm.get('mobile');
  }

  get newPass(){
    return this.profileForm.get('newPass')
  }

  // get aliases(){
  //   return this.profileForm.get('aliases') as FormArray;
  // }


  // addAlias(){
  //   this.aliases.push(this.fb.control(''));
  // }

  onSubmit(){
    console.log('onSubmit',this.profileForm.value);
    console.log('lastName',this.profileForm.get('lastName')?.value);
  }

  // updateProfile(){
  //   this.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address:{
  //       street: '123 Drew Street'
  //     }
  //   });
  // }

  // updateProfile2(){
  //   this.profileForm.setValue({
  //     firstName:'Nancy45646',
  //     lastName:'',
  //     address:{
  //       street:'123 Drew Street',
  //       city:'',
  //       state:'',
  //       zip:''
  //     }
  //   });
  // }

  constructor(private fb:FormBuilder,private hasMobileServe:HasMobileService) { }

  ngOnInit(): void {
  }

}
