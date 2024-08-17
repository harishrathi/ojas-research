import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StengthsComponent } from './stengths.component';

describe('StengthsComponent', () => {
  let component: StengthsComponent;
  let fixture: ComponentFixture<StengthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StengthsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StengthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
