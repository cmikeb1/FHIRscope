import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceSelectComponent } from './source-select.component';

describe('SourceSelectComponent', () => {
  let component: SourceSelectComponent;
  let fixture: ComponentFixture<SourceSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
