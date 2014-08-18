var controllers = {};

controllers.HeaderController = function ($scope, $location) {
  $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
  };
};

controllers.View1Controller = function($scope) {
  //TODO: implementation
};

controllers.View2Controller = function ($scope) {
  //TODO: implementation
};

myApp.controller(controllers);
