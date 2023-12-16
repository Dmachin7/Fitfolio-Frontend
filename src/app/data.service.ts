import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private workoutSource = new BehaviorSubject<object>({});
  currentWorkout = this.workoutSource.asObservable()

  private infoSource =  new BehaviorSubject<string>("default message");
  currentMessage = this.infoSource.asObservable();

  changeInfo(info: string) {
    this.infoSource.next(info)
  }

  changeWorkout(workout: object){
    this.workoutSource.next(workout)
  }

}
