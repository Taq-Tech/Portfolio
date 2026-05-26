import { Component, input, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

export type PortfolioWorkVariant = 'web' | 'mobile';

export interface PortfolioWorkCard {
  id: string;
  title: string;
  route: string;
  logo?: string;
  tags: string[];
  theme: string;
  tilt: 'left' | 'right';
}

const WEB_CARDS: PortfolioWorkCard[] = [
  {
    id: 'qreate',
    title: 'Qreate',
    route: '/services/web-development/qreate',
    logo: '/Web%20Development/Qreate/Qreate_white.jpg',
    tags: ['Web App', 'Events'],
    theme: 'qreate',
    tilt: 'left',
  },
  {
    id: 'promptoverflow',
    title: 'PromptOverflow',
    route: '/services/web-development/promptoverflow',
    logo: '/Web%20Development/PromptOverflow/PromptOverflow.png',
    tags: ['Web App', 'Community'],
    theme: 'promptoverflow',
    tilt: 'right',
  },
];

const MOBILE_CARDS: PortfolioWorkCard[] = [
  {
    id: 'alpha-academy',
    title: 'Alpha Academy',
    route: '/services/mobile-app/alpha-academy',
    logo: '/Mobile%20Development/Alpha_Academy/Alpha_Academy_Logo.jpeg',
    tags: ['Mobile App', 'Education'],
    theme: 'alpha',
    tilt: 'left',
  },
  {
    id: 'pillpal',
    title: 'Pillpal',
    route: '/services/mobile-app/pillpal',
    tags: ['Mobile App', 'Health'],
    theme: 'pillpal',
    tilt: 'right',
  },
];

@Component({
  selector: 'app-portfolio-work',
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './portfolio-work.html',
  styleUrl: './portfolio-work.css',
})
export class PortfolioWork {
  variant = input<PortfolioWorkVariant>('web');
  title = input('Our Work In Web Development');

  active = signal(0);

  cards = computed(() => (this.variant() === 'web' ? WEB_CARDS : MOBILE_CARDS));

  slides = computed(() => [this.cards()]);

  slideCount = computed(() => this.slides().length);

  dotIndices = computed(() => Array.from({ length: this.slideCount() }, (_, i) => i));

  trackTransform = computed(() => `translateX(-${this.active() * 100}%)`);

  prev() {
    const count = this.slideCount();
    this.active.update(i => (i - 1 + count) % count);
  }

  next() {
    const count = this.slideCount();
    this.active.update(i => (i + 1) % count);
  }

  goTo(index: number) {
    this.active.set(index);
  }
}
