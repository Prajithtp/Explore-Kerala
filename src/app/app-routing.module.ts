import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { TripPlannerComponent } from './components/trip-planner/trip-planner.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'trip-planner', component: TripPlannerComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }