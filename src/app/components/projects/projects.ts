import { Component, input } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-projects',
  imports: [ScrollAnimateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  /** Full portfolio page layout (below hero) vs home preview section */
  standalone = input(false);
}
