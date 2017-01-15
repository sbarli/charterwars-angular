var express     = require("express"),
    router      = express.Router(),
    ctrlPages  = require("../controllers/pages.controllers.js"),
    ctrlPosts  = require("../controllers/posts.controllers.js"),
    ctrlUsers   = require("../controllers/users.controllers.js");
    
router
    .route('/posts')
    .get(ctrlPosts.postsGetAll)
    .post(ctrlPosts.postsPostOne);
    
// router
//     .route('/hotels/:hotelId')
//     .get(ctrlHotels.hotelsGetOne)
//     .put(ctrlHotels.hotelsUpdateOne)
//     .delete(ctrlHotels.hotelsDeleteOne);
    
// router
//     .route('/hotels/:hotelId/reviews')
//     .get(ctrlReviews.reviewsGetAll)
//     .post(ctrlUsers.authenticate, ctrlReviews.reviewsAddOne);
    
// router
//     .route('/hotels/:hotelId/reviews/:reviewId')
//     .get(ctrlReviews.reviewsGetOne)
//     .put(ctrlReviews.reviewsUpdateOne)
//     .delete(ctrlReviews.reviewsDeleteOne);
    
// Add Authentication Routes
router
    .route('/users/register')
    .post(ctrlUsers.register);
    
router
    .route('/users/login')
    .post(ctrlUsers.login);
    
module.exports = router;