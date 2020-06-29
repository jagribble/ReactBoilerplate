# MaterialUITheme

This is an example repo that shows how `@material-ui` theme can be used in any react application using `@material-ui`. 

You can fork this repo to use this as a boilerplate, use the ThemeContextProvider export yourself (__TODO__ make this into a proper NPM package ready and easy to use) or use the output of the theme in your application using the `createMuiTheme()` function. 

## Build and run
1. clone the repo
1. `npm install` ( make sure you are in the src)
1. `npm start`

This will run the project with production webpacked React code. If you would like to run it with the code visible to you, run webpack using the webpack.config.dev.js file. 

```bash
webpack --config webpack.config.dev.js --watch
```
The watch command is allows you to run this command once and any changes will then be reflected when the page is reloaded. 

