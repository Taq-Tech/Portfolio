import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  /** Full portfolio page layout (below hero) vs home preview section */
  standalone = input(false);
}
