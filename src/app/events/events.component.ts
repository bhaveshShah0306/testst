import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { environment } from 'src/environment/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  activeTab: string = 'upcoming';
  eventdata: any;
  baseurl: any;
  upcomingevent: any;
  eventhistory: any;
  gallerydata: any;
constructor(private service :EventserviceService ,private router :Router)
{
  this.baseurl = environment.backendAPIURL;
}

ngOnInit(): void {
  this.getevents();
  this.geteventgallery();
}
getevents(){
  debugger;
  this.service.getevents().subscribe(apidata=>{
    this.eventdata = apidata.data;
    this.upcomingevent = this.eventdata.filter((c:any) => new Date(c.eventEndDatetime) > new Date());
    this.eventhistory = this.eventdata.filter((c:any) => new Date(c.eventEndDatetime) < new Date());
    console.log(this.eventdata,"---------------------------------events")
    console.log(this.upcomingevent,"---------------------------------upcoming")
    console.log(this.eventhistory,"---------------------------------history")
  })
}
geteventgallery(){
  debugger;
  this.service.geteventgallery().subscribe(apidata=>{
    this.gallerydata = apidata.data;
    
  })
}

encodeURIComponentMethod(value: string): string {
  return encodeURIComponent(value);
}

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  navigatetoeventdetails(id:any){
    this.router.navigateByUrl(`Eventdetails/${id}`)
  }
}
