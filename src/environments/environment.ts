// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyAbWlTigF1VNbQ1HwnJyLoUBZ-wR5An-zA",
    authDomain: "minishop-app.firebaseapp.com",
    databaseURL: "https://minishop-app.firebaseio.com",
    projectId: "minishop-app",
    storageBucket: "minishop-app.appspot.com",
    messagingSenderId: "291036163881"
  }
};
