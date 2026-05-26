import { Component } from '@angular/core';
import { WdHero } from './sections/hero/hero';
import { WdFeatures } from './sections/features/features';
import { WdWhyChoose } from './sections/why-choose/why-choose';
import { WdBusinesses } from './sections/businesses/businesses';
import { WdTechnologies } from './sections/technologies/technologies';
import { CtaBanner } from '../../../components/cta-banner/cta-banner';

@Component({
  selector: 'app-web-development-page',
  imports: [WdHero, WdFeatures, WdWhyChoose, WdBusinesses, WdTechnologies, CtaBanner],
  template: `
    <app-wd-hero />
    <app-wd-features />
    <app-wd-why-choose />
    <app-wd-businesses />
    <app-wd-technologies />
    <app-cta-banner />
  `,
})
export class WebDevelopmentPage {}
