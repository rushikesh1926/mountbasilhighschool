import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEOCertificateComponent } from './deo-certificate.component';

describe('DEOCertificateComponent', () => {
  let component: DEOCertificateComponent;
  let fixture: ComponentFixture<DEOCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DEOCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DEOCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
