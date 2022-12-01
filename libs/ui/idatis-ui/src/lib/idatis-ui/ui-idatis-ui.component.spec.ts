import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIdatisUiComponent } from './ui-idatis-ui.component';

describe('UiIdatisUiComponent', () => {
  let component: UiIdatisUiComponent;
  let fixture: ComponentFixture<UiIdatisUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIdatisUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiIdatisUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
