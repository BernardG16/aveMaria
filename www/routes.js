angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.options', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/options.html',
        controller: 'optionsCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.prayerIntention', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prayerIntention.html',
        controller: 'prayerIntentionCtrl'
      }
    }
  })

  .state('menu.rosary', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rosary.html',
        controller: 'rosaryCtrl'
      }
    }
  })

  .state('menu.aTest',{
    url: '/page6',
    views: {
      'side-menu21':{
        templateUrl: 'templates/aTest.html',
        controller: 'rosaryCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')



});
