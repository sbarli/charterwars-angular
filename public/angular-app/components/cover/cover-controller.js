angular.module('charterwars').controller('CoverController', CoverController);

function CoverController($scope){
    $scope.showNavigation(false);
    
    var vm = this;
    vm.title = 'Charter Wars';
}