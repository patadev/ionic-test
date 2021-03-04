import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Booking } from './booking.model';
import { BookingService } from './booking.servive';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private BookingService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.BookingService.bookings;
    console.log(this.loadedBookings)
  }

    onCancelBooking(offerId: string, slidingEl: IonItemSliding) {
    slidingEl.close();

    }

}
