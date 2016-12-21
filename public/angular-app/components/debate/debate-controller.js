angular.module('charterwars').controller('DebateController', DebateController);

function DebateController($uibModal){
    var vm = this;
    
    vm.openModal = function(){
        var modalInstance = $uibModal.open({
            controller: DebateModalController,
            controllerAs: 'vm',
            templateUrl: 'angular-app/components/debate/debate-modal.html'
        });
        
        modalInstance.result.then(
            function handleResolve(response){
                console.log('modal closed');
            },
            function handleReject(err){
                console.log('error: ', err);
            }
        );
    };
    
    vm.openModal();
}