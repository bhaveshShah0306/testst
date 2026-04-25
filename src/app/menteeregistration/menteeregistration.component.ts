import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenteeService } from '../mentee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menteeregistration',
  templateUrl: './menteeregistration.component.html',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  styleUrl: './menteeregistration.component.css'
})
export class MenteeregistrationComponent implements OnInit {
  menteeForm!: FormGroup;
  submitted = false;
  maxDate: string;
 
  presentStatusOptions = [
    { value: 'Employed', label: 'Employed / नौकरी पेशा' },
    { value: 'Student', label: 'Student / छात्र' },
    { value: 'Homemaker', label: 'Homemaker / गृहिणी' },
    { value: 'Entrepreneur', label: 'Entrepreneur / उद्यमी' },
    { value: 'Job Aspirant', label: 'Job Aspirant / नौकरी की तलाश में' },
    { value: 'Other', label: 'Any other / अन्य' }
  ];
 
  constructor(
    private fb: FormBuilder,
    private mentee: MenteeService,
    private snackBar : MatSnackBar
  ) {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
  }
 
  ngOnInit(): void {
    this.initializeForm();
    this.setupConditionalValidation();
  }
 
  initializeForm(): void {
    this.menteeForm = this.fb.group({
      // Basic Information
      name: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      currentAge: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      gender: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]],
      mobileNumber: ['', [
        Validators.required,
        Validators.pattern('^[6-9][0-9]{9}$')
      ]],
      email: ['', [Validators.required, Validators.email]],
      qualification: ['', Validators.required],
      presentStatus: ['', Validators.required],
 
      // Conditional Fields - Employed
      employedPosition: [''],
      employedCompany: [''],
 
      // Conditional Fields - Student
      studentCourse: [''],
      studentDuration: [''],
      studentCollege: [''],
 
      // Conditional Fields - Entrepreneur
      businessName: [''],
      businessNature: [''],
      businessAddress: [''],
      businessContact: [''],
      businessEmail: [''],
 
      // Conditional Fields - Homemaker
      homemakerPursuingCourse: [''],
      homemakerCourseName: [''],
      homemakerCourseDuration: [''],
 
      // Parent Information - Father
      fatherName: ['', Validators.required],
      fatherAge: ['', Validators.max(120)],
      fatherQualification: [''],
      fatherOccupation: [''],
      fatherIncome: [''],
      fatherMobile: ['', [Validators.pattern('^[6-9][0-9]{9}$')
      ]],
 
      // Parent Information - Mother
      motherName: ['', Validators.required],
      motherAge: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      motherQualification: ['', Validators.required],
      motherOccupation: ['', Validators.required],
      motherIncome: ['', [Validators.required, Validators.min(0)]],
      motherMobile: ['', [
        Validators.required,
        Validators.pattern('^[6-9][0-9]{9}$')
      ]],
 
      // Purpose
      purpose: ['', [
        Validators.required,
        Validators.maxLength(500),
        this.wordCountValidator(100)
      ]]
    });
 
    this.menteeForm.get('dateOfBirth')?.valueChanges.subscribe(dob => {
      if (dob) {
        const age = this.calculateAge(dob);
        this.menteeForm.patchValue({ currentAge: age }, { emitEvent: false });
      }
    });
  }
 
  setupConditionalValidation(): void {
    this.menteeForm.get('presentStatus')?.valueChanges.subscribe(status => {
      this.clearConditionalValidators();
      
      switch(status) {
        case 'Employed':
          this.setEmployedValidators();
          break;
        case 'Student':
          this.setStudentValidators();
          break;
        case 'Entrepreneur':
          this.setEntrepreneurValidators();
          break;
        case 'Homemaker':
          this.setHomemakerValidators();
          break;
      }
    });
  }
 
  clearConditionalValidators(): void {
    const conditionalFields = [
      'employedPosition', 'employedCompany',
      'studentCourse', 'studentDuration', 'studentCollege',
      'businessName', 'businessNature', 'businessAddress', 'businessContact', 'businessEmail',
      'homemakerPursuingCourse', 'homemakerCourseName', 'homemakerCourseDuration'
    ];
 
    conditionalFields.forEach(field => {
      this.menteeForm.get(field)?.clearValidators();
      this.menteeForm.get(field)?.setValue('');
      this.menteeForm.get(field)?.updateValueAndValidity();
    });
  }
 
  setEmployedValidators(): void {
    this.menteeForm.get('employedPosition')?.setValidators([Validators.required]);
    this.menteeForm.get('employedCompany')?.setValidators([Validators.required]);
    this.menteeForm.get('employedPosition')?.updateValueAndValidity();
    this.menteeForm.get('employedCompany')?.updateValueAndValidity();
  }
 
  setStudentValidators(): void {
    this.menteeForm.get('studentCourse')?.setValidators([Validators.required]);
    this.menteeForm.get('studentDuration')?.setValidators([Validators.required]);
    this.menteeForm.get('studentCollege')?.setValidators([Validators.required]);
    this.menteeForm.get('studentCourse')?.updateValueAndValidity();
    this.menteeForm.get('studentDuration')?.updateValueAndValidity();
    this.menteeForm.get('studentCollege')?.updateValueAndValidity();
  }
 
  setEntrepreneurValidators(): void {
    this.menteeForm.get('businessName')?.setValidators([Validators.required]);
    this.menteeForm.get('businessNature')?.setValidators([Validators.required]);
    this.menteeForm.get('businessAddress')?.setValidators([Validators.required]);
    this.menteeForm.get('businessContact')?.setValidators([
      Validators.required,
      Validators.pattern('^[6-9][0-9]{9}$')
    ]);
    this.menteeForm.get('businessEmail')?.setValidators([Validators.required, Validators.email]);
    
    this.menteeForm.get('businessName')?.updateValueAndValidity();
    this.menteeForm.get('businessNature')?.updateValueAndValidity();
    this.menteeForm.get('businessAddress')?.updateValueAndValidity();
    this.menteeForm.get('businessContact')?.updateValueAndValidity();
    this.menteeForm.get('businessEmail')?.updateValueAndValidity();
  }
 
  setHomemakerValidators(): void {
    this.menteeForm.get('homemakerPursuingCourse')?.setValidators([Validators.required]);
    this.menteeForm.get('homemakerPursuingCourse')?.updateValueAndValidity();
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
    return this.menteeForm.controls;
  }
 
  getWordCount(text: string): number {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }
 
  isPursuingCourse(): boolean {
    return this.menteeForm.get('homemakerPursuingCourse')?.value === 'Yes';
  }
 
  showEmployedFields(): boolean {
    return this.menteeForm.get('presentStatus')?.value === 'Employed';
  }
 
  showStudentFields(): boolean {
    return this.menteeForm.get('presentStatus')?.value === 'Student';
  }
 
  showEntrepreneurFields(): boolean {
    return this.menteeForm.get('presentStatus')?.value === 'Entrepreneur';
  }
 
  showHomemakerFields(): boolean {
    return this.menteeForm.get('presentStatus')?.value === 'Homemaker';
  }
 
  onHomemakerCourseChange(): void {
    const pursuingCourse = this.menteeForm.get('homemakerPursuingCourse')?.value;
    
    if (pursuingCourse === 'Yes') {
      this.menteeForm.get('homemakerCourseName')?.setValidators([Validators.required]);
      this.menteeForm.get('homemakerCourseDuration')?.setValidators([Validators.required]);
    } else {
      this.menteeForm.get('homemakerCourseName')?.clearValidators();
      this.menteeForm.get('homemakerCourseDuration')?.clearValidators();
      this.menteeForm.get('homemakerCourseName')?.setValue('');
      this.menteeForm.get('homemakerCourseDuration')?.setValue('');
    }
    
    this.menteeForm.get('homemakerCourseName')?.updateValueAndValidity();
    this.menteeForm.get('homemakerCourseDuration')?.updateValueAndValidity();
  }
 
  onSubmit(): void {
    this.submitted = true;
 
    if (this.menteeForm.invalid) {
      Object.keys(this.menteeForm.controls).forEach(key => {
        this.menteeForm.get(key)?.markAsTouched();
      });
      
      const firstError = document.querySelector('.is-invalid');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }    

  const formData = { ...this.menteeForm.value };
  
  // Convert all empty strings to 'N/A'
const numericFields = [
    'currentAge', 'fatherAge', 'motherAge', 
    'fatherIncome', 'motherIncome',
    
    'businessContact', 'businessEmail' // have  conditional validation
  ];
    
  
  // Convert empty strings to 'N/A' for STRING fields only
  // Leave null for numeric fields
  Object.keys(formData).forEach(key => {
    const value = formData[key];
    const isEmpty = value === '' || value === null || value === undefined;
    
   if (isEmpty) {
      if (numericFields.includes(key) ) {
        formData[key] = null; // Keep as null
      } else {
        formData[key] = 'N/A'; // Convert to N/A for display fields
      }
    }
  });

    // console.log('Mentee Registration Data:', formData);
 
    // console.log('Sending Data:', formData);
    
    this.mentee.registerMentee(formData).subscribe({
    next: (res) => {
      console.log('API Response:', res);
      
      debugger;

      
      this.menteeForm.reset();
      this.submitted = false;
    },
    error: (err) => {
      console.error('Error:', err);
      // alert('Something went wrong!');
      this.snackBar.open('Error posting data.', 'Close', {
          duration: 3000,
        });
    }
  });
    
  }
 
  onReset(): void {
    this.submitted = false;
    this.menteeForm.reset();
  }
}
