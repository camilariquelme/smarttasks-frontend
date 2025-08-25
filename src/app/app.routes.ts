import { Routes } from '@angular/router';
import { TareasComponent } from './features/tareas/tareas';

export const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent }
];
