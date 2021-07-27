import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesShowComponent } from './clientes-show.component';

describe('ClientesShowComponent', () => {
  let component: ClientesShowComponent;
  let fixture: ComponentFixture<ClientesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
