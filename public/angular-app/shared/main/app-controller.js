angular.module('charterwars').controller('AppController', AppController);

function AppController($scope){
    
    $scope.navigation = true;
    
    $scope.showNavigation = function(show){
        $scope.navigation = show;
    };
}