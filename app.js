
const express = require("express");


const app = express();

app.use(express.static("public"))
app.use(express.urlencoded());

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/signup.html");
});

app.post("/", function(req, res) {
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email);
})

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});