import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  isConnect : boolean = false
  subject : Subscription = new Subscription()

  constructor(private loginServe : LoginService) { }


  ngOnInit(): void {
    this.subject = this.loginServe.$isConnect.subscribe({
      next : (connectState : boolean) => {
        console.log("Sub Obs header page")
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


  ngOnDestroy(): void {
    this.loginServe.$isConnect.unsubscribe()
  }

}
