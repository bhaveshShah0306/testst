import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CharityService } from '../charity.service';
@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit{
   studentForm!: FormGroup; 
  errorMessage: any;
  @ViewChild('fileInput') fileInput: any;

  
  constructor(private formbuilder:FormBuilder,private service:CharityService ){}
  ngOnInit(): void { 
  
     this.studentForm=this.formbuilder.group({
    // this.studentForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required, Validators.email]),
    dob:new FormControl('',Validators.required),
    mobileno:new FormControl(['',Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    aadhar:new FormControl('',Validators.required),
    ssc:new FormControl('',Validators.required),
    hsc:new FormControl('',Validators.required),
    graduation:new FormControl('',Validators.required),
    qualification:new FormControl('',Validators.required),
    proofupload:new FormControl('',Validators.required),
    course:new FormControl('',Validators.required),
     school:new FormControl('',Validators.required),
     sc_address:new FormControl('',Validators.required),
     grant_period:new FormControl('',Validators.required),
    clg_fee:new FormControl('',Validators.required),
    father_name:new FormControl('',Validators.required),
    father_number:new FormControl('',Validators.required),
    father_aadhar:new FormControl('',Validators.required),
    father_occupation:new FormControl('',Validators.required),
    father_incomeproof:new FormControl('',Validators.required),
    mother_name:new FormControl('',Validators.required),
    mother_number:new FormControl('',Validators.required),
    mother_aadhar:new FormControl('',Validators.required),
    mother_occupation:new FormControl('',Validators.required),
    mother_incomeproof:new FormControl('',Validators.required),
    family_income:new FormControl('',Validators.required),
    postal_addr:new FormControl('',Validators.required),
    dependents:new FormControl('',Validators.required), 
    association:new FormControl('',Validators.required),
    organization:new FormControl('',Validators.required),
    ref_mobile1:new FormControl(['',Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    ref_address1:new FormControl('',Validators.required),
    ref_name1:new FormControl('',Validators.required),
    ref_mobile2:new FormControl(['',Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    ref_address2:new FormControl('',Validators.required),
    ref_name2:new FormControl('',Validators.required),
    acc_details:new FormControl('',Validators.required),
    clg_accountdetails:new FormControl('',Validators.required),
    clg_name:new FormControl('',Validators.required),
    clg_address:new FormControl('',Validators.required),
    clg_contactno:new FormControl('',Validators.required)
    })
  }
   onSubmit() {
    
        if(this.studentForm.valid){
          // console.log('Form submitted:', this.studentForm.value);

           this.service.postcharity(this.studentForm.value).subscribe(res=>{ console.log(res)})
          //  this.studentForm.reset();
        }else{
          console.log("form is invalid");
        }
    }
    stopPropagation(event: Event): void {
      event.stopPropagation();
  }
  
  handleFileInput(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      console.log('Selected file:', file);
      // You can handle the selected file here, such as uploading it to a server.
    }
  }
}
