const router = require("express").Router();
const imageController = require("../controllers/imageController");

router.get('/images', imageController.getAllImg);
router.post('/create', imageController.createImg );
router.delete('/delete', imageController.deleteImg);
module.exports = router;