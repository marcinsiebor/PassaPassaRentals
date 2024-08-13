import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { ReservationService } from '../reservation.service';
import { ToastrService } from 'ngx-toastr';
import { AvailableCarsService } from '../available-cars.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css'],
})
export class MyReservationsComponent implements OnInit {

  showReservationForm: boolean = false;

  reservationData = {
    brand:  '',
    from_location: '',
    to_location: '',
  };

  reservations: any[] = [];
  availableCars: any[] = [];
  

  constructor(
    private reservationService: ReservationService,
    private authService: AuthorizationService,
    private toastr: ToastrService,
    private availableCarsService: AvailableCarsService
  ) {}

  ngOnInit() {
    this.loadReservationHistory();
    this.loadAvailableCars();
  }

  makeReservation() {
    const userId = this.authService.getUserId();

    console.log('Reservation Payload:', {
      userId: userId ?? 0,
      brand: this.reservationData.brand,
      from_location: this.reservationData.from_location,
      to_location: this.reservationData.to_location,
    });

    this.reservationService
      .makeReservation(
        userId ?? 0,
        this.reservationData.brand,
        this.reservationData.from_location,
        this.reservationData.to_location
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.toastr.success('Reservation successful!', 'Success');
          this.loadReservationHistory();
        },
        (err) => {
          console.error(err);
          this.toastr.error('Error making reservation', 'Error');
        }
      );
  }

  loadReservationHistory() {
    const userId = this.authService.getUserId();

    this.reservationService.getUserReservations(userId ?? 0).subscribe(
      (res) => {
        console.log(res);
        this.reservations = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  loadAvailableCars() {
    this.availableCarsService.getAvailableCars().subscribe(
      (cars) => {
        this.availableCars = cars;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  toggleReservationForm() {
    this.showReservationForm = !this.showReservationForm;
  }

}
