const multer = require('multer');
const sharp = require('sharp');
const Thread = require('./../models/threadModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! pls upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadThreadImages = upload.fields([
  {name: 'imageCover', maxCount: 1},
  {name: 'images', maxCount: 3}
]);


exports.resizethreadImages = catchAsync(async (req, res, next) => {
  if(!req.files.imageCover || !req.files.images) return next();

  // 1) cover image
  req.body.imageCover = `thread-${req.params.id}-${Date.now()}-cover.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(2000,1333)
    .toFormat('jpeg')
    .jpeg({quality: 90})
    .toFile(`public/img/threads/${req.body.imageCover}`);

  // 2) images
  req.body.images = [];

 await Promise.all( 
  req.files.images.map(async (file, i) => {
    const filename = `thread-${req.params.id}-${Date.now()}-${i+1}.jpeg`;
    
    await sharp(file.buffer)
    .resize(2000,1333)
    .toFormat('jpeg')
    .jpeg({quality: 90})
    .toFile(`public/img/threads/${filename}`);

    req.body.images.push(filename);
  })
);

  next();
});

exports.aliasTopThreads = (req, res, next) => {
  req.query.limit = '5';
  req.query.fields = 'name';
  next();
};

// nese don qe tkesh komentet edhe tek 'kejt' reviewsat ather jepja 2nd argument ni objekt njejt sikur te getThread func
exports.getAllThreads = factory.getAll(Thread, { path: 'reviews' });
exports.getThread = factory.getOne(Thread, { path: 'reviews' });
exports.createThread = factory.createOne(Thread);
exports.updateThread = factory.updateOne(Thread);
exports.deleteThread = factory.deleteOne(Thread);
