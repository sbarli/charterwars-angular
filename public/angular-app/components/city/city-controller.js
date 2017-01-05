angular.module('charterwars').controller('CityController', CityController);

function CityController($uibModal, $location, anchorSmoothScroll){
    var vm = this;
    
    vm.openModal = function(){
        var modalInstance = $uibModal.open({
            controller: CityModalController,
            controllerAs: 'vm',
            templateUrl: 'angular-app/components/city/city-modal.html'
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
    
    // vm.openModal();
    
    vm.goToVids = function (eID){
      $location.hash(eID);
      anchorSmoothScroll.scrollTo(eID);
    };
}