const express = require('express');
const router = express.Router();

global.Logger = require('../Logger');

// GET
const get_index = require("./pages/get/get_index");

// POST
const post_index = require("./pages/post/post_index");

// FUNCTION


/* [ - - - - - STATUS - - - - - ] */
router.get('/', (req, res) => {get_index(res, req);});
router.post('/', (req, res) => {post_index(req, res);});


module.exports = router;

