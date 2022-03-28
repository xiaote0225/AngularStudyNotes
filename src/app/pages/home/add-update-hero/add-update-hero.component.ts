import { WindowService } from 'src/app/services/window.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-update-hero.component.html',
  styleUrls: ['./add-update-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUpdateHeroComponent implements OnInit {
  formValues: FormGroup = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.maxLength(20)
    ]],
    gender: ['0', Validators.min(0)],
    age: ['', Validators.min(0)],
    phone: ['', [
      Validators.required,
      Validators.pattern(/^1\d{10}$/)
    ]],
    email: ['', Validators.email],
    job: ['', Validators.required],
    role: ['user', Validators.required],
    brief: ['', [
      Validators.minLength(8),
      Validators.maxLength(100)
    ]]
  });

  private submitted = false;
  constructor(private fb: FormBuilder,private router:Router,private heroServe:HeroService,private route:ActivatedRoute,private windowServe:WindowService) {
    console.log('this.route.snapshot.paramMap.get(id)',this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

  get formControls() {
    const controls = {
      name: this.formValues.get('name'),
      age: this.formValues.get('age'),
      phone: this.formValues.get('phone'),
      email: this.formValues.get('email'),
      job: this.formValues.get('job'),
      role: this.formValues.get('role'),
      brief: this.formValues.get('brief')
    }
    return {
      name: {
        control: controls.name,
        showErr: controls.name?.touched && controls.name.invalid,
        errors: controls.name?.errors
      },
      age: {
        control: controls.age,
        showErr: controls.age?.touched && controls.age.invalid,
        errors: controls.age?.errors
      },
      phone: {
        control: controls.phone,
        showErr: controls.phone?.touched && controls.phone.invalid,
        errors: controls.phone?.errors
      },
      email: {
        control: controls.email,
        showErr: controls.email?.touched && controls.email.invalid,
        errors: controls.email?.errors
      },
      job: {
        control: controls.job,
        showErr: controls.job?.touched && controls.job.invalid,
        errors: controls.job?.errors
      },
      role: {
        control: controls.role,
        showErr: controls.role?.touched && controls.role.invalid,
        errors: controls.role?.errors
      },
      brief: {
        control: controls.brief,
        showErr: controls.brief?.touched && controls.brief.invalid,
        errors: controls.brief?.errors
      },
    };
  }

  onSubmit():void{
    this.submitted = true;
    console.log(this.formValues.value);
    // this.cancel();
    if(this.formValues.valid){
      this.heroServe.addHero(this.formValues.value).subscribe(res => {
        // console.log(res);
        this.windowServe.alert('新增成功');
        this.cancel();
      });
    }
  }

  cancel():void{
    // this.router.navigate(['/home/heroes']);
    this.router.navigate(['../heroes'],{relativeTo:this.route});
  }

  canDeactivate(){
    if(this.formValues.dirty && !this.submitted){
      return confirm('表单未保存，确定离开？');
    }
    return true;
  }


}
