var express     = require("express"),
    router      = express.Router(),
    ctrlPages   = require("../controllers/pages.controllers.js"),
    ctrlPosts  = require("../controllers/posts.controllers.js"),
    ctrlVideos  = require("../controllers/videos.controllers.js"),
    ctrlUsers   = require("../controllers/users.controllers.js");
    
router
    .route('/pages')
    .get(ctrlPages.pagesGetAll) //ctrlUsers.authenticate, 
    .post(ctrlPages.pagesPostOne);
    
router
    .route('/pages/:pageId')
    .get(ctrlPages.pagesGetOne);
    
router
    .route('/pages/:pageId/sections')
    .get(ctrlPages.sectionsGetAll)
    .post(ctrlPages.sectionsAddOne);
    
router
    .route('/posts')
    .get(ctrlPosts.postsGetAll);
    
router
    .route('/pages/:pageId/sections/:sectionId/responses')
    .post(ctrlPosts.postsPostOne);
    
router
    .route('/videos')
    .get(ctrlVideos.videosGetAll);
    
router
    .route('/videos/:videoId')
    .get(ctrlVideos.videosGetOne);
    
router
    .route('/pages/:pageId/sections/:sectionId/video')
    .post(ctrlVideos.videosPostOne);
    
    
// Add Authentication Routes
router
    .route('/users/register')
    .post(ctrlUsers.register);
    
router
    .route('/users/login')
    .post(ctrlUsers.login);
    
module.exports = router;