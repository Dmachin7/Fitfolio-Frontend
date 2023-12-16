import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
import { environment } from 'src/enviorments/enviorment';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
form: FormGroup

filteredWorkouts: object;

workouts:any=[];

  constructor (private http: HttpClient,
    private formBuilder: FormBuilder,
    private data: DataService,
    private router: Router) {

  }

  ngOnInit(): void {
      this.data.currentWorkout.subscribe(workout => this.filteredWorkouts = workout)
      this.form = this.formBuilder.group({
        bodyPart: ''
      })

      this.form.get('bodyPart')?.valueChanges.subscribe(event => {
        this.form.get('bodyPart')?.setValue(event.toLowerCase())
      })
  }

  sendInfo() {
    this.data.changeWorkout(this.workouts)
  }
  
  submit(): void {
    this.http.get("https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + this.form.getRawValue().bodyPart +"?limit=10", {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '1f65bfcc53mshe628dd3ca1bfac4p1763d3jsn41b07dec96eb',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      })
    }).subscribe(result => {
      this.workouts = result
      this.sendInfo()
      this.router.navigate(['/searched-workouts'])
    }, error => {
      console.log(error)
    })
  }


}
