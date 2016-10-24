angular.module('railsGirls', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'tab/tabs.html'
    })
  .state('tab.agenda', {
    url: '/agenda',
    views: {
      'agenda-tab': {
        templateUrl: 'tab/agenda.html'
      }
    }
  })
  .state('tab.fotos', {
    url: '/fotos',
    views: {
      'fotos-tab': {
        templateUrl: 'tab/fotos.html'
      }
    }
  })
  .state('tab.mapa', {
    url: '/mapa',
    views: {
      'mapa-tab': {
        templateUrl: 'tab/mapa.html'
      }
    }
  })
  .state('tab.extras', {
    url: '/extras',
    views: {
      'extras-tab': {
        templateUrl: 'tab/extras.html',
        controller: 'ExtrasController'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/agenda');
	$ionicConfigProvider.scrolling.jsScrolling(false);
});
