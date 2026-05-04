import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { Projects } from '../../components/projects/projects';
import { Testimonials } from '../../components/testimonials/testimonials';
import { CtaBanner } from '../../components/cta-banner/cta-banner';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Projects, Testimonials, CtaBanner],
  template: `
    <app-hero />
    <app-services />
    <app-projects />
    <app-testimonials />
    <app-cta-banner />
  `,
})
export class HomePage {}
