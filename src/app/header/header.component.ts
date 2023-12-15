import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  private loggedIn = true

  lockScroll = () => {
    if(window.innerWidth < 500) {
      document.body.classList.toggle('lock-scroll')
    }
  }
  
  showNav = () => {
    console.log("it works")
  }

  checkIfLoggedIn = () => {
    if (this.loggedIn === true) {
      return true
    } else {
      return false
    }
  }

  ngOnInit(){
    this.checkIfLoggedIn()
  }
}
