import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComposeMessageComponent implements OnInit {
  details:string;
  message:string;
  sending = false;

  constructor(private router:Router) { }

  send(){
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel(){
    this.closePopup();
  }

  closePopup():void{
    this.router.navigate([{outlets:{popup:null}}]);
  }

  ngOnInit(): void {
  }

}
