import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugBarComponent } from './debug-bar.component';

describe('DebugBarComponent', () => {
  let component: DebugBarComponent;
  let fixture: ComponentFixture<DebugBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
