const mongoose = require('mongoose');
const slugify = require('slugify');
// const User = require('./userModel');
// const validator = require('validator');

const threadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A thread must have a name'],
      trim: true,
      maxlength: [40, 'A thread name must have less or equal then 40 characters']
      // validate: [validator.isAlpha, 'Thread name must only contain characters']
    },
    bodyText: {
      type: String
      // validate: [validator.isAlpha, 'Thread name must only contain characters']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Thread must belong to a user']
    },
    slug: String,
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// threadSchema.index({ price: 1 });
threadSchema.index({ slug: 1 });
// prov me krijau ma teper reviewsa ne thread !!!!!!!!!!!!!!!!!
// threadSchema.index({ user: 1 }, { unique: true });

// Virtual populate
threadSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'thread',
  localField: '_id'
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
threadSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});


threadSchema.pre(/^find/, function(next) {
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


// QUERY MIDDLEWARE

threadSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  next();
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;
