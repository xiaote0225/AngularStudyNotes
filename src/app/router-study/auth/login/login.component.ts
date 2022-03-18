import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  message: string;


  constructor(public authService:AuthService,public router:Router) {
    this.setMessage();
  }

  setMessage():void{
    this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(){
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if(this.authService.isLoggedIn){
        const redirectUrl = this.authService.redirectUrl;
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout():void{
    this.authService.logout();
    this.setMessage();
  }

  ngOnInit(): void {
  }

}
