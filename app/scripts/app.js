'use strict';

angular.module('starterApp', []);
// angular.module('starterApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });

angular.module('starterApp', ['ngMaterial']).controller('AppCtrl', function ($scope) {
  var tabs = [
    {
      title: 'pschoen',
      content: 'Tabs will become paginated if there isn\'t enough room for them.'
    },
    {
      title: 'pschrei',
      content: 'You can swipe left and right on a mobile device to change tabs.'
    }
  ];
  $scope.tabs = tabs;
  $scope.selectedIndex = 0;
  $scope.announceSelected = announceSelected;
  $scope.announceDeselected = announceDeselected;
  $scope.addTab = function (title, view) {
    view = view || title + ' Content View';
    tabs.push({
      title: title,
      content: view,
      disabled: false
    });
  };
  $scope.removeTab = function (tab) {
    for (var j = 0; j < tabs.length; j++) {
      if (tab.title === tabs[j].title) {
        $scope.tabs.splice(j, 1);
        break;
      }
    }
  };
  function announceDeselected(tab) {
    $scope.farewell = 'Goodbye ' + tab.title + '!';
  }
  function announceSelected(tab) {
    $scope.greeting = 'Hello ' + tab.title + '!';
  }
});