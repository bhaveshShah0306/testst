import { Component } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component {

  constructor() { }
  ngOnInit(): void {
    // Initialize the carousel and set the interval
    var myCarousel = document.getElementById('demo');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000 // Set the interval to 2 seconds (2000 milliseconds)
    });
  }
  showAdditionalContent: boolean = false;
  AdditionalContent: boolean = false;
  AdditionalContent1: boolean = false;
  AdditionalContent2: boolean = false;
  toggleContent(): void {
    this.showAdditionalContent = !this.showAdditionalContent;
  }

  toggle(): void {
    this.AdditionalContent = !this.AdditionalContent;
  }
  toggle1(): void {
    this.AdditionalContent1 = !this.AdditionalContent1;
  }
  toggle2(): void {
    this.AdditionalContent2 = !this.AdditionalContent2;
  }
}
