const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

//-----------------//
// Socket.io setup //
//-----------------//
// const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(PORT, () =>
  console.log(`🌎  ==> Socket.io initialized API Server to now listen on PORT ${PORT}!`)
);
// WARNING: app.listen(PORT) will NOT work here!

// Local instance will use 2 servers - Express and localhost - but Heroku will only use Express.
app.get('/', function (req, res) {
  console.log('Path is : ', __dirname);

  // For Socket to work, it needs to point to the build folder, not the public folder.
  // res.sendFile(__dirname + '/client/public/index.html');
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Socket.io message handler
io.on('connection', function (socket) {
  // Per https://socket.io/docs/#Broadcasting-messages:
  // Attaching this broadcast flag to the emit method call on custom event named "save" sends message to all connected sockets except the one that started it.
  // In laymen's term, anyone who is viewing the site 
  socket.broadcast.emit('save', 'A Bookgle user has just saved a book!');

  // Without the flag, the event seems to apply only to yourself
  // socket.emit('save', 'You saved a book!');
});

//------------------------//
// End of Socket.io setup //
//------------------------//


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

/* Standard Express listener. Disabled to allow Socket to listen on it above.
// Express starts the API server
// app.listen(PORT, () =>
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
// );
*/