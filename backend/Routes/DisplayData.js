const express = require('express');
const router = express.Router();

router.post('foodData', (req, res) => {
    try {
        res.setEncoding([global.food_items,global.foodCategory])
    }
    catch(error) {
        console.error(error.message);
        res.setEncoding("Server Error")
    }
})


module.exports = router;