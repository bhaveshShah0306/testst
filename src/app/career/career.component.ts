import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { MembershipService } from '../membership.service';


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  membership!: FormGroup;
  constructor(private fb:FormBuilder,private service:MembershipService){
  
  }
  ngOnInit(): void { 
  this.membership= this.fb.group({
    becomeamemberId:[''],
    name:[''],
    mobile:[''],
    email:[''],
    address:[''],
    city:[''],
    country:['']
  })
  }
onsubmit(val:any){
  debugger;

  var obj={
    becomeamemberId:0,
    name:val.name,
    mobile:val.mobile,
    email:val.email,
    address:val.address,
    city:val.city,
    country:val.country,
  }
 this.service.postdata(obj).subscribe(apidata=>{
  window.alert("form submitted successfully")
  this.membership.reset();
 })
}


}
