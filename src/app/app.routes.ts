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
    path: 'services/web-development',
    loadComponent: () =>
      import('./pages/services/web-development/web-development').then(m => m.WebDevelopmentPage),
  },
  {
    path: 'services/mobile-app',
    loadComponent: () =>
      import('./pages/services/mobile-app/mobile-app').then(m => m.MobileAppPage),
  },
  {
    path: 'services/mobile-app/alpha-academy',
    loadComponent: () =>
      import('./pages/services/mobile-app/projects/alpha-academy/alpha-academy').then(m => m.AlphaAcademyProjectPage),
  },
  {
    path: 'services/mobile-app/pillpal',
    loadComponent: () =>
      import('./pages/services/mobile-app/projects/pillpal/pillpal').then(m => m.PillpalProjectPage),
  },
  {
    path: 'services/web-development/qreate',
    loadComponent: () =>
      import('./pages/services/web-development/projects/qreate/qreate').then(m => m.QreateProjectPage),
  },
  {
    path: 'services/web-development/promptoverflow',
    loadComponent: () =>
      import('./pages/services/web-development/projects/promptoverflow/promptoverflow').then(m => m.PromptOverflowProjectPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
