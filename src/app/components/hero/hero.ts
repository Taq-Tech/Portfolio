import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  imports: [ScrollAnimateDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
