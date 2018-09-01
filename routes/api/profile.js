const express = require("express");
const router = express.Router();

// @route   GET api/profile/test
// @desc    profile 라우트 테스트
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "profile 동작" }));

module.exports = router;
