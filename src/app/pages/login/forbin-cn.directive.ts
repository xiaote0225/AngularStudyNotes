import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appForbinCn]',
  providers: [{provide:NG_VALIDATORS,useExisting:ForbinCnDirective,multi:true}]
})
export class ForbinCnDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return /\p{Unified_Ideograph}/u.test(control.value) ? { forbidCn: '密码不支持中文' } : null;
  }

}
