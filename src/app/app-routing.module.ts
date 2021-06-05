import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhoweareComponent } from './site/main/whoweare/whoweare.component';
import { WhatwedoComponent } from './site/main/whatwedo/whatwedo.component';
import { HomeComponent } from './site/main/home/home.component';
import { ReasearchinnovationComponent } from './site/main/reasearchinnovation/reasearchinnovation.component';
import { PartnersupportComponent } from './site/main/partnersupport/partnersupport.component';
import { GalleryComponent } from './site/main/gallery/gallery.component';
import { MainComponent } from './site/main/main.component';
import { LoginComponent } from './shared/auth/login/login.component';


const routes: Routes = [
  {
    path : '', component : MainComponent, children : 
    [
      {path : '', component : HomeComponent},
      {path: 'whoweare', component : WhoweareComponent},
      {path: 'whatwedo', component : WhatwedoComponent},
      {path: 'research', component : ReasearchinnovationComponent},
      {path: 'partners', component : PartnersupportComponent},
      {path: 'gallery', component :  GalleryComponent},
      {path: 'login',   component : LoginComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
