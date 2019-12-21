import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterBoxComponent } from './poster-box.component';

describe('PosterBoxComponent', () => {
  let component: PosterBoxComponent;
  let fixture: ComponentFixture<PosterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
