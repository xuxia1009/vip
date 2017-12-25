const express = require("express");
const router = express();
const connection = require("../config/configConnection.js")();
router.get("/tit", function(req, res) {
    const val = req.query.val;
    connection.query("select * from tit where tit like '" + val + "%'", function(err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    })
});
module.exports = router;