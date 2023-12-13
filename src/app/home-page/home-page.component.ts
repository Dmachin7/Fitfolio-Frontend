import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviorments/enviorment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  constructor(private http: HttpClient) {
}

workouts: any[] = [{"_id":"657a16841f8e832c5eab54b3","name":"3/4 sit-up","target":"abs","bodyPart":"waist","gifUrl":"https://v2.exercisedb.io/image/Pw-fnqwK-a059v","equipment":"body weight","secondaryMuscles":["hip flexors","lower back"],"instructions":["Lie flat on your back with your knees bent and feet flat on the ground.","Place your hands behind your head with your elbows pointing outwards.","Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.","Pause for a moment at the top, then slowly lower your upper body back down to the starting position.","Repeat for the desired number of repetitions."],"__v":0},{"_id":"657a16841f8e832c5eab54b4","name":"45° side bend","target":"abs","bodyPart":"waist","gifUrl":"https://v2.exercisedb.io/image/SL8pj8NtIZUtOr","equipment":"body weight","secondaryMuscles":["obliques"],"instructions":["Stand with your feet shoulder-width apart and your arms extended straight down by your sides.","Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.","Pause for a moment at the bottom, then slowly return to the starting position.","Repeat on the other side.","Continue alternating sides for the desired number of repetitions."],"__v":0},{"_id":"657a16841f8e832c5eab54b7","name":"alternate heel touchers","target":"abs","bodyPart":"waist","gifUrl":"https://v2.exercisedb.io/image/ppMp9V8EdBlYjI","equipment":"body weight","secondaryMuscles":["obliques"],"instructions":["Lie flat on your back with your knees bent and feet flat on the ground.","Extend your arms straight out to the sides, parallel to the ground.","Engaging your abs, lift your shoulders off the ground and reach your right hand towards your right heel.","Return to the starting position and repeat on the left side, reaching your left hand towards your left heel.","Continue alternating sides for the desired number of repetitions."],"__v":0},{"_id":"657a16841f8e832c5eab54b5","name":"air bike","target":"abs","bodyPart":"waist","gifUrl":"https://v2.exercisedb.io/image/FzEtOtfpdY2Po1","equipment":"body weight","secondaryMuscles":["hip flexors"],"instructions":["Lie flat on your back with your hands placed behind your head.","Lift your legs off the ground and bend your knees at a 90-degree angle.","Bring your right elbow towards your left knee while simultaneously straightening your right leg.","Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.","Continue alternating sides in a pedaling motion for the desired number of repetitions."],"__v":0},{"_id":"657a16841f8e832c5eab54b6","name":"all fours squad stretch","target":"quads","bodyPart":"upper legs","gifUrl":"https://v2.exercisedb.io/image/n3IAUo6e40qMgo","equipment":"body weight","secondaryMuscles":["hamstrings","glutes"],"instructions":["Start on all fours with your hands directly under your shoulders and your knees directly under your hips.","Extend one leg straight back, keeping your knee bent and your foot flexed.","Slowly lower your hips towards the ground, feeling a stretch in your quads.","Hold this position for 20-30 seconds.","Switch legs and repeat the stretch on the other side."],"__v":0}]

// workouts:any=[];


  ngOnInit(){
    // this.http.get('https://exercisedb.p.rapidapi.com/exercises?limit=1', {
    //   headers: new HttpHeaders({
    //     'X-RapidAPI-Key': environment.apiUrl ,
		//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //   })
    // }).subscribe(result => {
    //   this.workouts = result
    //   console.log(result)
    // })

    // this.http.get('http://localhost:3000/workouts').subscribe(result => {
    //   this.workouts = result
    //   console.log(result)
    // })
  }


}
