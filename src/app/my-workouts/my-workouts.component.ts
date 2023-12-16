import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-workouts',
  templateUrl: './my-workouts.component.html',
  styleUrls: ['./my-workouts.component.scss']
})
export class MyWorkoutsComponent implements OnInit {

  workouts:any=[];

  constructor (private http: HttpClient) {

  }

  ngOnInit(): void {
      this.http.get('http://localhost:3000/workouts/').subscribe(
        res => {
          this.workouts = res
        }
      )
  }


}
