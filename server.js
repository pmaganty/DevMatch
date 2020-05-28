const express = require("express");

const multer = require('multer');
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

var storage = multer.diskStorage({
  destination:  (req, file, cb) => {
    cb(null, __dirname + '/client/uploads/images');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}.${file.mimetype.substring(file.mimetype.indexOf("/")+1)}`)
  }
});
 
//var upload = multer({ storage: storage });

const upload = multer({dest: __dirname + '/client/src/images/uploads'});

app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.post('/upload', upload.single('photo'), (req, res) => {
  console.log("req", req.file);
  if(req.file) {
      res.json(
          {
              ...req.file, 
              friendlyUrl: `../../images/uploads/${req.file.filename}`
          }
      );
  }
  else throw 'error';
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/developerProfiles");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
