angular.module('charterwars').directive('cwNavigation', cwNavigation);

function cwNavigation(){
    return{
        restrict: 'E',
        templateUrl: 'angular-app/shared/navigation-directive/navigation-directive.html'
    };
}