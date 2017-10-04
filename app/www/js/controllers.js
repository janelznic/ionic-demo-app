angular.module('starter.controllers', [])

.controller('WelcomeCtrl', function($scope) {})

.controller('AboutCtrl', function ($scope) { })

.controller('SkillsCtrl', function($scope, Skills) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.skills = Skills.all();
  $scope.remove = function(skill) {
    Skills.remove(skill);
  };
})

.controller('SkillDetailCtrl', function($scope, $stateParams, Skills) {
  $scope.skill = Skills.get($stateParams.skillId);
})

.controller('CVCtrl', function ($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/cv-detail.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function () {
    $scope.modal.show();
    $scope.imgUrl = "img/cv.png"
  }
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFunc: true
  };
});
