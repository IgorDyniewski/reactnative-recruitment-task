
# React Native UI Kit Recruitment Task
Simple React Native application built with Expo. 

### What works?
When you run this app for sure you need to check out following parts of the app:
- You can swipe between different addresses 
- You can scroll avaialable slots horizontally - buggy on Andorid
- Click profile picture to reveal animated modal with all atoms from the project
- Tab indicators have custom animation and are integrated with the rest of the components via Redux.

### Getting started 🚀
Run following commands to start this project.

1. Install packages:
```sh
yarn
```
2. *Make sure `postinstall script was excecuted`*. If not, run command bellow:
```sh
yarn postinstall
```
This script needs to apply some patches to `tailwind-rn`. By default yarn should run it automatically.

3. Start expo CLI:
```
yarn start
```
or
```
yarn start:prod
```
Make sure you have `expo-cli` installed. If not you will we prompted to install it globally. Remember that you might need sudo permissions for that.
