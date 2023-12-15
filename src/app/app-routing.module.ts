import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPageComponent } from './workout-page/workout-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{path: '', component: HomePageComponent},{path: 'workout', component: WorkoutPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
