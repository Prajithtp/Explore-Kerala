import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.css']
})
export class TripPlannerComponent {
  // Default values for the calculator
  days: number = 1;
  travelers: number = 1;
  hotelType: number = 1500; // Price per night
  totalBudget: number = 0;

  constructor() {
    this.calculateBudget(); // Calculate initial value on load
  }

  // Logic to calculate total estimated cost
  calculateBudget() {
    const accommodationCost = this.hotelType * this.days;
    const foodAndTravel = 800 * this.travelers * this.days; // Fixed estimate per person
    this.totalBudget = accommodationCost + foodAndTravel;
  }
}