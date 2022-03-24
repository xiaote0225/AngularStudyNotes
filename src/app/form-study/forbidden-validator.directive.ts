import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { forbiddenNameValidator } from './validate';

@Directive({
  selector: '[appForbiddenName]',
  providers:[{provide:NG_VALIDATORS,useExisting:ForbiddenValidatorDirective,multi:true}]
})
export class ForbiddenValidatorDirective implements Validator{
  @Input('appForbiddenName') forbiddenName:string;
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName,'i'))(control) : null;
  }

}
