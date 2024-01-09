const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");
const app = express();
const bodyparser = require("body-parser");
const nodemailer = require('nodemailer');


app.use(express.static("css"));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req, res){

    const comm = req.body.message;
     const na = req.body.nameofperson;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: '',
          pass: '' 
        }
      });

      var mailOptions = {
        from: '',
        to: req.body.username,
        cc: '',
        subject: 'Thanks for giving feedback ' + na,
        text: 'Thanks for your message you have sent to us --> ' + comm
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log("sent");
          res.redirect("/");
        }
      });
      
      
    });

require("./conn/conn");
app.use(express.json());
app.use(cors());

app.use("/api/v1", contactRoutes);

app.listen(8080, () => {
  console.log("Server started at port 8080");
});
