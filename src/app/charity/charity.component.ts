import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CharityService } from '../charity.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent {
  studentForm = new FormGroup({
studentApplicationsId:new FormControl(''),
studentName:new FormControl(''),
email:new FormControl(''),
dob:new FormControl(''),
mobile:new FormControl(''),
adhaarCard:new FormControl(''),
studentQualificationDetailsId:new FormControl(''),
ssccgpa:new FormControl(''),
hsccgpa:new FormControl(''),
granduationCGPA:new FormControl(''),
otherGraduation:new FormControl(''),
granduationproofs:new FormControl(''),
otherCGPA:new FormControl(''),
appliedFor:new FormControl(''),
collegeName:new FormControl(''),
annualFee:new FormControl(''),
studentAccountDetails:new FormControl(''),
collegeDetails:new FormControl(''),
collegeAccountDetails:new FormControl(''),
collegeContact:new FormControl(''),
periodForRequiredGrant:new FormControl(''),
familyDetailsId:new FormControl(''),
fatherName:new FormControl(''),
fatherNumber:new FormControl(''),
adhaarNumber:new FormControl(''),
fatherOccupation:new FormControl(''),
proofofincome:new FormControl(''),
motherName:new FormControl(''),
motherNumber:new FormControl(''),
motherAdhaarNumber:new FormControl(''),
motherOccupation:new FormControl(''),
motherProofOfIncome:new FormControl(''),
familyAnnualIncome:new FormControl(''),
pincode:new FormControl(''),
dependentsInTheFamily:new FormControl(''),
isConnectedToPrajapathiCommunity:new FormControl(''),
refer1:new FormControl(''),
refer1Contact:new FormControl(''),
refer1Address:new FormControl(''),
refer2:new FormControl(''),
refer2Contact:new FormControl(''),
refer2Address:new FormControl(''),
  });
  fileName: { [key: string]: string } = {};
 
  constructor(private formBuilder: FormBuilder, private charity :CharityService,private snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
    
      studentApplicationsId:[''],
      studentName:[''],
      email:[''],
      dob:[''],
      mobile:[''],
      adhaarCard:[''],
      studentQualificationDetailsId:[''],
      ssccgpa:[''],
      hsccgpa:[''],
      granduationCGPA:[''],
      otherGraduation:[''],
      granduationproofs:[''],
      otherCGPA:[''],
      appliedFor:[''],
      collegeName:[''],
      annualFee:[''],
      studentAccountDetails:[''],
      collegeDetails:[''],
      collegeAccountDetails:[''],
      collegeContact:[''],
      periodForRequiredGrant:[''],
      familyDetailsId:[''],
      fatherName:[''],
      fatherNumber:[''],
      adhaarNumber:[''],
      fatherOccupation:[''],
      proofofincome:[''],
      motherName:[''],
      motherNumber:[''],
      motherAdhaarNumber:[''],
      motherOccupation:[''],
      motherProofOfIncome:[''],
      familyAnnualIncome:[''],
      pincode:[''],
      dependentsInTheFamily:[''],
      isConnectedToPrajapathiCommunity:[''],
      refer1:[''],
      refer1Contact:[''],
      refer1Address:[''],
      refer2:[''],
      refer2Contact:[''],
      refer2Address:[''],
  })}
  handleFileInput(event: any, controlName: string) {
    debugger;
    const file = event.target.files[0];
    if (file) {
       this.charity.uploadFile(file).subscribe(response => {
         const filePath = response['filePath'];
         this.fileName[controlName] = filePath;
         // Add a null check before setting the value
         const control = this.studentForm.get(controlName);
         if (control) {
           control.setValue(filePath);
         } else {
           console.error(`Form control ${controlName} not found in the form group.`);
         }
       }, error => {
         console.error('Error uploading file', error);
       });
    } else {
       this.fileName[controlName] = '';
    }
   }
   

 onSubmit() {
  debugger;
    if (this.studentForm.valid) {

      let prajapathicommunity = false; // Assuming the default value is false

      if (this.studentForm.value.isConnectedToPrajapathiCommunity === 'yes') {
       prajapathicommunity = true;
      } else {
       prajapathicommunity = false;
      }
      
      console.log(this.studentForm.value);
      var value =this.studentForm.value;
      const dobirth = value.dob ? new Date(value.dob) : null;
      var obj ={
        studentName:value.studentName,
        email:value.email,
        dob:dobirth,
        mobile:value.mobile,
        adhaarCard:value.adhaarCard,
        studentQualificationDetailsId:0,
        ssccgpa:value.ssccgpa ? parseFloat(value.ssccgpa) : 0,
        hsccgpa: value.hsccgpa ? parseFloat(value.hsccgpa) : 0,
        granduationCGPA:value.granduationCGPA? parseFloat(value.granduationCGPA) : 0,
        otherGraduation:value.otherGraduation,
        granduationproofs:value.granduationproofs,
        otherCGPA:value.otherCGPA? parseFloat(value.otherCGPA) : 0,
        appliedFor:value.appliedFor,
        collegeName:value.collegeName,
        annualFee:value.annualFee ? parseInt(value.annualFee) : 0,
        studentAccountDetails:value.studentAccountDetails,
        collegeDetails:value.collegeDetails,
        collegeAccountDetails:value.collegeAccountDetails,
        collegeContact:value.collegeContact,
        periodForRequiredGrant:value.periodForRequiredGrant ? parseInt(value.periodForRequiredGrant) : 0,
        familyDetailsId:0,
        fatherName:value.fatherName,
        fatherNumber:value.fatherNumber,
        adhaarNumber:value.adhaarNumber,
        fatherOccupation:value.fatherOccupation,
        proofofincome:value.proofofincome,
        motherName:value.motherName,
        motherNumber:value.motherNumber,
        motherAdhaarNumber:value.motherAdhaarNumber,
        motherOccupation:value.motherOccupation,
        motherProofOfIncome:value.motherProofOfIncome,
        familyAnnualIncome:value.familyAnnualIncome,
        pincode:value.pincode,
        dependentsInTheFamily:value.dependentsInTheFamily,
        isConnectedToPrajapathiCommunity:prajapathicommunity,
        refer1:value.refer1,
        refer1Contact:value.refer1Contact,
        refer1Address:value.refer1Address,
        refer2:value.refer2,
        refer2Contact:value.refer2Contact,
        refer2Address:value.refer2Address,
      }

      this.charity.postcharity(obj).subscribe(apidata=>{
        debugger;
        var res = apidata;
        if (apidata.data != null) {
          // Show toast message
       window.alert("Form added successfully")
       this.studentForm.reset();  
      }
      },
      error => {
        console.error('Error posting charity:', error);
        // Optionally, show an error toast message
        this.snackBar.open('Error posting data.', 'Close', {
          duration: 3000,
        });
      }
    );
 } else {
    console.log("Form is invalid");
 }
}
}