angular.module('charterwars').controller('ForumController', ForumController);

function ForumController($scope){
    $scope.showNavigation(true);
    
    var vm = this;
    
    vm.title = 'Forum Page';
}