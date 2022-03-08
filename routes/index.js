const express = require('express');
const router = express.Router();

global.Logger = require('../Logger');

// GET
const get_index = require("./pages/get/get_index");

// POST
const post_index = require("./pages/post/post_index");

// FUNCTION


/* [ - - - - - STATUS - - - - - ] */
router.get('/', (req, res, next) => {get_index(res, req);});
router.post('/', (req, res, next) => {post_index(req, res);});

module.exports = router;

