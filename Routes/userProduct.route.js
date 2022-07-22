const router = require('express').Router();
const userProductController = require('../Controllers/userProduct.controller');

router.get("/userProduct", userProductController.getProduct)

module.exports = router ;