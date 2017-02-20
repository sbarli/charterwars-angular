angular.module('charterwars').factory('pageDataFactory', pageDataFactory);

function pageDataFactory($http, $q){
    return {
        getPageAssets:getPageAssets,
        pageList: pageList,
        sectionList: sectionList,
        postResponse: postResponse,
        responseList: responseList,
        getResponse:getResponse,
        getVideo:getVideo
    };
    
    function getPageAssets(page){
        var cityAssets = {
            name: 'The City',
            header: 'angular-app/assets/headers/city-header.png',
            upArrow: 'angular-app/assets/content-nav/city-up-outline.png',
            downArrow: 'angular-app/assets/content-nav/city-down-outline.png',
            nextArrow: 'angular-app/assets/content-nav/city-next-arrow.png',
            prevArrow: 'angular-app/assets/content-nav/city-prev-arrow.png',
            navId: 'city-vid-'
        };
        
        var debateAssets = {
            name: 'The Debate',
            header: 'angular-app/assets/headers/debate-header.png',
            upArrow: 'angular-app/assets/content-nav/debate-up-outline.png',
            downArrow: 'angular-app/assets/content-nav/debate-down-outline.png',
            nextArrow: 'angular-app/assets/content-nav/debate-next-arrow.png',
            prevArrow: 'angular-app/assets/content-nav/debate-prev-arrow-test.png',
            navId: 'debate-vid-'
        };
        
        var deferred = $q.defer();
        
        if(page === 'city'){
            deferred.resolve(cityAssets);
        }else if(page === 'debate'){
            deferred.resolve(debateAssets);
        }else{
            deferred.reject('Failed to find page assets');
        }
        
        return deferred.promise;
    }
    
    function pageList(){
        return $http.get('/api/pages').then(complete).catch(failed);
    }
    
    function sectionList(id){
        return $http.get('/api/pages/' + id + '/sections').then(complete).catch(failed);
    }
    
    function postResponse(pageId, sectionId, responseData){
        return $http.post('/api/pages/' + pageId + '/sections/' + sectionId + '/responses', responseData).then(complete).catch(failed);
    }
    
    function responseList(){
        return $http.get('/api/posts').then(complete).catch(failed);
    }
    
    function getResponse(postId){
        console.log('post id: ' + postId);
        return $http.get('/api/posts/' + postId).then(complete).catch(failed);
    }
    
    function getVideo(videoId){
        console.log('video id: ' + videoId);
        return $http.get('/api/videos/' + videoId).then(complete).catch(failed);
    }
    
    function complete(response){
        return response;
    }
    
    function failed(err){
        console.log(err.statusText);
    }
}