import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMCComponent } from './smc.component';

describe('SMCComponent', () => {
  let component: SMCComponent;
  let fixture: ComponentFixture<SMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
