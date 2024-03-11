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
const routes: Routes = [
  {path:'', 
  component:LayoutcomponentComponent,
   children:[ 
    { path:'', redirectTo:'content2', pathMatch:'full'},
    { path:'content2', component: Content2Component},
    { path:'charity', component: CharityComponent},
    { path:'career', component: CareerComponent},
    {path:'contact',component:ContactComponent},
    {path:'becomemember',component:BecomememberComponent},
      ]
    },
    
       { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
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
