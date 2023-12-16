import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Emitters } from '../emitters/emmiters';

@Component({
  selector: 'app-my-workouts',
  templateUrl: './my-workouts.component.html',
  styleUrls: ['./my-workouts.component.scss']
})
export class MyWorkoutsComponent implements OnInit {


  authenticated = false;

  workouts:any=[];

  info:string;

  constructor (private http: HttpClient, 
    private data: DataService) {

  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(info => this.info = info)
      this.http.get('https://fit-folio-15bacc8dfac7.herokuapp.com/workouts/', { 
        params: {
          username: this.info
        }
      }).subscribe(
        res => {
          this.workouts = res
        }
      )
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


