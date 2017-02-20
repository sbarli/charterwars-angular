angular.module('charterwars').controller('VideosController', VideosController);

function VideosController($scope, $location, $route, $timeout, pageDataFactory){
    $scope.showNavigation(false);

    $timeout(function(){
        if($route.current.params.id){
            var videoId = $route.current.params.id;
            getVideo(videoId);
        } else {
            vm.noVideo = true;
        }
    }, 100);
    
    function getVideo(videoId){
        pageDataFactory.getVideo(videoId).then(function(resp){
            vm.video = resp.data;
        }).catch(function(err){
            console.log('could not get video', err);
            vm.noVideo = true;
        });
    }
    
    var vm = this;
    
    vm.title = 'Videos Page';
}