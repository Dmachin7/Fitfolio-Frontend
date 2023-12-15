import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrls: ['./workout-page.component.scss']
})
export class WorkoutPageComponent {
  workouts: any[] = [
    {
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/ak0doyBeXm1uVy",
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
}