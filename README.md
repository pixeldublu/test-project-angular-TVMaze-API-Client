### tvmaze search ( Angular )

### Development server

`ng serve` 

Navigate to `http://localhost:4200/`

### Running unit tests

`ng test`


### Structure:
#### src/app/
   `core/models` - contains core models that are used in multiple places
   `core/tests` - contains test helpers like dummy data

   `shared` - contains shared components that are used in multiple places
   
   `shell` - contains a wrapper layout with header and child router service
   
   `business-module/components` - contains presentational components
   `business-module/containers` - contains more complex components with business logic
   `business-module/services` - contains services associated with the business module
   `business-module/resolvers` - contains route resolvers
   