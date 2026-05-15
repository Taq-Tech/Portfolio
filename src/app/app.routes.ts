import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomePage),
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then(m => m.About),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./pages/portfolio/portfolio').then(m => m.PortfolioPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
