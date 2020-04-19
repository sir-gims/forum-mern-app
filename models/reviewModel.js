// review / rating / createdAt / ref to thread / ref to user
const mongoose = require('mongoose');
const Thread = require('./threadModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review can not be empty!']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    thread: {
      type: mongoose.Schema.ObjectId,
      ref: 'Thread',
      required: [true, 'Review must belong to a thread.']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user']
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// reviewSchema.index({ thread: 1, user: 1 }, { unique: true });
// reviewSchema.index({ thread: 1 }, { unique: true });

reviewSchema.pre(/^find/, function(next) {
  // this.populate({
  //   path: 'thread',
  //   select: 'name'
  // }).populate({
  //   path: 'user',
  //   select: 'name photo'
  // });

  this.populate({
    path: 'user',
    select: 'name photo'
  });
  next();
});


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
