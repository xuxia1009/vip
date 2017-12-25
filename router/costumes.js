const express = require("express");
const router = express();
const connection = require("../config/configConnection.js")();
router.get("/costumes", function(req, res) {
    connection.query("select * from costumes", function(err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    })
});
module.exports = router;