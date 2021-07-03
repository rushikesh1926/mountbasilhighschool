import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsandinfoComponent } from './docsandinfo.component';

describe('DocsandinfoComponent', () => {
  let component: DocsandinfoComponent;
  let fixture: ComponentFixture<DocsandinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsandinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsandinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
