import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChannelComponent } from './live-channel.component';

describe('LiveChannelComponent', () => {
  let component: LiveChannelComponent;
  let fixture: ComponentFixture<LiveChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
