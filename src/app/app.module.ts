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
import { GenralInfoComponent } from './genral-info/genral-info.component';
import { DocsandinfoComponent } from './docsandinfo/docsandinfo.component';
import { ResultsComponent } from './results/results.component';
import { StaffAndInfraComponent } from './staff-and-infra/staff-and-infra.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SMCComponent } from './smc/smc.component';
import { AcademicResultComponent } from './academic-result/academic-result.component';
import { MainUpgradeComponent } from './main-upgrade/main-upgrade.component';
import { NocCertificateComponent } from './noc-certificate/noc-certificate.component';
import { RenewalCertificateComponent } from './renewal-certificate/renewal-certificate.component';
import { RecoginitionCertificateComponent } from './recoginition-certificate/recoginition-certificate.component';
import { SafetyCertificateComponent } from './safety-certificate/safety-certificate.component';
import { FireSafetyComponent } from './fire-safety/fire-safety.component';
import { DEOCertificateComponent } from './deo-certificate/deo-certificate.component';
import { WaterSanitationComponent } from './water-sanitation/water-sanitation.component';
import { GalleryComponent } from './gallery/gallery.component';

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
    InfraStructureComponent,
    GenralInfoComponent,
    DocsandinfoComponent,
    ResultsComponent,
    StaffAndInfraComponent,
    FeeStructureComponent,
    CalendarComponent,
    SMCComponent,
    AcademicResultComponent,
    MainUpgradeComponent,
    NocCertificateComponent,
    RenewalCertificateComponent,
    RecoginitionCertificateComponent,
    SafetyCertificateComponent,
    FireSafetyComponent,
    DEOCertificateComponent,
    WaterSanitationComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
