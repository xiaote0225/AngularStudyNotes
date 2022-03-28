import { AccountService } from './../../services/account.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginArg } from './../../types';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { WindowService } from 'src/app/services/window.service';
import { AuthKey } from 'src/app/configs/constant';

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

  constructor(private router:Router,private accountServe:AccountService,private userServe:UserService,private windowServe:WindowService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log('form',form.value);
    if(form.valid){
      this.accountServe.login(form.value).subscribe(({user,token}) => {
        // localStorage.setItem('h-auth',token);
        // localStorage.setItem('AuthKey',token);
        this.windowServe.setStorage(AuthKey,token);
        // alert(user);
        this.userServe.setUser(user);
        // alert('登陆成功');
        this.windowServe.alert('登陆成功');
        const to = this.accountServe.redirectTo || '/home/heroes';
        // this.router.navigateByUrl('/home/heroes');
        this.router.navigateByUrl(to).then(() => {
          this.accountServe.redirectTo = '';
        });
      });
    }
  }

}
