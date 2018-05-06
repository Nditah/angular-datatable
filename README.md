# Angular5Datatable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Here, we’re going to use Angular CLI to install and setup an Angular 5 app.

Let’s install the Angular CLI with version 1.5.3.

> npm install -g @angular/cli@1.5.3

## Now, let’s create an app with below command.

> ng new angular5-datatable
## Install DataTable In Our Angular App
Firstly, we need to install the dependencies required for DataTable.
So, let’s do that for jQuery.

> npm install jquery --save
## Now, install the datatables.

> npm install datatables.net --save
> npm install datatables.net-dt --save
## Now, install the angular datatables.

> npm install angular-datatables --save
## Here, are few more.

> npm install @types/jquery --save-dev
> npm install @types/datatables.net --save-dev
Secondly, we’ve to import the jQuery and DataTable JS/CSS in our app.

## Here, you just need to add necessary CSS and Js in angular-cli.json to make it used in our app.
>...
>  "styles": [
        "../node_modules/datatables.net-dt/css/jquery.dataTables.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/datatables.net/js/jquery.dataTables.js"
      ],
>...

## Finally, we need to import the DataTableModule in our main module to make it available for all the components and allow them to start using DataTable: /src/app/app.module.ts

//Import DataTable
import { DataTablesModule } from 'angular-datatables';

...

  imports: [
    BrowserModule,
    DataTablesModule
  ],

  ## Learnt from https://www.thetechieshouse.com/simple-angular-5-datatable-example-tutorial/