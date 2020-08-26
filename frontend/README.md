# About
 This project has the following components:

> components/admin

Funtionalities: 
- add
- add
> components/employee

> components/customer

> components/login

> components/newaccount

--- 
# OnlineShopFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

--- 
# Creating a new Project Using Angular

## Updating and installing Angular CLI
We have to install all the dependencies before:
- Node.js


---
Angular CLI allows creating new Angular projects with a basic folder structure and other required features. It also provides utilities to create servers, generate components, build packages, etc.
Skip these steps if you have the latest version of everything and go to the [Creating a Basic Project section](#Initialization)  to create the project
> Updating the Angular Cli: Removing old versions

```
$ npm uninstall -g angular-cli
```

> Updating Angular: Removing old versions
```
npm uninstall -g @angular/cli
```

> Cleaning npm cache 

```
$ npm cache clean --force
```
> Angular Cli: Installing the latest version

```
$ npm install -g @angular/cli@latest
```

## Creation 

We can create a new project following the next steps: 


> 1. Creating a new project
- We'll be asked for some information about the project. So, in the first, after the execution of the command below, angular CLI will ask us ***"would you like to add Angular Routing?"*** type ***No***. Generating routines automatically could generate errors. We can create the routing later. In the next question just push enter until the process starts to create the files and folders.. 

```
$ ng new
```
> 2. Starting ng serve
- The command bellow compiles all the files of the project and starts a local server. This server reloads all the code and compilation when a change is detected in the code, so the project view will be updated automatically and we'll be able to see the changes in the browser without the need of re-starting the server.

```
$ ng serve
```

## Development 

we can create views for our app. Firstly we have to create components. A component is a piece of html view that will be showed in the browser.
Al the components are located in the directory: ***"src/app/components"*** (It`s a convention to develop an kept the project structure orgnized)

> Creating a component:
```
$ ng g component components/[name-component]
```

---

