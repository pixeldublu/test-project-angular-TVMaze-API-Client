import { BackService } from '@app/shared/services/back.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/shared/shared.module';
import { ShellModule } from '@app/shell/shell.module';
import { DetailsRoutingModule } from '@app/details/details-routing.module';
import { Show } from '@app/core/models/show.model';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [
        CommonModule,
        RouterTestingModule,
        HttpClientModule,
        SharedModule,
        ShellModule,
        DetailsRoutingModule
      ],
      providers: [BackService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have show summary', () => {
    const summaryElement = element.querySelector('.show-summary');
    const show = {summary: 'blah blah'} as unknown as Show;
    component.show = show;
    fixture.detectChanges();
    expect(summaryElement.textContent).toContain(show.summary);
  });
});
