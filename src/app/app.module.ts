import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for search/filter logic

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import all your components here
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { TripPlannerComponent } from './components/trip-planner/trip-planner.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,      // Registering Navbar
    HomeComponent,
    DestinationsComponent, // Registering Destinations
    TripPlannerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule           // Enabling [(ngModel)] functionality
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
