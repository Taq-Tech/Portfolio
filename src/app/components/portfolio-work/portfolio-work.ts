import { Component, input, signal, computed } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

export type PortfolioWorkVariant = 'web' | 'consulting';

export interface PortfolioWorkCard {
  id: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-portfolio-work',
  imports: [ScrollAnimateDirective],
  templateUrl: './portfolio-work.html',
  styleUrl: './portfolio-work.css',
})
export class PortfolioWork {
  variant = input<PortfolioWorkVariant>('web');
  title = input('Our Work In Web Development');
  slideCount = input(5);

  active = signal(0);

  private readonly cards: PortfolioWorkCard[] = [
    { id: 'bmw', title: "BMW's", image: '/portfolio-card-bmw.png' },
    { id: 'netflix-1', title: 'Netflix', image: '/portfolio-card-netflix.png' },
    { id: 'netflix-2', title: 'Netflix', image: '/portfolio-card-netflix.png' },
    { id: 'minecraft', title: 'Mine Craft', image: '/portfolio-card-minecraft.png' },
  ];

  dotIndices = computed(() => Array.from({ length: this.slideCount() }, (_, i) => i));

  slides = computed(() =>
    Array.from({ length: this.slideCount() }, (_, slideIndex) =>
      this.cards.map((card, cardIndex) => ({
        ...card,
        id: `${card.id}-s${slideIndex}-${cardIndex}`,
      }))
    )
  );

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
