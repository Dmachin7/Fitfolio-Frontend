import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Emitters } from '../emitters/emmiters';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-workouts',
  templateUrl: './my-workouts.component.html',
  styleUrls: ['./my-workouts.component.scss']
})
export class MyWorkoutsComponent implements OnInit {
  form: FormGroup

  authenticated = false;

  workouts:any=[];

  deletedWorkouts: string;

  info:string;

  constructor (private http: HttpClient, 
    private data: DataService, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      name: ''
    })
    
    this.data.currentMessage.subscribe(info => this.info = info)
      this.http.get('http://localhost:3000/workouts/', { 
        params: {
          username: this.info
        }
      }).subscribe(
        res => {
          this.workouts = res
        }
      )
      this.http.get('http://localhost:3000/user/auth', {
        withCredentials: true
      }).subscribe(res => {
        console.log("authorized")
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

    delete() {
    this.deletedWorkouts = document.querySelector('h1')?.innerHTML || ''
    this.data.currentChosenWorkout.subscribe(workout => this.deletedWorkouts = workout)
    this.data.changeCurrentWorkout(this.deletedWorkouts)
    console.log(this.deletedWorkouts) 
    }
  }


