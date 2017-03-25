import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataRestComponent } from './metadata-rest.component';

describe('MetadataRestComponent', () => {
  let component: MetadataRestComponent;
  let fixture: ComponentFixture<MetadataRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
