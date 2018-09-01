const express = require("express");
const router = express.Router();

// @route   GET api/posts/test
// @desc    posts 라우트 테스트
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "posts 동작" }));

module.exports = router;
