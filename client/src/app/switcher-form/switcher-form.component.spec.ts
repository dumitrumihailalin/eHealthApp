import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcherFormComponent } from './switcher-form.component';

describe('SwitcherFormComponent', () => {
  let component: SwitcherFormComponent;
  let fixture: ComponentFixture<SwitcherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitcherFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitcherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
