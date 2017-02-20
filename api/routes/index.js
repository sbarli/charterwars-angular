var express     = require("express"),
    router      = express.Router(),
    ctrlPages   = require("../controllers/pages.controllers.js"),
    ctrlPosts  = require("../controllers/posts.controllers.js"),
    ctrlUsers   = require("../controllers/users.controllers.js");
    
router
    .route('/pages')
    .get(ctrlPages.pagesGetAll)
    .post(ctrlPages.pagesPostOne);
    
router
    .route('/pages/:pageId')
    .get(ctrlPages.pagesGetOne);
    
router
    .route('/pages/:pageId/sections')
    .get(ctrlPages.sectionsGetAll)
    .post(ctrlPages.sectionsAddOne);
    
router
    .route('/pages/:pageId/sections/:sectionId/responses')
    .post(ctrlPosts.postsPostOne);
    
router
    .route('/posts')
    .get(ctrlPosts.postsGetAll);
    
    
// Add Authentication Routes
router
    .route('/users/register')
    .post(ctrlUsers.register);
    
router
    .route('/users/login')
    .post(ctrlUsers.login);
    
module.exports = router;