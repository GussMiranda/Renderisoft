import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebEstudentComponent } from './web-estudent.component';

describe('WebEstudentComponent', () => {
  let component: WebEstudentComponent;
  let fixture: ComponentFixture<WebEstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebEstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebEstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
