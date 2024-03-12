import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any;
   constructor(private formBuilder:FormBuilder,private loginservice:LoginService){}
   ngOnInit(): void { 
     this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
   });
   }

   Submit(data:any){
    // debugger;
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
       this.loginservice.Authenticate(credentials)
       console.log('Form submitted:', credentials);
       this.loginForm.reset();
     }else{
      console.error("error");
      
     }
   }
   
   
}
