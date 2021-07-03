import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAndInfraComponent } from './staff-and-infra.component';

describe('StaffAndInfraComponent', () => {
  let component: StaffAndInfraComponent;
  let fixture: ComponentFixture<StaffAndInfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAndInfraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAndInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
