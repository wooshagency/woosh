import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './landing-page/home/home.component';
import { MatCardModule } from "@angular/material/card";
import { ContentComponent } from './landing-page/content/content.component';
import { ApproachComponent } from './landing-page/content/approach/approach.component';
import { OurServicesComponent } from './landing-page/content/our-services/our-services.component';
import { ProjectsComponent } from './landing-page/content/projects/projects.component';
import { DividerComponent } from './shared/divider/divider.component';
import { DisplayDividerComponent } from './shared/display-divider/display-divider.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { FooterComponent } from './shared/footer/footer.component';
import { FaqComponent } from './landing-page/content/faq/faq.component';
import { CardComponent } from './shared/card/card.component';
import { NextLevelComponent } from './landing-page/content/next-level/next-level.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    HomeComponent,
    ContentComponent,
    ApproachComponent,
    OurServicesComponent,
    ProjectsComponent,
    DividerComponent,
    DisplayDividerComponent,
    FooterComponent,
    FaqComponent,
    CardComponent,
    NextLevelComponent,
    ContactPageComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatExpansionModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
