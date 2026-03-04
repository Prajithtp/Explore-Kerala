import { Injectable } from '@angular/core';
import { Destination } from 'src/app/Models/destination.model';

@Injectable({
  providedIn: 'root'
})
export class TourismService {

  private destinations: Destination[] = [
    {
      id: 1,
      name: 'Munnar Tea Gardens',
      district: 'Idukki',
      description: 'Lush green tea plantations and cool mist.',
      imageUrl: 'assets/images/munnar.jpg',
      entryFee: 100,
      category: 'Hill Station'
    },
    {
      id: 2,
      name: 'Alappuzha Backwaters',
      district: 'Alappuzha',
      description: 'Serene houseboat cruises through palm-fringed canals.',
      imageUrl: 'assets/images/alleppey.jpg',
      entryFee: 0,
      category: 'Backwaters'
    },
    {
      id: 3,
      name: 'Fort Kochi',
      district: 'Ernakulam',
      description: 'A blend of Chinese, European, and Indian heritage.',
      imageUrl: 'assets/images/kochi.jpg',
      entryFee: 50,
      category: 'Culture'
    }
  ];

  constructor() { }

  // Get all destinations
  getDestinations(): Destination[] {
    return this.destinations;
  }

  // Get unique districts for the filter dropdown
  getDistricts(): string[] {
    return [...new Set(this.destinations.map(d => d.district))];
  }
}