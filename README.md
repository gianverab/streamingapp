This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Install Dependencies

First, you will need to install all the necessary dependencies, run the following command from the root of your React Native project:

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Start Metro

Second, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

For Android, <kbd>react-native-screens</kbd> package requires one additional configuration step to properly work on Android devices. Edit <kbd>MainActivity.kt</kbd> file which is located under <kbd>android/app/src/main/java/com/helloworld/</kbd>.

Add the highlighted code to the body of <kbd>MainActivity</kbd> class:

```
class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
```

and make sure to add the following import statement at the top of this file below your package statement:

```sh
import android.os.Bundle;
```

After finish this step run:

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 4: Reload your app

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run your React Native App. :partying_face:

# Troubleshooting

If you're having issues getting the above steps to work, see:

## Metro crashing

Restart your metro server by running:

```sh
# Using npm
npm start --reset-cache

# OR using Yarn
yarn start --reset-cache
```

## Node and Java Version

Make sure you have the following versions installed:

### Node

```sh
node -v
# v18.20.8
```

### Java

```sh
java -version
# openjdk version "17.0.14" 2025-01-21
```
