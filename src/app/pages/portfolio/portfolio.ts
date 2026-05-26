import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { PortfolioWork } from '../../components/portfolio-work/portfolio-work';

@Component({
  selector: 'app-portfolio-page',
  imports: [Hero, PortfolioWork],
  template: `
    <app-hero />
    <app-portfolio-work variant="web" title="Our Work In Web Development" />
    <app-portfolio-work variant="mobile" title="Our Work In Mobile Application" />
  `,
})
export class PortfolioPage {}
