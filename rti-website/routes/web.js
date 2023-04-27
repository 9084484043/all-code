require('../config/global_constants');
var web = {
    configure: (router, io, db) => {
        app = router;
        require('../modules/contact/contactRoutes');
        require('../modules/user/userRoutes');
        require('../modules/subscribe/subscribeRoutes');
        require('../modules/job/jobRoutes');
        require('../modules/apply/applyRoutes');
        // require(API_MODULES_PATH+'job');     

        app.use('*', (req, res, next) => {
            const err = new AppError(404, 'fail', 'undefined route');
            next(err, req, res, next);
        });

    }
}

module.exports = web;