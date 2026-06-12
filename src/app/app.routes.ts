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
    path: 'services/web-development/invoices-system',
    loadComponent: () =>
      import('./pages/services/web-development/projects/invoices-system/invoices-system').then(m => m.InvoicesSystemProjectPage),
  },
  {
    path: 'services/web-development/school-management-system',
    loadComponent: () =>
      import('./pages/services/web-development/projects/school-management-system/school-management-system').then(m => m.SchoolManagementSystemProjectPage),
  },
  {
    path: 'services/web-development/tedx-alqassaa',
    loadComponent: () =>
      import('./pages/services/web-development/projects/tedx-alqassaa/tedx-alqassaa').then(m => m.TedxAlQassaaProjectPage),
  },
  {
    path: 'services/web-development/artisan',
    loadComponent: () =>
      import('./pages/services/web-development/projects/artisan/artisan').then(m => m.ArtisanProjectPage),
  },
  {
    path: 'services/web-development/selene',
    loadComponent: () =>
      import('./pages/services/web-development/projects/selene/selene').then(m => m.SeleneProjectPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
