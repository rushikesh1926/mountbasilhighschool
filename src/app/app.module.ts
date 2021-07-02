import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ClubsComponent } from './clubs/clubs.component';
import { RulesComponent } from './rules/rules.component';
import { InfraStructureComponent } from './infra-structure/infra-structure.component';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    AboutUsComponent,
    ActivitiesComponent,
    ContactUsComponent,
    ClubsComponent,
    RulesComponent,
    InfraStructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
