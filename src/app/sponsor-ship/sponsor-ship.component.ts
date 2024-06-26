import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MembershipService } from '../membership.service';

@Component({
  selector: 'app-sponsor-ship',
  templateUrl: './sponsor-ship.component.html',
  styleUrls: ['./sponsor-ship.component.css']
})
export class SponsorShipComponent {
  submitted: boolean = false;
  sponsorship!: FormGroup;
  checkbox1: boolean = false;
  checkbox2: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: MembershipService) {}

  ngOnInit(): void {
    this.sponsorship = this.formBuilder.group({
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      pan: ['', [Validators.required]],
      aadhar: ['', [Validators.required]],
      preferredState: ['']
    });
  }

  get formValidation() {
    return this.sponsorship.controls;
  }

  checked1(e: any) {
    this.checkbox1 = e.target.checked;
  }

  checked2(e: any) {
    this.checkbox2 = e.target.checked;
  }

  uncheckCheckboxes(): void {
    this.checkbox1 = false;
    this.checkbox2 = false;
  }

  onsubmit(val: any) {
    this.submitted = true;
    if (this.sponsorship.valid && this.checkbox1 && this.checkbox2) {
      const obj = {
        sponsershipId: 0,
        name: val.name,
        dob: val.dob,
        address: val.address,
        contact: val.contact,
        pan: val.pan,
        aadhar: val.aadhar,
        preferredState: val.preferredState
      };

      this.service.postdatasponsor(obj).subscribe(apidata => {
        window.alert("Form Submitted Successfully");
        this.sponsorship.reset();
        window.location.reload();
        this.submitted = false; // Reset submission flag after successful submission
      });
    } else {
      // Mark all form controls as touched to trigger validation messages
      Object.values(this.sponsorship.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  limitDigits(event: Event, num: number, flag: number): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Remove non-numeric characters
    value = value.replace(/\D/g, '');

    // Limit to specified number of digits
    const limitedValue = value.slice(0, num);

    // Update input value based on flag
    if (flag === 1) {
      this.sponsorship.controls['contact'].setValue(limitedValue);
    } else if (flag === 2) {
      this.sponsorship.controls['aadhar'].setValue(limitedValue);
    }
  }
}
