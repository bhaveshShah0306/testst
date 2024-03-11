import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted: boolean = false;
   constructor(private formBuilder:FormBuilder,private service:ContactService){}
  ngOnInit(): void { 
    this.contactForm = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
     });
  }
  get formValidation() {
    return this.contactForm.controls;
  }
 
  submit(val:any) {
    debugger;
    this.submitted=true;
    if (this.contactForm.valid) {
     // console.log('Form submitted:', this.contactForm.value);
      this.service.SaveContactUsData(this.contactForm.value);
      this.contactForm.reset();
    };
  } 

  
}
