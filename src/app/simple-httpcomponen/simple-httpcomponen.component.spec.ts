import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleHTTPComponenComponent } from './simple-httpcomponen.component';

describe('SimpleHTTPComponenComponent', () => {
  let component: SimpleHTTPComponenComponent;
  let fixture: ComponentFixture<SimpleHTTPComponenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleHTTPComponenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleHTTPComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
