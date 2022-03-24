import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { equalValidator } from './validate';

@Directive({
  selector: '[appEqualValidator]',
  providers:[{provide:NG_VALIDATORS,useExisting:EqualValidatorDirective,multi:true}]
})
export class EqualValidatorDirective implements Validator{

  constructor() { }

  validate(control: FormGroup): ValidationErrors | null {
    return equalValidator(control);
  }

}
