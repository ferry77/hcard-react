# hCard Builder

Frameworks/Tools used :
  - Foundation site 6 
  - Yeoman generator-react-webpack

Components
  - src/components/hCard/components/FormComponent.js
  - src/components/hCard/components/PreviewComponent.js
  - src/components/Main.js

The assumption is at later point state will be managed on higher level structure such as using redux store.
So here hCard components is stateless components, it receives props from the main hCard app (Main.js). It also maintain one directional data flow, any form data mutation is managed by handleFormChange method in Main.js

### Installation

You need Node & Npm installed globally:

```sh
$ npm i -g gulp
```

```sh
$ git clone https://github.com/ferry77/hcard-react
$ cd hcard-react
$ npm install
$ npm run serve
```

