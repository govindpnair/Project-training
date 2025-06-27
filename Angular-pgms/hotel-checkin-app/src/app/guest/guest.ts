import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Traveller {
  name: string;
  roomNumber: number;
}

@Component({
  selector: 'app-guest',
  imports: [CommonModule, FormsModule],
  templateUrl: './guest.html',
  styleUrl: './guest.css'
})
export class Guest {
  guests: Traveller[] = [];
  newGuest: Traveller = {name: '', roomNumber:0}

   ngOnInit(): void {
    this.loadGuests();
  }

   checkIn() {
    if (this.newGuest.name.trim() && this.newGuest.roomNumber > 0) {
      this.guests.push({ ...this.newGuest });
      this.newGuest = { name: '', roomNumber: 0 };
      this.saveGuests();
    }
  }

  checkOut(index: number) {
    this.guests.splice(index, 1);
    this.saveGuests();
  }

 private saveGuests(): void {
    localStorage.setItem('guestList', JSON.stringify(this.guests));
  }

  private loadGuests(): void {
    const saved = localStorage.getItem('guestList');
    if (saved) {
      this.guests = JSON.parse(saved);
    }
  }

}
