module.exports = function(app) {
    const costumes = require("../router/costumes.js");
    const log = require("../router/log.js");
    const child = require("../router/child.js");
    const tit = require("../router/tit.js");
    app.get("/costumes", costumes);
    app.get("/log", log);
    app.get("/child", child);
    app.get("/tit", tit);
    app.get("/index", (req, res) => {
        res.render("index");
    })
}