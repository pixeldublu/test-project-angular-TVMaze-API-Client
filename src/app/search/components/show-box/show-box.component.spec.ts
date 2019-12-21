import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBoxComponent } from './show-box.component';
import { SharedModule } from '@app/shared/shared.module';
import { Show } from '@app/core/models/show.model';

describe('ShowBoxComponent', () => {
  let component: ShowBoxComponent;
  let fixture: ComponentFixture<ShowBoxComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBoxComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBoxComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have show name', () => {
    const nameElement = element.querySelector('.name-box');
    const show = {name: 'Silicon Valley'} as unknown as Show;
    component.show = show;
    fixture.detectChanges();
    expect(nameElement.textContent).toContain(show.name);
  });
});
