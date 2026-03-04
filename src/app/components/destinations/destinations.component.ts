import { Component, OnInit } from '@angular/core';
import { TourismService } from '../../services/tourism.service';
import { Destination } from 'src/app/Models/destination.model';

// import { Destination } from '../../models/destination.model';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html'
})
export class DestinationsComponent implements OnInit {
  allDestinations: Destination[] = [];
  filteredDestinations: Destination[] = [];
  searchTerm: string = '';
  selectedDistrict: string = '';

  constructor(private tourismService: TourismService) { }

  ngOnInit(): void {
    this.allDestinations = this.tourismService.getDestinations();
    this.filteredDestinations = this.allDestinations;
  }

  filterData() {
    this.filteredDestinations = this.allDestinations.filter(d => {
      const matchesSearch = d.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesDistrict = this.selectedDistrict === '' || d.district === this.selectedDistrict;
      return matchesSearch && matchesDistrict;
    });
  }
}