import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CharityService } from '../charity.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent {
  studentForm : any;
//   new FormGroup({
// studentApplicationsId:new FormControl(''),
// studentName:new FormControl(''),
// email:new FormControl(''),
// dob:new FormControl(''),
// mobile:new FormControl(''),
// adhaarCard:new FormControl(''),
// studentQualificationDetailsId:new FormControl(''),
// ssccgpa:new FormControl(''),
// hsccgpa:new FormControl(''),
// granduationCGPA:new FormControl(''),
// otherGraduation:new FormControl(''),
// granduationproofs:new FormControl(''),
// otherCGPA:new FormControl(''),
// appliedFor:new FormControl(''),
// collegeName:new FormControl(''),
// annualFee:new FormControl(''),
// studentAccountDetails:new FormControl(''),
// collegeDetails:new FormControl(''),
// collegeAccountDetails:new FormControl(''),
// collegeType:new FormControl(''),
// collegeWebsite:new FormControl(''),
// collegeMail:new FormControl(''),
// collegeContact:new FormControl(''),
// periodForRequiredGrant:new FormControl(''),
// familyDetailsId:new FormControl(''),
// fatherName:new FormControl(''),
// fatherNumber:new FormControl(''),
// adhaarNumber:new FormControl(''),
// fatherOccupation:new FormControl(''),
// proofofincome:new FormControl(''),
// motherName:new FormControl(''),
// motherNumber:new FormControl(''),
// motherAdhaarNumber:new FormControl(''),
// motherOccupation:new FormControl(''),
// motherProofOfIncome:new FormControl(''),
// familyAnnualIncome:new FormControl(''),
// pincode:new FormControl(''),
// dependentsInTheFamily:new FormControl(''),
// isConnectedToPrajapathiCommunity:new FormControl(''),
// refer1:new FormControl(''),
// refer1Contact:new FormControl(''),
// refer1Address:new FormControl(''),
// refer2:new FormControl(''),
// refer2Contact:new FormControl(''),
// refer2Address:new FormControl(''),
//   });
  fileName: { [key: string]: string } = {};
  inputadhaarCard: boolean=false;
  inputgranduationproofs: boolean=false;
  inputadhaarNumber : boolean=false ;
  inputproofofincome: boolean=false ;
  inputmotherAdhaarNumber:boolean=false;
  inputmotherProofOfIncome: boolean=false;
  inputstudentAccountDetails:boolean=false;
  constructor(private formBuilder: FormBuilder, private charity :CharityService,private snackBar: MatSnackBar) {}
  
  ngOnInit(): void { 
    this.studentForm = this.formBuilder.group({
      studentApplicationsId: [''],
      studentName: ['', Validators.required],
      email: ['', Validators.required ] ,
      dob: ['', Validators.required],
      mobile: ['', Validators.required ],
      adhaarCard: ['', Validators.required],
      studentQualificationDetailsId: [''],
      ssccgpa: ['', Validators.required],
      hsccgpa: ['', Validators.required],
      granduationCGPA: ['', Validators.required],
      // otherGraduation: ['', Validators.required],
      granduationproofs: ['', Validators.required],
      otherCGPA: ['', Validators.required],
      appliedFor: ['', Validators.required],
      collegeName: ['', Validators.required],
      annualFee: ['', Validators.required],
      studentAccountDetails: ['', Validators.required],
      collegeDetails: ['', Validators.required],
      collegeMail: ['', Validators.required],
      collegeType: ['', Validators.required],
      collegeWebsite: ['', Validators.required],
      collegeAccountDetails: ['', Validators.required],
      collegeContact: ['', Validators.required],
      periodForRequiredGrant: ['', Validators.required],
      familyDetailsId: [''],
      fatherName: ['', Validators.required],
      fatherNumber: ['', Validators.required ],
      adhaarNumber: ['', Validators.required],
      fatherOccupation: ['', Validators.required],
      proofofincome: ['', Validators.required],
      motherName: ['', Validators.required],
      motherNumber: ['', Validators.required],
      motherAdhaarNumber: ['', Validators.required],
      motherOccupation: ['', Validators.required],
      motherProofOfIncome: ['', Validators.required],
      familyAnnualIncome: ['', Validators.required],
      pincode: ['', Validators.required],
      dependentsInTheFamily: ['', Validators.required],
      isConnectedToPrajapathiCommunity: ['', Validators.required],
      refer1: [''],
      refer1Contact: [''],
      refer1Address: [''],
      refer2: [''],
      refer2Contact: [''],
      refer2Address: [''],
    })
    
    // this.studentForm = this.formBuilder.group({
    //   studentApplicationsId: [''],
    //   studentName: ['', Validators.required],
    //   email: ['', Validators.required , Validators.email] ,
    //   dob: ['', Validators.required],
    //   mobile: ['', Validators.required ],
    //   adhaarCard: [''],
    //   studentQualificationDetailsId: [''],
    //   ssccgpa: ['', Validators.required],
    //   hsccgpa: ['', Validators.required],
    //   granduationCGPA: ['', Validators.required],
    //   otherGraduation: [''],
    //   granduationproofs: [''],
    //   otherCGPA: ['', Validators.required],
    //   appliedFor: ['', Validators.required],
    //   collegeName: ['', Validators.required],
    //   annualFee: ['', Validators.required],
    //   studentAccountDetails: [''],
    //   collegeDetails: ['', Validators.required],
    //   collegeAccountDetails: ['', Validators.required],
    //   collegeContact: ['', Validators.required],
    //   periodForRequiredGrant: ['', Validators.required],
    //   familyDetailsId: [''],
    //   fatherName: ['', Validators.required],
    //   fatherNumber: ['', Validators.required ],
    //   adhaarNumber: [''],
    //   fatherOccupation: ['', Validators.required],
    //   proofofincome: [''],
    //   motherName: ['', Validators.required],
    //   motherNumber: ['', Validators.required],
    //   motherAdhaarNumber: [''],
    //   motherOccupation: ['', Validators.required],
    //   motherProofOfIncome: [''],
    //   familyAnnualIncome: ['', Validators.required],
    //   pincode: ['', Validators.required],
    //   dependentsInTheFamily: ['', Validators.required],
    //   isConnectedToPrajapathiCommunity: ['', Validators.required],
    //   refer1: [''],
    //   refer1Contact: [''],
    //   refer1Address: [''],
    //   refer2: [''],
    //   refer2Contact: [''],
    //   refer2Address: [''],
    // })
    
}
  onAssociationChange() {
    debugger; 

    const connectedToCommunityControl = this.studentForm.get('isConnectedToPrajapathiCommunity');
    const controlsToValidate = ['refer1', 'refer1Contact', 'refer1Address', 'refer2', 'refer2Contact', 'refer2Address'];
  
    for (const controlName of controlsToValidate) {
      const control = this.studentForm.get(controlName);
      if (connectedToCommunityControl?.value === 'yes') {
        control?.setValidators([Validators.required]);
        control?.markAsUntouched();
       
      } else {
        control?.clearValidators();
        control?.patchValue('')
      }
      control?.updateValueAndValidity();
      
    }
  } 
  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }
  handleFileInput(event: any, controlName: string) {
   debugger;
    console.log(controlName)
    const control = this.studentForm.get(controlName);
        if (control) {
          control.markAsTouched();
          
        } 
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
   onMobileInput(event: any) {
    const input = event.target.value; 
    
    const numericInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters

    this.studentForm.controls['mobile'].setValue(numericInput);
  }
  onMobileInput1(event: any) {
    const input = event.target.value; 
    
    const numericInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters

    this.studentForm.controls['fatherNumber'].setValue(numericInput);
  }  
  onMobileInputFamily(event:any){
    const input = event.target.value;
    
    const numericInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  
    this.studentForm.controls['dependentsInTheFamily'].setValue(numericInput);
  }  

   onMobileInput2(event:any){
  const input = event.target.value;
  
  const numericInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters

  this.studentForm.controls['motherNumber'].setValue(numericInput);
}  
onMobileInput4(event:any){
  const input = event.target.value;
  
  const numericInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters

  this.studentForm.controls['refer1Contact'].setValue(numericInput);
}
onMobileInput5(event:any){
  const input = event.target.value;
 
  const numericInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters

  this.studentForm.controls['refer2Contact'].setValue(numericInput);
}
onMobileInput6(event:any){
  const input = event.target.value;
 
  const numericInput = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters

  this.studentForm.controls['collegeContact'].setValue(numericInput);
}
  
 onSubmit() {
  debugger;
   if(!this.studentForm.valid){
    this.studentForm.markAllAsTouched();
  }
 
  

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
        collegeType:value.collegeType,
        collegeWebsite:value.collegeWebsite,
        collegeMail:value.collegeMail,
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
      console.log(obj)
      this.charity.postcharity(obj).subscribe(apidata=>{
        debugger;
        var res = apidata;
        if (apidata.data != null) {
          // Show toast message
       window.alert("Application submitted successfully")
       this.studentForm.reset();  
       this.fileName['adhaarCard']=''
       this.fileName['granduationproofs']=''
       this.fileName['adhaarNumber']=''
       this.fileName['proofofincome']=''
       this.fileName['motherAdhaarNumber']=''
       this.fileName['motherProofOfIncome']=''
       this.fileName['studentAccountDetails']=''
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
 
}
}