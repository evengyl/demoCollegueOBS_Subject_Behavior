import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

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

  ngOnDestroy(){
    this.subject.unsubscribe()
  }


  
  login(){
    this.loginServe.login()
  }

  
  logout(){
    this.loginServe.logout()
  }

}
