import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

export type PortfolioWorkVariant = 'web' | 'mobile';

export type PortfolioWorkSize = 'feature' | 'wide' | 'tall';

export interface PortfolioWorkCard {
  id: string;
  title: string;
  kicker: string;
  route: string;
  cover: string;
  coverFit?: 'cover' | 'contain';
  logo?: string;
  tags: string[];
  theme: string;
  size: PortfolioWorkSize;
}

const WEB_CARDS: PortfolioWorkCard[] = [
  {
    id: 'qreate',
    title: 'Qreate',
    kicker: 'Event Invitations Platform',
    route: '/services/web-development/qreate',
    cover: '/Web%20Development/Qreate/Home.png',
    logo: '/Web%20Development/Qreate/Qreate_white.jpg',
    tags: ['Web App', 'Events'],
    theme: 'qreate',
    size: 'feature',
  },
  {
    id: 'promptoverflow',
    title: 'PromptOverflow',
    kicker: 'AI Prompt Community',
    route: '/services/web-development/promptoverflow',
    cover: '/Web%20Development/PromptOverflow/Home.png',
    logo: '/Web%20Development/PromptOverflow/PromptOverflow.png',
    tags: ['Web App', 'Community'],
    theme: 'promptoverflow',
    size: 'wide',
  },
  {
    id: 'tedx-alqassaa',
    title: 'TEDx AlQassaa',
    kicker: 'Events & CMS Platform',
    route: '/services/web-development/tedx-alqassaa',
    cover: '/Web%20Development/TEDxAlQassaa/Events.png',
    tags: ['Web App', 'CMS Dashboard'],
    theme: 'tedx',
    size: 'wide',
  },
];

const MOBILE_CARDS: PortfolioWorkCard[] = [
  {
    id: 'alpha-academy',
    title: 'Alpha Academy',
    kicker: 'Learning App',
    route: '/services/mobile-app/alpha-academy',
    cover: '/Mobile%20Development/Alpha_Academy/Home.jpeg',
    coverFit: 'contain',
    logo: '/Mobile%20Development/Alpha_Academy/Alpha_Academy_Logo.jpeg',
    tags: ['Mobile App', 'Education'],
    theme: 'alpha',
    size: 'tall',
  },
  {
    id: 'pillpal',
    title: 'Pillpal',
    kicker: 'Medication Companion',
    route: '/services/mobile-app/pillpal',
    cover: '/Mobile%20Development/Pillpal/home.png',
    coverFit: 'contain',
    tags: ['Mobile App', 'Health'],
    theme: 'pillpal',
    size: 'tall',
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

  cards = computed(() => (this.variant() === 'web' ? WEB_CARDS : MOBILE_CARDS));
}
