import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
import {Type, enableProdMode} from '@angular/core';
import {environment} from './_env/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

if (environment.enableProdMode) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule as Type<AppModule>);
