## Installation

* Install latest node.js: https://nodejs.org​
* Install latest yarn package manager: https://yarnpkg.com/​
* Install angular cli: `npm install -g @angular/cli`
* Install node modules by running terminal command `yarn install`
* Run the app `yarn start` or `ng serve --open`
* For build production files use `yarn build` or `ng build` (build to /dist/ folder)

## Reference

[https://github.com/angular/angular](https://github.com/angular/angular)


## Command to build script without compressed build:
* dev: ng build --outputHashing=all --outputPath=[INTENDED_PATH_FOR_BUILD]
* prod: ng build --prod --outputHashing=all --outputPath=[INTENDED_PATH_FOR_BUILD]
* prod: ng build --configuration=qa --outputHashing=all --outputPath=[INTENDED_PATH_FOR_BUILD]

## Command to build script with compressed build:
* dev: npm run build [INTENDED_PATH_FOR_COMPRESSED_BUILD]
* prod: npm run build:prod [INTENDED_PATH_FOR_COMPRESSED_BUILD]
* prod: npm run build:qa [INTENDED_PATH_FOR_COMPRESSED_BUILD]


