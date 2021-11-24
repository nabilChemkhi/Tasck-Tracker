import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TascksComponent } from './tascks.component';

describe('TascksComponent', () => {
  let component: TascksComponent;
  let fixture: ComponentFixture<TascksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TascksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TascksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
