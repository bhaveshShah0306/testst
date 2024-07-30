import { ActivatedRoute } from '@angular/router';
import { Component, OnInit,TemplateRef } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { environment } from 'src/environment/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrl: './eventdetails.component.css'
})
export class EventdetailsComponent implements OnInit{
  eventId: any;
  gallery:any;
  eventdetails: any;
  baseurl: any;
  selectedMedia: any;

  constructor(private route: ActivatedRoute,private service :EventserviceService,private sanitizer: DomSanitizer,private modalService: NgbModal) {
    this.eventId = this.route.snapshot.paramMap.get('id');
    
}

ngOnInit(): void
{
  this.baseurl = environment.backendAPIURL;
  this.geteventdetails();
}
geteventdetails(){
  this.service.geteventdetails(parseInt(this.eventId)).subscribe(apidata=>{
    this.eventdetails=apidata.data.eventdetails;
    this.gallery = apidata.data.gallery;
    console.log(this.eventdetails,"=-=-=-=-=-=-=-=-=-=-=-eventdetails")
    console.log(this.gallery,"=-=-=-=-=-=-=-=-=-=-=-gallery")
  })
}
encodeURIComponentMethod(value: string): string {
  debugger;
  return encodeURIComponent(value);
}
getSafeUrl(url: string): SafeUrl {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
openModal(content: TemplateRef<any>, item: any): void {
  this.selectedMedia = item;
  this.modalService.open(content);
}
}
