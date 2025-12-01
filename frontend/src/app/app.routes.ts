import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { MasInfoComponent } from './pages/mas-info/mas-info.component';
import { ZonasReciclajeComponent } from './pages/zonas-reciclaje/zonas-reciclaje.component';

import { authGuard } from './core/auth.guard';

export const routes: Routes = [

  // 👉 Redirección inicial
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 👉 Login
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },

  // 👉 Dashboard + rutas internas protegidas
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [

      // Usuarios
      { path: 'usuarios', component: UsuariosComponent },

      // Reportes (puntos críticos)
      { path: 'puntos-criticos', component: ReportesComponent },

      // Horarios
      { path: 'horarios', component: HorariosComponent },

      // Rutas
      { path: 'rutas', component: RutasComponent },

      // Zonas de reciclaje (antes Productos)
      { path: 'reciclaje', component: ZonasReciclajeComponent },

      // Más información
      { path: 'mas-info', component: MasInfoComponent },

      // Ruta por defecto dentro del dashboard
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' }
    ]
  },

  // 👉 Fallback general
  { path: '**', redirectTo: 'login' }
];
