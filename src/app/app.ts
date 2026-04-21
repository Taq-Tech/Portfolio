import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Projects } from './components/projects/projects';
import { Testimonials } from './components/testimonials/testimonials';
import { CtaBanner } from './components/cta-banner/cta-banner';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Services, Projects, Testimonials, CtaBanner, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
