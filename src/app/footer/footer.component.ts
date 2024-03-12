import { Component } from '@angular/core';
import { EmailService } from '../email.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string='';
 
  constructor(private emailservice: EmailService) { }

  onSubmitEmail(): void {
    console.log(this.email);
    debugger;
      const emailobj = { email: this.email };
        this.emailservice.SaveEmail(emailobj)
        
         this.email = '';      
       }
  }

