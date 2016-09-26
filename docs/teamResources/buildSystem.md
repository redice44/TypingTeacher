# Build System

We'll be using webpack for our build system. It's a pretty in depth piece of software, but I'll be handling getting that up and running for us. All you'll need to do is run the command to get it going, and it will build our project for us. More on the workflow later. Be sure to have installed all the modules already!

> npm run dev

This will watch our app for changes and apply the appropriate transformations to build the project.

> npm start

This will start the webserver and restart it when changes are made to the server. Note that these two commands will continue to run, so you'll need to have at least two terminals open, or you can fork them, but it's more annoying to kill in my opinion.

You may have to globally install nodemon and webpack to get some of the scripts to work.

> sudo npm install -g nodemon webpack
