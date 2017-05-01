angular.module('charterwars').controller('ContentController', ContentController);

function ContentController($scope, $location, $timeout, $filter, $route, anchorSmoothScroll, pageDataFactory, pageSectionColorService){
    $scope.showNavigation(true);
    
    var vm = this;
    
    var colors = pageSectionColorService.getIndexColors();
    
    $timeout(function(){
        var curTab = $route.current.activetab;
        vm.backToTop(curTab);
        pageDataFactory.getPageAssets(curTab).then(function(assets){
            vm.pageAssets = assets;
            pageDataFactory.pageList().then(function(response){
                var pages = response.data;
                vm.page = ($filter('filter')(pages, {"name":vm.pageAssets.name}))[0];
                angular.forEach(vm.page.sections, function(section, i){
                    section.background = colors[i];
                });
            }).catch(function(pgErr){
                console.log('page list err', pgErr);
            });
        }).catch(function(assetErr){
            console.log('get asset err', assetErr);
        });
    }, 100);
    
    
    vm.goToVids = function (index){
        var next_idx;
        if(index === 'first'){
            next_idx = 0;
        }else{
            next_idx = index + 1;
        }
        var eID = vm.pageAssets.navId + next_idx;
        anchorSmoothScroll.scrollTo(eID);
    };
    
    vm.prevVid = function (index){
        var prev_idx = index - 1;
        var eID = vm.pageAssets.navId + prev_idx;
        anchorSmoothScroll.scrollTo(eID);
    };
    
    vm.backToTop = function (eID){
        anchorSmoothScroll.scrollTo(eID);
    };
    
    vm.post = function(section){
        var pageId = vm.page._id;
        var sectionId = section._id;
        var responseData = {
            name: vm.name,
            answer: section.answer
        };
        
        console.log('responseData', responseData);
        
        if(!section.answer){
            section.error = 'Please add an answer!';
        }else{
            pageDataFactory.postResponse(pageId, sectionId, responseData).then(function(response){
                console.log(response.status);
                if(response.status === 201){
                    section.responded = true;
                }
            }).catch(function(err){
                console.log(err);
            });
        }
    };
    
}