import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitentComponent } from './remitent.component';

describe('RemitentComponent', () => {
  let component: RemitentComponent;
  let fixture: ComponentFixture<RemitentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemitentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemitentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
