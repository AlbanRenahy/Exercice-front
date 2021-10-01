import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmieresCardComponent } from './infirmieres-card.component';

describe('InfirmieresCardComponent', () => {
  let component: InfirmieresCardComponent;
  let fixture: ComponentFixture<InfirmieresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmieresCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmieresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
