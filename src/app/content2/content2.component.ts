import { Component } from '@angular/core';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component {
  showAdditionalContent: boolean = false;
  AdditionalContent: boolean = false;
  AdditionalContent1: boolean = false;
  AdditionalContent2: boolean = false;
  toggleContent(): void {
    this.showAdditionalContent = !this.showAdditionalContent;
  }

  toggle(): void {
    this.AdditionalContent = !this.AdditionalContent;
  }
  toggle1(): void {
    this.AdditionalContent1 = !this.AdditionalContent1;
  }
  toggle2(): void {
    this.AdditionalContent2 = !this.AdditionalContent2;
  }
}
