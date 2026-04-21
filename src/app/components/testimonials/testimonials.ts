import { Component, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  body: string;
  website: string;
  stars: number;
}

@Component({
  selector: 'app-testimonials',
  imports: [NgClass],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  active = signal(0);

  testimonials: Testimonial[] = [
    {
      name: 'M. No Body',
      role: 'CEO of LetsDoit co.',
      quote: '"Great balance between design and development."',
      body: 'We designed LetsDoit co. website from scratch. We planned, designed, and developed the website based on market research, users insights.',
      website: 'www.letsdoit.com',
      stars: 4,
    },
    {
      name: 'Sara Al-Khatib',
      role: 'Product Manager at NovaBuild',
      quote: '"Strategy-first thinking that saved us months."',
      body: 'TaqTech brought structure to a chaotic product roadmap. Their approach saved us months of rework and the final platform is rock solid.',
      website: 'www.novabuild.io',
      stars: 5,
    },
    {
      name: 'Omar Haddad',
      role: 'Founder of Hexa Labs',
      quote: '"From design to deployment — flawless."',
      body: 'From UI/UX design to deployment, everything was handled professionally. Communication was clear throughout and they genuinely cared about our success.',
      website: 'www.hexalabs.co',
      stars: 5,
    },
    {
      name: 'Lina Mansour',
      role: 'CTO of Skale Digital',
      quote: '"The mobile app outperforms every competitor."',
      body: 'Incredible attention to detail. The mobile app they built for us outperforms every competitor we benchmarked against. Highly recommended.',
      website: 'www.skaledigital.com',
      stars: 5,
    },
    {
      name: 'Khaled Nasser',
      role: 'Co-Founder of ArcFlow',
      quote: '"Delivered exactly what we envisioned."',
      body: 'The team understood our vision immediately and translated it into a beautiful, high-performance product. We couldn\'t be happier with the result.',
      website: 'www.arcflow.app',
      stars: 5,
    },
  ];

  current = computed(() => this.testimonials[this.active()]);

  prev() {
    this.active.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  next() {
    this.active.update(i => (i + 1) % this.testimonials.length);
  }

  goTo(i: number) {
    this.active.set(i);
  }

  starsArray(n: number) {
    return Array.from({ length: 5 }, (_, i) => i < n);
  }
}
