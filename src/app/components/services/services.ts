import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-services',
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

}
