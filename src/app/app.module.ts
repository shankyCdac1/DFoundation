import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from "jquery";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { SignupComponent } from './shared/auth/signup/signup.component';
import { DashboardComponent } from './webapp/dashboard/dashboard.component';
import { WhoweareComponent } from './site/main/whoweare/whoweare.component';
import { WhatwedoComponent } from './site/main/whatwedo/whatwedo.component';
import { HomeComponent } from './site/main/home/home.component';
import { ReasearchinnovationComponent } from './site/main/reasearchinnovation/reasearchinnovation.component';
import { PartnersupportComponent } from './site/main/partnersupport/partnersupport.component';
import { GalleryComponent } from './site/main/gallery/gallery.component';
import { FooterComponent } from './site/main/footer/footer.component';
import { HeaderComponent } from './site/main/header/header.component';
import { NavigationbarComponent } from './site/main/navigationbar/navigationbar.component';
import { MainComponent } from './site/main/main.component';
import { DFoundationComponent } from './site/main/d-foundation/d-foundation.component';
import { AboutusComponent } from './site/main/aboutus/aboutus.component';
import { FeatureServicesComponent } from './site/main/feature-services/feature-services.component';
import { FactsComponent } from './site/main/facts/facts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon/';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    WhoweareComponent,
    WhatwedoComponent,
    PartnersupportComponent,
    ReasearchinnovationComponent,
    GalleryComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    NavigationbarComponent,
    MainComponent,
    DFoundationComponent,
    AboutusComponent,
    FeatureServicesComponent,
    FactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
