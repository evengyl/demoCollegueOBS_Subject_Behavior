import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isConnect : boolean = false
  subject : Subscription = new Subscription()

  constructor(private loginServe : LoginService) { }

  ngOnInit(): void {
    this.subject = this.loginServe.$isConnect.subscribe({
      next : (connectState : boolean) => {
        console.log("here")
        this.isConnect = connectState
      },
      error : () => {},
      complete : () => {}
    })
  }


  connectToTM(){
    this.loginServe.$isLoveTM.subscribe({
      next : (state : boolean) => {
        console.log("I Love Dragons")
      }
    })
  }

  emitLicorne()
  {
    this.loginServe.isLoveTM = true
    this.loginServe.emitTM()
  }

}
