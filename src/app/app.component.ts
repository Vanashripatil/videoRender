import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoRenderComponent } from "./video-render/video-render.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoRenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'videoRender';
}
