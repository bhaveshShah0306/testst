import { Component } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { environment } from 'src/environment/environment';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component {
  baseurl: string;
  eventdata: any;

  constructor(private service :EventserviceService , private router : Router)
{
  this.baseurl = environment.backendAPIURL;
}
  ngOnInit(): void {
    // // Initialize the carousel and set the interval
    // var myCarousel = document.getElementById('demo');
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //   interval: 3000 // Set the interval to 3 seconds (2000 milliseconds)
    // });
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

  getevents(){
    debugger;
    this.service.getevents().subscribe(apidata=>{
      this.eventdata = apidata.data;
    })
  }

  encodeURIComponentMethod(value: string): string {
    return encodeURIComponent(value);
 }
 onclickmembership(){
this.router.navigateByUrl("/Membership")
 }
}
