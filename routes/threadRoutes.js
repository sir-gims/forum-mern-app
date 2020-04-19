const express = require('express');
const threadController = require('../controllers/threadController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');
const reviewController = require('./../controllers/reviewController');

const router = express.Router();

// router.param('id', threadController.checkID);

// POST /thread/234fad4/reviews
// GET /thread/234fad4/reviews

router.use('/:threadId/reviews', reviewRouter);

router
  .route('/top-5')
  .get(threadController.aliasTopThreads, threadController.getAllThreads);

router
  .route('/')
  .get(threadController.getAllThreads)
  .post(
    authController.protect,
    reviewController.setThreadUserIds,
    // authController.restrictTo('admin'),
    threadController.createThread
  );

router
  .route('/:id')
  .get(threadController.getThread)
  .patch(
    authController.protect,
    // authController.restrictTo('admin'),
    threadController.uploadThreadImages,
    threadController.resizethreadImages,
    threadController.updateThread
  )
  .delete(
    authController.protect,
    // authController.restrictTo('admin'),
    threadController.deleteThread
  );

module.exports = router;
