import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesgComponent } from './typesg.component';

describe('TypesgComponent', () => {
  let component: TypesgComponent;
  let fixture: ComponentFixture<TypesgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
