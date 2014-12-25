'use strict';

var app = angular.module('starterApp', ['ngMaterial']).run(function($templateCache,$http){; 
// angular.module('starterApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
    $http.get('templates/dialog_new_entry.html', {cache:$templateCache});
   });

app.controller('dialogCtrl', function($scope, $mdDialog) {
  $scope.showNewEntry = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'templates/dialog_new_entry.html',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

app.controller('tabCtrl', function ($scope) {
  var tabs = [
    {
      title: 'Benutzer 1',
      content: 'Tabs will become paginated if there isn\'t enough room for them.'
    },
    {
      title: 'Benutzer 2',
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

app.controller('SubheaderAppCtrl', function($scope) {
    $scope.messages = [
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry, that should be formated.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
      {
        on: '2014-12-19',
        duration: '5.5',
        text: 'This is a custom time entry.'
      },
    ];
});