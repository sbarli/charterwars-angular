angular.module('charterwars').factory('pageDataFactory', pageDataFactory);

function pageDataFactory($http){
    return {
        pageList: pageList,
        sectionList: sectionList,
        responseList: responseList,
        postResponse: postResponse
    };
    
    function pageList(){
        return $http.get('/api/pages').then(complete).catch(failed);
    }
    
    function sectionList(id){
        return $http.get('/api/pages/' + id + '/sections').then(complete).catch(failed);
    }
    
    function responseList(pageId, sectionId){
        return $http.get('/api/pages/' + pageId + '/sections/' + sectionId + '/responses').then(complete).catch(failed);
    }
    
    function postResponse(pageId, sectionId, responseData){
        return $http.post('/api/pages/' + pageId + '/sections/' + sectionId + '/responses', responseData).then(complete).catch(failed);
    }
    
    function complete(response){
        return response;
    }
    
    function failed(err){
        console.log(err.statusText);
    }
}