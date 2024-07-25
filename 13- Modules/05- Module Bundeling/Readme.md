### Steps to follow

- Initialize a Node.js Project: Run npm init -y.

- Install Webpack and Webpack CLI: Run ```npm install --save-dev webpack webpack-cli```

- Create JavaScript Files: Create ```index.js```, ```module1.js```, and ```module2.js``` with your code.

- Create Webpack Configuration File:  ```webpack.config.js ```

- Update NPM Scripts: Modify ```package.json``` to use the new config file in  ```"type": "module"``` and the scripts section: ```"build": "webpack --config webpack.config.mjs"```

- Bundle the JavaScript Files: Run the build script with npm run build.

- Create HTML File: Create ```index.html``` to include the bundled ```bundle.js``` file.