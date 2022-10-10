import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginitaComponent } from './paginita.component';

describe('PaginitaComponent', () => {
  let component: PaginitaComponent;
  let fixture: ComponentFixture<PaginitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
