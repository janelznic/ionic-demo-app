// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

   .state('tab.welcome', {
    url: '/welcome',
    views: {
      'tab-welcome': {
        templateUrl: 'templates/tab-welcome.html',
        controller: 'WelcomeCtrl'
      }
    }
  })

  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'AboutCtrl'
      }
    }
  })

  .state('tab.skills', {
      url: '/skills',
      views: {
        'tab-skills': {
          templateUrl: 'templates/tab-skills.html',
          controller: 'SkillsCtrl'
        }
      }
    })
    .state('tab.skill-detail', {
      url: '/skills/:skillId',
      views: {
        'tab-skills': {
          templateUrl: 'templates/skill-detail.html',
          controller: 'SkillDetailCtrl'
        }
      }
    })

  .state('tab.cv', {
    url: '/cv',
    views: {
      'tab-cv': {
        templateUrl: 'templates/tab-cv.html',
        controller: 'CVCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
   });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/welcome');

  // position of main menu tabs
  $ionicConfigProvider.tabs.position("bottom");
});
