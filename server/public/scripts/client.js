var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAnimate', 'bc.TelephoneFilter']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/login', {
      templateUrl: '/views/templates/login.html',
      controller: 'LoginController as lc',
    })
    .when('/cars', {
      templateUrl: '/views/templates/landing.page.html',
      controller: 'LandingPageController as lpc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/admin', {
      templateUrl: '/views/templates/admin.landing.html',
      controller: 'AdminController as ac',
      resolve: {
        getuser : function(AdminService){
          return AdminService.getuser();
        }
      }
    })    
    .when('/authorization', {
      templateUrl: '/views/templates/authorization.html',
      controller: 'AuthController as ac',
      resolve: {
        getuser : function(AdminService){
          return AdminService.getuser();
        }
      }
    })
    .when('/mechanic', {
      templateUrl: './views/templates/mechanic.landing.html',
      controller: 'MechanicController as mc',
      resolve: {
        getuser : function(AdminService){
          return AdminService.getuser();
        }
      }
    })
    .when('/checklist/:checklist_id', {
      templateUrl: '/views/templates/checklist.html',
      controller: 'ChecklistController as cc',
      resolve: {
        getuser : function(AdminService){
          return AdminService.getuser();
        }
      }
    })
    .when('/requestService', {
      templateUrl: '/views/templates/request.service.html',
      controller: 'RequestController as rc'
    })
    .otherwise({
      redirectTo: '/cars'
    });
});
