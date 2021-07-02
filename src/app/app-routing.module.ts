import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/home.component';
import { InfraStructureComponent } from './infra-structure/infra-structure.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'getstarted',component:GetStartedComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'activities',component:ActivitiesComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'clubs',component:ClubsComponent},
  {path:'rules',component:RulesComponent},
  {path:'infrastructure' ,component:InfraStructureComponent},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
