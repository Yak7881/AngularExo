/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// ts = typeScript
// Un module = ensemble de composant

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
