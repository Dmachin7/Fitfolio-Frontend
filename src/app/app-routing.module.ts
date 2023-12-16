import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPageComponent } from './workout-page/workout-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MyWorkoutsComponent } from './my-workouts/my-workouts.component';
import { SearchedWorkoutsComponent } from './searched-workouts/searched-workouts.component';

const routes: Routes = [{path: '', component: HomePageComponent},{path: 'workout', component: WorkoutPageComponent}, {path: 'login', component: LoginPageComponent}, {path: 'register', component: RegisterPageComponent}, {path: 'myworkouts', component: MyWorkoutsComponent
}, {path: 'searched-workouts', component: SearchedWorkoutsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
