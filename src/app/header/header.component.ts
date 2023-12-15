import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emmiters';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  authenticated = false;

  constructor (private http: HttpClient) { }

  lockScroll = () => {
    if(window.innerWidth < 500) {
      document.body.classList.toggle('lock-scroll')
    }
  }
  
  showNav = () => {
    console.log("it works")
  }

  logout(): void {
    this.http.post('http://localhost:3000/user/logout', {}, {withCredentials: true})
    .subscribe(() => {
      this.authenticated = false
    })
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/user/auth', {
      withCredentials: true
    }).subscribe(res => {
      Emitters.authEmitter.emit(true)
    }, 
    err => {
      console.log(err)
      Emitters.authEmitter.emit(false)
    })

    Emitters.authEmitter.subscribe((auth: boolean) => {
      this.authenticated = auth
    })
  }
}
