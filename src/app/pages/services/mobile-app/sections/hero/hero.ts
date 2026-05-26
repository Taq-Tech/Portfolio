import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-ma-hero',
  imports: [ScrollAnimateDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class MaHero {}
