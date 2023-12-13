import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  constructor(private http: HttpClient) {
}

workouts:any=[];

  ngOnInit(){
    // this.http.get('https://exercisedb.p.rapidapi.com/exercises?limit=1', {
    //   headers: new HttpHeaders({
    //     'X-RapidAPI-Key': '1f65bfcc53mshe628dd3ca1bfac4p1763d3jsn41b07dec96eb',
		//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //   })
    // }).subscribe(result => {
    //   this.workouts = result
    //   console.log(result)
    // })

    this.http.get('http://localhost:3000/workouts').subscribe(result => {
      this.workouts = result
      console.log(result)
    })
  }


}
