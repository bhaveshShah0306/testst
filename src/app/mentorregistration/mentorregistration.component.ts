import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-mentorregistration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './mentorregistration.component.html',
  styleUrls: ['./mentorregistration.component.css']
})
export class MentorregistrationComponent implements OnInit {
  mentorForm!: FormGroup;
  submitted = false;
  maxDate: string;
 
  constructor(
    private fb: FormBuilder,
  ) {
    // Set max date to today for date of birth
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
  }
 
  ngOnInit(): void {
    this.initializeForm();
  }
 
  initializeForm(): void {
    this.mentorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      currentAge: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      gender: ['', Validators.required],
      qualification: ['', Validators.required],
      presentOccupation: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]],
      mobileNumber: ['', [
        Validators.required,
        Validators.pattern('^[6-9][0-9]{9}$')
      ]],
      email: ['', [Validators.required, Validators.email]],
      introduction: ['', [
        Validators.required,
        Validators.maxLength(500),
        this.wordCountValidator(100)
      ]],
      mentorField: ['', Validators.required]
    });
 
    // Auto-calculate age when date of birth changes
    this.mentorForm.get('dateOfBirth')?.valueChanges.subscribe(dob => {
      if (dob) {
        const age = this.calculateAge(dob);
        this.mentorForm.patchValue({ currentAge: age }, { emitEvent: false });
      }
    });
  }
 
  calculateAge(dateOfBirth: string): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }
 
  wordCountValidator(maxWords: number) {
    return (control: any) => {
      if (!control.value) {
        return null;
      }
      const wordCount = control.value.trim().split(/\s+/).length;
      return wordCount > maxWords ? { maxWords: { value: wordCount, max: maxWords } } : null;
    };
  }
 
  get f() {
    return this.mentorForm.controls;
  }
 
  getWordCount(text: string): number {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }
 
  onSubmit(): void {
    this.submitted = true;
 
    if (this.mentorForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.mentorForm.controls).forEach(key => {
        this.mentorForm.get(key)?.markAsTouched();
      });
      
      // Scroll to first error
      const firstError = document.querySelector('.is-invalid');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
 
    // Process form submission
    console.log('Mentor Registration Data:', this.mentorForm.value);
    
    // Here you would typically send the data to your backend service
    // this.mentorService.registerMentor(this.mentorForm.value).subscribe(...)
    
    this.mentorForm.reset();
    this.submitted = false;
  }
 
  onReset(): void {
    this.submitted = false;
    this.mentorForm.reset();
  }
}
