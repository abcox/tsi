## @vorba/tsi@1.0.0-SNAPSHOT.201905062134

### Building

To build an compile the typescript sources to javascript use:
```
npm install
npm run build
```

### publishing

First build the package than run ```npm publish```

### consuming

navigate to the folder of your consuming project and run one of next commando's.

_published:_

```
npm install @vorba/tsi@1.0.0-SNAPSHOT.201905062134 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

_using `npm link`:_

In PATH_TO_GENERATED_PACKAGE:
```
npm link
```

In your project:
```
npm link @vorba/tsi@1.0.0-SNAPSHOT.201905062134
```

In your Angular project:


```
// without configuring providers
import { ApiModule } from '@vorba/tsi';

@NgModule({
    imports: [ ApiModule ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
// configuring providers
import { ApiModule, Configuration, ConfigurationParameters } from '@vorba/tsi';

export function apiConfigFactory (): Configuration => {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
  }
  return new Configuration(params);
}

@NgModule({
    imports: [ ApiModule.forRoot(apiConfigFactory) ],
    declarations: [ AppComponent ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```

```
import { DefaultApi } from '@vorba/tsi';

export class AppComponent {
	 constructor(private apiGateway: DefaultApi) { }
}
```

Note: The ApiModule is restricted to being instantiated once app wide.
This is to ensure that all services are treated as singletons.

### Set service base path
If different than the generated base path, during app bootstrap, you can provide the base path to your service. 

```
import { BASE_PATH } from '@vorba/tsi';

bootstrap(AppComponent, [
    { provide: BASE_PATH, useValue: 'https://your-web-service.com' },
]);
```
or

```
import { BASE_PATH } from '@vorba/tsi';

@NgModule({
    imports: [],
    declarations: [ AppComponent ],
    providers: [ provide: BASE_PATH, useValue: 'https://your-web-service.com' ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
```


#### Using @angular/cli
First extend your `src/environments/*.ts` files by adding the corresponding base path:

```
export const environment = {
  production: false,
  API_BASE_PATH: 'http://127.0.0.1:8080'
};
```

In the src/app/app.module.ts:
```
import { BASE_PATH } from '@vorba/tsi';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ ],
  providers: [{ provide: BASE_PATH, useValue: environment.API_BASE_PATH }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```  