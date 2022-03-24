import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

export function forbiddenNameValidator(reg:RegExp):ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null => {
    const forbidden = reg.test(control.value);
    return forbidden ? {forbiddenName:{value:'名字不能包含bob'}} : null;
  }
}

export function equalValidator(group:AbstractControl):ValidationErrors | null {
  const password = group.get('password');
  const rePassword = group.get('rePassword');
  return password?.value === rePassword?.value ? null : {equal:'两次密码不一样'}
}
