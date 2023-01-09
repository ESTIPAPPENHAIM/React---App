const AppError = require("../error/AppError");
const Image = require("../model/image");

exports.createImg = async(req, res, next) =>{
    try {
        const newImg = await Image.create(req.body);
        res.status(201).json({newImg});
    } catch (error) { 
        next( new AppError("image failed", 400));
   }
};

exports.getAllImg = async(req, res, next) =>{
    try {
        const images = await Image.find();
        res.status(200).json({
            success: true,
            data: images
        });

    } catch (error) {
        next(new AppError("Bad Request", 400))
    }
};

exports.deleteImg = async(req, res, next) =>{
    try {
     await Image.deleteOne({_id: req.params._id})
        res.status(200).json({
            success: true,
            data: await Image.find()});
    } catch (error) { 
        next( new AppError(error, 400));
   }
};