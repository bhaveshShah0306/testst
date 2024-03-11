import { Component } from '@angular/core';

@Component({
  selector: 'app-becomemember',
  templateUrl: './becomemember.component.html',
  styleUrls: ['./becomemember.component.css']
})
export class BecomememberComponent {
  locationdropdownOpen: boolean = false;
  educationdropdownOpen:boolean =false;
  states: string[] = ['Hyderabad', 'New Delhi', 'bengaluru', 'Mumbai','Pune']; 
  education:string[]=['Any Postgraduate,M.Tech,MCA,Ms/M.Sc(Science),M.Com, Diploma, B.Tech/BE'];
  constructor() { }

  ngOnInit(): void {}
  toggleLocationDropdown(): void {
    this.locationdropdownOpen = !this.locationdropdownOpen;
    if (this.locationdropdownOpen) {
      this.educationdropdownOpen = false;
    }

  }
  toggleEducationDropdown(): void {
    this.educationdropdownOpen = !this.educationdropdownOpen;
    if (this.educationdropdownOpen) {
      this.locationdropdownOpen = false;
    }
  }

  onlocationCheckboxChange(event: any): void {
    console.log('Location',event.target.value, event.target.checked);
  }
  oneducationCheckboxChange(event: any): void {
    console.log('Education',event.target.value, event.target.checked);
  }
}
