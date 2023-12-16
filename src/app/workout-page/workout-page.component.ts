import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrls: ['./workout-page.component.scss']
})
export class WorkoutPageComponent implements OnInit {
  info:string;

  workouts: any[] = [
    {
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/6XnWVjY-yBB419",
      "id": "0001",
      "name": "3/4 sit-up",
      "target": "abs",
      "secondaryMuscles": [
        "hip flexors",
        "lower back"
      ],
      "instructions": [
        "Lie flat on your back with your knees bent and feet flat on the ground.",
        "Place your hands behind your head with your elbows pointing outwards.",
        "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
        "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
        "Repeat for the desired number of repetitions."
      ]
    }
  ]

  constructor (private http: HttpClient, private data: DataService) {

  }

  ngOnInit(): void {
      this.data.currentMessage.subscribe(info => this.info = info)
  }

  addWorkout() {
    this.http.post("https://fit-folio-15bacc8dfac7.herokuapp.com/workouts/", this.workouts, {
      params: {
        username: this.info
      }
    }).subscribe(res => {
      console.log(res)
    })
  }
}
