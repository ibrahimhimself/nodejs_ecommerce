const router = require('express').Router();
const homeController = require('../Controllers/Home.controller');

router.get("/", homeController.getHome)

module.exports = router ;