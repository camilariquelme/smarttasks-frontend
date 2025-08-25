import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarea {
  id?: number;
  titulo: string;
  estado: 'pendiente' | 'completada' | string;
}

@Injectable({ providedIn: 'root' })
export class TareasService {
  private baseUrl = '/api'; // gracias al proxy

  constructor(private http: HttpClient) {}

  listar(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.baseUrl}/tareas`);
  }

  crear(tarea: Tarea): Observable<any> {
    return this.http.post(`${this.baseUrl}/tareas`, tarea);
  }

  actualizar(id: number, cambios: Partial<Tarea>): Observable<any> {
    return this.http.put(`${this.baseUrl}/tareas/${id}`, cambios);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/tareas/${id}`);
  }
}
