# expo-everywhere
Several recipes for getting started with Expo for mobile, web, and others.

## The branches
The following branches show different examples
* part-1-web-does-not-work - the plain example just working for Android and iOS
* part-2-web-works-now - fixed some stuff, now we are tri-platform!
* part-3-deploy-everywhere - now we can use Expo's standard mobile deploy and a web deploy of our choice all at once
* part-4-electron-for-expo - let's run and build with Electron now, too! Can we run this on four screens at once? Also added some Platform-specific code
* part-4a-media-queries - Let's play with some more platform customization options
* part-5-component-library - Let's reuse individual components in mobile and web

## Code example
This is a very basic example app, demonstrating an inbox with a chat interface. Demonstrates navigation, styling, and wiring up to a (fake) API.


### Prerequisites for running the example
* [Node.js](https://nodejs.org/en/) installed
* [Yarn](https://yarnpkg.com/en/) 1.x is installed (you could go without it, of course, but directions assume you have it)
* Expo CLI is installed globally (`npm install -g expo-cli`)
* The Expo app is installed on your phone (ignore if you're using the iOS simulator)
[Also see Expo's directions for getting started](https://expo.io/learn)

### Starting the bundler for the first time
1. In the terminal, `cd` to the project directory.
2. Run `yarn` to restore dependencies.
3. Run `expo start` to start running the app.

### Running the app in the iOS simulator or Android emulator OR web browser
1. Once `expo start` kicks off and you see the QR code on the screen and directions for running, press `i` for the iOS simulator, `a`for the Android emulator, or `w` for web.

### Running on an Android device
1. Open the Expo app on your device.
2. Go to the projects tab.
3. Open up the QR code scanner and scan the code that appears in the terminal.

### Running on an iOS device
1. Once `expo start` kicks off and you see the QR code on the screen, press `s` to create an account or sign into an existing account.
2. On the iOS Expo app, sign into the same Expo account.
3. In the projects tab, you'll see your currently streaming app. Tap on the app and it will start running.

### Building a binary app
1. Run `expo build:ios` or `expo build:android`
2. Follow the prompts about keystores and certs and stuff (note that iOS requires a paid Apple developer account)
3. Wait

### Publishing OTA updates
1. Run `expo publish`
2. Your binary apps will download the latest JS on the next reload

## Special Notes for the other branches

### Part 2 - Web app

* Can customize webpack, babel, and other configs with `expo customize:web` (see https://docs.expo.io/guides/customizing-webpack/)

### Part 3 - Deploy Everywhere

* Followed the directions for setting up Github Pages deploy here: https://docs.expo.io/distribution/publishing-websites/#github-pages. Additionally, followed the directions for setting up Github Pages itself.
* Run `yarn web-build` to build the Expo for web package. Then run `yarn web-deploy` to deploy to Github pages
* Would also work great with Firebase and others.

### Part 4 - Electron

* Followed the directions for setting up Electron here - https://docs.expo.io/guides/using-electron/
* New commands: `yarn electron-start` to run in debug mode, `yarn electron-build` to build in directory format. Then can run .app file.
* Can't run electron from same command as web and mobile, but can run both at the same time

### Part 5 - Component library

* Borrowed setup from React Native Material Bread (https://github.com/codypearce/material-bread)
* This library is not transpiled into a distribution build (this is the React Native way).

To use in mobile: just create mobile app, add to package.json, and import:
1. `expo init`
2. cd to directory add `yarn add https://github.com/llamaluvr/react-native-material-initials.git`
3. Import and use
```
import React from "react";
import { InboxScreen } from "expo-everywhere";

function App() {
  return (
     <InboxScreen />
  );
}

export default App;
```

To use in web (create-react-app):
1. `npx create-react-app my-app` and `cd my-app`
2. Add library and peer dependencies to package.json under dependencies:
```
    "expo-everywhere": "https://github.com/llamaluvr/expo-everywhere.git#part-5-component-library",
    "expo": "~38.0.8",
    "react": "~16.11.0",
    "react-dom": "~16.11.0",
    "react-native": "https://github.com/expo/react-native/archive/sdk-38.0.2.tar.gz",
    "react-native-web": "~0.11.7",
    "react-scripts": "3.4.1"
 ```
 3. Run `yarn`.
 4. Run `yarn add --dev @babel/plugin-proposal-class-properties customize-cra react-app-rewired`
 5. Create a `config-overrides.js` file and add the following:
 ```
 const path = require('path');
const { override, addBabelPlugins, addWebpackResolve, babelInclude } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
  babelInclude([
    path.resolve(__dirname, 'node_modules/expo-everywhere'),
    path.resolve(__dirname, 'node_modules/react-native-gifted-chat'),
    path.resolve(__dirname, 'node_modules/@expo/vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-lightbox'),
    path.resolve(__dirname, 'node_modules/react-native-material-initials'),
    path.resolve(__dirname, 'node_modules/react-native-parsed-text'),
    path.resolve(__dirname, 'node_modules/react-native-typing-animation'),
    path.resolve(__dirname, 'src'),
  ]),
  addWebpackResolve({
    extensions: [".web.js", ".js"]
  })
);
```
6. Change your scripts in package.json to use rewired:
```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```
7. Run `yarn start`

Non-CRA web instructions are generally the same, just involving a different syntax for directly editing babel/ webpack files to transpile the react native dependencies. See the instructions from Material Bread (https://material-bread.org/getting-started/web/) and just addjust to account for the different libraries in the `babelInclude()` above.

# Companion Presentation

[Here's the slides!](https://docs.google.com/presentation/d/1DvLeKXz8puvmfjF1yFK06wfg2iv5GHGLTdtPhGh6U_w/edit?usp=sharing)
