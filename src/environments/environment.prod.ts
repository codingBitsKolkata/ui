// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

 // let serviceUrl = 'http://localhost';  // Development Server
let serviceUrl = 'http://orastays.com/v1/api/';    // Sudeep local server

export const environment = {
  production: true,
  // Server
  /*
   auth_api_base_url: serviceUrl + ':7185/api',
   subscriber_api_base_url: serviceUrl + ':7187/api',
   testimonial_api_base_url: serviceUrl + ':7188/api',
   property_add_api_base_url: serviceUrl + ':7189/api',
   property_api_base_url: serviceUrl + ':7190/api',
   filght_api_base_url: serviceUrl + ':7193/api',
   banner_api_base_url: serviceUrl + ':7186/api',
   */
  
 

  auth_api_base_url: serviceUrl + 'auth-server',
  subscriber_api_base_url: serviceUrl + 'newsletter-server',
  testimonial_api_base_url: serviceUrl + 'testimonial-server',
  property_add_api_base_url: serviceUrl + 'property-add-server',
  property_api_base_url: serviceUrl + 'property-list-server',
  filght_api_base_url: serviceUrl + 'flight-server',
  banner_api_base_url: serviceUrl + 'banner-server',
  
  
 
  api_base_url: 'http://orastays.com',
  image_base_url: 'http://orastays.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
