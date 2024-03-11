import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = '';
 
  constructor(private service: EmailService) { }

  onSubmitEmail(): void {
    console.log(this.email);
    this.email = '';
    // if (this.email) {
    //   this.service.SaveEmail(this.email).subscribe(
    //     response => {
    //       console.log('Email sent successfully!', response);      
    //       this.email = '';// Optionally, reset the form after successful submission         
    //     },
    //     // error => {
    //     //   console.error('Failed to send email:', error);
    //     // }
    //   );
    // }
  }
}
