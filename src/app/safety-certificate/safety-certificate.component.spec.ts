import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyCertificateComponent } from './safety-certificate.component';

describe('SafetyCertificateComponent', () => {
  let component: SafetyCertificateComponent;
  let fixture: ComponentFixture<SafetyCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
