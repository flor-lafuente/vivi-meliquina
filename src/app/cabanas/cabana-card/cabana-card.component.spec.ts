import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabanaCardComponent } from './cabana-card.component';

describe('CabanaCardComponent', () => {
  let component: CabanaCardComponent;
  let fixture: ComponentFixture<CabanaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabanaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabanaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
