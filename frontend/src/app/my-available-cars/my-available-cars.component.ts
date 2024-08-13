import { Component } from '@angular/core';
import { AvailableCarsService } from '../available-cars.service';
@Component({
  selector: 'app-my-available-cars',
  templateUrl: './my-available-cars.component.html',
  styleUrls: ['./my-available-cars.component.css']
})

export class MyAvailableCarsComponent {
  availableCars: any[] = [];
  filteredCars: any[] = [];

  constructor(private availableCarsService: AvailableCarsService) {}

  ngOnInit() {
    this.availableCarsService.getAvailableCars().subscribe({
      next: (cars) => {
        this.availableCars = cars;
        this.filteredCars = [...this.availableCars];
      },
    });
  }

  filterCars(event: any) {
    const searchTerm = event.target.value;
    this.filteredCars = this.availableCars.filter((car) =>
      car.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
}


