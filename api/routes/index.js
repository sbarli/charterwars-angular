var express     = require("express"),
    router      = express.Router(),
    ctrlPosts  = require("../controllers/posts.controllers.js"),
    ctrlUsers   = require("../controllers/users.controllers.js");
    
router
    .route('/posts')
    .get(ctrlPosts.postsGetAll)
    .post(ctrlPosts.postsPostOne);
    
    
// Add Authentication Routes
router
    .route('/users/register')
    .post(ctrlUsers.register);
    
router
    .route('/users/login')
    .post(ctrlUsers.login);
    
module.exports = router;