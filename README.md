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

# Companion Presentation

[Here's the slides!](https://docs.google.com/presentation/d/1DvLeKXz8puvmfjF1yFK06wfg2iv5GHGLTdtPhGh6U_w/edit?usp=sharing)
