angular.module('charterwars').controller('CityController', CityController);

function CityController($location, anchorSmoothScroll, $scope){
    $scope.showNavigation(true);
    
    var vm = this;
    
    vm.goToVids = function (eID){
      $location.hash(eID);
      anchorSmoothScroll.scrollTo(eID);
    };
}