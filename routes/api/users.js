const express = require("express");
const router = express.Router();

// @route   GET api/users/test
// @desc    users 라우트 테스트
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "users 동작" }));

module.exports = router;
