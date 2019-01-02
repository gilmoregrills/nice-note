# Modules

These subdirectories are the modules that make up the app. 

- The webhook that handles requests from Dialogflow in `/backend`
- The electron app codebase for the desktop app in `/frontend-desktop`
- The react-native/expo code for the mobile app in `/frontend-mobile`

The electron and react-native apps will both use the components in 
`../components`, and each module directory will just define its own 
config files and entrypoint `index.html` or `App.js` files. 
