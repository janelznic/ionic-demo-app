ionic-demo-app
==============
Demo application in IONIC framework powered by Apache Cordova

Pre-installation requirments
----------------------------
* Android SDK (version >= 21)
* JDK (version >= 1.8.0)
* Node.js LTS (version >= 8.9.1)
* Yarn (version >= 1.3.2)
* Gulp (version >= 3.9.1)
* Platform independent.


Installation instructions
-------------------------
1. Install Cordova, IONIC, Gulp:

  `$ npm i -g cordova ionic`

2. Clone git repository:

 `$ git clone git@github.com:janelznic/ionic-demo-app.git`

3. Go to directory 'ionic-demo-app/app':

 `$ cd ionic-demo-app/app`

4. Install all dependencies:

 `$ yarn`


Run in browser
--------------
1. Development built-in webserver

  `$ ionic serve --address 0.0.0.0 --port 8100`


Build to smartphone
-------------------
1. Add platform

  `$ ionic cordova platform add android`

2. Build the Android app

  `$ ionic cordova build android`

3. Deploy app to Android device

  `$ ionic cordova run android`
