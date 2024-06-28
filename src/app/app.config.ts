import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {backendInterceptor, cursorInterceptor, tokenInterceptor} from "../common/tools/interceptors";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: "enabled"})),
    provideHttpClient(withInterceptors([
      cursorInterceptor,
      backendInterceptor,
      tokenInterceptor
    ]))
  ]
};
