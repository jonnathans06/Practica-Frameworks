import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { UsuariosService } from './services/usuarios.service';
import { of } from 'rxjs';

describe('App', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        {
          provide: UsuariosService,
          useValue: {
            obtenerUsuarios: () => of([])
          }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should filter users by name', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.usuarios = [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'leanne@example.com',
        address: { city: 'Gwenborough' }
      },
      {
        id: 2,
        name: 'Ervin Howell',
        email: 'ervin@example.com',
        address: { city: 'Wisokyburgh' }
      }
    ] as any;

    app.busqueda = 'Leanne';

    expect(app.usuariosFiltrados.length).toBe(1);
    expect(app.usuariosFiltrados[0].name).toBe('Leanne Graham');
  });

});