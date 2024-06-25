import { Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { MembershipService } from '../membership.service';


@Component({
  selector: 'app-sponsor-ship',
  templateUrl: './sponsor-ship.component.html',
  styleUrl: './sponsor-ship.component.css'
})
export class SponsorShipComponent {
  submitted: boolean = false;
  sponsorship!: FormGroup;
  constructor(private formBuilder:FormBuilder,private service:MembershipService){}
 ngOnInit(): void { 
   this.sponsorship = this.formBuilder.group({
     name: ['',[Validators.required]],
     dob: ['',[Validators.required]],
     address: ['',[Validators.required]],
     contact: ['',[Validators.required]],
     pan: ['',[Validators.required]],
     aadhar: ['',[Validators.required]]
    });
 }
 get formValidation() {
   return this.sponsorship.controls;
 }


 onsubmit(val:any) {
   debugger;
   this.submitted=true;
   if (this.sponsorship.valid) {

     var obj={
      sponsershipId:0,
       name:val.name,
       dob:val.dob,
       address:val.address,
       contact:val.contact,
       pan:val.pan,
       aadhar:val.aadhar,
     }
     
    // console.log('Form submitted:', this.sponsorship.value);
     this.service.postdatasponsor(obj).subscribe(apidata=>{
       window.alert("Form Submitted Success");
       this.sponsorship.reset();
     })
   }
   else{
    this.sponsorship.markAsTouched;
   }
 } 

 limitDigits(event: Event,num:any,flag:any): void {
  debugger;
  const input = event.target as HTMLInputElement;
  let value = input.value;

  // Remove non-numeric characters
  value = value.replace(/\D/g, '');

  // Limit to 10 digits
  const limitedValue = value.slice(0, num);
  if(flag==1){

    this.sponsorship.controls['contact'].setValue(limitedValue);
  }
  if(flag==2){
    
    Object.keys(this.sponsorship.controls).forEach(field => {
      const control = this.sponsorship.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
  // Update input value using square brackets
}
}
