import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../../../../directives/scroll-animate.directive';
import { CtaBanner } from '../../../../../components/cta-banner/cta-banner';

@Component({
  selector: 'app-alpha-academy-project',
  imports: [RouterLink, ScrollAnimateDirective, CtaBanner],
  templateUrl: './alpha-academy.html',
  styleUrl: './alpha-academy.css',
})
export class AlphaAcademyProjectPage {
  lightboxSrc = signal<string | null>(null);
  lightboxAlt = signal<string>('');

  openLightbox(src: string, alt: string) {
    this.lightboxSrc.set(src);
    this.lightboxAlt.set(alt);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxSrc.set(null);
    this.lightboxAlt.set('');
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.lightboxSrc()) this.closeLightbox();
  }
}
