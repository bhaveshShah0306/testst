import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header-sample',
  templateUrl: './header-sample.component.html',
  styleUrl: './header-sample.component.css'
})
export class HeaderSampleComponent {

  donationForm: FormGroup;
  selectedAmount: number | null = null;
  minAmount = 1000;
  fixedAmounts: number[] = [1000, 5000, 10000, 20000, 50000, 100000];

  // Payment methods
  paymentMethods = [
    { id: 'upi', label: 'UPI', description: 'Pay by any UPI app' },
    { id: 'card', label: 'Credit / Debit / ATM Card', description: 'Add and secure cards as per RBI guidelines' },
    { id: 'netbanking', label: 'Net Banking', description: 'This instrument has low success, use UPI or cards for better experience' },
    { id: 'qr', label: 'Scan QR Code', description: 'This instrument has low success, use UPI or cards for better experience' }
  ];
  constructor(private fb: FormBuilder) {
    this.donationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: [''],
      customAmount: ['', [Validators.min(this.minAmount)]],
      paymentMethod: ['', Validators.required]
    });
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.donationForm.patchValue({ customAmount: '' });
  }

  proceedToPay() {
    if (this.donationForm.valid) {
      console.log('Form Submitted', this.donationForm.value);
    }
  }
}

