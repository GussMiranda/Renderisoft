import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreammingComponent } from './streamming.component';

describe('StreammingComponent', () => {
  let component: StreammingComponent;
  let fixture: ComponentFixture<StreammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
