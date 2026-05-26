import { Component } from '@angular/core';
import { MaHero } from './sections/hero/hero';
import { MaFeatures } from './sections/features/features';
import { MaWhyChoose } from './sections/why-choose/why-choose';
import { MaBusinesses } from './sections/businesses/businesses';
import { MaTechnologies } from './sections/technologies/technologies';
import { MaCta } from './sections/cta/cta';

@Component({
  selector: 'app-mobile-app-page',
  imports: [MaHero, MaFeatures, MaWhyChoose, MaBusinesses, MaTechnologies, MaCta],
  template: `
    <app-ma-hero />
    <app-ma-features />
    <app-ma-why-choose />
    <app-ma-businesses />
    <app-ma-technologies />
    <app-ma-cta />
  `,
})
export class MobileAppPage {}
