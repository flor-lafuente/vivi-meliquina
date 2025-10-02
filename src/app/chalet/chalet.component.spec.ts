import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletComponent } from './chalet.component';

describe('ChaletComponent', () => {
  let component: ChaletComponent;
  let fixture: ComponentFixture<ChaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
