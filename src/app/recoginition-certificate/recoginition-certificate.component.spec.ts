import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoginitionCertificateComponent } from './recoginition-certificate.component';

describe('RecoginitionCertificateComponent', () => {
  let component: RecoginitionCertificateComponent;
  let fixture: ComponentFixture<RecoginitionCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoginitionCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoginitionCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
