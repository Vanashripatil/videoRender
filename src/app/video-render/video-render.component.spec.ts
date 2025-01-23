import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRenderComponent } from './video-render.component';

describe('VideoRenderComponent', () => {
  let component: VideoRenderComponent;
  let fixture: ComponentFixture<VideoRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoRenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
