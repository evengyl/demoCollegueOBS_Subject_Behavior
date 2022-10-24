import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isConnect : boolean = false
  isLoveTM : boolean = false


  $isLoveTM : Subject<boolean> = new Subject<boolean>()
  $isConnect : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnect)

  constructor() { }


  login(){
    this.isConnect = true
    this.emitIsConnect()
  }

  
  logout(){
    this.isConnect = false
    this.emitIsConnect()
  }

  emitIsConnect()
  {
    this.$isConnect.next(this.isConnect)
  }

  
  emitTM()
  {
    this.$isLoveTM.next(this.isLoveTM)
  }
}
