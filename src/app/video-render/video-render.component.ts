import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { VgApiService, VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@Component({
  selector: 'app-video-render',
  standalone: true,
  imports: [
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  templateUrl: './video-render.component.html',
  styleUrl: './video-render.component.scss',
})
export class VideoRenderComponent {
  videoURL =
    'https://voterlist.blob.core.windows.net/media-container/86554868_233124341025333_2873816339204538368_n_1267_00.mp4?format=mp4';

  sanitizer = inject(DomSanitizer);

  sanitize(blob: any): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(blob);
  }
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  preload: string = 'auto';
  api: VgApiService = new VgApiService();

  onPlayerReady(source: VgApiService) {
    this.api = source;
    console.log('onvideoready');
    this.api
      .getDefaultMedia()
      .subscriptions.loadedMetadata.subscribe(this.autoplay.bind(this));
  }
  autoplay() {
    console.log('play');
    this.api.play();
  }
}
