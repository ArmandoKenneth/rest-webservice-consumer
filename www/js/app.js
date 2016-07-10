// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('wsconsumer', ['ionic', 'wsconsumer.services', 'wsconsumer.controllers', 'ngResource', 'ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'templates/users/users.html',
    controller: 'UserListCtrl'
  })
  .state('users', {
    url: '/users',
    templateUrl: 'templates/users/users.html',
    controller: 'UserListCtrl'
  })
  .state('userdetails', {
    url: '/user/details',
    cache: false,
    templateUrl: 'templates/users/details.html',
    controller: 'UserDetailsCtrl'
  })
  .state('posts', {
    url: '/posts',
    cache: false,
    templateUrl: 'templates/posts/posts.html',
    controller: 'PostsCtrl'
  })
  .state('contacts', {
    url: '/contacts',
    cache: false,
    templateUrl: 'templates/contacts/contactList.html',
    controller: 'ContactsCtrl'
  })
  .state('post', {
    url: '/post',
    cache: false,
    templateUrl: 'templates/posts/post.html',
    controller: 'PostDetailsCtrl'
  });

  $urlRouterProvider.otherwise('/');  
});

app.controller('MainCtrl', function($scope) {
  
});