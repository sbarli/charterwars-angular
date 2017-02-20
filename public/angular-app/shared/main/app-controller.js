angular.module('charterwars').controller('AppController', AppController);

function AppController($scope, $route, $location, $timeout){
    
    $scope.navigation = true;
    
    $scope.showNavigation = function(show){
        $scope.navigation = show;
    };
    
    $scope.isActive = function(viewLocation){
        return viewLocation===$route.current.activetab;
    };
}