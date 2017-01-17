angular.module('charterwars').controller('DebateController', DebateController);

function DebateController($http, $uibModal, $location, anchorSmoothScroll){
    var vm = this;
    
    vm.transitionTitle = 'Debate Transition Video';
    
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
    
    // vm.openModal();
    
    vm.goToVids = function (index){
        var next_idx;
        if(index === 'first'){
            next_idx = 0;
        }else{
            next_idx = index + 1;
        }
        var eID = 'debate-vid-' + next_idx;
        $location.hash(eID);
        anchorSmoothScroll.scrollTo(eID);
    };
    
    vm.post = function(section){
        var post = {
            name: vm.name,
            answer: section.answer,
            question: section.id
        };
        
        console.log('post', post);
        
        if(!section.answer){
            section.error = 'Please add an answer!';
        }else{
            $http.post('/api/posts', post).then(function(result){
                console.log(result);
                section.success = 'Successful post!';
                section.error = null;
            }).catch(function(err){
                console.log(err);
                section.error = 'There was an error. Please try again.';
            });
        }
    };
    
    vm.sections = [
        {
            "title": "Choice",
            "question": "Are charter schools really a choice?",
            "url": "https://player.vimeo.com/video/182436417",
            "id": 1
        },  
        {
            "title": "Competition",
            "question": "Is competition important in education?",
            "url": "https://player.vimeo.com/video/182436415",
            "id": 2
        },  
        {
            "title": "Innovation",
            "question": "Is innovation important in education?",
            "url": "https://player.vimeo.com/video/182436415",
            "id": 3
        } 
    ];
    
}