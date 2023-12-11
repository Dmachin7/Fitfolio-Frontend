import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from './app-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Fitfolio-Frontend';
 
  constructor(private service : AppServiceService) {
  
  }

workouts:any=[];
  
  
  ngOnInit(){
    this.getDataFromAPI();
  }
  
  
  getDataFromAPI() {
  this.service.getData().subscribe((response) => {
    this.workouts = response
  }, (error) => {
    console.log('Error is ', error)
  })
  }
  
  }
