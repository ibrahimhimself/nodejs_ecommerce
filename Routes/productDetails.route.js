const router = require('express').Router();
const productDetailsController = require('../Controllers/productDetails.controller')

router.get('/:id',productDetailsController.getProductDetails)

module.exports = router ;