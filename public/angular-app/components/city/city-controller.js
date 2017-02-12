angular.module('charterwars').controller('CityController', CityController);

function CityController($location, anchorSmoothScroll){
    var vm = this;
    
    vm.goToVids = function (eID){
      $location.hash(eID);
      anchorSmoothScroll.scrollTo(eID);
    };
}