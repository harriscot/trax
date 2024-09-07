import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideAnimations(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
// };

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));




// bootstrapApplication(AppComponent, {
//   providers:[
//     importProvidersFrom(BrowserAnimationsModule),
//   appConfig],
// })
//   .catch((err) => console.error(err));

