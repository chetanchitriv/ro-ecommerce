import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurstaffComponent } from './ourstaff.component';

describe('OurstaffComponent', () => {
  let component: OurstaffComponent;
  let fixture: ComponentFixture<OurstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurstaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
