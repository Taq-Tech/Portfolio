import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { AboutPreview } from '../../components/about-preview/about-preview';
import { Services } from '../../components/services/services';
import { Projects } from '../../components/projects/projects';
// import { Testimonials } from '../../components/testimonials/testimonials';
import { CtaBanner } from '../../components/cta-banner/cta-banner';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutPreview, Services, Projects, /* Testimonials, */ CtaBanner],
  template: `
    <app-hero />
    <app-about-preview />
    <app-services />
    <app-projects />
    <!-- What Our Clients Say — hidden for now, restore <app-testimonials /> when ready -->
    <!-- <app-testimonials /> -->
    <app-cta-banner />
  `,
})
export class HomePage {}
