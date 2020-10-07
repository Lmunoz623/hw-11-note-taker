// Dependencies
var db = require("../db/db.json");

module.exports = function(app) {
    // API ROUTES

    app.get("/api/notes", function(req, res) {
        return res.json();
    });

    app.post("/api/notes", function(req, res) {
        db.push(req.body);
    });

    app.delete("/api/notes/:id", function(req, res) {
        res.json(Notes.find())
    });
};



