import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUpgradeComponent } from './main-upgrade.component';

describe('MainUpgradeComponent', () => {
  let component: MainUpgradeComponent;
  let fixture: ComponentFixture<MainUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainUpgradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
