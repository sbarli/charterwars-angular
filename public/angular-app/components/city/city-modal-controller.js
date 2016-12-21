angular.module('charterwars').controller('CityModalController', CityModalController);

function CityModalController($uibModalInstance){
    var vm = this;
    
    vm.closeModal = function(){
        $uibModalInstance.close();
    };
}