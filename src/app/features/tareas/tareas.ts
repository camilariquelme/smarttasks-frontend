import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService, Tarea } from '../../services/tareas';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas.html'
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];
  nuevaTitulo = '';
  nuevaEstado: 'pendiente' | 'completada' = 'pendiente';
  cargando = false;
  error = '';

  constructor(private api: TareasService) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.cargando = true;
    this.error = '';
    this.api.listar().subscribe({
      next: (data) => { this.tareas = data; this.cargando = false; },
      error: () => { this.error = 'No se pudieron cargar las tareas'; this.cargando = false; }
    });
  }

  crear(): void {
    if (!this.nuevaTitulo.trim()) return;
    const payload: Tarea = { titulo: this.nuevaTitulo.trim(), estado: this.nuevaEstado };
    this.api.crear(payload).subscribe(() => {
      this.nuevaTitulo = '';
      this.nuevaEstado = 'pendiente';
      this.cargar();
    });
  }

  toggleEstado(t: Tarea): void {
    const nuevo = t.estado === 'pendiente' ? 'completada' : 'pendiente';
    this.api.actualizar(t.id!, { estado: nuevo }).subscribe(() => this.cargar());
  }

  eliminar(t: Tarea): void {
    if (!t.id) return;
    this.api.eliminar(t.id).subscribe(() => this.cargar());
  }
}
