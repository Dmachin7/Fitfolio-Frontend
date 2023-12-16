import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviorments/enviorment';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  constructor(private http: HttpClient,
    private router: Router) {
}

workouts:any=[];


  ngOnInit(){
    this.http.get('https://exercisedb.p.rapidapi.com/exercises?limit=10', {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '1f65bfcc53mshe628dd3ca1bfac4p1763d3jsn41b07dec96eb',
		    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      })
    }).subscribe(result => {
      this.workouts = result
      console.log(result)
    })

    this.http.get('https://fit-folio-15bacc8dfac7.herokuapp.com/workouts').subscribe(result => {
      this.workouts = result
      console.log(result)
    })
  }


}
