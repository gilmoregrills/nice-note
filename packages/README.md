# Packages

These subdirectories are the packages/components that make up the app. 

- The webhook that handles requests from Dialogflow in `/app-backend`
- The electron app codebase for the desktop app in `/app-frontend-desktop`
- The react-native/expo code for the mobile app in `/app-frontend-mobile`

The electron and react-native apps will both use the components in 
the folders named `/component-<name>`, and each module directory will 
just define its own config files and entrypoint `index.html` or `App.js` files. 
