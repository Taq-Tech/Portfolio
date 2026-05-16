import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about-preview',
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.css',
})
export class AboutPreview {}
