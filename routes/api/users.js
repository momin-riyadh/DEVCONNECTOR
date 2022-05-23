const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Test route
// @access  Public

router.get('/', (req, res) => {
    console.log(req.body);
    res.send('User Route');
});


module.exports = router;