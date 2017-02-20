angular.module('charterwars').factory('pageDataFactory', pageDataFactory);

function pageDataFactory($http){
    return {
        pageList: pageList,
        sectionList: sectionList,
        postResponse: postResponse,
        responseList: responseList,
        getResponse:getResponse
    };
    
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
    
    function complete(response){
        return response;
    }
    
    function failed(err){
        console.log(err.statusText);
    }
}