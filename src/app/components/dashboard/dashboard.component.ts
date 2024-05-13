import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myDate = new Date();
  dayName = this.datePipe.transform(this.myDate, 'EEEE');

  initialItemsToShow = 5;
  itemsToShow = this.initialItemsToShow;

  dashBoardData = {
    date: new Date(),
    day: this.dayName,
    totalLiveJobs: [
      {position: "Frontend Developer"},
      {position: "Android Developer"}
    ],
    totalApplicant: 74,
    lastWeekCount: 25,
    matchedApplicants: [
      {name: "Fayez Hasan", img: "./assets/user1.jpg"},
      {name: "Shojib Ahmed", img: "./assets/user2.jpg"},
      {name: "Tamanna Islam", img: "./assets/user3.jpg"},
      {name: "Arshad Khan", img: "./assets/user4.jpeg"},
      {name: "Abid Hasan", img: "./assets/user5.jpg"},
      {name: "John Doe", img: "./assets/user6.jpg"},
      {name: "Kelly Anderson", img: "./assets/user7.jpg"},
      {name: "John Wick", img: "./assets/user8.jpeg"},
      {name: "Henry Cavil", img: "./assets/henry.jpeg"},
      {name: "David Conwest", img: "./assets/david.webp"},
      {name: "Tom Cruise", img: "./assets/tom.jpg"},
    ]
  }

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  showMore() {
    this.itemsToShow += this.initialItemsToShow;
  }

}
