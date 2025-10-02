import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeliquinaComponent } from './meliquina.component';

describe('MeliquinaComponent', () => {
  let component: MeliquinaComponent;
  let fixture: ComponentFixture<MeliquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeliquinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeliquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
