// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const base_url = "https://e-kaliko.herokuapp.com"
export const base_url = "http://localhost:3000"
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyA60bd32iyfTYFLFuMRdeNOduWvxgEe4Rk",
    authDomain: "e-kaly.firebaseapp.com",
    projectId: "e-kaly",
    storageBucket: "e-kaly.appspot.com",
    messagingSenderId: "943226812231",
    appId: "1:943226812231:web:dc880d9409a7336bd6be62",
    measurementId: "G-SE18CPD4Y3",
    vapidKey : "BA5Ho0Wwm0kaMZLirmlb4B9mAcp_AZlFUuucBPaC2NqOOrX3rPL0GIPyOGKuVjxhIdYtSZodJiaZLpC6u0sx6Sg"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
