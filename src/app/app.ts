import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { ProjectsComponent } from './components/projects/projects';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { CtaBannerComponent } from './components/cta-banner/cta-banner';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    TestimonialsComponent,
    CtaBannerComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
