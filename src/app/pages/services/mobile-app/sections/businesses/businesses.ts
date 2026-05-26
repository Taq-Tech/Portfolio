import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective } from '../../../../../directives/scroll-animate.directive';

@Component({
  selector: 'app-ma-businesses',
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './businesses.html',
  styleUrl: './businesses.css',
})
export class MaBusinesses {}
