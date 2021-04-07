import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addCount(pInt: number): void {
    this.count += pInt;
    if (this.count != Math.round(this.count)) {
      this.count *= Math.pow(10, 6);
      this.count = Math.round(this.count);
      this.count /= Math.pow(10, 6);
    }
  }
  multCount(pInt: number): void {
    this.count *= pInt;
    if (this.count != Math.round(this.count)) {
      this.count *= Math.pow(10, 6);
      this.count = Math.round(this.count);
      this.count /= Math.pow(10, 6);
    }
  }
  resetCount(): void {
    this.count = 0;
  }
}
