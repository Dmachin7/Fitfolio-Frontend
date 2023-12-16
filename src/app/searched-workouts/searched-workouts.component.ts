import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-searched-workouts',
  templateUrl: './searched-workouts.component.html',
  styleUrls: ['./searched-workouts.component.scss']
})
export class SearchedWorkoutsComponent implements OnInit {

  workouts:any=[];

 constructor (private data: DataService) {

 }

 ngOnInit(): void {
    this.data.currentWorkout.subscribe(workout => this.workouts = workout)
 }
}
