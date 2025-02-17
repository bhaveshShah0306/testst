import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityComponent } from './charity/charity.component';
import { ServicesComponent } from './services/services.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { BecomememberComponent } from './becomemember/becomemember.component';  
import { LoginModule } from './login/login.module';
import {LayoutcomponentComponent} from './layoutcomponent/layoutcomponent.component'
import { Content2Component } from './content2/content2.component';
import { SponsorShipComponent } from './sponsor-ship/sponsor-ship.component';
import { EventsComponent } from './events/events.component';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ReturnpolicyComponent } from './returnpolicy/returnpolicy.component';
import { HeaderSampleComponent } from './header-sample/header-sample.component';
const routes: Routes = [
  {path:'', 
  component:LayoutcomponentComponent,
   children:[ 
    { path:'', redirectTo:'Home', pathMatch:'full'},
    { path:'Home', component: Content2Component},
    { path:'ApplicationForm', component: CharityComponent},
    { path:'Membership', component: CareerComponent},
    {path:'Contact',component:ContactComponent},
    {path:'Sponsorship',component:SponsorShipComponent},
    {path:'Events',component:EventsComponent},
    {path:'Eventdetails/:id',component:EventdetailsComponent},
      // {path:'Membership',component:BecomememberComponent},
    {path:'Termsandconditions',component:TermsandconditionsComponent},
    {path:'Privacypolicy',component:PrivacypolicyComponent},
    {path:'Returnpolicy',component:ReturnpolicyComponent},
    {path:'donation',component:HeaderSampleComponent},
      ]
    },
    
     //  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [LoginModule ,RouterModule.forRoot(routes, {
    useHash: true ,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
