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


  logout(): void {
    this.http.post('https://fit-folio-15bacc8dfac7.herokuapp.com/user/logout', {}, {withCredentials: true})
    .subscribe(() => {
      this.authenticated = false
    })
  }

  ngOnInit() {
    this.http.get('https://fit-folio-15bacc8dfac7.herokuapp.com/user/auth', {
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
