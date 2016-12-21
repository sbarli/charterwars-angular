angular.module('charterwars').controller('DebateModalController', DebateModalController);

function DebateModalController($uibModalInstance){
    var vm = this;
    
    vm.closeModal = function(){
        $uibModalInstance.close();
    };
}