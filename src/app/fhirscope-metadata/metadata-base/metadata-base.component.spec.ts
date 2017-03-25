import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataBaseComponent } from './metadata-base.component';

describe('MetadataBaseComponent', () => {
  let component: MetadataBaseComponent;
  let fixture: ComponentFixture<MetadataBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
