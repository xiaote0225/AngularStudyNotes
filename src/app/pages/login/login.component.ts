import { AccountService } from './../../services/account.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginArg } from './../../types';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  formValues:LoginArg = {
    name:'',
    password: ''
  }

  constructor(private router:Router,private accountServe:AccountService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log('form',form.value);
    if(form.valid){
      this.accountServe.login(form.value).subscribe(({user,token}) => {
        localStorage.setItem('h-auth',token);
        alert('登陆成功');
        this.router.navigateByUrl('/home/heroes');
      });
    }
  }

}
