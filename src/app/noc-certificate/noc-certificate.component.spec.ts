import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocCertificateComponent } from './noc-certificate.component';

describe('NocCertificateComponent', () => {
  let component: NocCertificateComponent;
  let fixture: ComponentFixture<NocCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NocCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NocCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
